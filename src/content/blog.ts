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

export const blogPosts: BlogPost[] = [];

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
