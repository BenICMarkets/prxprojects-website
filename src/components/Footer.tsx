import Link from "next/link";
import { business } from "@/content/business";
import { services } from "@/content/services";

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink pb-16 text-stone-300 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">PRX Projects</p>
          <p className="mt-3 text-sm">{business.shortLine}</p>
          <p className="mt-3 text-sm">Serving {business.serviceArea}.</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="hover:text-white">
                  {s.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${business.phone.tel}`} data-event="phone_click" className="hover:text-white">
                Call {business.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-white">
                {business.email}
              </a>
            </li>
            <li>
              <Link href="/contact/#quote" className="hover:text-white">
                Request a quote
              </Link>
            </li>
            <li>
              <Link href="/privacy/" className="hover:text-white">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-700 py-4 text-center text-xs text-stone-300">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
