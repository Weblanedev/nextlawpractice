import Link from "next/link";
import type { ReactNode } from "react";
import { AssetImage } from "@/components/site/AssetImage";
import { QuoteBanner, SectionBanner } from "@/components/site/SectionBanner";
import { HOME_LATEST_NEWS } from "@/content/homePage";
import { SITE } from "@/content/site";

type EditorialCta = { label: string; href: string; primary?: boolean };

type EditorialSectionProps = {
  eyebrow: string;
  title: ReactNode;
  body: string[];
  ctas: EditorialCta[];
  imageIndex: number;
  imageAlt?: string;
  imageSide?: "left" | "right";
  /** Subtle bg shading to give adjacent sections visual rhythm. */
  tone?: "white" | "cream";
};

function EditorialSection({
  eyebrow,
  title,
  body,
  ctas,
  imageIndex,
  imageAlt = "",
  imageSide = "right",
  tone = "white",
}: EditorialSectionProps) {
  const textOrderClass = imageSide === "right" ? "lg:order-1" : "lg:order-2";
  const imageOrderClass = imageSide === "right" ? "lg:order-2" : "lg:order-1";
  const textBlockAlign =
    imageSide === "right"
      ? "lg:ml-auto lg:pr-10 xl:pr-14"
      : "lg:mr-auto lg:pl-10 xl:pl-14";
  const bgClass = tone === "cream" ? "bg-[#faf7f2]" : "bg-white";

  return (
    <section className={`w-full ${bgClass}`}>
      <div className="grid items-stretch lg:grid-cols-2">
        <div
          className={[
            "flex min-h-[420px] items-center px-6 py-16 md:px-10 md:py-20 lg:min-h-[620px] lg:py-28",
            textOrderClass,
          ].join(" ")}
        >
          <div className={`w-full max-w-[540px] ${textBlockAlign}`}>
            <div className="flex items-center gap-4">
              <span className="font-serif text-[20px] italic text-neutral-900">
                {eyebrow}
              </span>
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
            <div className="mt-9 flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.primary
                      ? "inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                      : "inline-flex items-center gap-2 rounded-full border border-black px-7 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white"
                  }
                >
                  {cta.label} <span aria-hidden>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          className={[
            "relative min-h-[420px] bg-neutral-100 lg:min-h-[620px]",
            imageOrderClass,
          ].join(" ")}
        >
          <AssetImage
            index={imageIndex}
            alt={imageAlt}
            rounded={false}
            sizes="(max-width: 1024px) 100vw, 50vw"
            imageClassName="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function MosaicDivider() {
  const colors = [
    "#6b4c3b",
    "#8f7a5e",
    "#6b4c3b",
    "#8f7a5e",
    "#6b4c3b",
    "#8f7a5e",
    "#6b4c3b",
    "#8f7a5e",
  ];
  return (
    <div className="flex flex-wrap gap-1 py-1">
      {colors.map((c, i) => (
        <div key={i} className="h-2 w-10 shrink-0 rounded-[1px]" style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c41e3a]">
      {children}
    </div>
  );
}

export function HomePageBody() {
  const brand = SITE.name;

  return (
    <div className="bg-white pb-20 pt-0">
      <SectionBanner
        title="International Standards, Local Expertise"
        body="Clients come to NEXTLAW for deep knowledge of the law alongside a working understanding of the industries they operate in, built through direct experience, not academic distance."
      />

      <div className="mx-auto max-w-[1080px] px-6 lg:px-10">
        <div className="pt-8">
          <MosaicDivider />
        </div>

        {/* News and publications */}
        <section className="mt-14 border-t border-black/10 pt-16">
          <SectionEyebrow>News and publications</SectionEyebrow>
          <h2 className="mt-4 max-w-[820px] font-serif text-[2rem] font-semibold leading-[1.15] text-neutral-900 md:text-[2.5rem] lg:text-[2.75rem]">
            What we are reading, writing, and watching across Service law.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {HOME_LATEST_NEWS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group block border-t-2 border-neutral-900 bg-white pt-7 transition hover:border-[#c41e3a]"
              >
                <time className="text-[12px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                  {item.dateLabel}
                </time>
                <h3 className="mt-4 text-[1.45rem] font-semibold leading-[1.25] text-neutral-900 group-hover:text-[#c41e3a] md:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="mt-5 text-[16px] leading-[1.7] text-neutral-700 md:text-[17px]">
                  {item.summary}
                </p>
                <span className="mt-6 inline-block text-sm font-semibold text-[#c41e3a] group-hover:text-[#a01830]">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/insights"
              className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white"
            >
              All news and publications &rarr;
            </Link>
          </div>
        </section>

      </div>

      {/* About: editorial split */}
      <EditorialSection
        eyebrow="About Us"
        title="A law firm built for the work that follows the headlines."
        body={[
          `${brand} advises on the transactions, disputes, and regulatory questions that shape how business gets done. Our work spans corporate and finance, energy and natural resources, real estate, technology, tax, and dispute resolution.`,
          "We combine rigorous technical work with practical judgment, so decisions hold up under scrutiny from boards, regulators, and counterparties, and so clients can act on advice, not just receive it.",
        ]}
        ctas={[
          { label: "Who we are", href: "/about-us", primary: true },
          { label: "Responsible business", href: "/about-us#responsible-business" },
        ]}
        imageIndex={5}
        imageSide="right"
      />

      {/* Brand banner */}
      <QuoteBanner
        slides={[
          {
            quote:
              "Rigorous technical work paired with practical judgment, advice clients can act on, not just receive.",
            source: SITE.name,
          },
          {
            quote:
              "From banking and finance to energy, real estate, tax and disputes, we work on the matters that shape how business gets done.",
            source: SITE.name,
          },
        ]}
      />

      {/* Our people: editorial split, image on the right */}
      <EditorialSection
        eyebrow="Our People"
        title="Partner-led teams. Long-running mandates. Clear ownership."
        body={[
          "We field partner-led teams across corporate, finance, disputes, energy, tax, and investigations.",
          "Associates and counsel are developed deliberately, so clients see continuity on the matters that matter, and so the partner you brief is the partner you hear from.",
        ]}
        ctas={[
          { label: "Meet the team", href: "/our-people", primary: true },
          { label: "Attorney directory", href: "/attorneys" },
        ]}
        imageIndex={4}
        imageSide="right"
      />
    </div>
  );
}
