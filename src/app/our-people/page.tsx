import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { SectionsGrid } from "@/components/site/SectionsGrid";
import { OUR_PEOPLE_PAGE } from "@/content/pages/ourPeople";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "How NEXTLAW staffs matters and develops lawyers: partner-led teams, structured delivery, and sector depth across corporate, finance, disputes, energy, and technology.",
  alternates: { canonical: "/our-people" },
};

export default function OurPeoplePage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="consultation"
        eyebrow="Our People"
        title={OUR_PEOPLE_PAGE.title}
        intro={OUR_PEOPLE_PAGE.intro}
      >
        <SectionsGrid sections={OUR_PEOPLE_PAGE.sections} />
      </ContentLayout>
    </PageShell>
  );
}
