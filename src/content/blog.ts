// Blog content model. No placeholder or example posts — see CLAUDE.md
// ("Claude may draft content but must not publish unverified facts").
// A post is added here only once it has a real photo (with rights confirmed),
// a real publish date and copy that has actually been checked. Until then
// `blogPosts` stays empty, which keeps /blog/ out of the nav and sitemap
// (same pattern as `projects` in `site.ts`).

export type BlogBodyBlock =
    | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | {
          type: "image";
          src: string;
          width: number;
          height: number;
          alt: string;
          caption?: string;
  };

export type BlogPost = {
    slug: string;
    title: string;
    // Falls back to `title` when omitted.
    metaTitle?: string;
    metaDescription: string;
    // One or two sentences shown on the /blog/ index card.
    excerpt: string;
    // ISO date (YYYY-MM-DD) the post actually went live.
    date: string;
    category: string;
    coverImage: { src: string; width: number; height: number; alt: string };
    body: BlogBodyBlock[];
};

export const blogPosts: BlogPost[] = [
  {
        slug: "bathroom-renovation-checklist-pretoria",
        title: "Bathroom Renovation Checklist for Pretoria Homeowners",
        metaDescription:
                "A practical checklist for Pretoria homeowners planning a bathroom renovation — what to decide early, what to buy in advance, and what to ask your contractor.",
        excerpt:
                "Planning a bathroom renovation? Here's what to decide before the plumber arrives, and the questions worth asking any contractor you're considering.",
        date: "2026-09-24",
        category: "Bathrooms",
        coverImage: {
                src: "/images/gallery/bathroom-renovation-walk-in-shower-white-vanity-pretoria-06.jpg",
                width: 1600,
                height: 1200,
                alt: "Renovated bathroom in Pretoria with a walk-in shower and white vanity",
        },
        body: [
          {
                    type: "p",
                    text: "A bathroom renovation touches almost everything in a home at once — plumbing, electrics, waterproofing, tiling, ventilation. Getting the order of decisions right before work starts is what keeps a project on track. Here's what we walk homeowners through before we start on site.",
          },
          { type: "h2", text: "Before you start" },
          {
                    type: "p",
                    text: "Start with how the room is used, not how it looks in a photo. Who uses this bathroom, and at what times of day — does it need to work for more than one person getting ready at once? A family bathroom used by kids each morning has different priorities from a main-en-suite used by one or two adults.",
          },
          {
                    type: "p",
                    text: "Walk through your current bathroom and note what actually annoys you day to day — poor water pressure, not enough storage, bad lighting, a bath nobody ever uses. Those everyday frustrations should drive the brief more than trends.",
          },
          { type: "h2", text: "Decisions to make early" },
          {
                    type: "p",
                    text: "Some choices get expensive to change once a contractor is on site, so settle these first. Is the toilet, basin and shower or bath staying where they are, or moving? Moving plumbing points is usually where both cost and time increase the most.",
          },
          {
                    type: "p",
                    text: "Be honest about whether the bath actually gets used, or whether it's really a second shower you need.",
          },
          {
                    type: "p",
                    text: "Tile size and layout matters too — large format tiles need a flatter substrate and give fewer grout lines to clean, but cost more to cut around fittings.",
          },
          {
                    type: "p",
                    text: "Ask any contractor what waterproofing system and warranty they use. It's the one part of the job you can't inspect once it's tiled over, so it's worth understanding before work starts, not after.",
          },
          { type: "h2", text: "What to buy in advance" },
          {
                    type: "p",
                    text: "Fittings and fixtures with long lead times — a specific bath, a particular tap finish, imported tile — should be ordered before the start date, not during the job. A renovation waiting on a delivery is a renovation standing still.",
          },
          {
                    type: "p",
                    text: "Confirm sizes against the actual room, not a showroom display. A freestanding bath that looks right in a shop can crowd a smaller room.",
          },
          { type: "h2", text: "What happens during the renovation" },
          {
                    type: "p",
                    text: "Expect the bathroom to be unusable for the bulk of the project — plan for that, especially if it's your only bathroom. Demolition and rough plumbing/electrical come first, then waterproofing, then tiling, then fittings and finishes. A good contractor will walk you through this sequence and tell you honestly where delays are more likely, rather than promising a fixed date they can't guarantee.",
          },
          {
                    type: "image",
                    src: "/images/gallery/bathroom-renovation-stone-wall-freestanding-bath-pretoria-04.jpg",
                    width: 1200,
                    height: 1600,
                    alt: "Freestanding bath against a natural stone feature wall in a renovated Pretoria bathroom",
          },
          { type: "h2", text: "Questions to ask your contractor" },
          {
                    type: "p",
                    text: "Ask to see photos of their own completed work, not stock images. Ask who's actually on site day to day. Ask what happens if something unexpected turns up once demolition starts — old plumbing and structural surprises are common in older Pretoria homes. And ask directly about the waterproofing warranty in writing.",
          },
              ],
  },
    {
        slug: "kitchen-renovation-cost-pretoria",
        title: "What Drives Kitchen Renovation Cost in Pretoria?",
        metaDescription:
                "A practical look at what actually moves a kitchen renovation quote up or down in Pretoria — layout, cabinetry, countertops, appliances and scope.",
        excerpt:
                "Two kitchens the same size can come in at very different prices. Here's what actually drives the number, so you know what you're comparing when quotes come in.",
        date: "2026-09-28",
        category: "Kitchens",
        coverImage: {
                src: "/images/gallery/kitchen-renovation-gloss-white-wine-niche-pretoria-05.jpg",
                width: 1690,
                height: 1215,
                alt: "Renovated Pretoria kitchen with gloss white cabinetry and a wine niche",
        },
        body: [
          {
                    type: "p",
                    text: "Two kitchens of a similar size can land at very different totals once quotes come back, and it's rarely down to one obvious thing. A kitchen touches more trades than almost any other room in the house — cabinetry, plumbing, electrical, tiling, countertops, appliances — so the cost is really the sum of a lot of smaller decisions. Here's what actually moves the number.",
          },
          { type: "h2", text: "Layout changes cost more than finishes" },
          {
                    type: "p",
                    text: "Keeping the sink, stove and fridge roughly where they already are keeps plumbing and electrical work to a minimum. Moving any of them — especially the sink or stove — means new plumbing or gas runs and often chasing into walls or floors. This is usually a bigger cost driver than which cabinet door style or countertop you choose, so it's worth deciding early whether the layout actually needs to change or whether the existing footprint can just be upgraded.",
          },
          { type: "h2", text: "Cabinetry: off-the-shelf vs custom" },
          {
                    type: "p",
                    text: "Standard modular cabinet sizes are more affordable than cabinetry built to exact custom dimensions, because custom work means every carcass is made to measure rather than assembled from stock sizes. An awkward kitchen shape — a narrow galley, an odd corner, a low ceiling — often pushes toward custom cabinetry simply because standard sizes won't fit properly, which is worth knowing before you compare two quotes that look very different.",
          },
          { type: "h2", text: "Countertop material matters" },
          {
                    type: "p",
                    text: "Quartz, granite and laminate sit at different price and durability levels, and within quartz and granite there's a wide range depending on the specific slab. It's worth asking any contractor to show you the actual material options at each price tier rather than agreeing to \"quartz\" or \"granite\" as a generic line item, since the range within each category can be significant.",
          },
          { type: "h2", text: "Appliances and fittings" },
          {
                    type: "p",
                    text: "Whether a quote includes appliances (oven, hob, extractor, dishwasher) or excludes them and expects you to supply your own changes the total substantially. The same applies to taps, sinks and handles. Ask specifically what's included and what isn't — this is one of the most common reasons two quotes for what looks like the same job end up far apart.",
          },
          {
                    type: "image",
                    src: "/images/gallery/kitchen-renovation-cream-cabinetry-pretoria-01.jpg",
                    width: 1080,
                    height: 1630,
                    alt: "Cream cabinetry kitchen renovation in Pretoria with full-height storage",
          },
          { type: "h2", text: "What to ask for in a detailed quote" },
          {
                    type: "p",
                    text: "A quote broken down by line item — demolition, cabinetry, countertops, plumbing, electrical, tiling, appliances, finishes — lets you see exactly where the money is going and compare quotes properly. A single lump-sum figure with no breakdown makes it hard to know whether you're comparing like for like, and makes it harder to manage the scope if something needs to change once work is underway.",
          },
              ],
  },
  {
        slug: "bathroom-renovation-timeline-pretoria",
        title: "How Long Does a Bathroom Renovation Take?",
        metaDescription:
                "What actually determines how long a bathroom renovation takes in Pretoria, from demolition through waterproofing, tiling and final fitting.",
        excerpt:
                "There's no single answer, but there is a predictable sequence. Here's what determines how long a bathroom renovation actually takes, and where delays tend to creep in.",
        date: "2026-09-28",
        category: "Bathrooms",
        coverImage: {
                src: "/images/gallery/bathroom-renovation-black-frame-shower-marble-tile-pretoria-01.jpg",
                width: 1600,
                height: 1200,
                alt: "Renovated Pretoria bathroom with a black-framed shower and marble-look tile",
          },
        body: [
          {
                    type: "p",
                    text: "\"How long will it take?\" is usually the second question after \"how much will it cost?\" — and the honest answer is that it depends on scope, but the sequence itself is fairly predictable. Knowing that sequence helps you plan around it, especially if it's your only bathroom.",
          },
          { type: "h2", text: "The sequence, and why it can't be shortened much" },
          {
                    type: "p",
                    text: "Demolition and rough plumbing and electrical come first, since everything after depends on those being correct. Waterproofing follows, and it needs proper curing time before tiling starts — this is not a step worth rushing, since it's the one part of the job you can't inspect again once it's covered. Tiling comes next, then grouting, then fittings and finishes last. Each stage generally has to finish before the next one can start cleanly.",
          },
          { type: "h2", text: "What extends the timeline" },
          {
                    type: "p",
                    text: "Moving plumbing points adds time, the same way it adds cost. Older Pretoria homes sometimes reveal outdated or deteriorated plumbing once walls are opened up, which isn't something a contractor can always predict from a first inspection — a good contractor will tell you honestly that this is a possibility rather than promising a fixed date they can't guarantee. Custom or imported tile and fittings with long delivery lead times can also hold up a project if they weren't ordered before the start date.",
          },
          {
                    type: "image",
                    src: "/images/gallery/bathroom-renovation-herringbone-tile-shower-pretoria-05.jpg",
                    width: 1200,
                    height: 1600,
                    alt: "Herringbone tile pattern in a renovated Pretoria shower",
          },
          { type: "h2", text: "Living without the bathroom" },
          {
                    type: "p",
                    text: "If it's your only bathroom, plan for it to be unusable for the bulk of the project, not just a day or two. It's worth arranging an alternative — a second bathroom elsewhere in the house, or with family nearby — for the full middle stretch of the job, particularly through demolition, plumbing and tiling.",
          },
          { type: "h2", text: "Ask for a stage-by-stage plan, not just a finish date" },
          {
                    type: "p",
                    text: "A contractor who walks you through each stage and flags where delays are more likely — rather than just giving you one end date — is giving you a more honest picture of the project. It also makes it much easier to see where things stand partway through, instead of only finding out you're behind schedule once the original date has already passed.",
          },
              ],
  },
  {
        slug: "full-home-renovation-where-to-start",
        title: "Where to Start With a Full Home Renovation",
        metaDescription:
                "A practical starting point for homeowners planning a full home renovation in Pretoria — what to decide first, and how to sequence the work.",
        excerpt:
                "A full home renovation touches every room and every trade at once. Here's a sensible order to work through the decisions, before a single wall comes down.",
        date: "2026-09-28",
        category: "Home Renovations",
        coverImage: {
                src: "/images/gallery/exterior-aerial-drone-property-pretoria-03.jpg",
                width: 2000,
                height: 924,
                alt: "Aerial view of a renovated property in Pretoria",
        },
        body: [
          {
                    type: "p",
                    text: "A full home renovation is a different kind of project to a single-room upgrade — it touches every room and most trades at once, and the number of decisions can feel overwhelming before any work even starts. A sensible starting point makes the rest of the process far more manageable.",
          },
          { type: "h2", text: "Start with how you actually use the house" },
          {
                    type: "p",
                    text: "Before touching finishes or layouts, work out what's genuinely not working about the house as it is — not enough bedrooms, a kitchen that's cut off from the living area, poor flow between indoor and outdoor space, a bathroom everyone fights over in the morning. These everyday frustrations should drive the brief far more than trends or what you've seen elsewhere.",
          },
          { type: "h2", text: "Decide structural changes before anything else" },
          {
                    type: "p",
                    text: "If any walls are moving, or the renovation includes an extension, that needs to be settled first, because it affects almost every other decision — room sizes, where services run, what building plans or engineer input are needed. Starting with finishes before structure is settled usually means redoing decisions later.",
          },
          { type: "h2", text: "Work out whether you're staying in the house or moving out" },
          {
                    type: "p",
                    text: "A full renovation done while living in the house is possible, but it changes how the work needs to be phased — which areas need to stay usable throughout, and in what order rooms can be taken offline. Deciding this upfront, rather than partway through, gives a contractor a realistic brief to plan around.",
          },
          {
                    type: "image",
                    src: "/images/gallery/exterior-tiled-staircase-balustrade-pretoria-04.jpg",
                    width: 960,
                    height: 1280,
                    alt: "Tiled staircase and balustrade in a renovated Pretoria home",
          },
          { type: "h2", text: "Ask for a phased plan, not just a total" },
          {
                    type: "p",
                    text: "A full home renovation quote should set out the order the work will happen in and roughly when each phase starts, not just a single total figure. That phased view is what lets you plan around the parts of the house that will be out of action, and gives you a way to track progress against the plan rather than just waiting for a finish date." ,
          },
              ],
  },
  {
        slug: "questions-to-ask-renovation-contractor",
        title: "Questions to Ask a Renovation Contractor Before You Sign",
        metaDescription:
                "The practical questions worth asking any renovation contractor in Pretoria before signing — scope, supervision, workmanship and what happens when things change.",
        excerpt:
                "The cheapest quote isn't always the cheapest renovation. Here are the questions worth asking before you sign anything, whoever you're considering.",
        date: "2026-09-28",
        category: "Planning & Advice",
        coverImage: {
                src: "/images/gallery/exterior-painting-render-double-storey-pretoria-02.jpg",
                width: 1773,
                height: 1485,
                alt: "Freshly painted double-storey home exterior in Pretoria",
        },
        body: [
          {
                    type: "p",
                    text: "The cheapest quote on the table isn't always the cheapest renovation once the job is actually done — scope gaps and vague line items have a way of turning into extra costs later. A few direct questions upfront make it much easier to compare contractors properly and avoid surprises once work is underway.",
          },
          { type: "h2", text: "Ask to see their own completed work" },
          {
                    type: "p",
                    text: "Ask for photos of work the contractor has actually completed, not stock images or supplier catalogue photos. If possible, ask to see or speak to a past client about a similar project. This tells you far more than a polished sales pitch does.",
          },
          { type: "h2", text: "Ask who is actually on site" },
          {
                    type: "p",
                    text: "Find out who is supervising day to day, and whether that's the same person you're speaking to now or someone you haven't met yet. Consistent, hands-on supervision has a real effect on how smoothly a project runs and how quickly problems get caught.",
          },
          { type: "h2", text: "Ask what happens when something unexpected turns up" },
          {
                    type: "p",
                    text: "Older homes especially can reveal outdated plumbing, wiring or structural issues once walls are opened up. Ask how the contractor handles this — how it gets communicated to you, and how it affects cost and timeline — rather than finding out for the first time when it actually happens.",
          },
          {
                    type: "image",
                    src: "/images/gallery/showroom-fitout-hansgrohe-display-pretoria-03.jpg",
                    width: 1056,
                    height: 1408,
                    alt: "Fittings and fixtures on display for a Pretoria renovation project",
          },
          { type: "h2", text: "Get the quote itemised, and get warranties in writing" },
          {
                    type: "p",
                    text: "A line-item quote — rather than one lump sum — lets you see exactly what you're paying for and makes it far easier to manage if the scope changes. And for anything you can't inspect once it's finished, waterproofing especially, ask for the warranty in writing rather than taking it on trust verbally.",
          },
              ],
  },
  {
        slug: "renovating-kitchen-while-living-in-house",
        title: "Renovating a Kitchen While Living in the House",
        metaDescription:
                "Practical advice for Pretoria homeowners renovating a kitchen while staying in the house — planning a temporary kitchen and managing the disruption.",
        excerpt:
                "Renovating a kitchen without moving out is entirely doable — it just needs a plan for the weeks the real kitchen is out of action.",
        date: "2026-09-28",
        category: "Kitchens",
        coverImage: {
                src: "/images/gallery/kitchen-renovation-island-open-shelving-pretoria-03.jpg",
                width: 1080,
                height: 613,
                alt: "Renovated Pretoria kitchen island with open shelving",
        },
        body: [
          {
                    type: "p",
                    text: "Most homeowners renovating a kitchen don't move out for the project, and it's entirely doable — but the kitchen will be out of action for a stretch, and it helps to plan for that rather than assume you'll manage day to day without a plan.",
          },
          { type: "h2", text: "Set up a temporary kitchen before demolition starts" },
          {
                    type: "p",
                    text: "A folding table, a microwave, a kettle and a couple of days' worth of dishes in another room goes a long way. If there's a laundry, garage or spare room nearby, that's usually the easiest place to base a temporary setup for the weeks the real kitchen is offline.",
          },
          { type: "h2", text: "Expect the disruption to be worse for a shorter stretch than a low-level mess for longer" },
          {
                    type: "p",
                    text: "Demolition, plumbing and electrical work tend to be the noisiest and dustiest stretch, but it's also usually the shortest phase. Cabinetry installation and finishing take longer but are far less disruptive day to day. Knowing which phase you're in helps set expectations for family members or anyone working from home.",
          },
          { type: "h2", text: "Protect the rest of the house from dust" },
          {
                    type: "p",
                    text: "Ask your contractor how they're containing dust and debris to the work area — dust sheets, sealed doorways, protected flooring in walkways. This matters more in an occupied home than an empty one, since the rest of the house still needs to be livable throughout.",
          },
          {
                    type: "image",
                    src: "/images/gallery/kitchen-renovation-cream-cabinetry-pretoria-08.jpg",
                    width: 1080,
                    height: 1087,
                    alt: "Cream cabinetry and storage in a renovated Pretoria kitchen",
          },
          { type: "h2", text: "Agree on working hours and access upfront" },
          {
                    type: "p",
                    text: "If you're home during the day, agree on start times, access to water and electricity, and how the team will let you know about anything that comes up. Clear expectations set before work starts make the weeks of disruption far easier to live with than sorting it out as you go.",
          },
              ],
  },
  {
        slug: "bathroom-renovation-cost-pretoria",
        title: "What Drives Bathroom Renovation Cost in Pretoria?",
        metaDescription:
                "A practical look at what actually moves a bathroom renovation quote up or down in Pretoria — layout, fittings, tiling and waterproofing.",
        excerpt:
                "Two bathrooms the same size can come in at very different prices. Here's what actually drives the number, so you know what you're comparing when quotes come in.",
        date: "2026-10-03",
        category: "Bathrooms",
        coverImage: {
                src: "/images/gallery/bathroom-renovation-double-trough-vanity-pretoria-03.jpg",
                width: 1080,
                height: 724,
                alt: "Renovated Pretoria bathroom with a double trough vanity",
        },
        body: [
          {
                    type: "p",
                    text: "Two bathrooms of a similar size can land at very different totals once quotes come back, and it's rarely down to one obvious thing. A bathroom concentrates more plumbing, waterproofing and finishing work into a small space than almost any other room, so the cost is really the sum of a lot of smaller decisions. Here's what actually moves the number.",
          },
          { type: "h2", text: "Moving the layout costs more than changing finishes" },
          {
                    type: "p",
                    text: "Keeping the toilet, shower and basin roughly where they already are keeps plumbing work to a minimum. Moving any of them — especially the toilet or shower drain — means breaking into the floor to reroute plumbing, which is usually a bigger cost driver than which tile or vanity you choose. It's worth deciding early whether the layout actually needs to change or whether the existing footprint can just be upgraded.",
          },
          { type: "h2", text: "Fittings and sanitaryware" },
          {
                    type: "p",
                    text: "Taps, shower mixers, the toilet and the vanity all sit at different price and quality tiers, and the range within each category can be wide. Whether a quote includes these items or excludes them and expects you to supply your own changes the total substantially — ask specifically what's included, since this is one of the most common reasons two quotes for what looks like the same job end up far apart.",
          },
          { type: "h2", text: "Tile size and material" },
          {
                    type: "p",
                    text: "Large-format tiles generally need a flatter, more carefully prepared surface than standard-size tiles, and natural stone needs different handling and sealing than porcelain. Neither is automatically the better choice — it depends on the look you want and the surface you're starting from — but it's worth asking a contractor to show you the actual material options at each price tier rather than agreeing to \"tiles\" as a generic line item.",
          },
          {
                    type: "image",
                    src: "/images/gallery/bathroom-renovation-charcoal-tile-freestanding-bath-pretoria-02.jpg",
                    width: 768,
                    height: 1024,
                    alt: "Charcoal tile bathroom renovation in Pretoria with a freestanding bath",
          },
          { type: "h2", text: "Waterproofing is not the place to cut cost" },
          {
                    type: "p",
                    text: "Waterproofing happens before tiling and needs proper curing time, so it adds time and cost that doesn't show in the finished room — but it's the one part of the job you can't inspect again once it's tiled over. A quote that looks noticeably cheaper is worth checking against what it actually specifies for waterproofing, not just the finishes you can see.",
          },
          { type: "h2", text: "Shower, bath, or both" },
          {
                    type: "p",
                    text: "A bath takes up floor space a larger shower could use instead, and swapping one for the other is a layout decision with its own plumbing implications, not just a fittings choice. If the bathroom is small, deciding this early avoids redesigning the layout partway through.",
          },
          { type: "h2", text: "What to ask for in a detailed quote" },
          {
                    type: "p",
                    text: "A quote broken down by line item — demolition, plumbing, waterproofing, tiling, fittings and finishes — lets you see exactly where the money is going and compare quotes properly. A single lump-sum figure with no breakdown makes it hard to know whether you're comparing like for like, and makes it harder to manage the scope if something needs to change once work is underway.",
          },
              ],
  },
];

export function getBlogPost(slug: string) {
    return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-ZA", {
          year: "numeric",
          month: "long",
          day: "numeric",
    });
}
