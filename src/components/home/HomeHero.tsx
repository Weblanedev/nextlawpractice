"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { HERO_SLIDES } from "@/content/heroSlides";

const INTERVAL_MS = 7000;

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const slide = useMemo(() => HERO_SLIDES[index] ?? HERO_SLIDES[0]!, [index]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((v) => (v + 1) % HERO_SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full bg-[#0c1a2e]">
      <div className="relative h-[400px] overflow-hidden md:h-[460px] lg:h-[540px]">
        {HERO_SLIDES.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={`${s.bgImage}-${i}`}
              className={[
                "absolute inset-0 transition-opacity duration-[1000ms] ease-in-out",
                active ? "z-[1] opacity-100" : "z-0 opacity-0",
              ].join(" ")}
              aria-hidden={!active}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={s.bgImage}
                  alt=""
                  fill
                  className="scale-[1.12] object-cover blur-md brightness-90"
                  sizes="100vw"
                  priority={i === 0}
                  quality={80}
                />
              </div>
              <div className="absolute inset-0 bg-[#1a3a5c]/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

              <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[46%] md:block lg:w-[42%]">
                <div className="flex h-full items-center justify-center pr-6 lg:pr-12">
                  <div className="relative aspect-square w-[min(72%,380px)] overflow-hidden rounded-full border-[6px] border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                    <Image
                      src={s.circleImage}
                      alt=""
                      fill
                      className="object-cover object-center contrast-110 saturate-75"
                      sizes="(max-width: 1024px) 0px, 380px"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/25 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="relative z-[3] flex h-full items-center px-6 py-10 md:px-10 lg:px-14">
          <div className="max-w-[min(100%,440px)] bg-black/50 px-8 py-9 backdrop-blur-[3px] md:px-10 md:py-10">
            <div className="text-[32px] font-normal leading-[1.12] tracking-tight text-white md:text-[40px] lg:text-[44px]">
              {slide.emphasize ? (
                <>
                  {slide.emphasize.before}
                  <em className="font-serif italic">{slide.emphasize.italic}</em>
                  {slide.emphasize.after}
                </>
              ) : (
                slide.title
              )}
            </div>
            {slide.subtitle ? (
              <p className="mt-4 text-base font-light leading-snug tracking-wide text-white/90 md:text-lg">
                {slide.subtitle}
              </p>
            ) : null}
            <Link
              href={slide.href}
              className="mt-5 inline-block text-sm font-semibold text-[#c41e3a] hover:text-[#a01830]"
            >
              {slide.cta}
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-5 z-[3] flex justify-center gap-2.5">
          {HERO_SLIDES.map((_, i) => {
            const isActive = i === index;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  isActive ? "bg-neutral-700" : "bg-white/50 hover:bg-white/70",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
