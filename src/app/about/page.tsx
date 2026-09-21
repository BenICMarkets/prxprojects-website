import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import { business } from "@/content/business";
import { process, reasons } from "@/content/site";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About PRX Projects, Renovation Contractors in Pretoria",
  description:
    "PRX Projects is a Pretoria renovation and building contractor managing bathrooms, kitchens, home renovations and extensions with one point of contact.",
  path: "/about/",
});

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">About PRX Projects</h1>
      <p className="mt-4 text-lg text-stone-800">
        PRX Projects is a renovation and building contractor based in Pretoria. We manage
        bathrooms, kitchens, full-home renovations, extensions and building work in{" "}
        {business.serviceArea}, and we also take on office and small commercial refurbishments.
      </p>
      <p className="mt-4 text-stone-800">
        {business.shortLine} Most renovation problems come from unclear scope and trades working
        out of order, so we put the scope in writing, quote it item by item and coordinate the
        trades ourselves.
      </p>

      <h2 className="mt-12 text-2xl font-bold">How we work</h2>
      <ul className="mt-4 space-y-4">
        {reasons.map((r) => (
          <li key={r.title}>
            <h3 className="font-semibold">{r.title}</h3>
            <p className="text-stone-700">{r.text}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold">Our process</h2>
      <ol className="mt-4 space-y-3">
        {process.map((s, i) => (
          <li key={s.title}>
            <span className="font-semibold">
              {i + 1}. {s.title}.
            </span>{" "}
            {s.text}
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <CtaRow />
      </div>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
    </div>
  );
}
