import Image from "next/image";
import { assetImageAt } from "@/content/assetImages";

export function AssetImage({
  index,
  alt,
  className = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 100vw, 480px",
  rounded = true,
  priority = false,
}: {
  index: number;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  rounded?: boolean;
  priority?: boolean;
}) {
  const src = assetImageAt(index);
  return (
    <div
      className={`relative h-full w-full min-h-[1px] overflow-hidden ${rounded ? "rounded-lg" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${imageClassName}`}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
