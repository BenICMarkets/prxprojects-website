"use client";

import { useEffect } from "react";
import Script from "next/script";

type DL = { push: (e: Record<string, unknown>) => void };

// Loads Google Analytics only when NEXT_PUBLIC_GA_ID is set, and forwards clicks on
// elements carrying data-event (phone_click, whatsapp_click) to the data layer.
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest("[data-event]");
      const name = el?.getAttribute("data-event");
      if (!name) return;
      const w = window as unknown as { dataLayer?: DL };
      (w.dataLayer ??= [] as unknown as DL).push({ event: name, page: location.pathname });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!gaId) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
      </Script>
    </>
  );
}
