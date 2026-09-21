import type { Metadata } from "next";
import { business } from "@/content/business";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "How PRX Projects collects and uses the information you send through this website.",
  path: "/privacy/",
});

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-stone-800">
        <p>
          This page explains what information {business.name} collects through this website and
          what we do with it.
        </p>
        <h2 className="pt-4 text-xl font-bold">What we collect</h2>
        <p>
          When you send the quote form we receive the details you type in: your name, mobile or
          WhatsApp number, suburb, project type and a short description. We also record the page
          you sent it from and, where present, the campaign source in the link you used.
        </p>
        <h2 className="pt-4 text-xl font-bold">How we use it</h2>
        <p>
          We use it to contact you about your enquiry and to prepare a quote. We do not sell it.
        </p>
        <h2 className="pt-4 text-xl font-bold">Who processes it</h2>
        <p>
          Form submissions are delivered to us through Formspree, a form-handling service. If
          website analytics are switched on, we use Google Analytics to count visits and clicks on
          our call and WhatsApp buttons.
        </p>
        <h2 className="pt-4 text-xl font-bold">Your rights</h2>
        <p>
          You can ask us what information we hold about you, and ask us to correct or delete it.
          Contact us at{" "}
          <a className="underline" href={`mailto:${business.email}`}>
            {business.email}
          </a>{" "}
          or {business.phone.display}.
        </p>
      </div>
    </div>
  );
}
