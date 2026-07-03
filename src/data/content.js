export const coverageCards = [
  {
    number: "01",
    title: "Personal Auto",
    description:
      "Liability, collision, and comprehensive for the cars you drive every day — with the deductibles that fit your budget.",
  },
  {
    number: "02",
    title: "Homeowners",
    description:
      "Protect your home's structure, your belongings, and the people under your roof against fire, theft, and storms.",
  },
  {
    number: "03",
    title: "Renters",
    description:
      "Affordable protection for your belongings and personal liability, wherever you rent — often under a dollar a day.",
  },
  {
    number: "04",
    title: "Commercial Auto",
    description:
      "Vehicles, drivers, and cargo for the businesses on the move — from a single work van to a full delivery fleet.",
  },
  {
    number: "05",
    title: "Bundle: Auto + Home",
    description:
      "Combine your policies under one broker and unlock multi-policy discounts on both — with a single renewal to track.",
  },
  {
    number: "06",
    title: "Umbrella",
    description:
      "Extra liability limits that sit above your auto and home policies for the claims that run past your primary coverage.",
  },
  {
    number: "07",
    title: "Landlord & Rental",
    description:
      "Dwelling, liability, and loss-of-rent coverage for the properties you rent to others — one door or many.",
  },
  {
    number: "08",
    title: "Specialty & Recreational",
    description:
      "Classic cars, motorcycles, boats, and RVs — the vehicles that need coverage built for how you actually use them.",
  },
];

export const homeCoverageCards = coverageCards.filter((c) =>
  ["01", "02", "04"].includes(c.number)
);

export const homeStats = [
  { value: "3,200+", label: "Households & businesses" },
  { value: "40+", label: "Carrier partners" },
  { value: "20 yrs", label: "Independent" },
  { value: "4.9/5", label: "Client rating" },
];

export const whyIndependentReasons = [
  {
    number: "01",
    title: "The whole market, not one shelf",
    description:
      "We quote your risk across forty-plus carriers and bring back the ones worth your money.",
  },
  {
    number: "02",
    title: "Paid the same either way",
    description:
      "Our compensation does not change with the carrier you choose, so the recommendation stays yours.",
  },
  {
    number: "03",
    title: "We handle the claim",
    description:
      "When something goes wrong, you call us — not a call center. We advocate through the process.",
  },
];

export const aboutValues = [
  {
    number: "01",
    title: "Independent",
    description:
      "We work for you, not a carrier. That single fact shapes every recommendation we make.",
  },
  {
    number: "02",
    title: "Clear",
    description:
      "Plain language, honest trade-offs, and no jargon between you and understanding your coverage.",
  },
  {
    number: "03",
    title: "Present",
    description:
      "The same people quote you, renew you, and stand beside you at claim time. Year after year.",
  },
];

export const quoteSteps = [
  {
    number: "01",
    title: "Send the basics",
    description:
      "A few details on what you drive, own, or need covered — two minutes, tops.",
  },
  {
    number: "02",
    title: "We shop the market",
    description:
      "A broker compares carriers and builds a recommendation tailored to your risk.",
  },
  {
    number: "03",
    title: "You choose, we place it",
    description:
      "Review the options together, pick your coverage, and we handle the paperwork.",
  },
];

export const quoteChipOptions = [
  "Personal Auto",
  "Homeowners",
  "Renters",
  "Commercial Auto",
  "Umbrella",
  "Bundle Auto + Home",
];

export const insuredWithOptions = [
  "Not currently insured",
  "A national carrier",
  "A local agent",
  "Another broker",
  "Prefer not to say",
];

export const testimonial = {
  quote:
    "Bundling our home and both cars with Insure-Auto cut our premium and gave us one person who actually picks up the phone. When a storm took our roof, they handled the claim start to finish.",
  attribution: "Marisol & Dean Okafor — Homeowners since 2016",
};

export const contact = {
  phone: "(555) 012-3456",
  hours: "Mon–Fri, 8am–6pm",
  email: "hello@insure-auto.com",
  address: "218 Larkspur Row, Portland, OR 97205",
};
