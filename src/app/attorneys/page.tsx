import Image from "next/image";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { ATTORNEYS, ATTORNEYS_PAGE } from "@/content/pages/attorneys";
import { themedImage } from "@/content/themedImages";

export default function AttorneysPage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="scrabble"
        eyebrow="Attorneys"
        title={ATTORNEYS_PAGE.title}
        intro={ATTORNEYS_PAGE.intro}
        contentWidth="wide"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {ATTORNEYS.map((a) => {
            const img = themedImage(a.imageKey);
            return (
              <article
                key={a.id}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] md:flex-row"
              >
                <div className="relative h-56 w-full overflow-hidden bg-neutral-100 md:h-auto md:w-[42%] md:shrink-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-black/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {a.role}
                  </div>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-3 p-7 lg:p-8">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c41e3a]">
                    {a.practice}
                  </div>
                  <h2 className="text-[1.3rem] font-semibold leading-snug text-neutral-900 lg:text-[1.4rem]">
                    {a.name}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-neutral-700">{a.bio}</p>
                </div>
              </article>
            );
          })}
        </div>
      </ContentLayout>
    </PageShell>
  );
}
