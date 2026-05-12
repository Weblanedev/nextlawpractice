import type { PageSection } from "@/content/pageTypes";
import { FeatureCard } from "@/components/site/FeatureCard";

export function SectionsGrid({
  sections,
  columns = 2,
}: {
  sections: PageSection[];
  columns?: 2 | 3;
}) {
  const gridClass =
    columns === 3
      ? "grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
      : "grid gap-8 md:grid-cols-2 lg:gap-10";

  return (
    <div className={gridClass}>
      {sections.map((section) => (
        <FeatureCard
          key={section.id}
          title={section.title}
          body={section.body}
          imageKey={section.imageKey}
          eyebrow={section.eyebrow}
        />
      ))}
    </div>
  );
}
