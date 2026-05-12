import { PageShell } from "@/components/site/PageShell";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePageBody } from "@/components/home/HomePageBody";

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
