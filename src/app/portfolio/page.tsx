import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { projects, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `A selection of ${site.name} projects: kitchens, new builds, interiors and more.`,
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">Portfolio</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        A selection of our recent work.
      </p>
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.title}>
            <Photo src={p.image} alt={p.alt} className="aspect-[4/3] rounded-lg" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent">
              {p.category}
            </p>
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-sm text-stone-600">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
