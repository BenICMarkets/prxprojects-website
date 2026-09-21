import Link from "next/link";
import { business, whatsappHref } from "@/content/business";

export default function CtaRow({ dark = false }: { dark?: boolean }) {
  const secondary = dark
    ? "border border-stone-400 text-white hover:bg-white/10"
    : "border border-ink text-ink hover:bg-stone-100";
  const base = "inline-flex min-h-12 items-center justify-center rounded-md px-6 py-3 font-semibold";
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/contact/#quote" className={`${base} bg-accent text-white hover:bg-accent-dark`}>
        Request a Quote
      </Link>
      <a href={`tel:${business.phone.tel}`} data-event="phone_click" className={`${base} ${secondary}`}>
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
