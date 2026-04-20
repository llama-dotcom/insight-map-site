// Simple in-memory rate limiter (resets on cold start, ~5-15 min idle)
const rateLimitMap = new Map();
const RATE_LIMIT = 3; // max requests per IP per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

module.exports = async function handler(req, res) {
  // CORS — restrict to our domain only
  const origin = req.headers.origin || '';
  const allowed = origin.includes('insight-map.com') || origin.includes('localhost');
  res.setHeader('Access-Control-Allow-Origin', allowed ? origin : 'https://insight-map.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Rate limiting by IP
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (entry && now - entry.start < RATE_WINDOW) {
    if (entry.count >= RATE_LIMIT) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }
    entry.count++;
  } else {
    rateLimitMap.set(ip, { start: now, count: 1 });
  }

  const SUPABASE_URL = (process.env.SUPABASE_URL || '').trim();
  const SUPABASE_KEY = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();
  const RESEND_KEY = (process.env.RESEND_KEY || '').trim();
  const ALERT_EMAIL = 'bulanovaaaleksandra@gmail.com';

  try {
    const { message } = req.body || {};
    if (!message || typeof message !== 'string' || message.trim().length < 3) {
      return res.status(400).json({ error: 'Message too short' });
    }
    if (message.length > 5000) {
      return res.status(400).json({ error: 'Message too long (max 5000 chars)' });
    }

    // Honeypot: reject if hidden field is filled (anti-spam)
    if (req.body.website) return res.status(200).json({ ok: true }); // silent reject

    // Strip HTML tags for safety
    const cleanMsg = message.trim().slice(0, 5000).replace(/<[^>]*>/g, '');

    // 1. Save to Supabase
    if (SUPABASE_URL && SUPABASE_KEY) {
      await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ message: cleanMsg })
      });
    }

    // 2. Send email via Resend (if key configured)
    if (RESEND_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'HP Subsidy Monitor <onboarding@resend.dev>',
          to: ALERT_EMAIL,
          subject: 'New anonymous feedback — HP Subsidy Monitor',
          text: `New anonymous feedback received:\n\n${cleanMsg}\n\n---\nSent from HP Subsidy Monitor feedback form\n${new Date().toISOString()}`
        })
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Internal error' });
  }
};
