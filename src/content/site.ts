// Shared page content: homepage FAQs, process, reasons, and content collections
// that stay empty until real material is supplied.

export const process = [
  { title: "Site visit", text: "We come to you, look at the space and listen to what you want done." },
  { title: "Scope and itemised quote", text: "You receive a written scope and an itemised quote, so you can see what is included." },
  { title: "Schedule and build", text: "We agree a schedule and coordinate the trades in the right order while you stay informed." },
  { title: "Final inspection and handover", text: "We check the finished work with you, fix any snags and hand the project over." },
];

export const reasons = [
  {
    title: "Hands-on project management",
    text: "Someone from our team is responsible for your project from start to finish and is on site to see it through.",
  },
  {
    title: "Skilled trade coordination",
    text: "Plumbers, electricians, tilers, painters and carpenters are lined up in the right order, so work does not stall.",
  },
  {
    title: "Clear scopes and communication",
    text: "You get an itemised quote and straight answers about what is included and what could change the price.",
  },
];

export const trustStrip = [
  "Pretoria-based",
  "Residential and commercial",
  "Itemised quotes",
  "One point of contact",
];

// Confirmed by Ben. Shown as the bold stat row under the homepage hero.
export const stats = [
  { value: "300+", label: "Completed Projects" },
  { value: "300+", label: "Satisfied Clients" },
  { value: "13+", label: "Years of Experience" },
  { value: "100%", label: "Safety Compliance" },
];

export const homeFaqs = [
  {
    q: "How do I request a renovation quote?",
    a: "Fill in the short quote form, or call or WhatsApp us. We arrange a site visit, then send an itemised quote.",
  },
  {
    q: "Which areas do you cover?",
    a: "We work in Pretoria East, Centurion and surrounding areas. If you are nearby but unsure, send us your suburb and we will confirm.",
  },
  {
    q: "Do you manage all the trades?",
    a: "Yes. We coordinate the plumbers, electricians, tilers, painters, carpenters and other trades your project needs.",
  },
  {
    q: "How long does a bathroom renovation take?",
    a: "It depends on the size, whether the layout changes and how quickly products are available. We give you a schedule with the quote.",
  },
  {
    q: "Can I supply my own tiles, sanitaryware or finishes?",
    a: "Often, yes. Tell us at the quote stage so we can check quantities, lead times and that the products suit the job.",
  },
];

export const projectTypes = [
  "Full home renovation",
  "Bathroom",
  "Kitchen",
  "Building work or extension",
  "Waterproofing",
  "Painting",
  "Commercial or office",
  "Not sure yet",
];

// Real, verified content only. Empty arrays mean the related sections and nav links
// are hidden and the pages are left out of the sitemap.
//
// Full project case studies (with confirmed area, completion date, duration and
// photo rights) go in `projects` below and get their own /projects/[slug] page.
// Those details are not yet confirmed for anything, so it stays empty.
export type Project = {
  slug: string;
  title: string;
  area: string;
  type: string;
  summary: string;
};
export const projects: Project[] = [];

// Real work photos with no case-study detail confirmed yet (no address, completion
// date or duration on file) — shown as a simple photo gallery, not linked to
// individual project pages. Swap in real case studies above as details are confirmed.
export type WorkPhoto = {
  slug: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  category: "Commercial" | "Kitchen" | "Bathroom" | "Full home";
};
export const workPhotos: WorkPhoto[] = [
  {
    slug: "commercial-glazing-menlyn",
    src: "/images/projects/commercial-glazing-installation-menlyn-pretoria-01.jpg",
    width: 1421,
    height: 800,
    alt: "Aluminium-framed glazing installed along a commercial building facade in Menlyn, Pretoria",
    caption: "Commercial glazing installation",
    category: "Commercial",
  },
  {
    slug: "commercial-office-fitout",
    src: "/images/projects/commercial-office-fitout-pretoria-01.jpg",
    width: 1600,
    height: 1200,
    alt: "Office fit-out with partitioned meeting rooms and coloured glass panels",
    caption: "Commercial office fit-out",
    category: "Commercial",
  },
  {
    slug: "kitchen-renovation-midstream",
    src: "/images/projects/kitchen-renovation-midstream-pretoria-01.jpg",
    width: 793,
    height: 435,
    alt: "Renovated kitchen with slatted wood island, oak cabinetry and pendant lighting",
    caption: "Kitchen renovation",
    category: "Kitchen",
  },
  {
    slug: "bathroom-renovation-freestanding-bath",
    src: "/images/projects/bathroom-renovation-freestanding-bath-pretoria-01.jpg",
    width: 1034,
    height: 807,
    alt: "Bathroom renovation with a freestanding bath, floor-mounted mixer and frosted window",
    caption: "Bathroom renovation",
    category: "Bathroom",
  },
  {
    slug: "home-renovation-living-area",
    src: "/images/projects/home-renovation-living-area-pretoria-01.jpg",
    width: 1600,
    height: 1200,
    alt: "Renovated open-plan living area with vinyl wood flooring and built-in shelving",
    caption: "Full home renovation",
    category: "Full home",
  },
];

export type Review = { quote: string; name: string; source?: string };
export const reviews: Review[] = [];
