// Site data — Rivelle Boutique Stays

// Property image collections — organized by room number
export const PHOTOS = {
  // Super Deluxe rooms (101, 102)
  superDeluxe101: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((n) => `/photos/superdeluxe_101/sd101_${n}.jpg`),
  superDeluxe102: [1,2,3,4,5,6,7,8,9,10,11].map((n) => `/photos/superdeluxe_102/sd102_${n}.jpg`),

  // Deluxe rooms (103, 104, 202, 203)
  deluxe103: [1,2,3,4,5,6,7,8,9,10,11].map((n) => `/photos/deluxe_103/d103_${n}.jpg`),
  deluxe104: [1,2,3,4,5,6,7,8,9,10].map((n) => `/photos/deluxe_104/d104_${n}.jpg`),
  // 202 & 203 photos — pending Drive access
  deluxe202: [1,2,3,4,5,6,7,8,9,10].map((n) => `/photos/deluxe_103/d103_${n}.jpg`),
  deluxe203: [1,2,3,4,5,6,7,8,9,10].map((n) => `/photos/deluxe_104/d104_${n}.jpg`),

  // Suite (201)
  suite201: [1,2,3,4,5,6,7].map((n) => `/photos/suite_201/s201_${n}.jpg`),

  // Common areas
  hall: [1,2,3,4,5].map((n) => `/photos/hall/hall_${n}.jpg`),
};

export const PROPERTY = {
  name: "Rivelle Boutique Stays",
  tagline: "Stay Beautifully",
  address: "15 A, Ajmer Rd, Shiv Marg, Gopalbari",
  city: "Jaipur, Rajasthan 302001, India",
  phone: "+91 86195 53323",
  phoneRaw: "+918619553323",
  email: "info@rivellestays.com",
  website: "www.rivellestays.com",
  rating: "5.0",
  reviews: 9,
  hostedBy: "Pragya",
  whatsapp: "918619553323",
  instagram: "https://www.instagram.com/rivellestays/",
  tripAdvisor: "https://www.tripadvisor.in/Hotel_Review-g304555-d34516530-Reviews-Rivelle_Boutique_Stays_Stay_Beautifully-Jaipur_Jaipur_District_Rajasthan.html",
  facebook: "#",
};

export const NAV_LINKS = [
  { label: "HOME", to: "/" },
  { label: "OUR STORY", to: "/about" },
  { label: "ROOMS", to: "/rooms" },
  { label: "AMENITIES", to: "/amenities" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CONTACT", to: "/contact" },
];

// Hero: wide landscape shot — no stretching on desktop
export const HERO_IMAGE = "/photos/hero_wide.jpg";

export const ROOMS = [
  {
    slug: "deluxe",
    numbers: ["103", "104", "202", "203"],
    tag: "WARM · COMFORTABLE",
    name: "Deluxe Room",
    photos: [...PHOTOS.deluxe103, ...PHOTOS.deluxe104].slice(0, 12),
    hero: PHOTOS.deluxe103[0],
    shortDesc:
      "A thoughtfully designed retreat where comfort meets contemporary elegance — everything you need for a relaxing and memorable stay.",
    longDesc:
      "A thoughtfully designed retreat where comfort meets contemporary elegance. Featuring warm interiors, a plush king bed, and modern amenities, our Deluxe Room offers everything you need for a relaxing and memorable stay.",
    size: "160 sq ft",
    bed: "King Bed",
    occupancy: "2 Guests + 1 Extra",
    priceLabel: "₹3,500 / night",
    priceHint: "PER NIGHT · TAXES EXTRA",
    features: [
      "Complimentary High-Speed Wi-Fi",
      "Smart TV",
      "Tea & Coffee Station",
      "Premium Bath Amenities",
      "Hairdryer",
    ],
  },
  {
    slug: "super-deluxe",
    numbers: ["101", "102"],
    tag: "ELEVATED · PREMIUM",
    name: "Super Deluxe Room with Balcony",
    photos: [...PHOTOS.superDeluxe101, ...PHOTOS.superDeluxe102].slice(0, 12),
    hero: PHOTOS.superDeluxe101[0],
    shortDesc:
      "Elevate your stay with added space and a private balcony — perfect for guests who appreciate a little extra room to relax.",
    longDesc:
      "Elevate your stay with added space and a private balcony. Designed with refined interiors and thoughtful comforts, the Super Deluxe Room is perfect for guests who appreciate a little extra room to relax and unwind.",
    size: "190 sq ft",
    bed: "King Bed",
    occupancy: "2 Guests + 1 Extra",
    priceLabel: "₹4,500 / night",
    priceHint: "PER NIGHT · TAXES EXTRA",
    features: [
      "Private Balcony",
      "Premium Bath Amenities",
      "Bathrobe & Slippers",
      "Complimentary High-Speed Wi-Fi",
      "Smart TV",
      "Tea & Coffee Station",
    ],
  },
  {
    slug: "suite",
    numbers: ["201"],
    tag: "SIGNATURE · SUITE",
    name: "Suite Room",
    photos: PHOTOS.suite201,
    hero: PHOTOS.suite201[0],
    shortDesc:
      "Our signature accommodation — a spacious living area, elegant powder room, and beautifully curated interiors for an indulgent stay.",
    longDesc:
      "Our signature accommodation, thoughtfully crafted for those seeking a more indulgent stay. Featuring a spacious living area, an elegant powder room, and beautifully curated interiors, the Suite offers the perfect balance of comfort, privacy, and understated luxury.",
    size: "380 sq ft",
    bed: "King Bed",
    occupancy: "2 Guests + 2 Extra",
    priceLabel: "₹6,500 / night",
    priceHint: "PER NIGHT · TAXES EXTRA",
    features: [
      "Separate Living Area",
      "Elegant Powder Room",
      "Premium Bath Amenities",
      "Bathrobe & Slippers",
      "Complimentary High-Speed Wi-Fi",
      "Smart TV",
      "Tea & Coffee Station",
    ],
  },
];


export const AMENITIES = [
  { name: "24×7 Front Desk", note: "ALWAYS ON DUTY", icon: "Clock", desc: "Our team is available around the clock — for late arrivals, early check-outs, and everything in between." },
  { name: "In-house Café & Dining", note: "ALL-DAY MENU", icon: "UtensilsCrossed", desc: "Indian and international cuisine served all day — from home-style breakfasts to pizzas, artisan coffee and more." },
  { name: "Premium Bedding", note: "HOTEL-GRADE LINEN", icon: "BedDouble", desc: "High-thread-count cotton sheets, plush pillows and a duvet that makes mornings difficult to leave." },
  { name: "En-Suite Bathrooms", note: "PRIVATE & WELL-FITTED", icon: "Bath", desc: "Every room has its own private bathroom with 24-hour hot water, rain shower and quality fixtures." },
  { name: "Secure Stay", note: "YOUR SAFETY, FIRST", icon: "ShieldCheck", desc: "CCTV throughout, secure key-card access and a team trained in guest safety protocols." },
  { name: "High-speed WiFi", note: "COMPLIMENTARY", icon: "Wifi", desc: "Fast, reliable internet available throughout the property — strong signal in every room and common area." },
  { name: "Air Conditioning", note: "IN EVERY ROOM", icon: "Wind", desc: "Individual climate control in all rooms — so Jaipur's summers and winters never get in the way of a good night's rest." },
  { name: "Smart TV", note: "WITH STREAMING", icon: "Tv", desc: "Flat-screen Smart TVs with access to your favourite streaming apps — Netflix, Prime and more." },
  { name: "Daily Housekeeping", note: "FRESH EVERY DAY", icon: "Sparkles", desc: "Your room is serviced each morning — fresh towels, made beds and a clean space to return to." },
  { name: "Tea & Coffee Station", note: "IN-ROOM", icon: "Coffee", desc: "An in-room kettle with a curated selection of teas, instant coffee and condiments, refreshed daily." },
  { name: "Premium Toiletries", note: "QUALITY ESSENTIALS", icon: "Droplets", desc: "Thoughtfully selected bath products — shampoo, conditioner, body wash and moisturiser — in every bathroom." },
  { name: "Complimentary Water", note: "ALWAYS STOCKED", icon: "GlassWater", desc: "Chilled bottled water replenished daily in your room — because staying hydrated should never require a trip to the lobby." },
  { name: "Wardrobe & Storage", note: "AMPLE SPACE", icon: "Package", desc: "A full wardrobe with hangers, shelving and a luggage rack — so unpacking actually feels worth it." },
  { name: "Elevator Access", note: "ALL FLOORS", icon: "ArrowUpDown", desc: "A lift connects all floors — for guests with heavy luggage or anyone who'd simply rather not take the stairs." },
  { name: "Power Backup", note: "UNINTERRUPTED", icon: "Zap", desc: "Inverter backup ensures uninterrupted power to all rooms and common areas — no surprises during peak Jaipur summers." },
  { name: "On-site Parking", note: "COMPLIMENTARY", icon: "Car", desc: "Dedicated parking available on the property for guests arriving by personal vehicle or rental." },
  { name: "Prime Location", note: "CITY CENTRE ADJACENT", icon: "MapPin", desc: "Situated minutes from Jaipur's major landmarks — a practical base for sightseeing, dining and business." },
  { name: "Work-friendly Spaces", note: "DESK IN EVERY ROOM", icon: "Laptop", desc: "A dedicated work desk and reliable WiFi in every room — designed for the guest who needs to stay productive." },
  { name: "Airport Transfers", note: "ON REQUEST", icon: "Plane", desc: "Coordinated airport pick-up and drop-off on request — ask our team at least a few hours in advance." },
  { name: "Taxi & Sightseeing", note: "ON REQUEST", icon: "Navigation", desc: "We'll arrange trusted local drivers for day trips, city tours or intercity travel — just let us know." },
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
  ...PHOTOS.superDeluxe101.slice(0, 4).map((src) => ({ src, caption: "SUPER DELUXE ROOM" })),
  ...PHOTOS.superDeluxe102.slice(0, 4).map((src) => ({ src, caption: "SUPER DELUXE ROOM" })),
  ...PHOTOS.deluxe103.slice(0, 4).map((src) => ({ src, caption: "DELUXE ROOM" })),
  ...PHOTOS.deluxe104.slice(0, 4).map((src) => ({ src, caption: "DELUXE ROOM" })),
  ...PHOTOS.suite201.slice(0, 4).map((src) => ({ src, caption: "THE SUITE ROOM" })),
  ...PHOTOS.hall.slice(0, 3).map((src) => ({ src, caption: "COMMON AREAS" })),
  ...PHOTOS.hall.slice(3, 5).map((src) => ({ src, caption: "IN-HOUSE CAFÉ" })),
];
