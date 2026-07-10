// Site data / mock content for Rivelle Boutique Stays

export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ROOMS", href: "#rooms" },
  { label: "AMENITIES", href: "#amenities" },
  { label: "GALLERY", href: "#gallery" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

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

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1759681742529-178f7d8b4fb8?crop=entropy&cs=srgb&fm=jpg&w=1920&q=80",
  about: "https://images.unsplash.com/photo-1591946522651-90fbace43004?auto=format&fit=crop&w=1200&q=80",
  roomDeluxe: "https://images.unsplash.com/photo-1618514272627-962edf3e55a3?auto=format&fit=crop&w=1200&q=80",
  roomSuper: "https://images.unsplash.com/photo-1667403206415-0e51a54727d4?auto=format&fit=crop&w=1200&q=80",
  roomSuite: "https://images.unsplash.com/photo-1697801000265-1f9be78d83cc?auto=format&fit=crop&w=1200&q=80",
  gallery1: "https://images.unsplash.com/photo-1697900172571-e8117da4967b?auto=format&fit=crop&w=1200&q=80",
  gallery2: "https://images.unsplash.com/photo-1758467745943-e80e6236d200?auto=format&fit=crop&w=1200&q=80",
  gallery3: "https://images.unsplash.com/photo-1605601922759-e1eb9119517e?auto=format&fit=crop&w=1200&q=80",
  gallery4: "https://images.unsplash.com/photo-1543146678-beb984f8a945?auto=format&fit=crop&w=1200&q=80",
};

export const ROOMS = [
  {
    id: "deluxe",
    tag: "WARM \u00b7 COMFORTABLE",
    name: "Deluxe Room",
    image: IMAGES.roomDeluxe,
    description:
      "Our signature room \u2014 hand-block textiles, a plush bed and just enough craft detail to feel far from ordinary.",
    size: "180 sq ft",
    bed: "King / Twin",
    occupancy: "2 guests",
    features: [
      "Air conditioning",
      "Flat-screen TV",
      "High-speed WiFi",
      "Attached bathroom",
      "Work desk",
      "Tea / coffee maker",
      "Wardrobe",
      "Daily housekeeping",
    ],
    price: "\u20b92,500 / night",
  },
  {
    id: "super",
    tag: "ELEVATED \u00b7 PREMIUM",
    name: "Super Deluxe Room",
    image: IMAGES.roomSuper,
    description:
      "A more spacious sanctuary with a seating nook, a curated view and a few extra thoughtful touches for longer stays.",
    size: "240 sq ft",
    bed: "King",
    occupancy: "2 guests + 1 extra",
    features: [
      "Everything in Deluxe",
      "Mini-fridge",
      "Seating area",
      "Premium toiletries",
      "Better courtyard view",
      "In-room safe",
    ],
    price: "\u20b93,500 / night",
  },
  {
    id: "suite",
    tag: "SIGNATURE \u00b7 SUITE",
    name: "The Suite",
    image: IMAGES.roomSuite,
    description:
      "Our most spacious retreat \u2014 a separate living area, the property's finest view and a slow, cinematic sense of arrival.",
    size: "320 sq ft",
    bed: "King, four-poster",
    occupancy: "2 guests + 2 extra",
    features: [
      "Everything in Super Deluxe",
      "Separate living area",
      "Bathtub / premium bath",
      "Private balcony",
      "Welcome amenities",
      "Best view in the house",
    ],
    price: "\u20b95,000 / night",
  },
];

export const AMENITIES = [
  { name: "24\u00d77 Front Desk", note: "ALWAYS ON DUTY", icon: "Clock" },
  { name: "High-speed WiFi", note: "COMPLIMENTARY IN ALL ROOMS", icon: "Wifi" },
  { name: "In-house Dining", note: "BREAKFAST \u00b7 \u00c0 LA CARTE", icon: "UtensilsCrossed" },
  { name: "Daily Housekeeping", note: "TURN-DOWN ON REQUEST", icon: "Sparkles" },
  { name: "On-site Parking", note: "COMPLIMENTARY", icon: "Car" },
  { name: "Airport Pickup", note: "ON REQUEST", icon: "Plane" },
  { name: "Power Backup", note: "24\u00d77", icon: "BatteryCharging" },
  { name: "Secure Stay", note: "CCTV COMMON AREAS", icon: "ShieldCheck" },
];

export const GALLERY = [
  { image: IMAGES.gallery1, caption: "CANDLE-LIT DINING COURTYARD" },
  { image: IMAGES.gallery2, caption: "ARCHED JHAROKHA WINDOW WITH SAFFRON DRAPE" },
  { image: IMAGES.roomDeluxe, caption: "DELUXE ROOM DETAIL" },
  { image: IMAGES.gallery3, caption: "ROOFTOP AT DUSK" },
  { image: IMAGES.gallery4, caption: "HAND-BLOCK TEXTILES AND BRASS CUP" },
  { image: IMAGES.roomSuite, caption: "SUITE BEDROOM WITH FRESCO CEILING" },
];

export const LOCATION_STATS = [
  { label: "Jaipur Airport", value: "12 km" },
  { label: "Railway Station", value: "1.5 km" },
  { label: "City Palace", value: "5 km" },
  { label: "Hawa Mahal", value: "5.5 km" },
];
