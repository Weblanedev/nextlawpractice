import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { SectionBanner } from "@/components/site/SectionBanner";
import { themedImage } from "@/content/themedImages";
import { INSIGHTS, type InsightArticle } from "@/data/insights";
import Image from "next/image";

function getArticle(id: string): InsightArticle | undefined {
  return INSIGHTS.find((a) => a.id === id);
}

export function generateStaticParams() {
  return INSIGHTS.filter((a) => a.body && a.body.length > 0).map((a) => ({ id: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = getArticle(id);
  if (!article) return { title: "Insight | NEXTLAW" };
  return {
    title: `${article.title} | NEXTLAW`,
    description: article.summary,
  };
}

function articleNeighbours(currentId: string) {
  const published = INSIGHTS.filter((a) => a.body && a.body.length > 0);
  const idx = published.findIndex((a) => a.id === currentId);
  return {
    prev: idx > 0 ? published[idx - 1] : null,
    next: idx >= 0 && idx < published.length - 1 ? published[idx + 1] : null,
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = getArticle(id);
  if (!article || !article.body?.length) {
    notFound();
  }

  const img = themedImage(article.imageKey);
  const { prev, next } = articleNeighbours(article.id);
  const authorLine = article.authors?.map((a) => a.name.toUpperCase()).join(" AND ") ?? "";

  return (
    <PageShell>
      <main className="min-w-0 bg-[#fafaf8] pb-16">
        <SectionBanner
          title="News & Events"
          body="Updates, alerts, and analysis from our team across Service law."
        />

        <div className="border-b border-black/10 bg-white">
          <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-4 md:px-10">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-700 hover:text-black"
            >
              <span aria-hidden>&larr;</span> Back to all
            </Link>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c41e3a]">
              {article.type}
            </span>
          </div>
        </div>

        <article className="mx-auto max-w-[920px] px-6 pt-10 md:px-10 lg:pt-14">
          <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
            <span>{article.monthLabel} {article.yearLabel}</span>
            <span aria-hidden className="mx-3 text-neutral-300">/</span>
            <span className="text-[#c41e3a]">{article.type}</span>
            {authorLine ? (
              <>
                <span aria-hidden className="mx-3 text-neutral-300">/</span>
                <span>{authorLine}</span>
              </>
            ) : null}
          </div>

          <h1 className="mt-5 font-serif text-[1.9rem] font-semibold leading-[1.18] text-neutral-900 md:text-[2.4rem] lg:text-[2.7rem]">
            {article.title}
          </h1>

          <div className="relative mt-10 aspect-[16/8] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 920px"
              className="object-cover"
            />
          </div>

          <div className="mt-10 space-y-6 text-[16.5px] leading-[1.85] text-neutral-800 md:text-[17px]">
            {article.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          {article.downloadHref ? (
            <div className="mt-10 rounded-xl border border-black/10 bg-white px-6 py-5 text-[15px] text-neutral-800">
              <a
                href={article.downloadHref}
                className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
              >
                {article.downloadLabel ?? "Download the full publication"} &rarr;
              </a>
            </div>
          ) : null}

          {article.practiceContact ? (
            <p className="mt-10 text-[15px] leading-relaxed text-neutral-700">
              For more information, please contact{" "}
              <span className="font-semibold text-neutral-900">
                {article.practiceContact.label}
              </span>
              :{" "}
              <a
                href={`mailto:${article.practiceContact.email}`}
                className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
              >
                {article.practiceContact.email}
              </a>
              .
            </p>
          ) : null}

          <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-700 hover:text-black"
            >
              <span aria-hidden>&larr;</span> Back to all
            </Link>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]">
              {prev ? (
                <Link
                  href={`/insights/${prev.id}`}
                  className="text-neutral-700 hover:text-black"
                >
                  &larr; Previous
                </Link>
              ) : (
                <span className="text-neutral-300">&larr; Previous</span>
              )}
              <span aria-hidden className="text-neutral-300">|</span>
              {next ? (
                <Link
                  href={`/insights/${next.id}`}
                  className="text-neutral-700 hover:text-black"
                >
                  Next &rarr;
                </Link>
              ) : (
                <span className="text-neutral-300">Next &rarr;</span>
              )}
            </div>
          </div>
        </article>

        {article.authors?.length ? (
          <section className="mx-auto mt-20 max-w-[920px] px-6 md:px-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-neutral-500">
              Authors
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {article.authors.map((a) => (
                <div
                  key={a.email}
                  className="flex items-start gap-5 rounded-2xl border border-black/10 bg-white p-6"
                >
                  <div
                    aria-hidden
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#8a1538] text-base font-semibold uppercase text-white"
                  >
                    {a.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
                      {a.name}
                    </div>
                    <div className="mt-1 text-[12px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
                      {a.role}
                    </div>
                    <div className="mt-3 flex flex-col gap-1 text-sm">
                      <a
                        href={`mailto:${a.email}`}
                        className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
                      >
                        Email
                      </a>
                      {a.phone ? (
                        <a href={`tel:${a.phone.replace(/\s+/g, "")}`} className="text-neutral-700">
                          {a.phone}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mx-auto mt-20 max-w-[1080px] px-6 md:px-10">
          <div className="grid gap-10 rounded-2xl border border-black/10 bg-white p-8 md:grid-cols-2 md:p-10">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c41e3a]">
                Contact us
              </div>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-neutral-900">
                Speak with our team
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                For matters related to this update, get in touch with the practice. We respond to
                enquiries within one business day.
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Contact us &rarr;
              </Link>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c41e3a]">
                Sign up for our newsletter
              </div>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-neutral-900">
                Stay informed
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                Receive our regulatory and transactional updates by email, with no marketing, just the
                substance.
              </p>
              <form className="mt-6 flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="rounded-md bg-[#c41e3a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a01830]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
