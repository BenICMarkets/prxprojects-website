import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import Photo from "@/components/Photo";
import { business } from "@/content/business";
import { projects, workPhotos } from "@/content/site";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Our Work | ${business.name}`,
  description:
    "Photos from PRX Projects' renovation and building work in Pretoria: kitchens, bathrooms, full-home renovations and commercial fit-outs.",
  path: "/projects/",
});

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">Our work</h1>
      <p className="mt-4 max-w-2xl text-lg text-stone-800">
        A selection of renovation, building and commercial fit-out work carried out by our team.
        Full case studies with project details are added as they are confirmed.
      </p>

      {workPhotos.length > 0 && (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workPhotos.map((p) => (
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
      )}

      {projects.length > 0 && (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.slug} className="rounded-lg border border-stone-300 p-5">
              <h2 className="font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm text-stone-700">
                {p.area}. {p.summary}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-12">
        <CtaRow />
      </div>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects/" },
        ])}
      />
    </div>
  );
}
