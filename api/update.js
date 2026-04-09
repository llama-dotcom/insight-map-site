const Groq = require('groq-sdk');

// Cron: every day at 06:00 UTC = 08:00 CET summer
module.exports = async function handler(req, res) {
  try {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
    const GROQ_KEY = process.env.GROQ_API_KEY;

    if (!SUPABASE_URL || !SUPABASE_KEY || !GROQ_KEY) {
      return res.status(500).json({ error: 'Missing environment variables' });
    }

    const groq = new Groq({ apiKey: GROQ_KEY });
    const results = { news: 0, errors: [] };

    // Get countries
    const countriesRes = await fetch(`${SUPABASE_URL}/rest/v1/countries?select=id,name&order=sort_weight.desc`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
    });
    const countries = await countriesRes.json();
    const topCountries = countries.slice(0, 15);

    for (const country of topCountries) {
      try {
        // Step 1: Fetch REAL news from Google News RSS
        const query = encodeURIComponent(`heat pump subsidy ${country.name} 2026`);
        const rssUrl = `https://news.google.com/rss/search?q=${query}&hl=en&gl=US&ceid=US:en`;

        let articles = [];
        try {
          const rssRes = await fetch(rssUrl);
          const rssText = await rssRes.text();

          // Parse RSS XML — extract titles, links, dates
          const itemRegex = /<item>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<link>([\s\S]*?)<\/link>[\s\S]*?<pubDate>([\s\S]*?)<\/pubDate>[\s\S]*?<source[^>]*>([\s\S]*?)<\/source>[\s\S]*?<\/item>/g;
          let match;
          while ((match = itemRegex.exec(rssText)) !== null && articles.length < 5) {
            const pubDate = new Date(match[3].trim());
            const now = new Date();
            const daysDiff = (now - pubDate) / (1000 * 60 * 60 * 24);

            // Only last 30 days
            if (daysDiff <= 30) {
              articles.push({
                title: match[1].trim().replace(/<!\[CDATA\[|\]\]>/g, ''),
                url: match[2].trim(),
                date: pubDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
                source: match[4].trim().replace(/<!\[CDATA\[|\]\]>/g, '')
              });
            }
          }
        } catch (e) {
          // RSS failed — skip this country
          continue;
        }

        if (articles.length === 0) continue;

        // Step 2: Send REAL articles to Groq for analysis
        const articleList = articles.map((a, i) => `${i + 1}. "${a.title}" (${a.source}, ${a.date})`).join('\n');

        const completion = await groq.chat.completions.create({
          messages: [
            {
              role: 'system',
              content: 'You analyze real news articles about heat pump subsidies. Return JSON only.'
            },
            {
              role: 'user',
              content: `Here are real news articles about heat pumps in ${country.name}:

${articleList}

For each article that is relevant to heat pump subsidies, energy policy, or heating regulations, create a summary.

Return a JSON object with key "items" containing an array:
{"items": [{
  "title": "concise headline (max 80 chars)",
  "description": "2-3 sentence summary of what changed or what's happening",
  "impact": "critical" if subsidy changed/cancelled, "medium" if policy discussion, "info" if market news,
  "original_index": article number from the list above
}]}

Only include RELEVANT articles about subsidies or heating policy. Skip unrelated articles. If none are relevant, return {"items": []}.`
            }
          ],
          model: 'llama-3.3-70b-versatile',
          temperature: 0.2,
          max_tokens: 800,
          response_format: { type: 'json_object' }
        });

        const content = completion.choices[0]?.message?.content;
        if (!content) continue;

        let newsItems;
        try {
          const parsed = JSON.parse(content);
          newsItems = parsed.items || [];
        } catch (e) {
          continue;
        }

        for (const item of newsItems) {
          if (!item.title) continue;
          const origArticle = articles[item.original_index - 1] || articles[0];

          // Check duplicates
          const existCheck = await fetch(
            `${SUPABASE_URL}/rest/v1/news?country_id=eq.${country.id}&title=eq.${encodeURIComponent(item.title)}&limit=1`,
            { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
          );
          const existing = await existCheck.json();
          if (existing.length > 0) continue;

          // Insert
          await fetch(`${SUPABASE_URL}/rest/v1/news`, {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
              country_id: country.id,
              date: origArticle.date,
              title: item.title,
              description: item.description || '',
              impact: item.impact || 'info',
              source_name: origArticle.source || '',
              source_url: origArticle.url || '',
              category: 'subsidy'
            })
          });
          results.news++;
        }
      } catch (e) {
        results.errors.push(`${country.name}: ${e.message}`);
      }
    }

    return res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      news_added: results.news,
      countries_checked: topCountries.length,
      errors: results.errors
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
