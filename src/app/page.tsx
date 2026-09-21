import Link from "next/link";
import Photo from "@/components/Photo";
import { features, process, projects, services, site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              {site.name}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              {site.headline}
            </h1>
            <p className="mt-4 text-lg text-stone-300">{site.subheadline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark"
              >
                Get a free consultation
              </Link>
              <Link
                href="/portfolio"
                className="rounded-md border border-stone-500 px-6 py-3 font-semibold hover:bg-white/10"
              >
                See our work
              </Link>
            </div>
          </div>
          <Photo
            src={null}
            alt="Featured PRXProjects build"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3] rounded-lg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Our services</h2>
        <p className="mt-2 max-w-2xl text-stone-600">{site.tagline}.</p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <li key={s.slug} className="rounded-lg border border-stone-200 p-6">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{s.text}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/services"
          className="mt-6 inline-block font-semibold text-accent hover:text-accent-dark"
        >
          All services →
        </Link>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">How we work</h2>
          <p className="mt-2 text-stone-600">Three easy steps to your design.</p>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {process.map((step, i) => (
              <li key={step.title} className="rounded-lg bg-white p-6 shadow-sm">
                <span className="text-3xl font-bold text-accent">{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Why PRXProjects</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <li key={f.title}>
              <h3 className="text-lg font-semibold text-accent">{f.title}</h3>
              <p className="mt-2 text-stone-600">{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Recent work</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <li key={p.title}>
                <Photo src={p.image} alt={p.alt} className="aspect-[4/3] rounded-lg" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.category}
                </p>
                <h3 className="font-semibold">{p.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-accent text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-12">
          <h2 className="text-2xl font-bold">You dream it, we design it.</h2>
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 font-semibold text-accent-dark hover:bg-stone-100"
          >
            Start your project
          </Link>
        </div>
      </section>
    </>
  );
}
