const DATA_LLM_CHATBOTS = [
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "developer": "OpenAI",
    "owner": "Microsoft (largest investor)",
    "country": "USA",
    "country_code": "us",
    "cluster": "frontier",
    "launch_date": "2022-11-30",
    "description": "The category-defining consumer AI assistant. In April 2026 ChatGPT runs on the GPT-5.4 family (Instant, Thinking, Pro) with a 1M token context in Codex, native agent tools, and the upcoming GPT-5.5 'Spud' in late-stage testing. It remains the dominant general-purpose AI by a wide margin.",
    "latest_model": "GPT-5.4 (Thinking / Pro)",
    "pricing": {
      "free_tier": true,
      "free_details": "Limited GPT-5.4 access, web search, basic image generation",
      "pro_price": "$20/mo (Plus), $200/mo (Pro)",
      "enterprise": true
    },
    "estimated_users": "900M+ WAU",
    "market_position": 1,
    "pros": [
      "Best-in-class general reasoning and tool use",
      "Massive ecosystem of GPTs, plugins and Codex integration",
      "Strong multimodal (voice, image, video, file) features",
      "Largest user base and developer mindshare"
    ],
    "cons": [
      "Pro tier ($200/mo) is expensive for individuals",
      "Heavy data-collection and privacy concerns under GDPR",
      "Free tier rate-limited during peak hours",
      "Closed weights and limited transparency"
    ],
    "use_cases": [
      "General writing, brainstorming and tutoring",
      "Coding assistance and agentic dev workflows",
      "Research, summarization and document analysis",
      "Voice assistant and image/video generation"
    ],
    "url": "https://chatgpt.com"
  },
  {
    "id": "gemini",
    "name": "Google Gemini",
    "developer": "Google DeepMind",
    "owner": "Alphabet / Google",
    "country": "USA",
    "country_code": "us",
    "cluster": "frontier",
    "launch_date": "2023-12-06",
    "description": "Google's flagship multimodal assistant, deeply integrated with Search, Workspace, Android and NotebookLM. The April 2026 flagship is Gemini 3.1 Pro, which posted a record 77.1% on ARC-AGI-2 and is distributed for free through Google products to hundreds of millions of users.",
    "latest_model": "Gemini 3.1 Pro",
    "pricing": {
      "free_tier": true,
      "free_details": "Gemini 3 Flash in app, AI Overviews in Search, basic NotebookLM",
      "pro_price": "$20/mo (AI Pro), $250/mo (Ultra)",
      "enterprise": true
    },
    "estimated_users": "750M MAU app · 2B+ via Search",
    "market_position": 2,
    "pros": [
      "Tight integration with Gmail, Docs, Drive and Android",
      "Industry-leading multimodal and long-context performance",
      "Free for most users via Google account",
      "Huge distribution via Search and Workspace"
    ],
    "cons": [
      "Reasoning still trails GPT-5.4 / Claude Opus on some benchmarks",
      "Privacy and data-use concerns in EU",
      "Inconsistent quality between Flash and Pro tiers",
      "Complex product naming"
    ],
    "use_cases": [
      "Workspace productivity (Docs, Sheets, Gmail)",
      "Research with NotebookLM and Deep Research",
      "Coding via AI Studio, Antigravity and Gemini CLI",
      "Mobile assistant on Android phones"
    ],
    "url": "https://gemini.google.com"
  },
  {
    "id": "claude",
    "name": "Claude",
    "developer": "Anthropic",
    "owner": "Independent (Amazon and Google are major investors)",
    "country": "USA",
    "country_code": "us",
    "cluster": "frontier",
    "launch_date": "2023-03-14",
    "description": "Anthropic's safety-focused frontier assistant. The April 2026 lineup is Claude Opus 4.6 and Sonnet 4.6, with the next-gen 'Mythos' model in private preview for security partners. Claude has become the default tool of paying professionals and developers, especially for coding and long-document work.",
    "latest_model": "Claude Opus 4.6 / Sonnet 4.6",
    "pricing": {
      "free_tier": true,
      "free_details": "Limited Sonnet 4.6 messages per day",
      "pro_price": "$20/mo (Pro), $100-$200/mo (Max)",
      "enterprise": true
    },
    "estimated_users": "~30M MAU",
    "market_position": 3,
    "pros": [
      "Top-tier coding and agentic performance via Claude Code",
      "1M token context on Opus 4.6 for long-document work",
      "Strong focus on safety, alignment and constitutional AI",
      "Highest paying-customer popularity growth in 2026"
    ],
    "cons": [
      "Smaller free tier than ChatGPT or Gemini",
      "No native image or video generation",
      "Limited availability in some regions",
      "Aggressive usage caps even on Pro plan"
    ],
    "use_cases": [
      "Software engineering and Claude Code agents",
      "Long-form document analysis and contract review",
      "Enterprise knowledge work and research",
      "High-stakes writing and editing"
    ],
    "url": "https://claude.ai"
  },
  {
    "id": "microsoft-copilot",
    "name": "Microsoft Copilot",
    "developer": "Microsoft",
    "owner": "Microsoft",
    "country": "USA",
    "country_code": "us",
    "cluster": "frontier",
    "launch_date": "2023-02-07",
    "description": "Microsoft's family of consumer and enterprise assistants, mostly powered by OpenAI's GPT-5.4 plus Microsoft's own MAI models. Deeply embedded into Windows 11/12, Microsoft 365, Edge and Bing, it is the default AI for hundreds of millions of enterprise seats in 2026.",
    "latest_model": "GPT-5.4 + Microsoft MAI (mixture)",
    "pricing": {
      "free_tier": true,
      "free_details": "Free Copilot in Windows, Edge, Bing",
      "pro_price": "$20/mo (Copilot Pro), $30/user/mo (M365 Copilot)",
      "enterprise": true
    },
    "estimated_users": "400M+ MAU",
    "market_position": 4,
    "pros": [
      "Deeply integrated with Windows, Office and Teams",
      "Strongest enterprise distribution channel",
      "Combines OpenAI frontier models with Microsoft data",
      "New Researcher, audio recap and SharePoint grounding features"
    ],
    "cons": [
      "Confusing product naming",
      "Quality varies by surface and license",
      "Tied to Microsoft account and ecosystem",
      "Compliance complexity for EU customers"
    ],
    "use_cases": [
      "Office document drafting and meeting summarization",
      "Enterprise knowledge search via Microsoft Graph",
      "Coding via GitHub Copilot",
      "Windows desktop automation"
    ],
    "url": "https://copilot.microsoft.com"
  },
  {
    "id": "doubao",
    "name": "Doubao",
    "developer": "ByteDance",
    "owner": "ByteDance",
    "country": "China",
    "country_code": "cn",
    "cluster": "regional",
    "launch_date": "2023-08-17",
    "description": "China's most-used AI app, powered by ByteDance's Doubao-Seed-2.0 model family released in February 2026. Positioned for the 'agent era', it is benchmarked against GPT-5.2 and Gemini 3 Pro on math, coding and reasoning, while undercutting them on price.",
    "latest_model": "Doubao-Seed-2.0 Pro",
    "pricing": {
      "free_tier": true,
      "free_details": "Free unlimited chat for Chinese users",
      "pro_price": "Mostly free / ad-supported",
      "enterprise": true
    },
    "estimated_users": "155M+ WAU",
    "market_position": 5,
    "pros": [
      "Largest Chinese AI app by weekly active users",
      "Free, fast and tightly integrated with Douyin / TikTok ecosystem",
      "Extremely cheap inference for enterprise on Volcano Engine",
      "Strong Chinese-language and multimodal performance"
    ],
    "cons": [
      "Limited usefulness outside Chinese market",
      "Heavy content censorship and CCP alignment",
      "No real presence in Western languages",
      "Closed-weight model"
    ],
    "use_cases": [
      "Chinese-language consumer assistant",
      "Content creation for Douyin / TikTok",
      "Enterprise agent workflows in China",
      "Education and tutoring in Chinese"
    ],
    "url": "https://www.doubao.com"
  },
  {
    "id": "grok",
    "name": "Grok",
    "developer": "xAI",
    "owner": "xAI / Elon Musk",
    "country": "USA",
    "country_code": "us",
    "cluster": "frontier",
    "launch_date": "2023-11-04",
    "description": "Elon Musk's xAI assistant, deeply integrated with X (Twitter). The current flagship is Grok 4.20 (with Grok 4.1 Thinking briefly holding LMArena's #1 spot at 1483 Elo), and Grok 5 is in training at ~6T parameters. Distinguished by real-time X data, fewer content filters and a 'Big Brain' reasoning mode.",
    "latest_model": "Grok 4.20",
    "pricing": {
      "free_tier": true,
      "free_details": "Free Grok 4.1 access on grok.com and X",
      "pro_price": "$30/mo (SuperGrok), $300/mo (Heavy)",
      "enterprise": true
    },
    "estimated_users": "~50M MAU",
    "market_position": 6,
    "pros": [
      "Real-time access to X firehose for news",
      "Looser content moderation than competitors",
      "Strong reasoning performance on LMArena",
      "Fast iteration cycle"
    ],
    "cons": [
      "Reflects Musk's editorial bias and controversies",
      "Heavy compute spend without matching revenue",
      "Privacy concerns from X data ingestion",
      "Limited enterprise traction"
    ],
    "use_cases": [
      "Real-time news and trend analysis from X",
      "Uncensored creative writing",
      "Math and reasoning with Big Brain mode",
      "Research with DeepSearch"
    ],
    "url": "https://grok.com"
  },
  {
    "id": "deepseek",
    "name": "DeepSeek",
    "developer": "DeepSeek",
    "owner": "High-Flyer Capital Management",
    "country": "China",
    "country_code": "cn",
    "cluster": "open-weight",
    "launch_date": "2023-11-29",
    "description": "China's open-weight powerhouse that broke into global mainstream in early 2025. As of April 2026 the publicly available flagship is DeepSeek V3.2 / R1, with V4 (a ~1T parameter MoE with 1M token Engram memory and native multimodal generation) and R2 reasoning model in late testing on API nodes.",
    "latest_model": "DeepSeek V3.2 / R1 (V4 in preview)",
    "pricing": {
      "free_tier": true,
      "free_details": "Free unlimited chat on chat.deepseek.com",
      "pro_price": "API only ($0.30-$2 per Mtok)",
      "enterprise": true
    },
    "estimated_users": "~100M MAU (estimated)",
    "market_position": 7,
    "pros": [
      "Open weights with permissive license",
      "Extremely cheap API and free chat app",
      "Strong reasoning and coding performance",
      "Trained on a fraction of US lab budgets"
    ],
    "cons": [
      "Chinese censorship on politically sensitive topics",
      "Privacy concerns about data sent to Chinese servers",
      "Banned for government use in many Western countries",
      "V4 release repeatedly delayed in 2026"
    ],
    "use_cases": [
      "Cheap high-quality API for developers",
      "Self-hosted deployments for enterprises",
      "Coding and math reasoning",
      "Research baselines and fine-tuning"
    ],
    "url": "https://chat.deepseek.com"
  },
  {
    "id": "qwen",
    "name": "Qwen",
    "developer": "Alibaba Cloud",
    "owner": "Alibaba",
    "country": "China",
    "country_code": "cn",
    "cluster": "open-weight",
    "launch_date": "2023-04-07",
    "description": "Alibaba's flagship LLM family. The April 2026 flagship is Qwen 3.6-Plus, featuring a 1M-token window, always-on chain-of-thought, hybrid linear attention + MoE, and ~158 tok/s throughput - faster than Claude Opus 4.6 and GPT-5.4. Most models remain Apache 2.0 open-weight.",
    "latest_model": "Qwen 3.6-Plus",
    "pricing": {
      "free_tier": true,
      "free_details": "Free Qwen App",
      "pro_price": "API: ~$0.50-$3/Mtok",
      "enterprise": true
    },
    "estimated_users": "~58M DAU (Qwen App)",
    "market_position": 8,
    "pros": [
      "Largest family of open-weight models in the world",
      "Excellent multilingual and Chinese performance",
      "Apache 2.0 license for most variants",
      "Faster inference than GPT-5.4 / Opus 4.6 in benchmarks"
    ],
    "cons": [
      "Censorship aligned with Chinese regulations",
      "Smaller ecosystem outside China",
      "Frequent renaming and version sprawl",
      "Trust concerns for sensitive enterprise data"
    ],
    "use_cases": [
      "Open-weight base for fine-tuning",
      "Multilingual chatbots (especially Asian languages)",
      "Self-hosted enterprise agents",
      "Edge / on-device deployment via small Qwen variants"
    ],
    "url": "https://chat.qwen.ai"
  },
  {
    "id": "llama",
    "name": "Meta AI / Llama",
    "developer": "Meta",
    "owner": "Meta Platforms",
    "country": "USA",
    "country_code": "us",
    "cluster": "open-weight",
    "launch_date": "2023-02-24",
    "description": "Meta's open-weight foundation model family, surfaced to consumers via Meta AI in WhatsApp, Instagram, Facebook and Ray-Ban Meta glasses. Llama 5 was officially released April 8, 2026 with 600B+ parameters, a 5M-token context, recursive self-improvement and 'System 2' deliberate reasoning.",
    "latest_model": "Llama 5",
    "pricing": {
      "free_tier": true,
      "free_details": "Free across Meta apps and Meta.ai website",
      "pro_price": "Free for consumers",
      "enterprise": true
    },
    "estimated_users": "~700M MAU (across Meta apps)",
    "market_position": 9,
    "pros": [
      "Massive distribution via WhatsApp, IG, FB",
      "Open weights ('Linux of AI' strategy)",
      "Industry-leading 5M-token context",
      "Free for consumers and most commercial use"
    ],
    "cons": [
      "Privacy concerns under EU AI Act and GDPR",
      "Quality lags closed frontier models on hardest benchmarks",
      "License restricts very large platforms",
      "Limited availability in EU"
    ],
    "use_cases": [
      "Chat inside WhatsApp / Instagram",
      "Open-weight research and fine-tuning",
      "On-device assistants via Llama Guard 4",
      "Enterprise self-hosted deployments"
    ],
    "url": "https://meta.ai"
  },
  {
    "id": "perplexity",
    "name": "Perplexity",
    "developer": "Perplexity AI",
    "owner": "Independent (Nvidia, Jeff Bezos, IVP investors)",
    "country": "USA",
    "country_code": "us",
    "cluster": "search-research",
    "launch_date": "2022-12-07",
    "description": "The leading AI-first search engine, valued at ~$22B in early 2026. Perplexity routes queries to GPT-5.4, Claude Opus 4.6, Gemini 3 Pro and its own Sonar models, returning answers with citations. The Comet browser and Labs agents have made it a real Google challenger.",
    "latest_model": "Sonar Huge + multi-model routing",
    "pricing": {
      "free_tier": true,
      "free_details": "Unlimited basic searches, 5 Pro searches/day",
      "pro_price": "$20/mo (Pro), $200/mo (Max)",
      "enterprise": true
    },
    "estimated_users": "~45M MAU",
    "market_position": 10,
    "pros": [
      "Always-cited, source-grounded answers",
      "Choice of top frontier models in one place",
      "Comet browser and Labs agents for research workflows",
      "Strong free tier"
    ],
    "cons": [
      "Depends on third-party model providers for quality",
      "Publishers complain about content scraping",
      "Heavy losses against $22B valuation",
      "Hallucinations still occur on niche queries"
    ],
    "use_cases": [
      "Research with citations and follow-up questions",
      "Replacing Google for factual queries",
      "Building dashboards / spreadsheets via Labs",
      "Real-time market and news monitoring"
    ],
    "url": "https://perplexity.ai"
  },
  {
    "id": "kimi",
    "name": "Kimi",
    "developer": "Moonshot AI",
    "owner": "Moonshot AI (Alibaba, Tencent investors)",
    "country": "China",
    "country_code": "cn",
    "cluster": "open-weight",
    "launch_date": "2023-10-09",
    "description": "Moonshot's Kimi has become one of the most influential Chinese open-weight models. Kimi K2.5 (January 2026) is a 1T-parameter MoE with 32B active parameters, native vision via the MoonViT encoder, and Agent Swarm tech that orchestrates up to 100 specialized sub-agents.",
    "latest_model": "Kimi K2.5.1",
    "pricing": {
      "free_tier": true,
      "free_details": "Free chat at kimi.com with long-context uploads",
      "pro_price": "API: $0.45/Mtok in",
      "enterprise": true
    },
    "estimated_users": "~40M MAU (estimated)",
    "market_position": 11,
    "pros": [
      "Open weights with strong agentic capabilities",
      "Pioneer of multi-agent 'swarm' execution",
      "Excellent long-context reading (PDFs, books)",
      "Aggressive price drops in 2026"
    ],
    "cons": [
      "Chinese content restrictions",
      "Smaller Western footprint than DeepSeek or Qwen",
      "Agent Swarm stability still maturing",
      "Limited multilingual coverage outside Chinese / English"
    ],
    "use_cases": [
      "Long-document analysis (200+ page PDFs)",
      "Multi-agent automation tasks",
      "Coding with Moonshot's coding agent",
      "Open-weight research and fine-tuning"
    ],
    "url": "https://kimi.com"
  },
  {
    "id": "mistral",
    "name": "Le Chat (Mistral)",
    "developer": "Mistral AI",
    "owner": "Independent (Nvidia, a16z, Salesforce, Lightspeed investors)",
    "country": "France",
    "country_code": "fr",
    "cluster": "open-weight",
    "launch_date": "2024-02-26",
    "description": "Europe's flagship AI lab. Mistral Large 3 (December 2025) is a 675B-parameter MoE with 41B active under Apache 2.0, paired with Mistral 3 small dense models (3B, 8B, 14B). Le Chat now offers Deep Research, voice, Projects and a 20+ enterprise connector directory - the leading European sovereign AI choice.",
    "latest_model": "Mistral Large 3",
    "pricing": {
      "free_tier": true,
      "free_details": "Free Le Chat web and mobile app",
      "pro_price": "EUR 14.99/mo (Pro)",
      "enterprise": true
    },
    "estimated_users": "~15M MAU (estimated)",
    "market_position": 12,
    "pros": [
      "Open weights under Apache 2.0",
      "European, GDPR-friendly hosting options",
      "Strong multilingual performance (esp. European languages)",
      "Sovereign cloud deployments via Bleu, OVH"
    ],
    "cons": [
      "Behind US frontier labs on hardest reasoning benchmarks",
      "Smaller user base than US/Chinese rivals",
      "Less polished consumer UX",
      "Limited multimodal compared to Gemini / GPT-5"
    ],
    "use_cases": [
      "European enterprise deployments (sovereign / GDPR)",
      "Multilingual customer support",
      "Self-hosted open-weight research",
      "Voxtral voice assistants"
    ],
    "url": "https://chat.mistral.ai"
  },
  {
    "id": "glm",
    "name": "GLM (Z.ai / Zhipu)",
    "developer": "Zhipu AI / Z.ai",
    "owner": "Zhipu AI (Tsinghua-affiliated)",
    "country": "China",
    "country_code": "cn",
    "cluster": "open-weight",
    "launch_date": "2023-03-14",
    "description": "Z.ai (formerly Zhipu) became the first publicly listed Chinese AI company in early 2026. GLM-5 (February 2026) and the just-released GLM-5.1 (April 7, 2026) are 744B-parameter MoE models with 40B active, trained entirely on Huawei Ascend chips - zero NVIDIA dependency.",
    "latest_model": "GLM-5.1",
    "pricing": {
      "free_tier": true,
      "free_details": "Free chat at chat.z.ai",
      "pro_price": "API: $1/Mtok in, $3.20/Mtok out",
      "enterprise": true
    },
    "estimated_users": "~25M MAU (estimated)",
    "market_position": 13,
    "pros": [
      "Frontier-class open-weight model",
      "5-8x cheaper API than Claude Opus",
      "Trained without NVIDIA chips (independence)",
      "Strong agentic and coding benchmarks"
    ],
    "cons": [
      "Chinese government / Tsinghua ties limit Western enterprise use",
      "Censorship aligned with Chinese rules",
      "Limited Western language quality",
      "Brand name change (Zhipu -> Z.ai) caused confusion"
    ],
    "use_cases": [
      "Cheap frontier API for developers",
      "Coding agents",
      "Chinese-language enterprise apps",
      "Open-weight self-hosting"
    ],
    "url": "https://chat.z.ai"
  },
  {
    "id": "command",
    "name": "Cohere Command",
    "developer": "Cohere",
    "owner": "Independent (Nvidia, Salesforce, Cisco investors)",
    "country": "Canada",
    "country_code": "ca",
    "cluster": "specialized",
    "launch_date": "2023-09-28",
    "description": "Canadian enterprise-first AI lab. Command A (111B parameters, 256K context) and Command A Reasoning are designed for secure, on-premise enterprise deployments. Runs on just 2 H100 GPUs - dramatically cheaper than competitors. Won the Canadian federal CANChat contract.",
    "latest_model": "Command A Reasoning",
    "pricing": {
      "free_tier": true,
      "free_details": "Free trial via Cohere Playground",
      "pro_price": "API only / enterprise contracts",
      "enterprise": true
    },
    "estimated_users": "Enterprise-only (~1M+ via clients)",
    "market_position": 14,
    "pros": [
      "Designed for secure, on-premise enterprise use",
      "Runs on just 2 GPUs - very efficient",
      "Strong multilingual (23 languages) and RAG with citations",
      "Canadian / sovereign deployment option"
    ],
    "cons": [
      "No real consumer presence",
      "Trails frontier labs on raw benchmarks",
      "Small mindshare outside enterprise",
      "Limited multimodal capabilities"
    ],
    "use_cases": [
      "Enterprise RAG and knowledge assistants",
      "Government deployments (CANChat)",
      "Multilingual customer service",
      "Secure on-prem AI for regulated industries"
    ],
    "url": "https://cohere.com/chat"
  },
  {
    "id": "minimax",
    "name": "MiniMax",
    "developer": "MiniMax",
    "owner": "MiniMax (Tencent, Alibaba, miHoYo investors)",
    "country": "China",
    "country_code": "cn",
    "cluster": "regional",
    "launch_date": "2023-11-06",
    "description": "Chinese multimodal AI lab known for its Hailuo video model and abab/M-series LLMs. MiniMax M2.7 (early 2026) is a self-evolving agentic model trained via the OpenClaw harness through 100+ autonomous optimization rounds. Offers the world's first all-modal subscription bundling text, voice and video.",
    "latest_model": "MiniMax M2.7",
    "pricing": {
      "free_tier": true,
      "free_details": "Free Hailuo and Talkie chat",
      "pro_price": "Token Plan starting ~$10/mo",
      "enterprise": true
    },
    "estimated_users": "~30M MAU (estimated)",
    "market_position": 15,
    "pros": [
      "Best-in-class video generation (Hailuo 2.3)",
      "All-modal bundle (text + voice + video) in one plan",
      "Innovative self-improving training",
      "Popular Talkie consumer companion app"
    ],
    "cons": [
      "Chinese censorship constraints",
      "Less recognized as a text LLM brand",
      "Limited Western market traction",
      "Closed weights for newest models"
    ],
    "use_cases": [
      "Video and image generation",
      "Voice cloning and TTS",
      "AI companions and entertainment (Talkie)",
      "Multimodal content workflows"
    ],
    "url": "https://www.minimax.io"
  },
  {
    "id": "yi",
    "name": "Yi (01.AI)",
    "developer": "01.AI",
    "owner": "01.AI (Alibaba major investor)",
    "country": "China",
    "country_code": "cn",
    "cluster": "regional",
    "launch_date": "2023-11-05",
    "description": "Kai-Fu Lee's AI startup pivoted in 2025-2026 to smaller, cheaper, faster models after Yi-Lightning's success. Now collaborates closely with Alibaba in a joint laboratory for industrial models and no longer races at frontier scale.",
    "latest_model": "Yi-Lightning",
    "pricing": {
      "free_tier": true,
      "free_details": "Free chat via Wanzhi app (China)",
      "pro_price": "API only, very cheap",
      "enterprise": true
    },
    "estimated_users": "~5M MAU (estimated)",
    "market_position": 16,
    "pros": [
      "Founded and led by AI veteran Kai-Fu Lee",
      "Very cost-efficient inference",
      "Strong Chinese-language capabilities",
      "Open-weight Yi family still widely used in research"
    ],
    "cons": [
      "Strategic pivot left flagship model behind frontier",
      "Heavy dependence on Alibaba",
      "Lost mindshare to DeepSeek and Qwen in 2025",
      "Restructuring uncertainty"
    ],
    "use_cases": [
      "Industrial / vertical AI in China",
      "Cost-efficient Chinese-language apps",
      "Research baselines (open Yi models)",
      "Enterprise deployments via Alibaba Cloud"
    ],
    "url": "https://www.lingyiwanwu.com"
  },
  {
    "id": "you-com",
    "name": "You.com",
    "developer": "You.com",
    "owner": "Independent (Salesforce, Nvidia investors)",
    "country": "USA",
    "country_code": "us",
    "cluster": "search-research",
    "launch_date": "2020-11-09",
    "description": "AI search engine pivoting to enterprise productivity. Offers multi-model access (DeepSeek, OpenAI, Anthropic), an Auto agent router and the ARI research agent for rich PDF reports. Less consumer-visible than Perplexity but maintains a distinct enterprise AI search niche.",
    "latest_model": "Multi-model (Auto routing)",
    "pricing": {
      "free_tier": true,
      "free_details": "Limited Smart/Express agent searches",
      "pro_price": "$20/mo (Pro)",
      "enterprise": true
    },
    "estimated_users": "~5M MAU (estimated)",
    "market_position": 17,
    "pros": [
      "Multi-model choice in one interface",
      "ARI agent generates rich PDF research reports",
      "Web search APIs powering enterprise AI",
      "Solid privacy stance"
    ],
    "cons": [
      "Squeezed between Perplexity and ChatGPT search",
      "Limited brand recognition",
      "Jack-of-all-trades, master of none",
      "Enterprise pivot reduces consumer focus"
    ],
    "use_cases": [
      "Enterprise AI search APIs",
      "Research with citations",
      "Multi-model experimentation",
      "PDF report generation"
    ],
    "url": "https://you.com"
  },
  {
    "id": "ai21",
    "name": "AI21 Jamba",
    "developer": "AI21 Labs",
    "owner": "Independent (Nvidia, Google, Intel investors)",
    "country": "Israel",
    "country_code": "il",
    "cluster": "specialized",
    "launch_date": "2023-03-09",
    "description": "Israeli AI lab specializing in long-context models built on a novel SSM-Transformer (Mamba) architecture. The Jamba 1.5 family offers a 256K effective context window - the longest in its class - and Jamba Reasoning 3B can run on consumer devices with 250K-token contexts.",
    "latest_model": "Jamba 1.5 Large / Jamba Reasoning 3B",
    "pricing": {
      "free_tier": true,
      "free_details": "Free trial via AI21 Studio",
      "pro_price": "API only / enterprise",
      "enterprise": true
    },
    "estimated_users": "Enterprise-only",
    "market_position": 18,
    "pros": [
      "Pioneering SSM-Transformer (Mamba) architecture",
      "Best-in-class long-context speed and efficiency",
      "Strong support for Hebrew and Arabic",
      "Small models that run on edge devices"
    ],
    "cons": [
      "Tiny consumer footprint",
      "Trails frontier on raw reasoning benchmarks",
      "Mostly known to enterprise NLP teams",
      "Limited multimodal capabilities"
    ],
    "use_cases": [
      "Long-document enterprise workflows",
      "Hebrew / Arabic NLP",
      "Edge AI on consumer hardware",
      "Secure enterprise deployments"
    ],
    "url": "https://www.ai21.com"
  },
  {
    "id": "aleph-alpha",
    "name": "Aleph Alpha Pharia",
    "developer": "Aleph Alpha",
    "owner": "Schwarz Group (Lidl/Kaufland)",
    "country": "Germany",
    "country_code": "de",
    "cluster": "regional",
    "launch_date": "2024-08-30",
    "description": "Germany's flagship sovereign AI lab. Pharia-1-LLM is open-weight, EU-compliant and culturally optimized for German, French and Spanish. PhariaAI is delivered via Schwarz Digits / STACKIT sovereign cloud, increasingly pivoting from foundation models to a full-stack AI OS for European enterprises and governments.",
    "latest_model": "Pharia-1-LLM-7B-control",
    "pricing": {
      "free_tier": false,
      "free_details": "No public consumer chat",
      "pro_price": "Enterprise contracts only",
      "enterprise": true
    },
    "estimated_users": "Enterprise-only",
    "market_position": 19,
    "pros": [
      "Fully GDPR / EU AI Act compliant",
      "Sovereign cloud hosting via STACKIT",
      "Optimized for German and European languages",
      "Backed by Schwarz Group (Lidl/Kaufland) capital"
    ],
    "cons": [
      "Far behind frontier on capability benchmarks",
      "No consumer product - enterprise only",
      "Pivoted away from frontier model race",
      "Tiny mindshare even in Europe"
    ],
    "use_cases": [
      "German government and public-sector AI",
      "EU enterprise deployments needing data sovereignty",
      "Regulated industries (finance, healthcare)",
      "Multilingual European customer service"
    ],
    "url": "https://aleph-alpha.com"
  },
  {
    "id": "falcon",
    "name": "Falcon",
    "developer": "Technology Innovation Institute (TII)",
    "owner": "Government of Abu Dhabi / UAE",
    "country": "UAE",
    "country_code": "ae",
    "cluster": "regional",
    "launch_date": "2023-05-25",
    "description": "Abu Dhabi's open-weight LLM family from TII. Falcon-H1 Arabic (January 2026) is a hybrid Mamba-Transformer in 3B/7B/34B sizes, ranked #1 on the Open Arabic LLM Leaderboard. The Middle East's leading sovereign AI option.",
    "latest_model": "Falcon-H1 Arabic 34B",
    "pricing": {
      "free_tier": true,
      "free_details": "Open weights free on Hugging Face",
      "pro_price": "Free for most uses",
      "enterprise": true
    },
    "estimated_users": "Open-weight (no chat product)",
    "market_position": 20,
    "pros": [
      "World's leading Arabic-language LLM",
      "Fully open weights with permissive license",
      "Backed by UAE state investment",
      "Hybrid Mamba-Transformer architecture"
    ],
    "cons": [
      "No flagship consumer chat product",
      "Trails frontier on English benchmarks",
      "Government-controlled (geopolitical concerns)",
      "Smaller dev community than Llama / Qwen"
    ],
    "use_cases": [
      "Arabic-language NLP and chatbots",
      "Middle East enterprise sovereign AI",
      "Open-weight research baselines",
      "Multilingual fine-tuning"
    ],
    "url": "https://falconllm.tii.ae"
  },
  {
    "id": "reka",
    "name": "Reka",
    "developer": "Reka AI",
    "owner": "Independent (DST, Nvidia investors)",
    "country": "USA",
    "country_code": "us",
    "cluster": "specialized",
    "launch_date": "2023-06-13",
    "description": "Multimodal AI lab founded by ex-DeepMind, Google and Meta researchers. The Reka Core / Flash / Edge / Spark family is trained from scratch on text, code, images, video and audio. Powers AI Singapore's SEA-LION program for Southeast Asian languages and Oracle's enterprise AI offerings.",
    "latest_model": "Reka Core / Flash 2.5",
    "pricing": {
      "free_tier": true,
      "free_details": "Free chat at chat.reka.ai",
      "pro_price": "API only / enterprise",
      "enterprise": true
    },
    "estimated_users": "Enterprise-only",
    "market_position": 21,
    "pros": [
      "True from-scratch multimodal training",
      "Strong Southeast Asian language coverage",
      "Edge-friendly small models (Spark 2B)",
      "Backed by Oracle and AI Singapore"
    ],
    "cons": [
      "Limited consumer presence",
      "Smaller compute budget than frontier rivals",
      "Quality gap vs Gemini / GPT-5 on multimodal benchmarks",
      "Less brand recognition"
    ],
    "use_cases": [
      "Southeast Asian language apps (SEA-LION)",
      "Enterprise multimodal search",
      "Oracle Cloud AI workloads",
      "Edge multimodal deployments"
    ],
    "url": "https://chat.reka.ai"
  },
  {
    "id": "liquid-ai",
    "name": "Liquid AI",
    "developer": "Liquid AI",
    "owner": "Independent (AMD Ventures investors)",
    "country": "USA",
    "country_code": "us",
    "cluster": "specialized",
    "launch_date": "2024-09-30",
    "description": "MIT spin-off pioneering Liquid Foundation Models (LFM), a non-transformer architecture optimized for on-device AI. LFM2.5 (January 2026) was trained on 28T tokens and ships in Base, Instruct, Japanese, Vision-Language and Audio variants - all open-weight, all designed to run on phones, cars and IoT.",
    "latest_model": "LFM2.5-1.2B",
    "pricing": {
      "free_tier": true,
      "free_details": "Open weights on Hugging Face",
      "pro_price": "Enterprise / LEAP SDK",
      "enterprise": true
    },
    "estimated_users": "Developer-only",
    "market_position": 22,
    "pros": [
      "Non-transformer 'liquid' architecture",
      "Truly tiny models that run on edge devices",
      "Audio model 8x faster than predecessor",
      "Open weights and LEAP SDK for deployment"
    ],
    "cons": [
      "Not a consumer chatbot",
      "Capability gap vs frontier models on hard tasks",
      "Niche developer audience",
      "Architecture still unproven at large scale"
    ],
    "use_cases": [
      "On-device AI for phones and IoT",
      "Automotive in-car assistants",
      "Robotics and embedded systems",
      "Privacy-preserving local AI"
    ],
    "url": "https://www.liquid.ai"
  },
  {
    "id": "mercury",
    "name": "Mercury (Inception Labs)",
    "developer": "Inception Labs",
    "owner": "Independent (Mayfield, Microsoft M12 investors)",
    "country": "USA",
    "country_code": "us",
    "cluster": "specialized",
    "launch_date": "2025-02-26",
    "description": "Stanford spin-off behind Mercury, the first commercial-scale diffusion LLM. Unlike autoregressive models, Mercury generates tokens in parallel via a coarse-to-fine diffusion process. Mercury 2 (February 2026) is the fastest reasoning LLM at up to 10x the throughput of speed-optimized GPT and Claude variants.",
    "latest_model": "Mercury 2",
    "pricing": {
      "free_tier": true,
      "free_details": "Free playground / limited API trial",
      "pro_price": "API (very cheap per token)",
      "enterprise": true
    },
    "estimated_users": "Developer-only",
    "market_position": 23,
    "pros": [
      "Diffusion LLM - radically faster generation",
      "Up to 10x throughput vs autoregressive models",
      "Available on Azure AI Foundry, AWS Bedrock",
      "Dramatically lower inference cost"
    ],
    "cons": [
      "Unproven at frontier capability levels",
      "Niche developer audience",
      "Architecture still experimental",
      "No consumer chatbot product"
    ],
    "use_cases": [
      "Real-time coding completions",
      "High-throughput agentic loops",
      "Latency-sensitive enterprise apps",
      "Cost-optimized inference workloads"
    ],
    "url": "https://www.inceptionlabs.ai"
  },
  {
    "id": "pi",
    "name": "Pi (Inflection)",
    "developer": "Inflection AI",
    "owner": "Microsoft (post-2024 acqui-hire)",
    "country": "USA",
    "country_code": "us",
    "cluster": "specialized",
    "launch_date": "2023-05-02",
    "description": "Originally a consumer empathetic-companion chatbot, Pi pivoted to enterprise after Microsoft acqui-hired Inflection's founders in March 2024. By 2026 Pi is licensed via Azure as a foundation for customer-service bots, with consumer access heavily capped and fading from public view.",
    "latest_model": "Inflection 3 (Productivity / Pi)",
    "pricing": {
      "free_tier": true,
      "free_details": "Capped free chat at pi.ai",
      "pro_price": "Enterprise via Azure",
      "enterprise": true
    },
    "estimated_users": "<1M MAU (declining)",
    "market_position": 24,
    "pros": [
      "Most empathetic conversational tone of any chatbot",
      "Strong voice mode legacy",
      "Backed by Microsoft Azure infrastructure",
      "Good for emotional support use cases"
    ],
    "cons": [
      "Effectively absorbed into Microsoft",
      "Aggressive usage caps on free tier",
      "No frontier-level reasoning",
      "Consumer product on the way out"
    ],
    "use_cases": [
      "Empathetic conversation and journaling",
      "Customer service bot foundation (enterprise)",
      "Voice conversation",
      "Mental wellness support"
    ],
    "url": "https://pi.ai"
  }
];
