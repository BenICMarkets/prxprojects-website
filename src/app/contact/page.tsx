import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for a free consultation. Call ${site.phoneDisplay} or send us a message.`,
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold">Contact us</h1>
        <p className="mt-2 text-stone-600">
          Tell us about your project and we will get back to you.
        </p>
        <dl className="mt-8 space-y-4">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-accent">
              Phone
            </dt>
            <dd>
              <a href={`tel:${site.phone}`} className="hover:underline">
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-accent">
              Email
            </dt>
            <dd>
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-accent">
              Area
            </dt>
            <dd>{site.areaServed}</dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </div>
  );
}
