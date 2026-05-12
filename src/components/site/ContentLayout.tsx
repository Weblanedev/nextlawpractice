import Image from "next/image";
import type { ReactNode } from "react";
import { AssetImage } from "@/components/site/AssetImage";
import { themedImage, type ThemedImageKey } from "@/content/themedImages";

const HERO_HEIGHT = "h-[400px] md:h-[460px] lg:h-[540px]";

function ScrollToContentLink() {
  return (
    <a
      href="#page-content"
      className="absolute inset-x-0 bottom-5 z-[3] flex flex-col items-center gap-2 text-white/95 outline-none ring-offset-2 transition hover:text-white focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">Scroll</span>
      <span
        className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-white/45 bg-black/25 backdrop-blur-[2px]"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </a>
  );
}

type ContentLayoutProps = {
  title: string;
  eyebrow?: string;
  intro?: readonly string[];
  bannerAssetIndex?: number;
  bannerImageKey?: ThemedImageKey;
  contentWidth?: "default" | "wide";
  children: ReactNode;
};

export function ContentLayout({
  title,
  eyebrow,
  intro,
  bannerAssetIndex = 0,
  bannerImageKey,
  contentWidth = "default",
  children,
}: ContentLayoutProps) {
  const heroImg = bannerImageKey ? themedImage(bannerImageKey) : null;
  const widthClass = contentWidth === "wide" ? "max-w-[1180px]" : "max-w-[1080px]";

  return (
    <main className="min-w-0 bg-[#fafaf8] pb-6 lg:pb-10">
      <section className="w-full bg-[#0c1a2e]" aria-labelledby="page-hero-title">
        <div className={`relative ${HERO_HEIGHT} w-full overflow-hidden`}>
          <div className="absolute inset-0 overflow-hidden">
            {heroImg ? (
              <Image
                src={heroImg.src}
                alt={heroImg.alt}
                fill
                priority
                sizes="100vw"
                className="scale-[1.08] object-cover brightness-[0.9]"
              />
            ) : (
              <AssetImage
                index={bannerAssetIndex}
                alt=""
                rounded={false}
                priority
                sizes="100vw"
                imageClassName="scale-[1.08] object-cover brightness-[0.9]"
              />
            )}
          </div>
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[#1a3a5c]/55" />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/65 via-black/30 to-black/20" />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-transparent to-black/30" />

          <div className="relative z-[2] flex h-full flex-col justify-center px-6 pb-20 pt-10 md:px-10 md:pb-24 md:pt-12 lg:px-14 lg:pb-28">
            <div className="max-w-[min(100%,720px)]">
              {eyebrow ? (
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/85">
                  {eyebrow}
                </div>
              ) : null}
              <h1
                id="page-hero-title"
                className="text-[34px] font-normal leading-[1.05] tracking-tight text-white drop-shadow-sm md:text-[44px] lg:text-[52px]"
              >
                {title}
              </h1>
            </div>
          </div>

          <ScrollToContentLink />
        </div>
      </section>

      <div
        id="page-content"
        className={`mx-auto ${widthClass} scroll-mt-6 px-6 pt-14 md:px-10 md:pt-16 lg:px-12 lg:pt-20`}
      >
        {intro?.length ? (
          <div className="max-w-[860px] space-y-5 border-b border-black/[0.08] pb-12 text-[17px] leading-[1.65] text-neutral-700 md:text-[18px] lg:pb-14">
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        ) : null}

        <div className={intro?.length ? "mt-14 lg:mt-16" : "mt-0"}>{children}</div>
      </div>
    </main>
  );
}
