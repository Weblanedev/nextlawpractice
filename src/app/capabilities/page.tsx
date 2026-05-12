import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { SectionsGrid } from "@/components/site/SectionsGrid";
import { CAPABILITIES_PAGE } from "@/content/pages/capabilities";

export default function CapabilitiesPage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="signing"
        eyebrow="Capabilities"
        title={CAPABILITIES_PAGE.title}
        intro={CAPABILITIES_PAGE.intro}
        contentWidth="wide"
      >
        <SectionsGrid sections={CAPABILITIES_PAGE.sections} />
      </ContentLayout>
    </PageShell>
  );
}
