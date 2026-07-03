// pages/api/contact.js
import { submitWebsiteLead } from '../../lib/axon';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !String(name).trim() || !EMAIL_RE.test(email || '')) {
    return res.status(400).json({ ok: false, error: 'Name and a valid email are required' });
  }

  // Fail-soft: once input validation passes, always tell the visitor it
  // worked. Axon-side failures are logged server-side (Vercel function
  // logs) rather than shown to the visitor.
  await submitWebsiteLead({
    form_type: 'contact',
    full_name: name,
    email,
    phone,
    subject,
    message,
  });

  return res.status(200).json({ ok: true });
}
