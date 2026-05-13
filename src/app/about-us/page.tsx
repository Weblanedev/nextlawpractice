import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { ABOUT_PAGE } from "@/content/pages/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NEXTLAW: a full service law firm advising on corporate, finance, disputes, energy, real estate, tax, and technology across the markets we serve.",
  alternates: { canonical: "/about-us" },
};

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c41e3a]">
      {children}
    </div>
  );
}

export default function AboutUsPage() {
  const {
    vision,
    mission,
    whatWeDo,
    clientCommitment,
    values,
    discoverMore,
    responsibleBusiness,
  } = ABOUT_PAGE;

  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="city"
        eyebrow={ABOUT_PAGE.eyebrow}
        title={ABOUT_PAGE.title}
        intro={ABOUT_PAGE.intro}
      >
        <section className="border-t border-black/[0.08] pt-14 lg:pt-16" id="vision">
          <SectionEyebrow>{vision.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.15] text-neutral-900 md:text-[2.1rem] lg:text-[2.4rem]">
            {vision.title}
          </h2>
          <div className="mt-6 max-w-[820px] space-y-4 text-[16px] leading-[1.7] text-neutral-700">
            {vision.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-black/[0.08] pt-14 lg:mt-24 lg:pt-16" id="mission">
          <SectionEyebrow>{mission.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 max-w-[860px] text-[1.6rem] font-medium leading-[1.3] text-neutral-900 md:text-[1.85rem] lg:text-[2rem]">
            {mission.heading}
          </h2>
        </section>

        <section className="mt-20 border-t border-black/[0.08] pt-14 lg:mt-24 lg:pt-16" id="what-we-do">
          <SectionEyebrow>{whatWeDo.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.15] text-neutral-900 md:text-[2.1rem] lg:text-[2.4rem]">
            {whatWeDo.title}
          </h2>
          <p className="mt-6 max-w-[820px] text-[16px] leading-[1.7] text-neutral-700">{whatWeDo.body}</p>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {whatWeDo.pillars.map((p) => (
              <div key={p.id} className="border-t-2 border-neutral-900 pt-5">
                <h3 className="text-[1.1rem] font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-neutral-700">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/capabilities"
              className="text-sm font-semibold text-[#c41e3a] hover:text-[#a01830]"
            >
              Our capabilities &rarr;
            </Link>
            <span aria-hidden className="text-neutral-300">|</span>
            <Link
              href="/sectors"
              className="text-sm font-semibold text-[#c41e3a] hover:text-[#a01830]"
            >
              Sectors we work in &rarr;
            </Link>
          </div>
        </section>

        <section className="mt-20 border-t border-black/[0.08] pt-14 lg:mt-24 lg:pt-16" id="client-commitment">
          <SectionEyebrow>{clientCommitment.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.15] text-neutral-900 md:text-[2.1rem] lg:text-[2.4rem]">
            {clientCommitment.title}
          </h2>
          <h3 className="mt-8 text-[1.2rem] font-semibold text-neutral-900">
            {clientCommitment.subTitle}
          </h3>
          <div className="mt-4 max-w-[820px] space-y-4 text-[16px] leading-[1.7] text-neutral-700">
            {clientCommitment.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-20 lg:mt-24" id="values">
          <SectionEyebrow>{values.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-[1.85rem] font-extrabold leading-[1.15] text-neutral-900 md:text-[2.1rem] lg:text-[2.4rem]">
            {values.title}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {values.items.map((v, i) => (
              <div key={v.id} className="flex flex-col">
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-[1.15rem] font-semibold text-neutral-900">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-neutral-700">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="responsible-business"
          className="mt-20 border-t border-black/[0.08] pt-14 lg:mt-24 lg:pt-16"
        >
          <SectionEyebrow>{responsibleBusiness.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.15] text-neutral-900 md:text-[2.1rem] lg:text-[2.4rem]">
            {responsibleBusiness.title}
          </h2>
          <div className="mt-6 max-w-[820px] space-y-4 text-[16px] leading-[1.7] text-neutral-700">
            {responsibleBusiness.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-20 lg:mt-24" id="discover-more">
          <SectionEyebrow>{discoverMore.eyebrow}</SectionEyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
            {discoverMore.items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col gap-3 rounded-2xl border border-black/[0.08] bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] lg:p-9"
              >
                <h3 className="text-[1.3rem] font-semibold text-neutral-900">{item.title}</h3>
                <p className="text-[15px] leading-[1.7] text-neutral-700">{item.body}</p>
                <div className="mt-2 text-sm font-semibold text-[#c41e3a] group-hover:text-[#a01830]">
                  {item.cta} &rarr;
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ContentLayout>
    </PageShell>
  );
}
