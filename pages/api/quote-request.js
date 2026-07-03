// pages/api/quote-request.js
import { submitWebsiteLead } from '../../lib/axon';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const QUOTE_FIELD_KEYS = [
  'vehicleYear', 'vehicleMake',
  'propertyAddress', 'homeType',
  'rentalAddress', 'estimatedValue',
  'businessName', 'fleetSize',
];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { quoteType, fullName, email, phone, ...rest } = req.body || {};

  if (!fullName || !String(fullName).trim() || !EMAIL_RE.test(email || '')) {
    return res.status(400).json({ ok: false, error: 'Full name and a valid email are required' });
  }

  const fields = {};
  for (const key of QUOTE_FIELD_KEYS) {
    if (rest[key]) fields[key] = rest[key];
  }

  // Fail-soft: once input validation passes, always tell the visitor it
  // worked. Axon-side failures are logged server-side (Vercel function
  // logs) rather than shown to the visitor.
  await submitWebsiteLead({
    form_type: 'quote',
    full_name: fullName,
    email,
    phone,
    quote_type: quoteType || null,
    fields,
  });

  return res.status(200).json({ ok: true });
}
