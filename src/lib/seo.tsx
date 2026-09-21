import type { Metadata } from "next";
import { absoluteUrl, business } from "@/content/business";

export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      siteName: business.name,
      title: absoluteTitle ? title : `${title} | ${business.name}`,
      description,
      url: path,
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// Only fields that are confirmed are included: no ratings, hours, geo, address or IDs.
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${business.url}/#organization`,
    name: business.name,
    url: business.url,
    telephone: business.phone.tel,
    email: business.email,
    areaServed: business.areaServed.map((name) => ({ "@type": "Place", name })),
    ...(business.address ? { address: business.address } : {}),
    sameAs: Object.values(business.social).filter(Boolean),
  };
}
