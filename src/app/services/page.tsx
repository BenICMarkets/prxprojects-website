import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: `${site.name} services: kitchen design and cabinetry, vanity and counter tops, house plans and construction, site evaluation, field study and land purchase assistance.`,
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">Our services</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        From the first site study to the final installation, everything in one
        place.
      </p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <li key={s.slug} id={s.slug} className="rounded-lg border border-stone-200 p-6">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-stone-600">{s.text}</p>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-10 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark"
      >
        Request a quote
      </Link>
    </div>
  );
}
