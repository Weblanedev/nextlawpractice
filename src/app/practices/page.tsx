import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { AccordionSection } from "@/components/site/AccordionSection";
import { PRACTICES_PAGE } from "@/content/pages/practices";

export default function PracticesPage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="scales"
        eyebrow={PRACTICES_PAGE.eyebrow}
        title={PRACTICES_PAGE.title}
        intro={PRACTICES_PAGE.intro}
        contentWidth="wide"
      >
        <AccordionSection groups={PRACTICES_PAGE.groups} />

        <section className="mt-20 border-t border-black/[0.08] pt-14 lg:mt-24 lg:pt-16">
          <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c41e3a]">
            Discover More
          </div>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-neutral-900 md:text-[1.75rem]">
            Sectors and insights
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-neutral-700">
            Explore the industries we advise and our latest publications and alerts from Nigerian
            commercial law.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/sectors"
              className="inline-flex items-center justify-center rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Our sector expertise &rarr;
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white"
            >
              Insights &rarr;
            </Link>
          </div>
        </section>
      </ContentLayout>
    </PageShell>
  );
}
