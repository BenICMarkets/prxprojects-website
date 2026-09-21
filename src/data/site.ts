// Single source of truth for site content. Edit here; every page reads from it.

export const site = {
  name: "PRXProjects",
  url: "https://prxprojects.co.za",
  tagline: "Affordability meets durability in every structure we create",
  headline: "Architecture Reimagined",
  subheadline: "Crafting elegance in architecture. You dream it, we design it.",
  description:
    "PRXProjects designs and builds homes, kitchens and interiors across Gauteng, South Africa. Reasonable prices, exclusive design and a professional team.",
  phone: "+27825690850",
  phoneDisplay: "+27 82 569 0850",
  email: "admin@plexirenovations.co.za",
  areaServed: "Gauteng, South Africa",
  facebook: "https://www.facebook.com/100091964203704/",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "kitchen-design-cabinetry",
    title: "Kitchen Design & Cabinetry",
    text: "Your kitchen is an expression of who you are, and its design should match your lifestyle. Whether you have traditional tastes or desire a modern feel, we design your dream kitchen to suit any purpose.",
  },
  {
    slug: "vanity-counter-tops",
    title: "Vanity Tops & Counter Tops",
    text: "Custom vanity tops and counter tops, measured, made and fitted to suit your space and finish.",
  },
  {
    slug: "construction-plan-houses",
    title: "Construction Plan Houses",
    text: "House plans and construction from the first sketch to the finished build, with a design process you can see and shape.",
  },
  {
    slug: "site-evaluation",
    title: "Site Evaluation",
    text: "A proper look at your site before anything is drawn or built, so plans fit the land and the budget.",
  },
  {
    slug: "field-study",
    title: "Field Study",
    text: "On-the-ground study of the property and its surroundings to inform design decisions early.",
  },
  {
    slug: "property-allocation",
    title: "Property Allocation",
    text: "Guidance on how to allocate and use your property to get the most from the space you have.",
  },
  {
    slug: "land-purchase-assistance",
    title: "Land Purchase Assistance",
    text: "Support when you are buying land, so you know what you can build before you commit.",
  },
];

export const process = [
  {
    title: "We visit you at home",
    text: "We meet on site to understand your space, your lifestyle and your budget.",
  },
  {
    title: "Preliminary computer design",
    text: "You see your project laid out in a first computer design before anything is finalised.",
  },
  {
    title: "The detailed design process",
    text: "We refine every detail with you, then carry the design through to construction and installation.",
  },
];

export const features = [
  {
    title: "Reasonable prices",
    text: "Affordability without cutting corners on durability.",
  },
  {
    title: "Exclusive design",
    text: "Designs made around you, not pulled off a shelf.",
  },
  {
    title: "Professional team",
    text: "A safety-conscious team from design through to installation.",
  },
];

// PLACEHOLDER projects. Replace with real work: put photos in /public/images
// and set `image` to e.g. "/images/kitchen-midrand.jpg".
export const projects: {
  title: string;
  category: string;
  description: string;
  image: string | null;
  alt: string;
}[] = [
  {
    title: "Project one",
    category: "Kitchens",
    description: "Replace with a real completed project.",
    image: null,
    alt: "Placeholder for a completed kitchen project",
  },
  {
    title: "Project two",
    category: "New builds",
    description: "Replace with a real completed project.",
    image: null,
    alt: "Placeholder for a completed new build",
  },
  {
    title: "Project three",
    category: "Interiors",
    description: "Replace with a real completed project.",
    image: null,
    alt: "Placeholder for a completed interior project",
  },
  {
    title: "Project four",
    category: "Counter tops",
    description: "Replace with a real completed project.",
    image: null,
    alt: "Placeholder for a completed counter top project",
  },
  {
    title: "Project five",
    category: "Extensions",
    description: "Replace with a real completed project.",
    image: null,
    alt: "Placeholder for a completed extension",
  },
  {
    title: "Project six",
    category: "Bathrooms",
    description: "Replace with a real completed project.",
    image: null,
    alt: "Placeholder for a completed bathroom project",
  },
];
