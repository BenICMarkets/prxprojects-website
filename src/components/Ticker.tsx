import { business } from "@/content/business";

const items = [
  "Renovation & Building Contractors",
  `Call ${business.phone.display}`,
  `Serving ${business.serviceArea}`,
  business.name,
];

export default function Ticker() {
  const line = items.join("  ·  ") + "  ·  ";
  return (
    <div className="overflow-hidden border-b border-stone-800 bg-black py-2 text-white">
      <div className="animate-ticker flex w-max whitespace-nowrap text-xs font-semibold uppercase tracking-wider">
        <span className="px-4">{line}</span>
        <span className="px-4" aria-hidden="true">
          {line}
        </span>
      </div>
    </div>
  );
}
