import Link from "next/link";
import { business, whatsappHref } from "@/content/business";

// Mobile-only action bar. Pure CSS/HTML, no JavaScript needed.
export default function StickyBar() {
  const cell = "flex min-h-12 items-center justify-center text-sm font-semibold";
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-stone-300 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a href={`tel:${business.phone.tel}`} data-event="phone_click" className={`${cell} text-ink`}>
        Call
      </a>
      <a
        href={whatsappHref()}
        data-event="whatsapp_click"
        target="_blank"
        rel="noopener noreferrer"
        className={`${cell} border-x border-stone-300 text-ink`}
      >
        WhatsApp
      </a>
      <Link href="/contact/#quote" className={`${cell} bg-accent text-white`}>
        Get a Quote
      </Link>
    </nav>
  );
}
