import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { EditorialTextSection } from "@/components/site/EditorialTextSection";
import {
  ATTORNEY_EDITORIAL_SECTIONS,
  ATTORNEYS_PAGE,
} from "@/content/pages/attorneys";

export const metadata: Metadata = {
  title: "Attorneys",
  description:
    "NEXTLAW attorneys: partners, managing counsel, and associates across corporate, finance, disputes, energy, tax, and investigations.",
  alternates: { canonical: "/attorneys" },
};

export default function AttorneysPage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="scrabble"
        eyebrow="Attorneys"
        title={ATTORNEYS_PAGE.title}
        intro={ATTORNEYS_PAGE.intro}
      >
        {ATTORNEY_EDITORIAL_SECTIONS.map((section, i) => (
          <EditorialTextSection key={i} {...section} />
        ))}
      </ContentLayout>
    </PageShell>
  );
}
