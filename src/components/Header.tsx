import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight text-ink">
          PRX<span className="text-accent">Projects</span>
        </Link>
        <nav aria-label="Main" className="order-3 w-full sm:order-2 sm:w-auto">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-stone-700">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`tel:${site.phone}`}
          className="order-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-dark sm:order-3"
        >
          {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
