import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes: string;
};

// Real images only. Do not render this without a genuine project photo.
export default function Photo({ src, alt, width, height, className = "", priority = false, sizes }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={`h-auto w-full object-cover ${className}`}
    />
  );
}
