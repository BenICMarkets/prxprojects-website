import { JsonLd } from "@/lib/seo";

// Native <details>: no JavaScript, keyboard accessible.
export default function Faq({
  items,
  heading = "Frequently asked questions",
  id,
}: {
  items: { q: string; a: string }[];
  heading?: string;
  id?: string;
}) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <section aria-labelledby={id ?? "faq-heading"}>
      <h2 id={id ?? "faq-heading"} className="text-2xl font-bold sm:text-3xl">
        {heading}
      </h2>
      <div className="mt-6 divide-y divide-stone-300 border-y border-stone-300">
        {items.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 font-semibold">
              {item.q}
              <span aria-hidden="true" className="text-accent group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-2 max-w-3xl text-stone-700">{item.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={ld} />
    </section>
  );
}
