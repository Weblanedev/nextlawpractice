import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { InsightsList } from "@/components/insights/InsightsList";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Legal insights, alerts, and publications from NEXTLAW on Nigerian and cross-border corporate, finance, energy, disputes, tax, and regulatory topics.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="documents"
        eyebrow="Media and Insights"
        title="Insights"
        intro={[
          "Updates, events, legal alerts, and publications from our team, written for clients who need to act, not just be informed.",
          "Each piece is reviewed by a lead practitioner with first-hand experience across our practice areas.",
        ]}
        contentWidth="wide"
      >
        <InsightsList />
      </ContentLayout>
    </PageShell>
  );
}
