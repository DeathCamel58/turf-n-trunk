export const BUSINESS_NAME = "Turf n Trunk";
export const SITE_URL = "https://turf-n-trunk.com";
export const GTM_ID = "";
export const RECAPTCHA_SITE_KEY = "6LcTE5ssAAAAAAm2bWDwfT-8n2JOglRxfrDe3Ul7";
export const PHONE = "(770) 954-6057";
export const PHONE_HREF = "tel:+17709546057";
export const EMAIL = "info@turf-n-trunk.com";
export const ADDRESS = {
  street: "123 Main Street",
  city: "Peachtree City",
  state: "GA",
  zip: "30269",
};

export const SERVICE_AREAS = [
  "Peachtree City",
  "Fayetteville",
  "Senoia",
  "Newnan",
  "Tyrone",
] as const;

export const CITY_SLUGS: Record<string, string> = {
  "peachtree-city": "Peachtree City",
  fayetteville: "Fayetteville",
  senoia: "Senoia",
  newnan: "Newnan",
  tyrone: "Tyrone",
};

export const BUSINESS_HOURS = {
  weekdays: "Mon–Fri: 7:00 AM – 6:00 PM",
  saturday: "Sat: 8:00 AM – 2:00 PM",
  sunday: "Sun: Closed",
};

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    slug: "lawn-care",
    title: "Lawn Care & Maintenance",
    shortDescription:
      "Keep your lawn lush and healthy with our regular mowing, fertilization, and weed control programs.",
    icon: "leaf",
  },
  {
    slug: "landscape-design",
    title: "Landscape Design & Installation",
    shortDescription:
      "Transform your outdoor space with custom landscape designs tailored to your property and lifestyle.",
    icon: "pencil",
  },
  {
    slug: "tree-shrub-care",
    title: "Tree & Shrub Care",
    shortDescription:
      "Protect and maintain the health and appearance of your trees and shrubs with expert care.",
    icon: "tree",
  },
  {
    slug: "mulching",
    title: "Mulching",
    shortDescription:
      "Enhance your garden beds with fresh mulch that suppresses weeds, retains moisture, and looks great.",
    icon: "layers",
  },
  {
    slug: "seasonal-cleanups",
    title: "Seasonal Cleanups",
    shortDescription:
      "Prepare your yard for each season with thorough spring and fall cleanup services.",
    icon: "calendar",
  },
  {
    slug: "hardscaping",
    title: "Hardscaping",
    shortDescription:
      "Add structure and functionality with patios, walkways, retaining walls, and outdoor living spaces.",
    icon: "brick",
  },
  {
    slug: "irrigation",
    title: "Irrigation Systems",
    shortDescription:
      "Install and maintain efficient irrigation systems to keep your landscape watered without waste.",
    icon: "droplet",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Turf n Trunk completely transformed our backyard. The landscape design is stunning, and our neighbors constantly ask who did the work!",
    name: "Sarah M.",
    city: "Peachtree City",
  },
  {
    quote:
      "Reliable, professional, and affordable. Our lawn has never looked better since we started their maintenance program.",
    name: "James R.",
    city: "Fayetteville",
  },
  {
    quote:
      "The hardscaping team built an incredible patio for us. From design to completion, the process was smooth and the results exceeded our expectations.",
    name: "Linda K.",
    city: "Senoia",
  },
];
