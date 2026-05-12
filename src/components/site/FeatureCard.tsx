import Image from "next/image";
import Link from "next/link";
import { themedImage, type ThemedImageKey } from "@/content/themedImages";

type FeatureCardProps = {
  title: string;
  body: string[];
  imageKey?: ThemedImageKey;
  eyebrow?: string;
  href?: string;
  ctaLabel?: string;
  variant?: "stack" | "split";
};

export function FeatureCard({
  title,
  body,
  imageKey,
  eyebrow,
  href,
  ctaLabel,
  variant = "stack",
}: FeatureCardProps) {
  const img = imageKey ? themedImage(imageKey) : null;
  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...(wrapperProps as { href: string })}
      className={[
        "group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.03)] transition",
        href ? "hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)]" : "",
        variant === "split" ? "md:flex-row" : "",
      ].join(" ")}
    >
      {img ? (
        <div
          className={[
            "relative overflow-hidden bg-neutral-100",
            variant === "split"
              ? "h-56 w-full md:h-auto md:w-[44%] md:shrink-0"
              : "h-60 w-full lg:h-64",
          ].join(" ")}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 480px"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          {eyebrow ? (
            <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              {eyebrow}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col gap-4 p-7 lg:p-9">
        {!img && eyebrow ? (
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c41e3a]">
            {eyebrow}
          </div>
        ) : null}

        <h3 className="text-[1.35rem] font-semibold leading-snug text-neutral-900 lg:text-[1.5rem]">
          {title}
        </h3>

        {body.length ? (
          <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        ) : null}

        {href ? (
          <div className="mt-auto pt-2 text-sm font-semibold text-[#c41e3a] group-hover:text-[#a01830]">
            {ctaLabel ?? "Learn more"}
            <span aria-hidden className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
}
