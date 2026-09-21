import Image from "next/image";

type Props = {
  src: string | null;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

// Renders a real optimised image when `src` is set, otherwise a neutral
// placeholder so the layout is complete before photos are supplied.
export default function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: Props) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-200 to-stone-400 ${className}`}
      >
        <span className="text-xs font-medium uppercase tracking-widest text-stone-600">
          Photo coming soon
        </span>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
