import Link from "next/link";
import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import Photo from "@/components/Photo";
import { blogPosts, formatPostDate } from "@/content/blog";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Renovation & Building Advice from PRX Projects",
  description:
    "Practical advice and project write-ups from PRX Projects, renovation and building contractors in Pretoria East and Centurion.",
  path: "/blog/",
});

export default function Blog() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">Advice &amp; project updates</h1>
      <p className="mt-4 max-w-2xl text-lg text-stone-800">
        Practical notes on renovating and building in Pretoria, plus write-ups from projects we have
        completed.
      </p>

      {posts.length > 0 ? (
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug} className="overflow-hidden rounded-lg border border-stone-300">
              <Link href={`/blog/${p.slug}/`}>
                <Photo
                  src={p.coverImage.src}
                  alt={p.coverImage.alt}
                  width={p.coverImage.width}
                  height={p.coverImage.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </Link>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-accent">
                  <span>{p.category}</span>
                  <span aria-hidden="true" className="text-stone-400">
                    &middot;
                  </span>
                  <time dateTime={p.date} className="text-stone-500">
                    {formatPostDate(p.date)}
                  </time>
                </div>
                <h2 className="mt-2 text-lg font-semibold">
                  <Link href={`/blog/${p.slug}/`} className="hover:text-accent">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 text-stone-700">{p.excerpt}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 max-w-2xl rounded-lg border border-stone-300 bg-muted p-6 text-stone-700">
          No posts published yet. Check back soon, or follow us on social media for updates in the
          meantime.
        </p>
      )}

      <div className="mt-12">
        <CtaRow />
      </div>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
        ])}
      />
    </div>
  );
}
