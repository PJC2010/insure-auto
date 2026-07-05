// Language-neutral site data shared across English and Spanish. All translatable
// marketing copy (coverage cards, stats, testimonials, FAQs, page text, etc.)
// lives in src/i18n/translations.js so the language toggle can swap it wholesale.

export const contact = {
  phone: "(936) 494-2501",
  phoneDigits: "+19364942501",
  hours: "Mon–Fri, 9am–6pm",
  email: "hello@insure-auto.com",
  address: "1108 N Loop 336 W, Conroe, TX 77301",
};

// Greater Houston communities we write policies in. Rendered as on-page
// text in the footer (a real local-SEO ranking signal, not just markup)
// and mirrored into the InsuranceAgency schema's areaServed. City names are
// the same in both languages, so they stay here rather than in translations.
export const areasServed = [
  "Conroe",
  "The Woodlands",
  "Spring",
  "Montgomery",
  "Willis",
  "Magnolia",
  "Tomball",
  "Cypress",
  "Houston",
  "Kingwood",
  "Humble",
  "Katy",
  "Sugar Land",
  "Pearland",
];

// Approximate coordinates of the Conroe office, used for geo meta tags
// and the schema GeoCoordinates block.
export const geo = { latitude: 30.3475, longitude: -95.4699 };

export const siteUrl = "https://www.insure-auto.com";
