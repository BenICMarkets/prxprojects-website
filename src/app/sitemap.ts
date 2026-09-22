import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/business";
import { blogPosts } from "@/content/blog";
import { services } from "@/content/services";
import { projects, workPhotos } from "@/content/site";

// Built from content data. Thank-you pages, previews and empty sections are excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services/",
    ...services.map((s) => `/services/${s.slug}/`),
    ...(projects.length || workPhotos.length
      ? ["/projects/", ...projects.map((p) => `/projects/${p.slug}/`)]
      : []),
    ...(blogPosts.length ? ["/blog/", ...blogPosts.map((p) => `/blog/${p.slug}/`)] : []),
    "/about/",
    "/contact/",
    "/privacy/",
  ];
  return paths.map((p) => ({
    url: absoluteUrl(p),
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : p.startsWith("/services/") ? 0.8 : 0.5,
  }));
}
