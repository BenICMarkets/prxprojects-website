import type { Metadata } from "next";
import Link from "next/link";
import CtaRow from "@/components/CtaRow";
import Photo from "@/components/Photo";
import { galleryCategories, workPhotos, type GalleryCategory } from "@/content/site";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Photo Gallery, Renovation & Building Work in Pretoria",
  description:
    "Browse photos of PRX Projects' completed renovation and building work in Pretoria: bathrooms, kitchens, garages, wardrobes, outdoor patios, exteriors and showroom fit-outs.",
  path: "/gallery/",
});

function isGalleryCategory(value: string | undefined): value is GalleryCategory {
  return galleryCategories.includes(value as GalleryCategory);
}

export default async function Gallery(props: PageProps<"/gallery">) {
  const searchParams = await props.searchParams;
  const rawCategory = Array.isArray(searchParams.category) ? searchParams.category[0] : searchParams.category;
  const activeCategory = isGalleryCategory(rawCategory) ? rawCategory : undefined;

  const categoriesWithPhotos = galleryCategories.filter((c) => workPhotos.some((p) => p.category === c));
  const photos = activeCategory ? workPhotos.filter((p) => p.category === activeCategory) : workPhotos;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">Our work gallery</h1>
      <p className="mt-4 max-w-2xl text-lg text-stone-800">
        Real photos from PRX Projects renovation and building work in Pretoria East, Centurion and
        surrounding areas. Filter by category to see work from a specific type of project.
      </p>

      {categoriesWithPhotos.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
          <Link
            href="/gallery/"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              !activeCategory
                ? "border-accent bg-accent text-white"
                : "border-stone-300 text-stone-800 hover:border-accent hover:text-accent"
            }`}
            aria-current={!activeCategory ? "true" : undefined}
          >
            All work ({workPhotos.length})
          </Link>
          {categoriesWithPhotos.map((category) => {
            const count = workPhotos.filter((p) => p.category === category).length;
            const isActive = activeCategory === category;
            return (
              <Link
                key={category}
                href={`/gallery/?category=${encodeURIComponent(category)}`}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-accent bg-accent text-white"
                    : "border-stone-300 text-stone-800 hover:border-accent hover:text-accent"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {category} ({count})
              </Link>
            );
          })}
        </div>
      )}

      {photos.length > 0 ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <li key={p.slug} className="overflow-hidden rounded-lg border border-stone-300">
              <Photo
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.category}
                </span>
                <p className="mt-1 font-semibold">{p.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-stone-700">No photos in this category yet.</p>
      )}

      <div className="mt-12">
        <CtaRow />
      </div>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery/" },
        ])}
      />
    </div>
  );
}
