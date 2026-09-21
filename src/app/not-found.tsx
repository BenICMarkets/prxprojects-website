import Link from "next/link";
import CtaRow from "@/components/CtaRow";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-bold">We could not find that page</h1>
      <p className="mt-3 text-stone-700">
        It may have moved. Try our{" "}
        <Link href="/services/" className="underline">
          services
        </Link>{" "}
        or get in touch.
      </p>
      <div className="mt-6">
        <CtaRow />
      </div>
    </div>
  );
}
