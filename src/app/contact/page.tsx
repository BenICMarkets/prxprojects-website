import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { business, whatsappHref } from "@/content/business";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Us, Request a Quote in Pretoria",
  description:
    "Call, WhatsApp or send a quote request to PRX Projects for renovation and building work in Pretoria East, Centurion and surrounding areas.",
  path: "/contact/",
});

export default function Contact() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold sm:text-4xl">Contact PRX Projects</h1>
        <p className="mt-3 text-stone-800">
          Call, WhatsApp or send the quote form. We will arrange a site visit and follow up with an
          itemised quote.
        </p>
        <dl className="mt-8 space-y-5">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-accent">Phone</dt>
            <dd>
              <a
                href={`tel:${business.phone.tel}`}
                data-event="phone_click"
                className="text-lg font-semibold underline"
              >
                {business.phone.display}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-accent">WhatsApp</dt>
            <dd>
              <a
                href={whatsappHref()}
                data-event="whatsapp_click"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold underline"
              >
                {business.whatsapp.display}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-accent">Email</dt>
            <dd>
              <a href={`mailto:${business.email}`} className="underline">
                {business.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-accent">Service area</dt>
            <dd>{business.serviceArea}</dd>
          </div>
        </dl>
      </div>
      <QuoteForm />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
    </div>
  );
}
