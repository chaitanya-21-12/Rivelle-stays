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

// Hero: wide landscape shot — no stretching on desktop
export const HERO_IMAGE = "/photos/hero_wide.jpg";

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
    priceLabel: "₹3,500 / night",
    priceHint: "PER NIGHT · TAXES EXTRA",
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
    priceLabel: "₹4,500 / night",
    priceHint: "PER NIGHT · TAXES EXTRA",
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
    priceLabel: "₹6,500 / night",
    priceHint: "PER NIGHT · TAXES EXTRA",
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
  { name: "24×7 Front Desk", note: "ALWAYS ON DUTY", icon: "Clock", desc: "Our team is available around the clock — for late arrivals, early check-outs, and everything in between." },
  { name: "In-house Café & Dining", note: "ALL-DAY MENU", icon: "UtensilsCrossed", desc: "Indian and international cuisine served all day — from home-style breakfasts to pizzas, artisan coffee and more." },
  { name: "Specialty Coffee", note: "BARISTA-CRAFTED", icon: "Coffee", desc: "Espresso, cappuccino, cold brews and seasonal specials — made with premium beans, served with care." },
  { name: "Premium Bedding", note: "FOR A RESTFUL NIGHT", icon: "BedDouble", desc: "High-quality mattresses, fresh linen and soft pillows — everything in place for a deep, uninterrupted sleep." },
  { name: "En-Suite Bathrooms", note: "HOT & COLD WATER", icon: "ShowerHead", desc: "Clean, modern bathrooms with premium fittings, fresh towels and complimentary toiletries in every room." },
  { name: "Secure Stay", note: "CCTV · SECURE ACCESS", icon: "ShieldCheck", desc: "CCTV in all common areas, secure room locks and attentive staff — your safety is always our priority." },
  { name: "High-speed WiFi", note: "COMPLIMENTARY THROUGHOUT", icon: "Wifi", desc: "Fast, reliable WiFi in every room and common area — perfect for working, streaming or staying in touch." },
  { name: "Air Conditioning", note: "ALL ROOMS", icon: "Thermometer", desc: "Powerful air conditioning in every room, keeping you comfortable through Jaipur's warm seasons." },
  { name: "Smart TV", note: "STREAMING READY", icon: "Tv", desc: "Flat-screen Smart TVs with access to your favourite movies, shows and streaming services." },
  { name: "Daily Housekeeping", note: "TURN-DOWN ON REQUEST", icon: "Sparkles", desc: "Rooms refreshed every day. Linen changes and turn-down service available on request." },
  { name: "Tea & Coffee Station", note: "IN-ROOM", icon: "Coffee", desc: "An electric kettle with complimentary tea, coffee and refreshments in every room, whenever you want them." },
  { name: "Premium Toiletries", note: "COMPLIMENTARY", icon: "Droplets", desc: "Shampoo, body wash, soap, dental kit, shower cap and essentials — provided and replenished daily." },
  { name: "Complimentary Water", note: "FRESH DAILY", icon: "Droplets", desc: "Fresh bottled drinking water in every room, restocked as needed throughout your stay." },
  { name: "Wardrobe & Storage", note: "SPACIOUS", icon: "Package", desc: "Generously sized wardrobes with hangers and shelving — ample room for longer stays and larger bags." },
  { name: "Elevator Access", note: "ALL FLOORS", icon: "ArrowUpDown", desc: "A modern lift connects all floors — convenient for guests of every age and for handling luggage with ease." },
  { name: "Power Backup", note: "24×7", icon: "BatteryCharging", desc: "Uninterrupted power throughout — your stay never skips a beat, even during grid outages." },
  { name: "On-site Parking", note: "COMPLIMENTARY", icon: "Car", desc: "Secure, free parking on-site for the full length of your stay — no hidden charges." },
  { name: "Prime Location", note: "CITY CENTRE", icon: "MapPin", desc: "In the heart of Jaipur — top attractions, markets, restaurants and transport hubs all within easy reach." },
  { name: "Work-friendly Spaces", note: "RELIABLE & QUIET", icon: "Wifi", desc: "Comfortable seating, fast WiFi and a peaceful atmosphere — everything a remote worker or business traveller needs." },
  { name: "Airport Transfers", note: "ON REQUEST", icon: "Plane", desc: "Chauffeured pickup and drop-off from Jaipur Airport — arranged in advance, so you arrive without a worry." },
  { name: "Taxi & Sightseeing", note: "ON REQUEST", icon: "MapPin", desc: "We help arrange reliable local taxis, city tours and transport for exploring Jaipur at your own pace." },
  { name: "Luggage Storage", note: "BEFORE & AFTER CHECKOUT", icon: "Package", desc: "Store your bags safely before check-in or after check-out — so the city is yours to explore freely." },
  { name: "Laundry Service", note: "ON REQUEST", icon: "Sparkles", desc: "Laundry and ironing available on request — particularly handy for business travellers and longer stays." },
  { name: "Hair Dryer", note: "ON REQUEST", icon: "Wind", desc: "Available in selected rooms or on request — a small convenience that makes a noticeable difference." },
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
