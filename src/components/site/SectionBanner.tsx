import type { ReactNode } from "react";

type SectionBannerProps = {
  title: string;
  body?: string;
  children?: ReactNode;
  align?: "left" | "center";
  /** Inline padding offset on the *left* side (visual gutter, mirroring Aluko style) */
  inset?: "none" | "sm" | "md";
  tone?: "wine" | "navy" | "ink";
};

const TONE_BG: Record<NonNullable<SectionBannerProps["tone"]>, string> = {
  wine: "#8a1538",
  navy: "#0f2a44",
  ink: "#1f1f1f",
};

/**
 * Full-bleed banner section with a subtle diagonal-dash pattern overlay,
 * left vertical rule, and large uppercase title — modelled on Aluko & Oyebode style.
 */
export function SectionBanner({
  title,
  body,
  children,
  align = "left",
  inset = "md",
  tone = "wine",
}: SectionBannerProps) {
  const bg = TONE_BG[tone];

  const insetPaddingLeft =
    inset === "none"
      ? "pl-6 md:pl-10 lg:pl-14"
      : inset === "sm"
      ? "pl-10 md:pl-16 lg:pl-24"
      : "pl-10 md:pl-20 lg:pl-32";

  return (
    <section
      className={[
        "relative w-full overflow-hidden",
        "py-16 md:py-20 lg:py-24",
        align === "center" ? "text-center" : "",
      ].join(" ")}
      style={{ backgroundColor: bg }}
      aria-label={title}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.55) 0 2px, transparent 2px 14px)",
          backgroundSize: "auto",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(0,0,0,0.5) 0 1px, transparent 1px 28px)",
        }}
      />

      <div
        className={[
          "relative z-[1] mx-auto max-w-[1180px] pr-6 md:pr-10 lg:pr-16",
          insetPaddingLeft,
        ].join(" ")}
      >
        <div
          className={[
            align === "center" ? "mx-auto" : "",
            "max-w-[760px] border-l-2 border-white/85",
            align === "center" ? "pl-6" : "pl-6 md:pl-8",
          ].join(" ")}
        >
          <h2 className="font-light uppercase leading-[1.06] tracking-[0.02em] text-white text-[34px] sm:text-[40px] md:text-[48px] lg:text-[56px]">
            {title}
          </h2>
          {body ? (
            <p className="mt-6 max-w-[640px] text-[15.5px] leading-[1.75] text-white/95 md:text-[16px]">
              {body}
            </p>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

type QuoteBannerSlide = {
  quote: string;
  source: string;
};

type QuoteBannerProps = {
  slides: QuoteBannerSlide[];
};

/**
 * Wine-red quote panel with gold accent rule and a static dots row — visual
 * companion to SectionBanner, modelled on the recognition strip in screenshot 2.
 */
export function QuoteBanner({ slides }: QuoteBannerProps) {
  if (!slides.length) return null;
  const active = slides[0]!;

  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-24 lg:py-28"
      style={{ backgroundColor: "#8a1538" }}
      aria-label="Recognition"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.55) 0 2px, transparent 2px 14px)",
        }}
      />

      <div className="relative z-[1] mx-auto grid max-w-[1180px] grid-cols-[1fr_auto] items-center gap-8 px-6 md:px-12 lg:px-16">
        <div className="border-l-2 border-[#e6c34d] pl-6 md:pl-8">
          <p className="font-light leading-[1.32] text-white text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
            “{active.quote}”
          </p>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
            {active.source}
          </p>
        </div>
        <div className="hidden gap-3 md:flex md:flex-col">
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white/80"
          >
            &lsaquo;
          </span>
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white/80"
          >
            &rsaquo;
          </span>
        </div>
      </div>

      <div className="relative z-[1] mt-12 flex justify-center gap-3 px-6">
        {slides.map((s, i) => (
          <span
            key={s.source}
            aria-hidden
            className="block h-[2px] w-10"
            style={{ backgroundColor: i === 0 ? "#e6c34d" : "rgba(255,255,255,0.45)" }}
          />
        ))}
      </div>
    </section>
  );
}
