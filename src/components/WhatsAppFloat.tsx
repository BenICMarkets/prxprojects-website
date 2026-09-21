import { business, whatsappHref } from "@/content/business";

// Floating WhatsApp button shown on every page, bottom-right. Raised above the
// mobile sticky action bar (see StickyBar.tsx) so the two never overlap.
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref(undefined, business.whatsappFloat.number)}
      target="_blank"
      rel="noopener noreferrer"
      data-event="whatsapp_click"
      aria-label="Chat with PRX Projects on WhatsApp"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:bottom-6 md:right-6"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.694 4.611 1.898 6.484L4 29l7.68-1.865A11.94 11.94 0 0 0 16 27c6.628 0 12-5.373 12-12S22.63 3 16.001 3Zm.006 21.75c-1.82 0-3.55-.487-5.05-1.34l-.362-.21-4.56 1.108 1.127-4.44-.236-.373A9.71 9.71 0 0 1 5.25 15c0-5.93 4.82-10.75 10.75-10.75S26.75 9.07 26.75 15 21.93 24.75 16.007 24.75Zm5.913-8.02c-.324-.163-1.917-.947-2.213-1.055-.297-.108-.513-.163-.729.163-.216.325-.838 1.055-1.027 1.27-.19.217-.379.244-.703.082-.324-.163-1.368-.504-2.606-1.607-.964-.86-1.615-1.923-1.804-2.248-.19-.325-.02-.5.143-.663.146-.146.324-.379.487-.569.163-.19.216-.325.324-.542.108-.217.054-.406-.027-.569-.081-.163-.729-1.756-.999-2.406-.263-.632-.53-.546-.729-.556l-.62-.011c-.216 0-.567.081-.865.406-.297.325-1.135 1.108-1.135 2.703 0 1.594 1.161 3.135 1.323 3.352.163.217 2.288 3.493 5.545 4.899.775.334 1.379.534 1.85.684.777.247 1.484.212 2.043.129.623-.093 1.917-.783 2.187-1.539.27-.756.27-1.404.19-1.539-.081-.135-.297-.216-.622-.379Z" />
      </svg>
    </a>
  );
}
