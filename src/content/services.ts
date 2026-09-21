// Service page content. Written from the supplied source pack; no prices, guarantees,
// registrations or timeframes are stated. FAQ answers marked for confirmation in the
// implementation plan should be checked by Ben before launch.

export type Service = {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  cardText: string;
  intro: string;
  handles: string[];
  decisions: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "home-renovations-pretoria",
    navLabel: "Home renovations",
    h1: "Home Renovations in Pretoria",
    metaTitle: "Home Renovations Pretoria",
    metaDescription:
      "Full home renovations in Pretoria East and Centurion, managed from site visit to handover with one point of contact. Request a PRX Projects site visit.",
    cardText:
      "Whole-house renovations with one team coordinating every trade, from strip-out to final finishes.",
    intro:
      "PRX Projects manages full-home renovations in Pretoria East, Centurion and surrounding areas. One team plans the scope, coordinates the trades and keeps you informed from the first site visit to handover. That covers opening up walls and moving plumbing through to ceilings, tiling, painting and finishes, so you deal with one point of contact instead of chasing separate contractors. We start with a site visit: we look at what you want changed and what condition the house is in, then put the work into an itemised quote.",
    handles: [
      "Demolition and strip-out",
      "Building alterations and structural changes",
      "Plumbing and drainage changes",
      "Electrical and lighting updates",
      "Ceilings and drywall",
      "Tiling and flooring",
      "Painting and finishes",
      "Carpentry and joinery",
      "Aluminium doors and windows",
      "Waterproofing where it is needed",
    ],
    decisions: [
      {
        title: "What is the real scope?",
        text: "A renovation quote is only as good as the scope behind it. Decide early which rooms, finishes and structural changes are in, so the quote can be itemised and any later change is visible.",
      },
      {
        title: "Will you live in the house?",
        text: "Some projects can be done while you stay on site, but it affects sequencing, dust and how the work is phased. Tell us at the site visit.",
      },
      {
        title: "Do you need plans or an engineer?",
        text: "Some alterations need approved building plans or engineer input. We flag this early; what applies depends on the work and the municipality.",
      },
    ],
    faqs: [
      {
        q: "How do I request a quote for a home renovation?",
        a: "Send a short description through the quote form, or call or WhatsApp us. We arrange a site visit, then send an itemised quote.",
      },
      {
        q: "Do you manage all the trades?",
        a: "Yes. PRX Projects coordinates the plumbers, electricians, tilers, painters, carpenters and other trades your project needs, in the right order.",
      },
      {
        q: "Can I renovate in phases?",
        a: "Often, yes. Phasing can spread cost and keep part of the house usable, but it can also add time. We can price it both ways if you are unsure.",
      },
    ],
    related: ["bathroom-renovations-pretoria", "kitchen-renovations-pretoria", "building-extensions-pretoria"],
  },
  {
    slug: "bathroom-renovations-pretoria",
    navLabel: "Bathrooms",
    h1: "Bathroom Renovations in Pretoria",
    metaTitle: "Bathroom Renovations Pretoria",
    metaDescription:
      "Bathroom renovations in Pretoria managed from demolition and plumbing through waterproofing, tiling and final installation. Request a PRX Projects site visit.",
    cardText:
      "Complete bathroom renovations: strip-out, plumbing, waterproofing, tiling and installation.",
    intro:
      "We remove the existing bathroom, complete first-fix plumbing and electrical changes, waterproof the wet areas, tile, install the sanitaryware and complete the final finishes. PRX Projects coordinates each of those trades so the work happens in the right order and you have one person to talk to. We work in Pretoria East, Centurion and surrounding areas. Book a site visit and we will look at the existing bathroom, discuss the layout you want and quote the work in itemised form.",
    handles: [
      "Removal of the existing bathroom",
      "Plumbing and drainage",
      "Electrical and lighting coordination",
      "Waterproofing of wet areas",
      "Wall and floor tiling",
      "Vanities, shower glass and sanitaryware",
      "Painting and final finishes",
      "Final inspection and snag list",
    ],
    decisions: [
      {
        title: "Same layout or a new one?",
        text: "Keeping fixtures where they are is simpler. Moving the shower, toilet or basin means changing pipework and drainage, which changes both the work and the quote.",
      },
      {
        title: "Waterproofing comes before tiling",
        text: "Wet areas need to be waterproofed before tiles go on. Skipping or rushing this step is a common cause of leaks later, so it is scoped and priced separately in our quotes.",
      },
      {
        title: "Choose products early",
        text: "Tiles, vanities, sanitaryware and glass all have lead times. Deciding early avoids the work stopping while you wait for something to arrive.",
      },
    ],
    faqs: [
      {
        q: "How long does a bathroom renovation take?",
        a: "It depends on the size, whether the layout changes and how quickly products are available. We give you a schedule with the quote.",
      },
      {
        q: "Can I supply my own tiles or sanitaryware?",
        a: "Often, yes. Tell us at the quote stage so we can check quantities, lead times and that the products suit the job.",
      },
      {
        q: "Can I renovate without moving the plumbing?",
        a: "Yes. Keeping the existing plumbing positions is a common way to control scope. We will tell you at the site visit what the existing layout allows.",
      },
    ],
    related: ["waterproofing-pretoria", "home-renovations-pretoria", "kitchen-renovations-pretoria"],
  },
  {
    slug: "kitchen-renovations-pretoria",
    navLabel: "Kitchens",
    h1: "Kitchen Renovations in Pretoria",
    metaTitle: "Kitchen Renovations Pretoria",
    metaDescription:
      "Kitchen renovations in Pretoria: strip-out, plumbing and electrical, cupboards, countertops and finishes coordinated by one team. Request a PRX Projects site visit.",
    cardText:
      "Kitchen renovations with plumbing, electrical, cupboards and tops coordinated in the right order.",
    intro:
      "A kitchen renovation involves several trades that have to happen in a sensible order: strip-out, plumbing and electrical changes, cupboards, tops, tiling and finishes. PRX Projects coordinates that sequence for kitchens in Pretoria East, Centurion and surrounding areas, so cupboards do not arrive before the walls are ready and tops are not measured before the cupboards are fixed. At the site visit we look at the existing kitchen, talk through what you want to change and give you an itemised quote.",
    handles: [
      "Strip-out of the existing kitchen",
      "Plumbing and electrical alterations",
      "Cupboard and cabinetry coordination",
      "Countertops",
      "Splashbacks and wall or floor tiling",
      "Appliance integration",
      "Painting and final finishes",
      "Final inspection and snag list",
    ],
    decisions: [
      {
        title: "Decide the layout before ordering cupboards",
        text: "Cupboards are made to measure. Appliance positions, the sink and any island need to be settled first, because changes after ordering are slow and costly.",
      },
      {
        title: "Plan for a kitchen out of action",
        text: "Expect the kitchen to be unusable for part of the project. Setting up a temporary space early makes the disruption easier to live with.",
      },
      {
        title: "Order matters",
        text: "Electrical and plumbing changes come first, then cupboards, then tops. Tops are measured once cupboards are in, which is one reason the schedule cannot be rushed.",
      },
    ],
    faqs: [
      {
        q: "Can you renovate a kitchen while we live in the house?",
        a: "Usually, but the kitchen will be out of use for part of the work. We will discuss sequencing and what to expect at the site visit.",
      },
      {
        q: "Do you supply the cupboards and tops?",
        a: "We coordinate them as part of the project. Tell us what you already have in mind and we will scope it in the quote.",
      },
      {
        q: "How do I get a kitchen quote?",
        a: "Use the quote form, call or WhatsApp. We visit, measure up and send an itemised quote.",
      },
    ],
    related: ["home-renovations-pretoria", "bathroom-renovations-pretoria", "painting-contractors-pretoria"],
  },
  {
    slug: "building-extensions-pretoria",
    navLabel: "Building & extensions",
    h1: "Building Renovations & Extensions in Pretoria",
    metaTitle: "Building Renovations & Extensions Pretoria",
    metaDescription:
      "Building renovations, alterations and house extensions in Pretoria East and Centurion, managed from plans and site visit through to handover. Request a quote.",
    cardText:
      "Alterations, extensions and building work managed from site visit to handover.",
    intro:
      "PRX Projects handles building alterations, extensions and additions for homes and small commercial properties in Pretoria East, Centurion and surrounding areas. That includes enclosing patios, adding rooms, opening up or closing walls, and the roofing, ceilings, windows and finishes that go with them. We manage the build and the trades on it so you have one point of contact. Start with a site visit and a description of what you want; we will tell you what the job involves and put it in an itemised quote.",
    handles: [
      "Alterations and structural changes",
      "Extensions and additions",
      "Patio enclosures and sunrooms",
      "Roofing and ceilings",
      "Aluminium windows and doors",
      "Paving and exterior work",
      "Plumbing and electrical for new work",
      "Painting and finishes",
    ],
    decisions: [
      {
        title: "Plans and approvals",
        text: "Many alterations and extensions need approved building plans and sometimes engineer input. Requirements depend on the work and the municipality, so we raise this at the start rather than after work begins.",
      },
      {
        title: "Renovate or extend?",
        text: "If the problem is layout, reworking existing rooms may solve it. If you simply need more floor area, an extension is the answer. A site visit usually makes the choice clear.",
      },
      {
        title: "Watch the roof junction",
        text: "Where a new structure meets an existing roof, waterproofing has to be planned into the design, not added afterwards.",
      },
    ],
    faqs: [
      {
        q: "Do I need building plans for an extension?",
        a: "Usually, yes. Exactly what is required depends on the work and the municipality. We tell you what we think applies at the site visit.",
      },
      {
        q: "Can you handle the whole job, including the finishes?",
        a: "Yes. We manage the building work and the trades that follow it, from ceilings and windows to painting.",
      },
      {
        q: "Do you work on commercial buildings?",
        a: "Yes, on small commercial properties such as offices and shops. See our commercial renovations page.",
      },
    ],
    related: ["home-renovations-pretoria", "waterproofing-pretoria", "commercial-renovations-pretoria"],
  },
  {
    slug: "waterproofing-pretoria",
    navLabel: "Waterproofing",
    h1: "Waterproofing in Pretoria",
    metaTitle: "Waterproofing Pretoria",
    metaDescription:
      "Waterproofing in Pretoria for roofs, parapet walls, window sills and walls. PRX Projects finds where water gets in before recommending a repair.",
    cardText:
      "Roofs, parapets, window sills and walls: find the source, then fix it properly.",
    intro:
      "Water damage usually gets worse the longer it is left, and repainting over a damp patch rarely fixes it. PRX Projects waterproofs roofs, parapet walls, window sills and walls in Pretoria East, Centurion and surrounding areas. We start by working out where the water is actually getting in, then recommend a repair that suits the surface. Waterproofing also forms part of our bathroom and building projects, where it is planned in from the start.",
    handles: [
      "Roof waterproofing and roof coatings",
      "Parapet walls",
      "Window sills and window surrounds",
      "Wall waterproofing",
      "Wet areas in bathrooms and showers",
      "Preparation, membrane or coating, and junction detailing",
    ],
    decisions: [
      {
        title: "Find the source first",
        text: "Water often shows up some distance from where it enters. Repairing the stain without tracing the source means the problem returns.",
      },
      {
        title: "Preparation decides the result",
        text: "A membrane or coating is only as good as the surface it goes on. Cracks, loose material and old coatings need to be dealt with first.",
      },
      {
        title: "Junctions and edges",
        text: "Corners, penetrations and roof-to-wall junctions are where waterproofing most often fails, so they get specific attention.",
      },
    ],
    faqs: [
      {
        q: "Can you find where a leak is coming from?",
        a: "We inspect on site to identify where water is getting in before we recommend a repair.",
      },
      {
        q: "Will repainting stop a damp patch?",
        a: "Generally not. Paint over an active leak tends to fail. The source of the water needs to be dealt with first.",
      },
      {
        q: "Do you waterproof bathrooms?",
        a: "Yes, as part of bathroom renovations and on its own where needed. See our bathroom renovations page.",
      },
    ],
    related: ["bathroom-renovations-pretoria", "building-extensions-pretoria", "painting-contractors-pretoria"],
  },
  {
    slug: "commercial-renovations-pretoria",
    navLabel: "Commercial",
    h1: "Commercial & Office Renovations in Pretoria",
    metaTitle: "Commercial Renovations Pretoria",
    metaDescription:
      "Office and small commercial renovations in Pretoria: drywall, ceilings, painting, electrical upgrades and fit-outs managed by one team. Request a quote.",
    cardText:
      "Office and light-commercial refurbishments managed around how your business operates.",
    intro:
      "PRX Projects renovates offices and small commercial premises in Pretoria East, Centurion and surrounding areas. We handle the layout changes, drywall and ceilings, electrical and lighting upgrades, painting and finishing, and coordinate the trades so the work is done in a planned order. Commercial jobs usually have to fit around staff and trading hours, so we discuss access and scheduling at the site visit before we quote.",
    handles: [
      "Office refits and refurbishments",
      "Drywall partitions and ceilings",
      "Electrical and lighting upgrades",
      "Painting",
      "Shop and retail work",
      "Signage and fit-out coordination",
    ],
    decisions: [
      {
        title: "Working around your business",
        text: "Noisy or dusty work may need to happen after hours or in phases. Telling us your trading hours up front lets us plan around them.",
      },
      {
        title: "Landlord and building rules",
        text: "Leased premises often need landlord approval and have access rules for contractors. Check these before work is scheduled.",
      },
      {
        title: "Electrical and lighting",
        text: "Layout changes usually mean electrical changes. Settling the layout first avoids reworking ceilings and wiring afterwards.",
      },
    ],
    faqs: [
      {
        q: "Do you do office fit-outs?",
        a: "Yes, from partitions and ceilings to electrical, painting and finishing, coordinated as one project.",
      },
      {
        q: "Can work happen outside trading hours?",
        a: "Often it can. Tell us your constraints at the site visit and we will plan around them.",
      },
      {
        q: "How do I request a commercial quote?",
        a: "Use the quote form or call us with a short description. We visit the premises and send an itemised quote.",
      },
    ],
    related: ["painting-contractors-pretoria", "building-extensions-pretoria", "home-renovations-pretoria"],
  },
  {
    slug: "painting-contractors-pretoria",
    navLabel: "Painting",
    h1: "Painting Contractors in Pretoria",
    metaTitle: "Painting Contractors Pretoria",
    metaDescription:
      "Interior and exterior painting contractors in Pretoria: proper preparation, repairs and finishing for homes and small commercial properties.",
    cardText:
      "Interior and exterior painting with the preparation and repairs done first.",
    intro:
      "Good paintwork is mostly preparation. PRX Projects paints the inside and outside of homes and small commercial properties in Pretoria East, Centurion and surrounding areas, and deals with cracks, damp and loose plaster before any paint goes on. Painting is also the final stage on most of our renovation projects, so it is done by a team that already understands the job. Send us a description or arrange a site visit and we will quote the work.",
    handles: [
      "Interior painting",
      "Exterior painting",
      "Wall repairs and surface preparation",
      "Damp and crack treatment before painting",
      "Ceilings and woodwork",
      "Painting as the final stage of renovation projects",
    ],
    decisions: [
      {
        title: "Fix the cause of damp first",
        text: "Paint applied over damp or a live leak will not last. If a wall is wet, we look at waterproofing before repainting.",
      },
      {
        title: "Preparation takes most of the time",
        text: "Repairs, sanding and priming are where the finish is won or lost, so the quote should show them, not just the paint.",
      },
      {
        title: "Colours and finishes",
        text: "Decide colours and sheen levels before work starts. Different rooms and surfaces often suit different finishes.",
      },
    ],
    faqs: [
      {
        q: "Do you do interior and exterior painting?",
        a: "Yes, for homes and small commercial properties in Pretoria East, Centurion and surrounding areas.",
      },
      {
        q: "Will you repair walls before painting?",
        a: "Yes. Cracks, loose plaster and damp are dealt with first so the paint has a sound surface.",
      },
      {
        q: "How do I get a painting quote?",
        a: "Send us a short description through the quote form, or call or WhatsApp. We visit and quote the work.",
      },
    ],
    related: ["waterproofing-pretoria", "home-renovations-pretoria", "commercial-renovations-pretoria"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
