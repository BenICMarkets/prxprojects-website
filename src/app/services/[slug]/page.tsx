import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import Faq from "@/components/Faq";
import Photo from "@/components/Photo";
import { business, absoluteUrl } from "@/content/business";
import { getService, services } from "@/content/services";
import { process, serviceGalleryCategories, workPhotos } from "@/content/site";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}/`,
  });
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) notFound();
  const path = `/services/${s.slug}/`;
  const related = s.related.map((r) => getService(r)).filter((r) => r !== undefined);

  const galleryCategoriesForService = serviceGalleryCategories[s.slug];
  const galleryPreview = galleryCategoriesForService
    ? workPhotos.filter((p) => galleryCategoriesForService.includes(p.category)).slice(0, 6)
    : [];
  const galleryHref =
    galleryCategoriesForService?.length === 1
      ? `/gallery/?category=${encodeURIComponent(galleryCategoriesForService[0])}`
      : "/gallery/";

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    description: s.metaDescription,
    url: absoluteUrl(path),
    provider: { "@id": `${business.url}/#organization` },
    areaServed: business.areaServed.map((name) => ({ "@type": "Place", name })),
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <nav aria-label="Breadcrumb" className="text-sm text-stone-700">
        <Link href="/" className="underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/services/" className="underline">
          Services
        </Link>{" "}
        / <span aria-current="page">{s.navLabel}</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{s.h1}</h1>
      <p className="mt-4 text-lg text-stone-800">{s.intro}</p>
      <div className="mt-6">
        <CtaRow />
      </div>

      <section className="mt-14" aria-labelledby="handles">
        <h2 id="handles" className="text-2xl font-bold">
          What we handle
        </h2>
        <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {s.handles.map((h) => (
            <li key={h} className="flex gap-2">
              <span aria-hidden="true" className="text-accent">
                ✓
              </span>
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="process">
        <h2 id="process" className="text-2xl font-bold">
          How the project runs
        </h2>
        <ol className="mt-4 space-y-3">
          {process.map((step, i) => (
            <li key={step.title}>
              <span className="font-semibold">
                {i + 1}. {step.title}.
              </span>{" "}
              {step.text}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14" aria-labelledby="decisions">
        <h2 id="decisions" className="text-2xl font-bold">
          What to think about first
        </h2>
        <div className="mt-4 space-y-5">
          {s.decisions.map((d) => (
            <div key={d.title}>
              <h3 className="font-semibold">{d.title}</h3>
              <p className="mt-1 text-stone-700">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-14">
        <Faq items={s.faqs} id="service-faq" />
      </div>

      {galleryPreview.length > 0 && (
        <section className="mt-14" aria-labelledby="gallery-preview">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="gallery-preview" className="text-2xl font-bold">
              From our work gallery
            </h2>
            <Link href={galleryHref} className="font-semibold text-accent underline">
              View all photos
            </Link>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {galleryPreview.map((p) => (
              <li key={p.slug} className="overflow-hidden rounded-lg border border-stone-300">
                <Photo
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  sizes="(min-width: 640px) 33vw, 50vw"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-14" aria-labelledby="related">
          <h2 id="related" className="text-2xl font-bold">
            Related services
          </h2>
          <ul className="mt-4 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/services/${r.slug}/`} className="font-semibold text-accent underline">
                  {r.h1}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14 rounded-lg bg-ink p-8 text-white">
        <h2 className="text-2xl font-bold">Ready to talk about your project?</h2>
        <p className="mt-2 text-stone-200">
          We work in {business.serviceArea}. Tell us what you need and we will arrange a site visit.
        </p>
        <div className="mt-5">
          <CtaRow dark />
        </div>
      </section>

      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: s.navLabel, path },
        ])}
      />
    </div>
  );
}
