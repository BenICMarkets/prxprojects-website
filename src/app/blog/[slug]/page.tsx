import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogBody from "@/components/BlogBody";
import CtaRow from "@/components/CtaRow";
import Photo from "@/components/Photo";
import { absoluteUrl, business } from "@/content/business";
import { blogPosts, formatPostDate, getBlogPost } from "@/content/blog";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getBlogPost(slug);
  if (!p) return {};
  return pageMeta({
    title: p.metaTitle ?? p.title,
    description: p.metaDescription,
    path: `/blog/${p.slug}/`,
  });
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const p = getBlogPost(slug);
  if (!p) notFound();
  const path = `/blog/${p.slug}/`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.metaDescription,
    image: absoluteUrl(p.coverImage.src),
    datePublished: p.date,
    mainEntityOfPage: absoluteUrl(path),
    publisher: { "@id": `${business.url}/#organization` },
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <nav aria-label="Breadcrumb" className="text-sm text-stone-700">
        <Link href="/" className="underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/blog/" className="underline">
          Blog
        </Link>{" "}
        / <span aria-current="page">{p.title}</span>
      </nav>

      <div className="mt-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-accent">
        <span>{p.category}</span>
        <span aria-hidden="true" className="text-stone-400">
          &middot;
        </span>
        <time dateTime={p.date} className="text-stone-500">
          {formatPostDate(p.date)}
        </time>
      </div>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{p.title}</h1>

      <div className="mt-8 overflow-hidden rounded-lg">
        <Photo
          src={p.coverImage.src}
          alt={p.coverImage.alt}
          width={p.coverImage.width}
          height={p.coverImage.height}
          priority
          sizes="(min-width: 768px) 768px, 100vw"
        />
      </div>

      <div className="mt-8">
        <BlogBody blocks={p.body} />
      </div>

      <section className="mt-14 rounded-lg bg-ink p-8 text-white">
        <h2 className="text-2xl font-bold">Planning something similar?</h2>
        <p className="mt-2 text-stone-200">
          We work in {business.serviceArea}. Tell us what you need and we will arrange a site visit.
        </p>
        <div className="mt-5">
          <CtaRow dark />
        </div>
      </section>

      <JsonLd data={articleLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: p.title, path },
        ])}
      />
    </article>
  );
}
