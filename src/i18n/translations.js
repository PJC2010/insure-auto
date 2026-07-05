// Full English + Spanish copy for the site. Every visible string lives here so
// the language toggle can swap the entire experience client-side. The `en` and
// `es` objects mirror each other exactly — keep them in sync when editing copy.
//
// Language-neutral data (phone, email, address, city names, coordinates) stays
// in src/data/content.js and is shared across both languages.

export const translations = {
  en: {
    langName: "English",
    // Header / nav
    nav: {
      home: "Home",
      coverage: "Coverage",
      about: "About",
    },
    header: {
      est: "Est. []",
      requestQuote: "Request a quote",
    },
    languageToggle: {
      label: "Language",
      switchTo: "Ver en Español",
    },
    // Shared coverage cards (used on Home + Coverage)
    coverageCards: [
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
    ],
    faqs: [
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
        answer: "We're licensed to write personal and commercial policies in Texas.",
      },
    ],
    testimonials: [
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
    ],
    home: {
      seoTitle:
        "Auto & Home Insurance in Conroe & Greater Houston | InsureAuto Agency",
      heroLabel: "Independent Auto & Home Brokers",
      heroTitle: "Insurance built around the life you’ve built.",
      heroSubhead:
        "We’re an independent brokerage — not tied to any single carrier. We compare coverage across dozens of insurers and bring back the policy that actually fits your life, at a price that makes sense.",
      heroCtaPrimary: "Request a quote",
      heroCtaSecondary: "Explore coverage",
      heroTrustStrong: "4.0/5",
      heroTrustRest: " from 12+ reviews · Licensed in TX",
      stats: [
        { value: "3,200+", label: "Households & businesses" },
        { value: "40+", label: "Carrier partners" },
        { value: "[] yrs", label: "Independent" },
        { value: "4.0/5", label: "Client rating" },
      ],
      coverageLabel: "What we cover",
      viewAll: "View all coverage →",
      whyLabel: "Why independent",
      whyTitle: "One broker, the whole market.",
      whyLead:
        "Captive agents can only sell you what their one carrier offers. We work for you, not a carrier — so every recommendation is built around your risk, not a sales quota.",
      whyReasons: [
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
      ],
      panelValue: "40+",
      panelLabel: "Carriers compared",
      reviewsLabel: "Google reviews",
      faqLabel: "Frequently asked",
      faqTitle: "Answers before you ask.",
      ctaTitle: "Fifteen minutes now can save you all year.",
      ctaSubtext:
        "Send us the basics and a broker will have options back to you within one business day.",
      ctaButton: "Request a quote",
    },
    coverage: {
      seoTitle:
        "Insurance Coverage in Greater Houston: Auto, Home, Umbrella & More | InsureAuto Agency",
      label: "Coverage",
      title: "Coverage for the life you’re building.",
      intro:
        "From your first car to your growing business, we shop the market so you don’t have to. Explore the coverage we place every day — and reach out if you don’t see exactly what you need.",
      calloutTitle: "Not sure what you need?",
      calloutText:
        "Tell us a bit about your situation and we’ll point you toward the right coverage — no obligation.",
      calloutButton: "Request a quote",
    },
    about: {
      seoTitle:
        "About Us | Family-Run Independent Broker in Conroe, TX | InsureAuto Agency",
      label: "Our story",
      title: "Family-run, shopping the market on your behalf since [].",
      introParagraphs: [
        "InsureAuto Agency was founded in [] on a simple idea: an insurance brokerage should work for the client, not for a single carrier. That idea still runs the business today.",
        "We’re still family-run, still independent, and still comparing coverage across more than forty carriers so the households and businesses we serve get the right policy — not just the one on the shelf.",
      ],
      valuesLabel: "What we stand for",
      values: [
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
      ],
      ctaTitle: "Ready to see what independent looks like?",
      ctaButton: "Request a quote",
    },
    quote: {
      seoTitle:
        "Free Insurance Quote in Conroe & Greater Houston | InsureAuto Agency",
      label: "Request a quote",
      title: "Let’s find your coverage.",
      intro:
        "Tell us a little about what you need covered, and a broker will shop the market on your behalf. Free, no obligation, and no spam — ever.",
      chipLabel: "What should we quote?",
      chipOptions: [
        "Personal Auto",
        "Homeowners",
        "Renters",
        "Commercial Auto",
        "Umbrella",
        "Bundle Auto + Home",
      ],
      fullName: "Full name",
      fullNamePlaceholder: "Jordan Rivera",
      zip: "ZIP code",
      zipPlaceholder: "10001",
      email: "Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone",
      phonePlaceholder: "(936) 555-0100",
      insuredWith: "Currently insured with",
      insuredWithPlaceholder: "Select one",
      insuredWithOptions: [
        "Not currently insured",
        "A national carrier",
        "A local agent",
        "Another broker",
        "Prefer not to say",
      ],
      notes: "Anything else we should know?",
      notesPlaceholder: "Two drivers, a 2019 SUV, and a house built in 1998…",
      submit: "Request my quote — free, no obligation",
      privacy:
        "Your information is used only to prepare your quote and is never sold to third parties.",
      confirmationTitle: "Request received.",
      confirmationText:
        "Thank you. A broker from our team will be in touch within one business day with options tailored to what you told us.",
      backHome: "Back to home",
      sidebarLabel: "What to expect",
      steps: [
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
      ],
      contactPrompt: "Prefer to talk?",
      contactHours: "Mon–Fri, 9am–6pm",
    },
    footer: {
      blurb:
        "Independent auto & home insurance brokers. Family-run since [], shopping the whole market for every client.",
      coverageLabel: "Coverage",
      coverageLinks: {
        personalAuto: "Personal auto",
        homeowners: "Homeowners",
        commercialAuto: "Commercial auto",
        all: "All coverage",
      },
      companyLabel: "Company",
      companyLinks: {
        story: "Our story",
        quote: "Request a quote",
      },
      contactLabel: "Contact",
      areasLabel: "Serving Greater Houston",
      areasPrefix: "Proudly serving drivers and homeowners across",
      areasSuffix: "and the surrounding Greater Houston communities.",
      copyright: "© 2026 InsureAuto Agency",
      licensed: "Licensed in TX",
    },
    mobileCta: {
      call: "Call now",
      quote: "Get a quote",
    },
  },

  es: {
    langName: "Español",
    nav: {
      home: "Inicio",
      coverage: "Coberturas",
      about: "Nosotros",
    },
    header: {
      est: "Desde []",
      requestQuote: "Solicitar cotización",
    },
    languageToggle: {
      label: "Idioma",
      switchTo: "View in English",
    },
    coverageCards: [
      {
        number: "01",
        title: "Auto Personal",
        description:
          "Responsabilidad civil, colisión y cobertura amplia para los autos que maneja a diario — con los deducibles que se ajustan a su presupuesto.",
      },
      {
        number: "02",
        title: "Propietarios de Vivienda",
        description:
          "Proteja la estructura de su casa, sus pertenencias y a quienes viven bajo su techo contra incendios, robos y tormentas.",
      },
      {
        number: "03",
        title: "Inquilinos",
        description:
          "Protección accesible para sus pertenencias y su responsabilidad personal, dondequiera que rente — a menudo por menos de un dólar al día.",
      },
      {
        number: "04",
        title: "Auto Comercial",
        description:
          "Vehículos, conductores y carga para los negocios en movimiento — desde una sola camioneta de trabajo hasta una flota de reparto completa.",
      },
      {
        number: "05",
        title: "Paquete: Auto + Hogar",
        description:
          "Combine sus pólizas con un solo corredor y obtenga descuentos por múltiples pólizas en ambas — con una sola renovación que atender.",
      },
      {
        number: "06",
        title: "Paraguas (Umbrella)",
        description:
          "Límites de responsabilidad adicionales por encima de sus pólizas de auto y hogar para los reclamos que superan su cobertura principal.",
      },
      {
        number: "07",
        title: "Arrendador y Renta",
        description:
          "Cobertura de vivienda, responsabilidad y pérdida de renta para las propiedades que renta a otros — una puerta o muchas.",
      },
      {
        number: "08",
        title: "Especializada y Recreativa",
        description:
          "Autos clásicos, motocicletas, botes y casas rodantes — los vehículos que necesitan una cobertura hecha para como realmente los usa.",
      },
    ],
    faqs: [
      {
        question: "¿Qué hace realmente un corredor de seguros independiente?",
        answer:
          "A diferencia de un agente cautivo que vende las pólizas de una sola compañía, nosotros comparamos su riesgo entre más de 40 aseguradoras y le traemos las opciones que mejor se ajustan a usted. Nos pagan lo mismo sin importar qué aseguradora elija, así que la recomendación nunca se trata de nuestra comisión.",
      },
      {
        question: "¿Cotizar es gratis y estoy obligado a comprar?",
        answer:
          "Sí y no — una cotización siempre es gratis y nunca hay obligación de comprar. La mayoría recibe opciones en un día hábil y decide a su propio ritmo desde ahí.",
      },
      {
        question: "¿Cambiar de corredor o aseguradora cancelará mi póliza actual?",
        answer:
          "No. Nosotros manejamos la transición, incluyendo cualquier aviso de cancelación a su aseguradora actual, para que no haya interrupción en su cobertura. Usted permanece protegido todo el tiempo.",
      },
      {
        question: "¿Pueden conseguirme una tarifa más baja que la que tengo ahora?",
        answer:
          "Con frecuencia, sí — porque comparamos su riesgo entre docenas de aseguradoras en lugar de una sola. Incluso cuando el precio más bajo no es el nuestro, se lo diremos con honestidad y le mostraremos dónde está realmente el mejor valor.",
      },
      {
        question: "¿Qué pasa si necesito presentar un reclamo?",
        answer:
          "Nos llama a nosotros, no a un centro de llamadas. Nuestros corredores abogan directamente con el ajustador de la aseguradora en su nombre, desde el primer reporte hasta el pago final.",
      },
      {
        question: "¿En qué estados tienen licencia?",
        answer:
          "Tenemos licencia para emitir pólizas personales y comerciales en Texas.",
      },
    ],
    testimonials: [
      {
        quote:
          "Jaqueline me ayudó a conseguir una póliza para mi auto nuevo. Hizo todo lo posible para asegurarse de que yo tuviera todo lo que necesitaba. No suelo dejar reseñas, pero ella merece ser reconocida por su esfuerzo y conocimiento.",
        attribution: "Hleidi “HeidiL” Lou",
        detail: "Reseña de Google",
        rating: 5,
      },
      {
        quote:
          "Excelente servicio de parte de Vanessa, una gran vendedora dedicada a su trabajo. La honestidad y el carisma definen a alguien que hace las cosas de la mejor manera, e hiciste un trabajo fantástico. Gracias por tu servicio de venta.",
        attribution: "Kevincito Aguinaga",
        detail: "Reseña de Google",
        rating: 5,
      },
      {
        quote:
          "Excelente atención al cliente. Hay que reconocer el mérito. La agente Jackie es alguien que se destaca por su amabilidad, sencillez y excelente atención al cliente, ya sea en persona o por teléfono.",
        attribution: "Yanet Lopez",
        detail: "Reseña de Google",
        rating: 4,
      },
    ],
    home: {
      seoTitle:
        "Seguro de Auto y Hogar en Conroe y el Gran Houston | InsureAuto Agency",
      heroLabel: "Corredores Independientes de Auto y Hogar",
      heroTitle: "Seguros hechos a la medida de la vida que ha construido.",
      heroSubhead:
        "Somos una correduría independiente — no estamos atados a ninguna aseguradora en particular. Comparamos coberturas entre docenas de aseguradoras y le traemos la póliza que de verdad se ajusta a su vida, a un precio que tiene sentido.",
      heroCtaPrimary: "Solicitar cotización",
      heroCtaSecondary: "Ver coberturas",
      heroTrustStrong: "4.0/5",
      heroTrustRest: " de más de 12 reseñas · Con licencia en TX",
      stats: [
        { value: "3,200+", label: "Hogares y negocios" },
        { value: "40+", label: "Aseguradoras aliadas" },
        { value: "[] años", label: "Independientes" },
        { value: "4.0/5", label: "Calificación de clientes" },
      ],
      coverageLabel: "Lo que cubrimos",
      viewAll: "Ver todas las coberturas →",
      whyLabel: "Por qué independientes",
      whyTitle: "Un solo corredor, todo el mercado.",
      whyLead:
        "Los agentes cautivos solo pueden venderle lo que ofrece su única aseguradora. Nosotros trabajamos para usted, no para una aseguradora — así que cada recomendación se construye en torno a su riesgo, no a una cuota de ventas.",
      whyReasons: [
        {
          number: "01",
          title: "Todo el mercado, no un solo estante",
          description:
            "Cotizamos su riesgo entre más de cuarenta aseguradoras y le traemos las que valen su dinero.",
        },
        {
          number: "02",
          title: "Nos pagan igual de cualquier forma",
          description:
            "Nuestra compensación no cambia según la aseguradora que elija, así que la recomendación sigue siendo suya.",
        },
        {
          number: "03",
          title: "Nosotros manejamos el reclamo",
          description:
            "Cuando algo sale mal, nos llama a nosotros — no a un centro de llamadas. Lo acompañamos durante todo el proceso.",
        },
      ],
      panelValue: "40+",
      panelLabel: "Aseguradoras comparadas",
      reviewsLabel: "Reseñas de Google",
      faqLabel: "Preguntas frecuentes",
      faqTitle: "Respuestas antes de que pregunte.",
      ctaTitle: "Quince minutos hoy pueden ahorrarle todo el año.",
      ctaSubtext:
        "Envíenos lo básico y un corredor le tendrá opciones de vuelta en un día hábil.",
      ctaButton: "Solicitar cotización",
    },
    coverage: {
      seoTitle:
        "Coberturas de Seguro en el Gran Houston: Auto, Hogar, Umbrella y Más | InsureAuto Agency",
      label: "Coberturas",
      title: "Cobertura para la vida que está construyendo.",
      intro:
        "Desde su primer auto hasta su negocio en crecimiento, comparamos el mercado para que usted no tenga que hacerlo. Explore las coberturas que colocamos todos los días — y contáctenos si no encuentra exactamente lo que necesita.",
      calloutTitle: "¿No está seguro de lo que necesita?",
      calloutText:
        "Cuéntenos un poco sobre su situación y lo orientaremos hacia la cobertura correcta — sin compromiso.",
      calloutButton: "Solicitar cotización",
    },
    about: {
      seoTitle:
        "Nosotros | Corredor Independiente de Familia en Conroe, TX | InsureAuto Agency",
      label: "Nuestra historia",
      title: "De familia, comparando el mercado por usted desde [].",
      introParagraphs: [
        "InsureAuto Agency se fundó en [] con una idea simple: una correduría de seguros debe trabajar para el cliente, no para una sola aseguradora. Esa idea sigue guiando el negocio hoy.",
        "Seguimos siendo de familia, seguimos siendo independientes y seguimos comparando coberturas entre más de cuarenta aseguradoras para que los hogares y negocios que atendemos obtengan la póliza correcta — no solo la que está en el estante.",
      ],
      valuesLabel: "Lo que representamos",
      values: [
        {
          number: "01",
          title: "Independientes",
          description:
            "Trabajamos para usted, no para una aseguradora. Ese solo hecho da forma a cada recomendación que hacemos.",
        },
        {
          number: "02",
          title: "Claros",
          description:
            "Lenguaje sencillo, alternativas honestas y sin tecnicismos entre usted y la comprensión de su cobertura.",
        },
        {
          number: "03",
          title: "Presentes",
          description:
            "Las mismas personas lo cotizan, lo renuevan y lo acompañan al momento del reclamo. Año tras año.",
        },
      ],
      ctaTitle: "¿Listo para ver cómo se siente ser independiente?",
      ctaButton: "Solicitar cotización",
    },
    quote: {
      seoTitle:
        "Cotización de Seguro Gratis en Conroe y el Gran Houston | InsureAuto Agency",
      label: "Solicitar cotización",
      title: "Encontremos su cobertura.",
      intro:
        "Cuéntenos un poco sobre lo que necesita asegurar y un corredor comparará el mercado por usted. Gratis, sin compromiso y sin spam — nunca.",
      chipLabel: "¿Qué desea cotizar?",
      chipOptions: [
        "Auto Personal",
        "Propietarios de Vivienda",
        "Inquilinos",
        "Auto Comercial",
        "Umbrella",
        "Paquete Auto + Hogar",
      ],
      fullName: "Nombre completo",
      fullNamePlaceholder: "Jordan Rivera",
      zip: "Código postal",
      zipPlaceholder: "10001",
      email: "Correo electrónico",
      emailPlaceholder: "usted@correo.com",
      phone: "Teléfono",
      phonePlaceholder: "(936) 555-0100",
      insuredWith: "Actualmente asegurado con",
      insuredWithPlaceholder: "Seleccione una opción",
      insuredWithOptions: [
        "No estoy asegurado actualmente",
        "Una aseguradora nacional",
        "Un agente local",
        "Otro corredor",
        "Prefiero no decir",
      ],
      notes: "¿Algo más que debamos saber?",
      notesPlaceholder:
        "Dos conductores, una camioneta SUV 2019 y una casa construida en 1998…",
      submit: "Solicitar mi cotización — gratis, sin compromiso",
      privacy:
        "Su información se usa únicamente para preparar su cotización y nunca se vende a terceros.",
      confirmationTitle: "Solicitud recibida.",
      confirmationText:
        "Gracias. Un corredor de nuestro equipo se comunicará con usted en un día hábil con opciones a la medida de lo que nos contó.",
      backHome: "Volver al inicio",
      sidebarLabel: "Qué esperar",
      steps: [
        {
          number: "01",
          title: "Envíe lo básico",
          description:
            "Unos cuantos datos sobre lo que maneja, posee o necesita asegurar — dos minutos, máximo.",
        },
        {
          number: "02",
          title: "Comparamos el mercado",
          description:
            "Un corredor compara aseguradoras y arma una recomendación a la medida de su riesgo.",
        },
        {
          number: "03",
          title: "Usted elige, nosotros la colocamos",
          description:
            "Revisamos las opciones juntos, usted elige su cobertura y nosotros nos encargamos del papeleo.",
        },
      ],
      contactPrompt: "¿Prefiere hablar?",
      contactHours: "Lun–Vie, 9am–6pm",
    },
    footer: {
      blurb:
        "Corredores independientes de seguros de auto y hogar. De familia desde [], comparando todo el mercado para cada cliente.",
      coverageLabel: "Coberturas",
      coverageLinks: {
        personalAuto: "Auto personal",
        homeowners: "Propietarios de vivienda",
        commercialAuto: "Auto comercial",
        all: "Todas las coberturas",
      },
      companyLabel: "Empresa",
      companyLinks: {
        story: "Nuestra historia",
        quote: "Solicitar cotización",
      },
      contactLabel: "Contacto",
      areasLabel: "Al servicio del Gran Houston",
      areasPrefix:
        "Con orgullo al servicio de conductores y propietarios de vivienda en",
      areasSuffix: "y las comunidades vecinas del Gran Houston.",
      copyright: "© 2026 InsureAuto Agency",
      licensed: "Con licencia en TX",
    },
    mobileCta: {
      call: "Llamar ahora",
      quote: "Cotizar",
    },
  },
};

export const LANGUAGES = ["en", "es"];
export const DEFAULT_LANGUAGE = "en";
