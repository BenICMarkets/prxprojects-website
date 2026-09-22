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
// date or duration on file) — shown as a filterable gallery at /gallery/, not linked
// to individual project pages. Swap in real case studies above as details are confirmed.
export type GalleryCategory =
  | "Bathrooms"
  | "Kitchens"
  | "Bedrooms"
  | "Garages"
  | "Wardrobes"
  | "Outdoor & Patio"
  | "Exterior & Painting"
  | "Showroom Fit-outs"
  | "Commercial"
  | "Full Home";

export const galleryCategories: GalleryCategory[] = [
  "Bathrooms",
  "Kitchens",
  "Bedrooms",
  "Garages",
  "Wardrobes",
  "Outdoor & Patio",
  "Exterior & Painting",
  "Showroom Fit-outs",
  "Commercial",
  "Full Home",
];

export type WorkPhoto = {
  slug: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  category: GalleryCategory;
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
    category: "Kitchens",
  },
  {
    slug: "bathroom-renovation-freestanding-bath",
    src: "/images/projects/bathroom-renovation-freestanding-bath-pretoria-01.jpg",
    width: 1034,
    height: 807,
    alt: "Bathroom renovation with a freestanding bath, floor-mounted mixer and frosted window",
    caption: "Bathroom renovation",
    category: "Bathrooms",
  },
  {
    slug: "home-renovation-living-area",
    src: "/images/projects/home-renovation-living-area-pretoria-01.jpg",
    width: 1600,
    height: 1200,
    alt: "Renovated open-plan living area with vinyl wood flooring and built-in shelving",
    caption: "Full home renovation",
    category: "Full Home",
  },

  // Bathrooms
  {
    slug: "bathroom-black-frame-shower-marble-tile-01",
    src: "/images/gallery/bathroom-renovation-black-frame-shower-marble-tile-pretoria-01.jpg",
    width: 1600,
    height: 1200,
    alt: "Bathroom renovation with a black-framed glass shower, marble-look tile and floating vanity",
    caption: "Black-frame shower & marble tile",
    category: "Bathrooms",
  },
  {
    slug: "bathroom-charcoal-tile-freestanding-bath-02",
    src: "/images/gallery/bathroom-renovation-charcoal-tile-freestanding-bath-pretoria-02.jpg",
    width: 768,
    height: 1024,
    alt: "Bathroom renovation with a built-in bath, dark tiled feature wall and shower enclosure",
    caption: "Charcoal tile bath & shower",
    category: "Bathrooms",
  },
  {
    slug: "bathroom-double-trough-vanity-03",
    src: "/images/gallery/bathroom-renovation-double-trough-vanity-pretoria-03.jpg",
    width: 1080,
    height: 724,
    alt: "Bathroom renovation with a long trough-style double vanity and dark stone-look tile",
    caption: "Double trough vanity",
    category: "Bathrooms",
  },
  {
    slug: "bathroom-stone-wall-freestanding-bath-04",
    src: "/images/gallery/bathroom-renovation-stone-wall-freestanding-bath-pretoria-04.jpg",
    width: 1200,
    height: 1600,
    alt: "Bathroom renovation with a freestanding bath against a textured stone feature wall",
    caption: "Freestanding bath & stone wall",
    category: "Bathrooms",
  },
  {
    slug: "bathroom-herringbone-tile-shower-05",
    src: "/images/gallery/bathroom-renovation-herringbone-tile-shower-pretoria-05.jpg",
    width: 1200,
    height: 1600,
    alt: "Bathroom renovation with a herringbone tile feature wall, walk-in shower and vanity",
    caption: "Herringbone tile shower",
    category: "Bathrooms",
  },
  {
    slug: "bathroom-walk-in-shower-white-vanity-06",
    src: "/images/gallery/bathroom-renovation-walk-in-shower-white-vanity-pretoria-06.jpg",
    width: 1600,
    height: 1200,
    alt: "Bathroom renovation with a black-framed walk-in shower, marble-look tile and white floating vanity",
    caption: "Walk-in shower & white vanity",
    category: "Bathrooms",
  },
  {
    slug: "bathroom-stone-wall-freestanding-bath-07",
    src: "/images/gallery/bathroom-renovation-stone-wall-freestanding-bath-pretoria-07.jpg",
    width: 1200,
    height: 1600,
    alt: "Bathroom renovation with a freestanding bath, textured stone wall and toilet",
    caption: "Freestanding bath & stone wall",
    category: "Bathrooms",
  },
  {
    slug: "bathroom-stone-wall-freestanding-bath-08",
    src: "/images/gallery/bathroom-renovation-stone-wall-freestanding-bath-pretoria-08.jpg",
    width: 1200,
    height: 1600,
    alt: "Bathroom renovation with a freestanding bath, floor-mounted mixer and timber shelving against a stone wall",
    caption: "Freestanding bath & stone wall",
    category: "Bathrooms",
  },
  {
    slug: "bathroom-glass-shower-freestanding-bath-09",
    src: "/images/gallery/bathroom-renovation-glass-shower-freestanding-bath-pretoria-09.jpg",
    width: 768,
    height: 1024,
    alt: "Bathroom renovation with a glass-enclosed shower, freestanding bath and dark feature wall",
    caption: "Glass shower & freestanding bath",
    category: "Bathrooms",
  },

  // Kitchens
  {
    slug: "kitchen-cream-cabinetry-01",
    src: "/images/gallery/kitchen-renovation-cream-cabinetry-pretoria-01.jpg",
    width: 1080,
    height: 1630,
    alt: "Kitchen renovation with cream gloss cabinetry, built-in oven and glass-panel display units",
    caption: "Cream cabinetry kitchen",
    category: "Kitchens",
  },
  {
    slug: "kitchen-gloss-white-countertop-02",
    src: "/images/gallery/kitchen-renovation-gloss-white-countertop-pretoria-02.jpg",
    width: 858,
    height: 1920,
    alt: "Kitchen renovation with white gloss cabinetry and a quartz countertop",
    caption: "Gloss white countertop",
    category: "Kitchens",
  },
  {
    slug: "kitchen-island-open-shelving-03",
    src: "/images/gallery/kitchen-renovation-island-open-shelving-pretoria-03.jpg",
    width: 1080,
    height: 613,
    alt: "Kitchen renovation with a timber-top island, subway tile splashback and open shelving",
    caption: "Island with open shelving",
    category: "Kitchens",
  },
  {
    slug: "kitchen-subway-tile-island-04",
    src: "/images/gallery/kitchen-renovation-subway-tile-island-pretoria-04.jpg",
    width: 1080,
    height: 718,
    alt: "Kitchen renovation with a white island, gas range and subway tile splashback",
    caption: "Subway tile & island",
    category: "Kitchens",
  },
  {
    slug: "kitchen-gloss-white-wine-niche-05",
    src: "/images/gallery/kitchen-renovation-gloss-white-wine-niche-pretoria-05.jpg",
    width: 1690,
    height: 1215,
    alt: "Kitchen renovation with high-gloss white cabinetry and a built-in lit display niche",
    caption: "Gloss cabinetry & display niche",
    category: "Kitchens",
  },
  {
    slug: "kitchen-island-wine-rack-06",
    src: "/images/gallery/kitchen-renovation-island-wine-rack-pretoria-06.jpg",
    width: 1500,
    height: 2000,
    alt: "Kitchen renovation with a large island incorporating a built-in glass-fronted wine rack",
    caption: "Island with wine rack",
    category: "Kitchens",
  },
  {
    slug: "kitchen-island-wine-rack-07",
    src: "/images/gallery/kitchen-renovation-island-wine-rack-pretoria-07.jpg",
    width: 933,
    height: 934,
    alt: "Kitchen renovation island with a built-in wine rack, gas stove and mosaic tile splashback",
    caption: "Island with wine rack",
    category: "Kitchens",
  },
  {
    slug: "kitchen-cream-cabinetry-08",
    src: "/images/gallery/kitchen-renovation-cream-cabinetry-pretoria-08.jpg",
    width: 1080,
    height: 1087,
    alt: "Kitchen renovation with cream cabinetry, built-in oven and induction hob",
    caption: "Cream cabinetry kitchen",
    category: "Kitchens",
  },

  // Bedrooms
  {
    slug: "bedroom-black-white-striped-feature-wall-01",
    src: "/images/gallery/bedroom-black-white-striped-feature-wall-pretoria-01.jpg",
    width: 2000,
    height: 1500,
    alt: "Bedroom renovation with a black and white striped feature wall behind the bed",
    caption: "Striped feature wall bedroom",
    category: "Bedrooms",
  },

  // Garages
  {
    slug: "garage-cabinetry-workbench-01",
    src: "/images/gallery/garage-fitout-cabinetry-workbench-pretoria-01.jpg",
    width: 1200,
    height: 628,
    alt: "Garage fit-out with black and grey cabinetry, tool storage wall and checkerboard flooring",
    caption: "Garage cabinetry & workbench",
    category: "Garages",
  },
  {
    slug: "garage-cabinetry-workbench-02",
    src: "/images/gallery/garage-fitout-cabinetry-workbench-pretoria-02.jpg",
    width: 1080,
    height: 605,
    alt: "Garage fit-out with black and grey cabinetry, tool storage wall and checkerboard flooring",
    caption: "Garage cabinetry & workbench",
    category: "Garages",
  },
  {
    slug: "garage-branded-cabinetry-03",
    src: "/images/gallery/garage-fitout-branded-cabinetry-pretoria-03.jpg",
    width: 1080,
    height: 607,
    alt: "Garage fit-out with black cabinetry, brushed metal panelling and roller shutter storage",
    caption: "Branded garage cabinetry",
    category: "Garages",
  },

  // Wardrobes
  {
    slug: "wardrobe-built-in-cupboards-01",
    src: "/images/gallery/wardrobe-built-in-cupboards-pretoria-01.jpg",
    width: 1200,
    height: 1600,
    alt: "Built-in wardrobe with floor-to-ceiling cupboard doors",
    caption: "Built-in wardrobe",
    category: "Wardrobes",
  },
  {
    slug: "wardrobe-gloss-white-walnut-02",
    src: "/images/gallery/wardrobe-gloss-white-walnut-pretoria-02.jpg",
    width: 932,
    height: 915,
    alt: "Built-in wardrobe with gloss white and walnut-finish cupboard doors",
    caption: "Gloss white & walnut wardrobe",
    category: "Wardrobes",
  },
  {
    slug: "wardrobe-dressing-table-mirror-03",
    src: "/images/gallery/wardrobe-dressing-table-mirror-pretoria-03.jpg",
    width: 960,
    height: 1280,
    alt: "Built-in dressing table with mirror, open shelving and drawers in a walk-in closet",
    caption: "Dressing table & closet",
    category: "Wardrobes",
  },

  // Outdoor & Patio
  {
    slug: "outdoor-patio-pool-braai-area-01",
    src: "/images/gallery/outdoor-patio-pool-braai-area-pretoria-01.jpg",
    width: 1280,
    height: 960,
    alt: "Covered outdoor patio with built-in braai and dining area next to a swimming pool",
    caption: "Covered patio & pool",
    category: "Outdoor & Patio",
  },
  {
    slug: "outdoor-patio-stacking-doors-sunroom-02",
    src: "/images/gallery/outdoor-patio-stacking-doors-sunroom-pretoria-02.jpg",
    width: 768,
    height: 1024,
    alt: "Enclosed patio with stacking aluminium doors opening onto the garden",
    caption: "Stacking doors sunroom",
    category: "Outdoor & Patio",
  },
  {
    slug: "outdoor-patio-timber-pergola-braai-03",
    src: "/images/gallery/outdoor-patio-timber-pergola-braai-pretoria-03.jpg",
    width: 1280,
    height: 960,
    alt: "Timber pergola patio with a built-in brick braai and outdoor dining table",
    caption: "Timber pergola & braai",
    category: "Outdoor & Patio",
  },
  {
    slug: "outdoor-patio-timber-pergola-braai-04",
    src: "/images/gallery/outdoor-patio-timber-pergola-braai-pretoria-04.jpg",
    width: 1280,
    height: 960,
    alt: "Timber pergola patio under construction with a paved deck and built-in braai",
    caption: "Timber pergola & braai",
    category: "Outdoor & Patio",
  },
  {
    slug: "outdoor-patio-pool-braai-area-05",
    src: "/images/gallery/outdoor-patio-pool-braai-area-pretoria-05.jpg",
    width: 1280,
    height: 960,
    alt: "Covered outdoor patio with built-in braai and dining area next to a swimming pool",
    caption: "Covered patio & pool",
    category: "Outdoor & Patio",
  },
  {
    slug: "outdoor-patio-pool-deck-braai-06",
    src: "/images/gallery/outdoor-patio-pool-deck-braai-pretoria-06.jpg",
    width: 1280,
    height: 960,
    alt: "Covered timber patio with a built-in braai, dining table and pool with water feature",
    caption: "Patio deck & braai",
    category: "Outdoor & Patio",
  },
  {
    slug: "outdoor-patio-stone-clad-deck-07",
    src: "/images/gallery/outdoor-patio-stone-clad-deck-pretoria-07.jpg",
    width: 1408,
    height: 1056,
    alt: "New stone-clad patio deck with a timber pergola roof next to the pool",
    caption: "Stone-clad patio deck",
    category: "Outdoor & Patio",
  },

  // Exterior & Painting
  {
    slug: "exterior-painting-render-double-storey-01",
    src: "/images/gallery/exterior-painting-render-double-storey-pretoria-01.jpg",
    width: 1500,
    height: 2000,
    alt: "Freshly painted double-storey home exterior with grey render and white window trims",
    caption: "Exterior painting & render",
    category: "Exterior & Painting",
  },
  {
    slug: "exterior-painting-render-double-storey-02",
    src: "/images/gallery/exterior-painting-render-double-storey-pretoria-02.jpg",
    width: 1773,
    height: 1485,
    alt: "Freshly painted double-storey home exterior with grey render and white window trims",
    caption: "Exterior painting & render",
    category: "Exterior & Painting",
  },
  {
    slug: "exterior-aerial-drone-property-03",
    src: "/images/gallery/exterior-aerial-drone-property-pretoria-03.jpg",
    width: 2000,
    height: 924,
    alt: "Aerial drone view of a renovated property showing the roof, pool and outdoor entertainment area",
    caption: "Aerial view of the property",
    category: "Exterior & Painting",
  },
  {
    slug: "exterior-tiled-staircase-balustrade-04",
    src: "/images/gallery/exterior-tiled-staircase-balustrade-pretoria-04.jpg",
    width: 960,
    height: 1280,
    alt: "Outdoor tiled staircase with stainless steel balustrade leading up to a first-floor entrance",
    caption: "Tiled staircase & balustrade",
    category: "Exterior & Painting",
  },
  {
    slug: "exterior-painting-render-window-detail-05",
    src: "/images/gallery/exterior-painting-render-window-detail-pretoria-05.jpg",
    width: 1500,
    height: 2000,
    alt: "Close-up of a freshly painted exterior wall and window detail on a renovated home",
    caption: "Exterior painting detail",
    category: "Exterior & Painting",
  },
  {
    slug: "exterior-painting-render-window-detail-06",
    src: "/images/gallery/exterior-painting-render-window-detail-pretoria-06.jpg",
    width: 1500,
    height: 2000,
    alt: "Close-up of freshly painted exterior windows and roofline on a renovated home",
    caption: "Exterior painting detail",
    category: "Exterior & Painting",
  },

  // Showroom Fit-outs
  {
    slug: "showroom-axor-display-01",
    src: "/images/gallery/showroom-fitout-axor-display-pretoria-01.jpg",
    width: 1200,
    height: 1600,
    alt: "AXOR showroom fit-out with a freestanding display tower and wall-mounted tap displays",
    caption: "AXOR showroom display",
    category: "Showroom Fit-outs",
  },
  {
    slug: "showroom-hansgrohe-display-02",
    src: "/images/gallery/showroom-fitout-hansgrohe-display-pretoria-02.jpg",
    width: 1408,
    height: 1056,
    alt: "Hansgrohe showroom fit-out with wall-mounted tap and shower displays",
    caption: "Hansgrohe showroom display",
    category: "Showroom Fit-outs",
  },
  {
    slug: "showroom-hansgrohe-display-03",
    src: "/images/gallery/showroom-fitout-hansgrohe-display-pretoria-03.jpg",
    width: 1056,
    height: 1408,
    alt: "Hansgrohe showroom fit-out with wall-mounted tap and shower displays",
    caption: "Hansgrohe showroom display",
    category: "Showroom Fit-outs",
  },
  {
    slug: "showroom-hansgrohe-display-04",
    src: "/images/gallery/showroom-fitout-hansgrohe-display-pretoria-04.jpg",
    width: 1408,
    height: 1056,
    alt: "Hansgrohe showroom fit-out with shower displays and a mounted screen",
    caption: "Hansgrohe showroom display",
    category: "Showroom Fit-outs",
  },
  {
    slug: "showroom-axor-display-05",
    src: "/images/gallery/showroom-fitout-axor-display-pretoria-05.jpg",
    width: 1200,
    height: 1600,
    alt: "AXOR showroom fit-out with a freestanding display tower and wall-mounted tap displays",
    caption: "AXOR showroom display",
    category: "Showroom Fit-outs",
  },
];

export type Review = { quote: string; name: string; source?: string };
export const reviews: Review[] = [];

// Maps a service page slug to the gallery categories relevant to it, so the service
// page can show a small preview strip linking through to /gallery/. A slug with no
// matching photos (e.g. waterproofing) is simply left out, so no section renders.
export const serviceGalleryCategories: Record<string, GalleryCategory[]> = {
  "home-renovations-pretoria": ["Full Home", "Kitchens", "Bathrooms", "Outdoor & Patio"],
  "bathroom-renovations-pretoria": ["Bathrooms"],
  "kitchen-renovations-pretoria": ["Kitchens"],
  "building-extensions-pretoria": ["Outdoor & Patio", "Exterior & Painting"],
  "commercial-renovations-pretoria": ["Commercial", "Showroom Fit-outs"],
  "painting-contractors-pretoria": ["Exterior & Painting"],
};
