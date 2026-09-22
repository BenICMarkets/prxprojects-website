import Photo from "@/components/Photo";
import type { BlogBodyBlock } from "@/content/blog";

export default function BlogBody({ blocks }: { blocks: BlogBodyBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="pt-4 text-2xl font-bold">
              {block.text}
            </h2>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={i}>
              <div className="overflow-hidden rounded-lg">
                <Photo
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  sizes="(min-width: 768px) 700px, 100vw"
                />
              </div>
              {block.caption && (
                <figcaption className="mt-2 text-sm text-stone-600">{block.caption}</figcaption>
              )}
            </figure>
          );
        }
        return (
          <p key={i} className="text-lg text-stone-800">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
