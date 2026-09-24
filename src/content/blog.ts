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
