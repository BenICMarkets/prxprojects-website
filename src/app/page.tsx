import Link from "next/link";
import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import Faq from "@/components/Faq";
import Photo from "@/components/Photo";
import { business } from "@/content/business";
import { services } from "@/content/services";
import { homeFaqs, process, projects, reasons, reviews, trustStrip, workPhotos } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Renovation Contractors Pretoria | ${business.name}`,
  description:
    "Renovation and building contractors in Pretoria East and Centurion. Bathrooms, kitchens, full-home renovations, extensions and waterproofing managed from site visit to handover.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  const hero = business.heroImage;
  return (
    <>
      <section className="bg-ink text-white">
        <div
          className={`mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:py-20 ${hero ? "md:grid-cols-2" : ""}`}
        >
          <div>
            <h1 className="text-5xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {business.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-stone-200">{business.subheadline}</p>
            <div className="mt-8">
              <CtaRow dark />
            </div>
          </div>
          {hero && (
            <Photo
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="rounded-lg"
            />
          )}
        </div>
      </section>

      <section aria-label="At a glance" className="border-b border-stone-200 bg-muted">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-4 py-4 text-sm font-semibold text-stone-800">
          {trustStrip.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">What we do</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="flex flex-col rounded-lg border border-stone-300 p-6">
              <h3 className="text-lg font-semibold">{s.navLabel}</h3>
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
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Why PRX Projects</h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {reasons.map((r) => (
              <li key={r.title}>
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-stone-700">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {workPhotos.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Our work</h2>
            <Link href="/projects/" className="font-semibold text-accent underline hover:text-accent-dark">
              See more of our work
            </Link>
          </div>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {workPhotos.slice(0, 2).map((p) => (
              <li key={p.slug} className="overflow-hidden rounded-lg border border-stone-300">
                <Photo
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
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
        </section>
      )}

      {projects.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Recent projects</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {projects.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <h3 className="font-semibold">
                  <Link href={`/projects/${p.slug}/`} className="underline">
                    {p.title}
                  </Link>
                </h3>
                <p className="text-sm text-stone-700">
                  {p.area}. {p.summary}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">How a project works</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.title} className="rounded-lg border border-stone-300 p-5">
              <span className="text-2xl font-bold text-accent" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-1 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-stone-700">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Where we work</h2>
          <p className="mt-3 max-w-2xl text-stone-700">
            We are based in Pretoria and work in {business.serviceArea}. Not sure if we cover your
            suburb? Send it to us and we will confirm.
          </p>
        </div>
      </section>

      {reviews.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">What clients say</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <li key={r.name}>
                <blockquote className="text-stone-700">“{r.quote}”</blockquote>
                <p className="mt-2 text-sm font-semibold">{r.name}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mx-auto max-w-6xl px-4 py-16">
        <Faq items={homeFaqs} />
      </div>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Tell us what you want to renovate.</h2>
          <p className="mt-2 text-stone-200">We will arrange a site visit and send an itemised quote.</p>
          <div className="mt-6">
            <CtaRow dark />
          </div>
        </div>
      </section>
    </>
  );
}
