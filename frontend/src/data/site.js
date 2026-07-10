// Site data — Rivelle Boutique Stays
// Property photos hosted on Google Drive (via lh3.googleusercontent.com)

const local = (name) => `/photos/${name}.jpg`;

// Property image collections \u2014 downloaded from Drive, served locally
export const PHOTOS = {
  room101: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => local(`room101_${n}`)),
  room102: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => local(`room102_${n}`)),
  room103: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => local(`room103_${n}`)),
  hall1: [1, 2, 3, 4, 5].map((n) => local(`hall1_${n}`)),
  hall2: [1, 2, 3, 4, 5].map((n) => local(`hall2_${n}`)),
  restaurant: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => local(`rest_${n}`)),
};

export const PROPERTY = {
  name: "Rivelle Boutique Stays",
  tagline: "Stay Beautifully",
  address: "15 A, Ajmer Rd, Shiv Marg, Gopalbari",
  city: "Jaipur, Rajasthan 302001, India",
  phone: "+91 86195 53323",
  phoneRaw: "+918619553323",
  email: "hello@rivellestays.com",
  website: "www.rivellestays.com",
  rating: "5.0",
  reviews: 9,
  hostedBy: "Pragya",
  whatsapp: "918619553323",
};

export const NAV_LINKS = [
  { label: "HOME", to: "/" },
  { label: "ROOMS", to: "/rooms" },
  { label: "AMENITIES", to: "/amenities" },
  { label: "GALLERY", to: "/gallery" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

// Hero: the actual Rivelle property front (dusk shot)
export const HERO_IMAGE = "/photos/property_front.png";

export const ROOMS = [
  {
    slug: "deluxe",
    number: "101",
    tag: "WARM \u00b7 COMFORTABLE",
    name: "Deluxe Room",
    photos: PHOTOS.room101,
    hero: PHOTOS.room101[0],
    shortDesc:
      "Our signature room \u2014 hand-block textiles, a plush bed and just enough craft detail to feel far from ordinary.",
    longDesc:
      "Our Deluxe Room is where quiet luxury begins. Draped in hand-block prints and warm cream tones, this room features a plush king bed, a private sit-out with tea service, and thoughtful touches like a curated welcome tray. It's the perfect first taste of gerua warmth \u2014 intimate, honest, and full of Jaipur soul.",
    size: "180 sq ft",
    bed: "King / Twin",
    occupancy: "2 guests",
    priceLabel: "On Request",
    priceHint: "CONTACT FOR TARIFF",
    features: [
      "Air conditioning",
      "Flat-screen TV with Netflix",
      "High-speed WiFi",
      "Attached bathroom with hot water",
      "Work desk",
      "Tea / coffee maker",
      "Wardrobe & luggage rack",
      "Daily housekeeping",
      "Room service (limited hours)",
    ],
  },
  {
    slug: "super-deluxe",
    number: "102",
    tag: "ELEVATED \u00b7 PREMIUM",
    name: "Super Deluxe Room",
    photos: PHOTOS.room102,
    hero: PHOTOS.room102[0],
    shortDesc:
      "A more spacious sanctuary with a seating nook, a curated view and a few extra thoughtful touches for longer stays.",
    longDesc:
      "Wrapped in terracotta hand-block panels and warm lamp glow, our Super Deluxe Room is a slower kind of luxury. A carved wooden bed, a private seating corner, framed miniature art and generous natural light make this room ideal for couples, longer stays, or anyone who wants a little more room to unwind.",
    size: "240 sq ft",
    bed: "King",
    occupancy: "2 guests + 1 extra",
    priceLabel: "On Request",
    priceHint: "CONTACT FOR TARIFF",
    features: [
      "Everything in Deluxe",
      "Mini-fridge",
      "Private seating area",
      "Premium bath toiletries",
      "Better courtyard view",
      "In-room safe",
      "Bathrobe & slippers",
      "Daily fresh water",
    ],
  },
  {
    slug: "suite",
    number: "103",
    tag: "SIGNATURE \u00b7 SUITE",
    name: "The Suite",
    photos: PHOTOS.room103,
    hero: PHOTOS.room103[0],
    shortDesc:
      "Our most spacious retreat \u2014 a separate living area, the property's finest view and a slow, cinematic sense of arrival.",
    longDesc:
      "The Suite is our showpiece. A hand-painted feature wall, a four-poster carved bed, a separate living area and the property's best natural light. Designed for slow mornings, quiet celebrations and long stays that deserve to feel like an occasion.",
    size: "320 sq ft",
    bed: "King, four-poster",
    occupancy: "2 guests + 2 extra",
    priceLabel: "On Request",
    priceHint: "CONTACT FOR TARIFF",
    features: [
      "Everything in Super Deluxe",
      "Separate living area",
      "Bathtub / premium bath",
      "Private balcony access",
      "Welcome amenities",
      "Best view in the house",
      "Curated art & artefacts",
      "Priority housekeeping",
    ],
  },
];

export const AMENITIES = [
  { name: "24\u00d77 Front Desk", note: "ALWAYS ON DUTY", icon: "Clock", desc: "Our team is available around the clock \u2014 for late arrivals, early check-outs, and everything in between." },
  { name: "High-speed WiFi", note: "COMPLIMENTARY IN ALL ROOMS", icon: "Wifi", desc: "Fast, reliable WiFi in every room and common area \u2014 perfect for working, streaming or staying in touch." },
  { name: "In-house Dining", note: "BREAKFAST \u00b7 \u00c0 LA CARTE", icon: "UtensilsCrossed", desc: "Home-style Indian breakfasts and an \u00e0 la carte menu of comfort favourites, served in our dining hall." },
  { name: "Daily Housekeeping", note: "TURN-DOWN ON REQUEST", icon: "Sparkles", desc: "Rooms refreshed daily with linen changes on request. Turn-down service available for a nightly ritual." },
  { name: "On-site Parking", note: "COMPLIMENTARY", icon: "Car", desc: "Secure on-site parking for guests \u2014 free of charge for the length of your stay." },
  { name: "Airport Pickup", note: "ON REQUEST", icon: "Plane", desc: "Chauffeured pickup from Jaipur International Airport \u2014 just let us know your flight details in advance." },
  { name: "Power Backup", note: "24\u00d77", icon: "BatteryCharging", desc: "Uninterrupted power so your stay never skips a beat, even during grid outages." },
  { name: "Secure Stay", note: "CCTV COMMON AREAS", icon: "ShieldCheck", desc: "CCTV surveillance in all common areas and secure locks on every room for your peace of mind." },
];

export const LOCATION_STATS = [
  { label: "Jaipur Airport", value: "12 km" },
  { label: "Railway Station", value: "1.5 km" },
  { label: "City Palace", value: "5 km" },
  { label: "Hawa Mahal", value: "5.5 km" },
];

export const GALLERY_ALL = [
  ...PHOTOS.room101.slice(0, 4).map((src) => ({ src, caption: "DELUXE ROOM" })),
  ...PHOTOS.room102.slice(0, 4).map((src) => ({ src, caption: "SUPER DELUXE ROOM" })),
  ...PHOTOS.room103.slice(0, 4).map((src) => ({ src, caption: "THE SUITE" })),
  ...PHOTOS.hall1.slice(0, 3).map((src) => ({ src, caption: "HERITAGE LOUNGE" })),
  ...PHOTOS.hall2.slice(0, 3).map((src) => ({ src, caption: "COMMON LOUNGE" })),
  ...PHOTOS.restaurant.slice(0, 4).map((src) => ({ src, caption: "DINING HALL" })),
];
