import type { ReactNode } from "react";

export type EditorialTextSectionProps = {
  eyebrow: string;
  title: ReactNode;
  body: string[];
  /** Match homepage editorial rhythm: first block left, second right. */
  align?: "left" | "right";
  tone?: "white" | "cream";
};

/**
 * Text-only block using the same typography as the homepage “Our People”
 * editorial split (no image column).
 */
export function EditorialTextSection({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "white",
}: EditorialTextSectionProps) {
  const bgClass = tone === "cream" ? "bg-[#faf7f2]" : "bg-white";
  const textCol =
    align === "right"
      ? "ml-auto lg:pr-10 xl:pr-14"
      : "lg:ml-8 lg:mr-auto xl:ml-12";

  return (
    <section className={`-mx-6 px-6 md:-mx-10 md:px-10 lg:-mx-12 lg:px-12 ${bgClass}`}>
      <div className="py-16 md:py-20 lg:min-h-[420px] lg:py-28">
        <div className={`w-full max-w-[540px] ${textCol}`}>
          <div className="flex items-center gap-4">
            <span className="font-serif text-[20px] italic text-neutral-900">{eyebrow}</span>
            <span aria-hidden className="h-[2px] w-12 bg-[#c41e3a]" />
          </div>
          <h2 className="mt-6 font-serif text-[2.2rem] font-semibold leading-[1.06] text-neutral-900 md:text-[2.8rem] lg:text-[3.1rem]">
            {title}
          </h2>
          <div className="mt-7 space-y-5 text-[17px] leading-[1.8] text-neutral-700">
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
