import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePageBody } from "@/components/home/HomePageBody";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <PageShell>
      <main className="bg-white px-0 py-0">
        <HomeHero />
        <HomePageBody />
      </main>
    </PageShell>
  );
}
