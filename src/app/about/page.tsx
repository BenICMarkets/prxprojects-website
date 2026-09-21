import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { features, process, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: where your visions meet our skills. Reasonable prices, exclusive design and a professional team.`,
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">About {site.name}</h1>
      <p className="mt-2 text-xl text-stone-600">
        Where your visions meet our skills.
      </p>

      <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-4 text-stone-700">
          <p>
            {site.name} designs and builds homes, kitchens and interiors across
            Gauteng. {site.tagline}.
          </p>
          <p>
            We are a full-service team: free design input, honest pricing, and a
            commitment to safety and integrity from the first site visit to the
            final installation.
          </p>
          <p>
            Every project starts with a conversation at your home, so the design
            fits how you actually live.
          </p>
        </div>
        <Photo
          src={null}
          alt="The PRXProjects team on site"
          className="aspect-[4/3] rounded-lg"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <h2 className="mt-16 text-2xl font-bold">Why choose us</h2>
      <ul className="mt-6 grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <li key={f.title} className="rounded-lg border border-stone-200 p-6">
            <h3 className="font-semibold text-accent">{f.title}</h3>
            <p className="mt-2 text-sm text-stone-600">{f.text}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 text-2xl font-bold">Our process</h2>
      <ol className="mt-6 grid gap-6 md:grid-cols-3">
        {process.map((s, i) => (
          <li key={s.title} className="rounded-lg bg-muted p-6">
            <span className="text-2xl font-bold text-accent">{i + 1}</span>
            <h3 className="mt-1 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-stone-600">{s.text}</p>
          </li>
        ))}
      </ol>

      <Link
        href="/contact"
        className="mt-12 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark"
      >
        Talk to us
      </Link>
    </div>
  );
}
