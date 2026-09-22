// Business facts. Anything not yet confirmed by Ben stays null and is never rendered.
// PRX Projects is presented as its own brand. Do not add claims (registrations,
// years of experience, awards, reviews) until they are confirmed for PRX Projects.

export const business = {
  name: "PRX Projects",
  legalName: null as string | null, // TODO confirm
  url: "https://prxprojects.co.za",
  headline: "Renovation & Building Contractors in Pretoria",
  subheadline:
    "PRX Projects manages bathrooms, kitchens, full-home renovations, extensions and building work across Pretoria East, Centurion and surrounding areas.",
  shortLine: "One team. Clear scope. Managed from start to finish.",
  phone: { tel: "+27120019429", display: "012 001 9429" },
  whatsapp: { number: "27825690850", display: "082 569 0850" },
  // Floating WhatsApp button (every page, bottom-right). Separate from the main
  // WhatsApp number above at Ben's request — update here if it should match.
  whatsappFloat: { number: "27799008949", display: "079 900 8949" },
  // Working value from the brief; swap for a PRX-branded address when available.
  email: "admin@plexirenovations.co.za",
  serviceArea: "Pretoria East, Centurion and surrounding areas",
  areaServed: ["Pretoria East", "Centurion", "Pretoria"],
  // Public street address and hours are unconfirmed, so they are not published.
  address: null as string | null,
  hours: null as string | null,
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61582523463885" as string | null,
    instagram: "https://www.instagram.com/prx_construction/" as string | null,
    tiktok: "https://www.tiktok.com/@prxprojects" as string | null,
  },
  // Real PRX Projects logo, supplied by Ben. Transparent PNG for the white
  // header; a white-bg JPEG fallback also lives at prx-logo-white-bg.jpg.
  logo: {
    src: "/images/prx-logo.png",
    alt: "PRX Projects logo",
    width: 721,
    height: 243,
  },
  // Full-bleed homepage hero background (real PRX/Plexi project photo, dark
  // overlay applied in the hero section, not shown as a boxed photo).
  heroImage: {
    src: "/images/projects/home-renovation-living-area-pretoria-01.jpg",
    alt: "",
    width: 1600,
    height: 1200,
  } as { src: string; alt: string; width: number; height: number } | null,
  // Default social-share image (Facebook/WhatsApp/Twitter link previews). Real
  // project photo — a wide exterior shot works better than a portrait/square crop.
  defaultOgImage: {
    src: "/images/projects/commercial-glazing-installation-menlyn-pretoria-01.jpg",
    alt: "Aluminium-framed glazing installed along a commercial building facade in Menlyn, Pretoria",
    width: 1421,
    height: 800,
  },
};

export function whatsappHref(
  message = "Hi PRX Projects, I'd like to discuss a renovation project.",
  number = business.whatsapp.number,
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return `${business.url}${path === "/" ? "" : path}`;
}

// Only true when Ben decides the site should be indexed (set SITE_INDEXABLE=true
// in Vercel Production). Previews and local builds stay noindex by default.
export const indexable = process.env.SITE_INDEXABLE === "true";
