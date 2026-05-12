import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { InsightsList } from "@/components/insights/InsightsList";

export default function InsightsPage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="documents"
        eyebrow="Media and Insights"
        title="Insights"
        intro={[
          "Updates, events, legal alerts, and publications from our team — written for clients who need to act, not just be informed.",
          "Each piece is reviewed by a lead practitioner with first-hand experience in Nigerian commercial law.",
        ]}
        contentWidth="wide"
      >
        <InsightsList />
      </ContentLayout>
    </PageShell>
  );
}
