// lib/axon.js
//
// Server-only helper for submitting a website lead into Axon (the agency's
// CRM). Called from pages/api/quote-request.js and pages/api/contact.js —
// never imported into client code, since AXON_API_KEY must stay server-side.
//
// Never throws: on any failure (network error, timeout, non-2xx response)
// it returns { ok: false } so callers can fail soft and still show the
// visitor a normal success message (see pages/api/*.js).

const TIMEOUT_MS = 5000;

export async function submitWebsiteLead(payload) {
  const apiUrl = process.env.AXON_API_URL;
  const apiKey = process.env.AXON_API_KEY;

  if (!apiUrl || !apiKey) {
    console.error('submitWebsiteLead: AXON_API_URL/AXON_API_KEY not configured');
    return { ok: false };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(`${apiUrl.replace(/\/$/, '')}/api/public/website-lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Axon-Api-Key': apiKey,
      },
      body: JSON.stringify({
        ...payload,
        is_preview: process.env.VERCEL_ENV ? process.env.VERCEL_ENV !== 'production' : false,
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error(`submitWebsiteLead: Axon responded ${res.status}`, await res.text().catch(() => ''));
      return { ok: false };
    }
    return { ok: true };
  } catch (err) {
    console.error('submitWebsiteLead: request failed', err);
    return { ok: false };
  } finally {
    clearTimeout(timeout);
  }
}
