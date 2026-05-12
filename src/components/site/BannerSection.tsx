import Image from "next/image";
import { themedImage, type ThemedImageKey } from "@/content/themedImages";

type BannerSectionProps = {
  id?: string;
  title: string;
  body: string[];
  imageKey: ThemedImageKey;
  eyebrow?: string;
  imageSide?: "left" | "right";
};

export function BannerSection({
  id,
  title,
  body,
  imageKey,
  eyebrow,
  imageSide = "right",
}: BannerSectionProps) {
  const img = themedImage(imageKey);
  const isImageRight = imageSide === "right";

  return (
    <section
      id={id}
      className="grid scroll-mt-24 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-16"
    >
      <div
        className={[
          "relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[320px] md:h-[380px] lg:h-[440px]",
          isImageRight ? "md:order-2" : "md:order-1",
        ].join(" ")}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
      </div>

      <div className={isImageRight ? "md:order-1" : "md:order-2"}>
        {eyebrow ? (
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c41e3a]">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-3 text-[1.6rem] font-semibold leading-[1.2] text-neutral-900 md:text-[1.85rem] lg:text-[2rem]">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-[15.5px] leading-[1.7] text-neutral-700 md:text-base">
          {body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BannerSectionsList({
  sections,
}: {
  sections: Array<{
    id?: string;
    title: string;
    body: string[];
    imageKey: ThemedImageKey;
    eyebrow?: string;
  }>;
}) {
  return (
    <div className="space-y-20 lg:space-y-24">
      {sections.map((s, i) => (
        <BannerSection
          key={s.id ?? s.title}
          id={s.id}
          title={s.title}
          body={s.body}
          imageKey={s.imageKey}
          eyebrow={s.eyebrow}
          imageSide={i % 2 === 0 ? "right" : "left"}
        />
      ))}
    </div>
  );
}
