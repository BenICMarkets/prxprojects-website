import Link from "next/link";
import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { services } from "@/content/services";

export const metadata: Metadata = pageMeta({
  title: "Renovation & Building Services Pretoria",
  description:
    "PRX Projects renovation and building services in Pretoria: home renovations, bathrooms, kitchens, extensions, waterproofing, commercial work and painting.",
  path: "/services/",
});

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">Renovation and Building Services in Pretoria</h1>
      <p className="mt-3 max-w-2xl text-stone-700">
        One team managing the work and the trades, from the first site visit to handover.
      </p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <li key={s.slug} className="flex flex-col rounded-lg border border-stone-300 p-6">
            <h2 className="text-xl font-semibold">{s.navLabel}</h2>
            <p className="mt-2 flex-1 text-stone-700">{s.cardText}</p>
            <Link
              href={`/services/${s.slug}/`}
              className="mt-4 font-semibold text-accent underline hover:text-accent-dark"
            >
              {s.h1}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <CtaRow />
      </div>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ])}
      />
    </div>
  );
}
