import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { BannerSectionsList } from "@/components/site/BannerSection";
import { CAREERS_PAGE } from "@/content/pages/careers";
import { SITE } from "@/content/site";

export default function CareersPage() {
  const sections = CAREERS_PAGE.sections
    .filter((s) => Boolean(s.imageKey))
    .map((s) => ({
      id: s.id,
      title: s.title,
      body: s.body,
      eyebrow: s.eyebrow,
      imageKey: s.imageKey!,
    }));

  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="office"
        eyebrow="Careers"
        title={CAREERS_PAGE.title}
        intro={CAREERS_PAGE.intro}
      >
        <BannerSectionsList sections={sections} />

        <section className="mt-24 border-t border-black/[0.08] pt-14 lg:mt-28 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c41e3a]">
                Apply
              </div>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-neutral-900 lg:text-3xl">
                Send a confidential expression of interest
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">
                Share your CV and a short note on your practice interests. We typically respond
                within one business week.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 lg:items-end">
              <a
                href={`mailto:${SITE.contact.email}?subject=Careers%20enquiry`}
                className="inline-flex items-center justify-center rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Email recruitment &rarr;
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white"
              >
                Contact our team &rarr;
              </Link>
            </div>
          </div>
        </section>
      </ContentLayout>
    </PageShell>
  );
}
