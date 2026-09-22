import Image from "next/image";
import Link from "next/link";
import { business } from "@/content/business";
import { projects } from "@/content/site";
import MobileMenu from "./MobileMenu";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  ...(projects.length ? [{ href: "/projects/", label: "Projects" }] : []),
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center" aria-label={business.name}>
          <Image
            src={business.logo.src}
            alt={business.logo.alt}
            width={business.logo.width}
            height={business.logo.height}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium text-stone-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${business.phone.tel}`}
            data-event="phone_click"
            className="rounded-md border border-ink px-4 py-2 text-sm font-semibold hover:bg-stone-100"
          >
            Call Now {business.phone.display}
          </a>
          <Link
            href="/contact/#quote"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            Get a Quote
          </Link>
        </div>
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
