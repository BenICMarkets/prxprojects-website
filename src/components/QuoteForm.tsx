"use client";

import { useEffect, useRef, useState } from "react";
import { business, whatsappHref } from "@/content/business";
import { projectTypes } from "@/content/site";

// Formspree form ID: set NEXT_PUBLIC_FORMSPREE_ID in Vercel. The form is a normal HTML
// POST, so it still submits without JavaScript; JS only adds the inline success message.
const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const endpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : "";

type Status = "idle" | "sending" | "sent" | "error";

function track(event: string) {
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  (w.dataLayer ??= []).push({ event, page: location.pathname });
}

export default function QuoteForm({ heading = "Request a quote or site visit" }: { heading?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const started = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Attach landing page and campaign source to the lead (only possible with JS).
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const params = new URLSearchParams(location.search);
    const set = (name: string, value: string) => {
      const el = form.elements.namedItem(name) as HTMLInputElement | null;
      if (el) el.value = value;
    };
    set("landing_page", location.pathname);
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      set(key, params.get(key) ?? "");
    }
    set("submitted_at", new Date().toISOString());
  }, []);

  function onStart() {
    if (started.current) return;
    started.current = true;
    track("quote_form_start");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!endpoint) {
      e.preventDefault();
      setStatus("error");
      return;
    }
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        track("quote_form_submit");
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-1 min-h-11 w-full rounded-md border border-stone-400 bg-white px-3 py-2 text-base";

  if (status === "sent") {
    return (
      <div id="quote" role="status" className="rounded-lg border border-green-700 bg-green-50 p-6">
        <h2 className="text-xl font-bold text-green-900">Thank you, we have your request</h2>
        <p className="mt-2 text-green-900">
          We will call or WhatsApp you to arrange a site visit. If you have photos of the space,
          you can send them on{" "}
          <a className="underline" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{" "}
          to help us prepare.
        </p>
      </div>
    );
  }

  return (
    <form
      id="quote"
      ref={formRef}
      action={endpoint || undefined}
      method="POST"
      onSubmit={onSubmit}
      onFocusCapture={onStart}
      className="space-y-4 rounded-lg border border-stone-300 bg-white p-6"
    >
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-sm text-stone-700">
        Tell us briefly what you want done. No email needed. We will call or WhatsApp you.
      </p>
      <div>
        <label htmlFor="q-name" className="text-sm font-semibold">
          Name <span aria-hidden="true">*</span>
        </label>
        <input id="q-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="q-phone" className="text-sm font-semibold">
          Mobile / WhatsApp number <span aria-hidden="true">*</span>
        </label>
        <input
          id="q-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          autoComplete="tel"
          minLength={9}
          className={field}
        />
      </div>
      <div>
        <label htmlFor="q-suburb" className="text-sm font-semibold">
          Suburb <span aria-hidden="true">*</span>
        </label>
        <input id="q-suburb" name="suburb" required autoComplete="address-level2" className={field} />
      </div>
      <div>
        <label htmlFor="q-type" className="text-sm font-semibold">
          Project type <span aria-hidden="true">*</span>
        </label>
        <select id="q-type" name="project_type" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose one
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="q-message" className="text-sm font-semibold">
          Tell us briefly what you want done <span aria-hidden="true">*</span>
        </label>
        <textarea id="q-message" name="message" required rows={4} className={field} />
      </div>

      {/* Lead metadata and honeypot (real visitors never see the honeypot) */}
      <input type="hidden" name="landing_page" />
      <input type="hidden" name="submitted_at" />
      <input type="hidden" name="utm_source" />
      <input type="hidden" name="utm_medium" />
      <input type="hidden" name="utm_campaign" />
      <input type="hidden" name="utm_term" />
      <input type="hidden" name="utm_content" />
      <input type="hidden" name="_subject" value="New quote request: PRX Projects website" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 w-full rounded-md bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request My Site Visit"}
      </button>

      {status === "error" && (
        <p role="alert" className="rounded-md border border-red-700 bg-red-50 p-3 text-sm text-red-900">
          Sorry, your request did not send. Please call{" "}
          <a className="font-semibold underline" href={`tel:${business.phone.tel}`}>
            {business.phone.display}
          </a>{" "}
          or message us on{" "}
          <a
            className="font-semibold underline"
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          .
        </p>
      )}
    </form>
  );
}
