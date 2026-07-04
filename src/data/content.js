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
  { value: "[] yrs", label: "Independent" },
  { value: "4.0/5", label: "Client rating" },
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

// Verbatim Google reviews for InsureAuto Agency (Conroe, TX).
export const testimonials = [
  {
    quote:
      "I had Jaqueline help me get a policy for my new car. She went above and beyond to make sure I got everything I needed.. Not big on doing review's but she deserves to be recognized for her hard work and knowledge.",
    attribution: "Hleidi “HeidiL” Lou",
    detail: "Google review",
    rating: 5,
  },
  {
    quote:
      "Excellent service from Vanessa, a great salesperson who is dedicated to her work. Honesty and charisma define someone who does things to the best of their ability, and you did a fantastic job. Thank you for your sales service.",
    attribution: "Kevincito Aguinaga",
    detail: "Google review · translated from Spanish",
    rating: 5,
  },
  {
    quote:
      "Excellent customer service. Credit where credit is due. Agent Jackie is someone who stands out for her kindness, simplicity, and excellent customer service, whether in person or over the phone.",
    attribution: "Yanet Lopez",
    detail: "Google review · translated from Spanish",
    rating: 4,
  },
];

export const faqs = [
  {
    question: "What does an independent insurance broker actually do?",
    answer:
      "Unlike a captive agent who sells one company's policies, we shop your risk across 40+ carriers and bring back the options that fit you best. We're paid the same regardless of which carrier you choose, so the recommendation is never about our commission.",
  },
  {
    question: "Is getting a quote free, and am I obligated to buy?",
    answer:
      "Yes and no — a quote is always free, and there's never any obligation to purchase. Most people hear back with options within one business day and decide from there on their own timeline.",
  },
  {
    question: "Will switching brokers or carriers cancel my current policy?",
    answer:
      "No. We handle the transition, including any cancellation notices to your current carrier, so there's no lapse in coverage. You stay protected the entire time.",
  },
  {
    question: "Can you get me a lower rate than I have now?",
    answer:
      "Often, yes — because we compare your risk across dozens of carriers instead of one. Even when the lowest sticker price isn't ours, we'll tell you honestly and show you where the better value actually is.",
  },
  {
    question: "What happens if I need to file a claim?",
    answer:
      "You call us, not a call center. Our brokers advocate directly with the carrier's adjuster on your behalf, from first report to final payout.",
  },
  {
    question: "Which states are you licensed in?",
    answer:
      "We're licensed to write personal and commercial policies in Texas.",
  },
];

export const contact = {
  phone: "(936) 494-2501",
  phoneDigits: "+19364942501",
  hours: "Mon–Fri, 9am–6pm",
  email: "hello@insure-auto.com",
  address: "1108 N Loop 336 W, Conroe, TX 77301",
};

export const siteUrl = "https://www.insure-auto.com";
