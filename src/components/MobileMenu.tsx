"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const pathname = usePathname();
  // Menu is "open" only for the page it was opened on, so navigating closes it.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpenFor(open ? null : pathname)}
        className="min-h-11 rounded-md border border-stone-300 px-4 text-sm font-semibold"
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-stone-200 bg-white px-4 pb-4 shadow-md"
      >
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block py-3 text-base font-medium">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
