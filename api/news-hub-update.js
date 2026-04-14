// ============================================
// My News Hub — Daily Cron Handler
// Schedule: 0 8 * * * (08:00 UTC = 10:00 Berlin CEST)
//
// Fetches news via Google News RSS for 6 sections,
// uses Groq to filter/summarize, upserts to Supabase,
// cleans old articles.
// ============================================

const Groq = require('groq-sdk');

module.exports = async function handler(req, res) {
  const startTime = Date.now();
  const results = { total: 0, by_section: {}, errors: [] };

  try {
    // --- Auth ---
    const isVercelCron = req.headers['x-vercel-cron'] === '1';
    const cronSecret = process.env.CRON_SECRET_NEWS_HUB;
    const authHeader = req.headers.authorization;
    if (!isVercelCron && cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const SUPABASE_URL = process.env.SUPABASE_URL_NEWS_HUB;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY_NEWS_HUB;
    const GROQ_KEY = process.env.GROQ_API_KEY_NEWS_HUB;
    if (!SUPABASE_URL || !SUPABASE_KEY || !GROQ_KEY) {
      return res.status(500).json({ error: 'Missing env vars' });
    }

    const sbH = {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal',
    };
    const groq = new Groq({ apiKey: GROQ_KEY });

    // --- Helper: ask Groq with automatic fallback to lighter model on rate limit ---
    async function askGroq(prompt, maxTokens = 4000) {
      const models = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'];
      let lastError = null;
      for (const model of models) {
        try {
          const c = await groq.chat.completions.create({
            model,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.15,
            max_tokens: maxTokens,
            response_format: { type: 'json_object' },
          });
          return JSON.parse(c.choices[0].message.content);
        } catch (err) {
          lastError = err;
          // Fallback only on rate limit (429)
          if (!String(err).includes('429') && !String(err).includes('rate_limit')) throw err;
        }
      }
      throw lastError;
    }

    // --- Helper: Supabase upsert ---
    async function upsert(rows) {
      if (!rows || rows.length === 0) return;
      const r = await fetch(`${SUPABASE_URL}/rest/v1/news?on_conflict=id`, {
        method: 'POST',
        headers: { ...sbH, 'Prefer': 'resolution=merge-duplicates,return=minimal' },
        body: JSON.stringify(rows),
      });
      if (!r.ok) throw new Error(`upsert: HTTP ${r.status} ${await r.text()}`);
    }

    // --- Helper: fetch Google News RSS ---
    async function fetchRSS(query, lang = 'en', country = 'US') {
      const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=${lang}&gl=${country}&ceid=${country}:${lang}`;
      const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!r.ok) return [];
      const xml = await r.text();
      const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
      return items.slice(0, 8).map(item => {
        const title = ((item.match(/<title>(.*?)<\/title>/) || [])[1] || '')
          .replace(/<!\[CDATA\[(.*?)\]\]>/, '$1')
          .replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
        const link = (item.match(/<link>(.*?)<\/link>/) || [])[1] || '';
        const pubDate = (item.match(/<pubDate>(.*?)<\/pubDate>/) || [])[1] || '';
        const source = (item.match(/<source[^>]*>(.*?)<\/source>/) || [])[1] || '';
        return { title, link, pubDate, source };
      }).filter(i => i.title && i.pubDate);
    }

    // --- Section definitions ---
    // Queries are evergreen (no year references) for long-term automation
    const SECTIONS = {
      politics: {
        label: 'World Politics',
        maxAge: 7, // days to keep
        queries: [
          { q: 'world politics major events', lang: 'en', gl: 'US' },
          { q: 'geopolitics international diplomacy', lang: 'en', gl: 'US' },
          { q: 'G7 G20 NATO summit', lang: 'en', gl: 'US' },
          { q: 'war conflict ceasefire peace talks', lang: 'en', gl: 'US' },
          { q: 'sanctions elections president prime minister', lang: 'en', gl: 'US' },
          { q: 'UN Security Council resolution', lang: 'en', gl: 'US' },
        ],
        filterPrompt: 'You are a world politics news editor. Keep ONLY truly important global political news: wars, peace deals, major elections, summits (G7/G20/NATO/UN), sanctions, diplomatic breakthroughs, leadership changes in major countries. Remove gossip, opinion, minor domestic politics, entertainment, sports.',
      },
      esslingen: {
        label: 'Esslingen',
        maxAge: 14,
        queries: [
          { q: 'Esslingen am Neckar', lang: 'de', gl: 'DE' },
          { q: 'Landkreis Esslingen Nachrichten', lang: 'de', gl: 'DE' },
          { q: 'Esslingen Neckar news events', lang: 'en', gl: 'DE' },
          { q: 'Stuttgart Region Nachrichten aktuell', lang: 'de', gl: 'DE' },
        ],
        filterPrompt: 'You are a local news editor for Esslingen am Neckar, Germany. Keep news directly relevant to Esslingen city, Landkreis Esslingen, or the greater Stuttgart region. Include: local events, city council decisions, infrastructure, culture, weather warnings, local business. Remove: national German politics unless directly affecting the region.',
      },
      saratov: {
        label: 'Engels & Saratov',
        maxAge: 14,
        queries: [
          { q: 'Энгельс Саратов новости', lang: 'ru', gl: 'RU' },
          { q: 'Саратовская область события', lang: 'ru', gl: 'RU' },
          { q: 'Engels Saratov Russia news', lang: 'en', gl: 'US' },
          { q: 'Саратов город новости сегодня', lang: 'ru', gl: 'RU' },
        ],
        filterPrompt: 'You are a local news editor for Engels and Saratov, Russia (Saratov Oblast). Keep news directly relevant to Engels city, Saratov city, or Saratov Oblast. Include: local events, infrastructure, culture, city news, regional economy. Remove: federal Russian politics unless directly affecting the region.',
      },
      beauty: {
        label: 'Medicine, Beauty & Biohacking',
        maxAge: 14,
        queries: [
          { q: 'medical breakthrough discovery treatment', lang: 'en', gl: 'US' },
          { q: 'clinical trial results new drug therapy', lang: 'en', gl: 'US' },
          { q: 'health research study findings', lang: 'en', gl: 'US' },
          { q: 'face massage techniques benefits', lang: 'en', gl: 'US' },
          { q: 'facial yoga gua sha buccal massage', lang: 'en', gl: 'US' },
          { q: 'anti aging skincare science research', lang: 'en', gl: 'US' },
          { q: 'biohacking longevity optimization', lang: 'en', gl: 'US' },
          { q: 'biohacking supplements cold exposure red light therapy', lang: 'en', gl: 'US' },
          { q: 'biohacking sleep optimization hormesis', lang: 'en', gl: 'US' },
        ],
        filterPrompt: 'You are a medical and health news editor. Keep articles about: medical breakthroughs and new treatments, clinical trial results, health research findings, disease prevention, face massage techniques (gua sha, buccal, lymphatic drainage, facial yoga), anti-aging research, skincare science, biohacking (longevity, cold exposure, red light therapy, supplements, sleep optimization, hormesis, fasting, breathwork, nootropics). Remove: makeup tutorials, celebrity gossip, product ads without substance, unproven snake-oil claims, generic wellness fluff.',
      },
      carnivore: {
        label: 'Carnivore Diet',
        maxAge: 14,
        queries: [
          { q: 'carnivore diet health research', lang: 'en', gl: 'US' },
          { q: 'meat based diet benefits study', lang: 'en', gl: 'US' },
          { q: 'carnivore diet results transformation', lang: 'en', gl: 'US' },
          { q: 'animal based diet nutrition science', lang: 'en', gl: 'US' },
          { q: 'carnivore keto zero carb diet', lang: 'en', gl: 'US' },
        ],
        filterPrompt: 'You are a carnivore/animal-based diet news editor. Keep articles about: carnivore diet research and studies, meat-based diet health benefits and risks, success stories and transformations, recipes and practical tips, related nutrition science (ketosis, fasting, animal-based nutrition). Remove: vegan propaganda, generic diet ads, unrelated food industry news, clickbait.',
      },
      tech: {
        label: 'Tech & AI',
        maxAge: 10,
        queries: [
          // General tech & innovation
          { q: 'technology breakthrough innovation discovery', lang: 'en', gl: 'US' },
          { q: 'new gadget product launch consumer tech', lang: 'en', gl: 'US' },
          { q: 'biotech medical technology breakthrough', lang: 'en', gl: 'US' },
          { q: 'robotics automation industrial innovation', lang: 'en', gl: 'US' },
          { q: 'space technology exploration mission', lang: 'en', gl: 'US' },
          { q: 'quantum computing energy technology', lang: 'en', gl: 'US' },
          { q: 'engineering invention science innovation', lang: 'en', gl: 'US' },
          // AI-specific (inherited from AI Landscape)
          { q: 'GPT OpenAI ChatGPT new release', lang: 'en', gl: 'US' },
          { q: 'Claude Anthropic new model release', lang: 'en', gl: 'US' },
          { q: 'Gemini Google DeepMind AI', lang: 'en', gl: 'US' },
          { q: 'Llama Meta Mistral open source AI', lang: 'en', gl: 'US' },
          { q: 'AI funding round billion valuation', lang: 'en', gl: 'US' },
          { q: 'EU AI Act regulation enforcement', lang: 'en', gl: 'US' },
          { q: 'AI coding tool Cursor Copilot Claude Code', lang: 'en', gl: 'US' },
          { q: 'DeepSeek Qwen Chinese AI model', lang: 'en', gl: 'US' },
          { q: 'AI startup acquisition merger', lang: 'en', gl: 'US' },
        ],
        filterPrompt: 'You are a technology innovations editor covering ALL sectors including AI. Keep articles about: genuine breakthroughs and inventions across ANY field (AI/LLMs, biotech, medtech, energy, materials, robotics, space, transport, engineering, consumer electronics, quantum computing); AI-specific news — new model releases (GPT, Claude, Gemini, Llama, DeepSeek, Qwen etc.), AI funding rounds, AI regulation (EU AI Act), AI coding tools (Cursor, Copilot, Claude Code), major AI acquisitions. Focus on real innovations — new products, scientific discoveries, engineering feats, prototype demonstrations. Remove: stock market noise, opinion pieces, minor software updates, recycled PR without substance, corporate earnings reports, generic "AI will change everything" fluff.',
      },
    };

    // --- Process each section ---
    for (const [sectionId, section] of Object.entries(SECTIONS)) {
      try {
        // 1. Fetch RSS for all queries in this section
        const allItems = [];
        for (const { q, lang, gl } of section.queries) {
          const items = await fetchRSS(q, lang, gl);
          allItems.push(...items);
        }

        if (allItems.length === 0) {
          results.by_section[sectionId] = 0;
          continue;
        }

        // 2. Deduplicate by title prefix
        const seen = new Set();
        const deduped = allItems.filter(item => {
          const key = item.title.slice(0, 50).toLowerCase();
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        // 3. Filter only recent (last 14 days)
        const recent = deduped.filter(item => {
          const age = Date.now() - new Date(item.pubDate).getTime();
          return age < 14 * 86400000;
        });

        if (recent.length === 0) {
          results.by_section[sectionId] = 0;
          continue;
        }

        // 4. Ask Groq to filter and summarize
        const titlesForGroq = recent.map((item, i) =>
          `${i + 1}. "${item.title}" (${item.source}, ${new Date(item.pubDate).toISOString().slice(0, 10)})`
        ).join('\n');

        const filterResult = await askGroq(`${section.filterPrompt}

Here are ${recent.length} articles. Select the most important and relevant ones (max 15). For each selected article:
1. Translate the title to Russian
2. Write a detailed summary in Russian (4-6 sentences) explaining what happened, why it matters, and key details

Articles:
${titlesForGroq}

Reply with JSON: {"selected": [{"index": 1, "title_ru": "Заголовок на русском", "summary": "Подробное описание на русском, 4-6 предложений"}]}
Only select truly relevant articles. Quality over quantity. ALL text must be in Russian.`, 5000);

        // 5. Build rows for Supabase
        const rows = [];
        for (const sel of (filterResult.selected || [])) {
          const idx = sel.index - 1;
          if (idx < 0 || idx >= recent.length) continue;
          const item = recent[idx];
          const id = `${sectionId}_${item.link.split('/articles/')[1]?.slice(0, 30)?.replace(/[^a-zA-Z0-9]/g, '_') || Date.now() + '_' + Math.random().toString(36).slice(2, 8)}`;

          rows.push({
            id,
            section: sectionId,
            title: (sel.title_ru || item.title).slice(0, 300),
            summary: (sel.summary || '').slice(0, 800),
            url: item.link,
            source: item.source || 'Google News',
            published_at: new Date(item.pubDate).toISOString(),
            fetched_at: new Date().toISOString(),
          });
        }

        // 6. Upsert
        if (rows.length > 0) {
          await upsert(rows);
        }
        results.by_section[sectionId] = rows.length;
        results.total += rows.length;

      } catch (e) {
        results.errors.push(`${sectionId}: ${e.message}`);
      }
    }

    // --- Cleanup old news ---
    for (const [sectionId, section] of Object.entries(SECTIONS)) {
      try {
        const cutoff = new Date(Date.now() - section.maxAge * 86400000).toISOString();
        await fetch(
          `${SUPABASE_URL}/rest/v1/news?section=eq.${sectionId}&published_at=lt.${cutoff}`,
          { method: 'DELETE', headers: sbH }
        );
      } catch (e) {
        results.errors.push(`cleanup ${sectionId}: ${e.message}`);
      }
    }

    return res.status(200).json({
      ok: true,
      elapsed_ms: Date.now() - startTime,
      ...results,
    });
  } catch (err) {
    console.error('news-hub-update error:', err);
    return res.status(500).json({ error: err.message, ...results });
  }
};
