import Link from "next/link";
import { business, whatsappHref } from "@/content/business";

export default function CtaRow({ dark = false }: { dark?: boolean }) {
  const secondary = dark
    ? "border border-stone-400 text-white hover:bg-white/10"
    : "border border-ink text-ink hover:bg-stone-100";
  const base = "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold";
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/contact/#quote" className={`${base} bg-accent text-white hover:bg-accent-dark`}>
        Request a Quote
      </Link>
      <a href={`tel:${business.phone.tel}`} data-event="phone_click" className={`${base} ${secondary}`}>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 shrink-0"
        >
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.2Z" />
        </svg>
        Call Now
      </a>
      <a
        href={whatsappHref()}
        data-event="whatsapp_click"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${secondary}`}
      >
        WhatsApp
      </a>
    </div>
  );
}
