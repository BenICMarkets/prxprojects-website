import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Analytics from "@/components/Analytics";
import { business, indexable } from "@/content/business";
import { JsonLd, organizationLd } from "@/lib/seo";

export const viewport: Viewport = { themeColor: "#1c1917" };

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `Renovation Contractors Pretoria | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description: business.subheadline,
  // Previews and unconfirmed builds stay out of search until SITE_INDEXABLE=true.
  robots: indexable ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${GeistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyBar />
        <WhatsAppFloat />
        <Analytics />
        <JsonLd data={organizationLd()} />
      </body>
    </html>
  );
}
