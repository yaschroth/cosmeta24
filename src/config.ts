// cosmeta24 Kosmetikstudio Configuration
// Professionelle Kosmetik in Heilbronn

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "cosmeta24",
    tagline: "Ihr Kosmetikstudio in Heilbronn",
    description: "Professionelle Kosmetikbehandlungen für gesunde, strahlende Haut. Von Gesichtsreinigung über Peelings bis zur entspannenden Gesichtsmassage, individuell abgestimmt auf Ihre Bedürfnisse.",
    foundingYear: 2017,
    yearsExperience: 7,
    satisfiedClients: "1.000+",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "07131 4059049",
    phoneLink: "tel:+4971314059049",
    email: "info@cosmeta24.de",
    whatsapp: "+49 176 12345678",
    whatsappLink: "https://wa.me/4917612345678",
    address: {
      street: "Karlstraße 51",
      city: "Heilbronn",
      district: "am Neckar",
      zip: "74072",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5!2d9.2165!3d49.1420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982915e8888889%3A0x0!2sKarlstra%C3%9Fe%2051%2C%2074072%20Heilbronn!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Karlstraße+51,+74072+Heilbronn",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Fr 09:00-19:00",
    saturday: "Sa 10:00-18:00",
    sunday: "Geschlossen",
    note: "Termine online buchbar unter cosmeta24.de/behandlungen",
    display: "Mo-Fr 09:00-19:00",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 4.7,
    count: "17+",
    googleReviewLink: "https://g.page/cosmeta24/review",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Svetlana",
    fullName: "Svetlana Muratova",
    image: "/beauty/frau.jpg",
    bio: [
      "Als Gründerin und Chefkosmetikerin von cosmeta24 bringe ich über 7 Jahre Erfahrung in der professionellen Kosmetik mit. Meine Ausbildung als Kosmetikerin-Ästhetikerin habe ich durch zahlreiche Fortbildungen und Praktika kontinuierlich erweitert.",
      "In meinem Studio in der Heilbronner Karlstraße biete ich Ihnen ein umfassendes Spektrum an Gesichtsbehandlungen. Von der gründlichen Gesichtsreinigung über intensive Peelings bis hin zur entspannenden Gesichtsmassage.",
      "Jede Behandlung wird individuell auf Ihren Hauttyp abgestimmt, damit Sie mit einer gesunden, strahlenden Haut nach Hause gehen. Ihr Wohlbefinden steht bei mir an erster Stelle.",
    ],
    certifications: [
      { label: "Kosmetikerin", icon: "shield" },
      { label: "Ästhetikerin", icon: "award" },
      { label: "7+ Jahre Erfahrung", icon: "star" },
      { label: "Individuelle Beratung", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Marina S.",
      rating: 5,
      text: "Frau Muratova ist eine wahre Expertin! Die Gesichtsbehandlung war sehr entspannend und meine Haut sieht seitdem viel frischer aus. Sehr zu empfehlen!",
      service: "Gesichtsbehandlung",
      date: "vor 2 Wochen",
    },
    {
      name: "Anna K.",
      rating: 5,
      text: "Ich war schon bei vielen Kosmetikstudios, aber cosmeta24 ist wirklich anders. Die Beratung ist ehrlich und die Behandlungen sind top. Komme gerne wieder!",
      service: "Apparative Kosmetik",
      date: "vor 1 Monat",
    },
    {
      name: "Julia M.",
      rating: 5,
      text: "Das Peeling war genau das, was meine Haut gebraucht hat. Super sauberes Studio und sehr freundliche Atmosphäre. Die online Terminbuchung ist auch praktisch.",
      service: "Peeling",
      date: "vor 3 Wochen",
    },
    {
      name: "Katja H.",
      rating: 5,
      text: "Endlich ein Kosmetikstudio, das wirklich auf meine Hautbedürfnisse eingeht. Die Gesichtsmassage war himmlisch entspannend!",
      service: "Gesichtsmassage",
      date: "vor 1 Woche",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Gesichtsreinigung",
      description: "Gründliche, professionelle Reinigung für einen klaren, frischen Teint. Entfernt Unreinheiten und bereitet die Haut optimal auf weitere Pflege vor.",
      price: "ab 49€",
      image: "/beauty/face.jpg",
      benefits: ["Porentiefe Reinigung", "Frischer Teint"],
    },
    {
      title: "Apparative Kosmetik",
      description: "Modernste Geräte für optimale Ergebnisse. Ob Ultraschall, Mikrodermabrasion oder LED-Therapie, wir finden die passende Behandlung für Sie.",
      price: "ab 69€",
      image: "/beauty/microneedling.jpg",
      benefits: ["Moderne Technik", "Sichtbare Ergebnisse"],
    },
    {
      title: "Peeling Behandlung",
      description: "Intensive Hauterneuerung durch professionelle Peelings. Entfernt abgestorbene Hautzellen und fördert die Zellerneuerung für ein strahlendes Hautbild.",
      price: "ab 59€",
      image: "/beauty/face2.jpg",
      benefits: ["Hauterneuerung", "Strahlender Teint"],
    },
    {
      title: "Gesichtsmassage",
      description: "Entspannende Massage für Gesicht, Hals und Dekolleté. Fördert die Durchblutung und wirkt straffend auf die Gesichtskonturen.",
      price: "ab 45€",
      image: "/beauty/kopfmassage.png",
      benefits: ["Tiefenentspannung", "Straffende Wirkung"],
    },
    {
      title: "Anti-Aging Behandlung",
      description: "Gezielte Behandlung gegen Hautalterung. Mit hochwertigen Wirkstoffen und modernsten Methoden für ein jugendliches Erscheinungsbild.",
      price: "ab 89€",
      image: "/beauty/hero%20main.webp",
      benefits: ["Faltenreduktion", "Mehr Elastizität"],
    },
    {
      title: "Augenbrauen & Wimpern",
      description: "Professionelles Styling für einen ausdrucksstarken Blick. Vom Zupfen über Färben bis zum Lifting, wir betonen Ihre natürliche Schönheit.",
      price: "ab 25€",
      image: "/beauty/wimpern.png",
      benefits: ["Perfekte Form", "Ausdrucksstarker Blick"],
    },
    {
      title: "Maniküre",
      description: "Gepflegte Hände sind Ihre Visitenkarte. Klassische oder apparative Maniküre mit optionaler Lackierung für ein perfektes Finish.",
      price: "ab 35€",
      image: "/beauty/maniküre%20neu.png",
      benefits: ["Gepflegte Hände", "Langanhaltend"],
    },
    {
      title: "Pediküre",
      description: "Professionelle Fußpflege für schöne, gepflegte Füße. Inklusive Hornhautentfernung, Nagelpflege und optionaler Lackierung.",
      price: "ab 45€",
      image: "/beauty/pedicure.webp",
      benefits: ["Wellness für die Füße", "Gepflegter Look"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Gesichtsbehandlungen",
      items: [
        { name: "Basis Gesichtsreinigung", price: "49€" },
        { name: "Intensiv Gesichtsbehandlung", price: "79€" },
        { name: "Luxus Gesichtsbehandlung", price: "99€" },
        { name: "Gesichtsmassage (30 Min)", price: "45€" },
        { name: "Gesichtsmassage (60 Min)", price: "75€" },
      ],
    },
    {
      category: "Apparative Kosmetik",
      items: [
        { name: "Ultraschall Behandlung", price: "69€" },
        { name: "Mikrodermabrasion", price: "79€" },
        { name: "LED-Lichttherapie", price: "59€" },
        { name: "Kombi-Behandlung", price: "119€" },
      ],
    },
    {
      category: "Peelings",
      items: [
        { name: "Fruchtsäure Peeling", price: "59€" },
        { name: "Enzym Peeling", price: "49€" },
        { name: "Intensiv Peeling", price: "79€" },
      ],
    },
    {
      category: "Anti-Aging",
      items: [
        { name: "Anti-Aging Basis", price: "89€" },
        { name: "Anti-Aging Intensiv", price: "119€" },
        { name: "Anti-Aging Premium", price: "149€" },
      ],
    },
    {
      category: "Augenbrauen & Wimpern",
      items: [
        { name: "Augenbrauen zupfen", price: "15€" },
        { name: "Augenbrauen färben", price: "12€" },
        { name: "Wimpern färben", price: "15€" },
        { name: "Wimpernlifting", price: "55€" },
        { name: "Browlifting", price: "45€" },
      ],
    },
    {
      category: "Maniküre & Pediküre",
      items: [
        { name: "Klassische Maniküre", price: "35€" },
        { name: "Maniküre mit Lack", price: "45€" },
        { name: "Maniküre mit Gel-Lack", price: "55€" },
        { name: "Klassische Pediküre", price: "45€" },
        { name: "Pediküre mit Lack", price: "55€" },
        { name: "Wellness Pediküre", price: "69€" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/face.jpg",
    heroAlt: "Professionelle Kosmetikbehandlung bei cosmeta24 in Heilbronn",
    hygiene: "/beauty/contact.png",
    gallery: [
      { url: "/beauty/face.jpg", category: "Behandlung" },
      { url: "/beauty/face2.jpg", category: "Behandlung" },
      { url: "/beauty/microneedling.jpg", category: "Behandlung" },
      { url: "/beauty/behandlung%202.webp", category: "Behandlung" },
      { url: "/beauty/behandlung%203.png", category: "Behandlung" },
      { url: "/beauty/hero%20main.webp", category: "Behandlung" },
      { url: "/beauty/wimpern.png", category: "Augen" },
      { url: "/beauty/wimpern%20(2).webp", category: "Augen" },
      { url: "/beauty/eyebrow-after.png", category: "Augen" },
      { url: "/beauty/kopfmassage.png", category: "Wellness" },
      { url: "/beauty/klangschale.jpg", category: "Wellness" },
      { url: "/beauty/maniküre%20neu.png", category: "Pflege" },
      { url: "/beauty/maniküre%203.png", category: "Pflege" },
      { url: "/beauty/pedicure.webp", category: "Pflege" },
      { url: "/beauty/acne-after.png", category: "Ergebnisse" },
      { url: "/beauty/contact.png", category: "Studio" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Elegant rose/pink from logo
  // ============================================
  colors: {
    primary: "#C4A484", // Elegant beige/gold
    primaryRgb: "196, 164, 132",
    dark: "#2D2D2D",
    light: "#FAF8F6",
    lightAlt: "#F5F0EB",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Hygiene & Qualität",
    description: "Ihre Gesundheit und Ihr Wohlbefinden stehen bei uns an erster Stelle. Alle Behandlungen werden unter strengsten Hygienestandards durchgeführt.",
    features: [
      {
        icon: "shield",
        title: "Sterile Instrumente",
        description: "Alle wiederverwendbaren Instrumente werden nach jeder Behandlung fachgerecht sterilisiert.",
      },
      {
        icon: "check",
        title: "Einweg-Material",
        description: "Verbrauchsmaterialien werden ausschließlich einmal verwendet und hygienisch entsorgt.",
      },
      {
        icon: "award",
        title: "Premium Produkte",
        description: "Wir arbeiten nur mit hochwertigen, dermatologisch getesteten Produkten.",
      },
      {
        icon: "star",
        title: "Ausgebildetes Team",
        description: "Professionelle Kosmetikerinnen mit regelmäßigen Fortbildungen garantieren beste Ergebnisse.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "/logo.png",
    alt: "cosmeta24 Kosmetikstudio Heilbronn Logo",
  },
};

export type Config = typeof config;
