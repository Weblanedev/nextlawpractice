"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  INSIGHTS,
  INSIGHT_CATEGORIES,
  type InsightArticle,
  type InsightCategory,
} from "@/data/insights";
import { themedImage } from "@/content/themedImages";

const ALL_FILTER = "All" as const;

type Filter = typeof ALL_FILTER | InsightCategory;

function FilterBar({
  active,
  onChange,
}: {
  active: Filter;
  onChange: (value: Filter) => void;
}) {
  const options: Filter[] = [ALL_FILTER, ...INSIGHT_CATEGORIES];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isActive = opt === active;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={[
              "inline-flex items-center rounded-full border px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] transition",
              isActive
                ? "border-black bg-black text-white"
                : "border-black/15 bg-white text-neutral-700 hover:border-black hover:text-black",
            ].join(" ")}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function ArticleCardLink({
  article,
  className,
  children,
}: {
  article: InsightArticle;
  className: string;
  children: React.ReactNode;
}) {
  const hasArticlePage = Boolean(article.body?.length);
  if (hasArticlePage) {
    return (
      <Link href={`/insights/${article.id}`} className={className}>
        {children}
      </Link>
    );
  }
  return <article className={className}>{children}</article>;
}

function InsightItem({ article, featured = false }: { article: InsightArticle; featured?: boolean }) {
  const img = themedImage(article.imageKey);

  if (featured) {
    return (
      <ArticleCardLink
        article={article}
        className="group grid gap-8 overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] md:grid-cols-[1.05fr_1fr] md:gap-10 md:p-7 lg:p-8"
      >
        <div className="relative h-64 w-full overflow-hidden rounded-xl bg-neutral-100 md:h-full md:min-h-[300px]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-black/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            Featured
          </div>
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-4">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            <span>{article.monthLabel} {article.yearLabel}</span>
            <span aria-hidden className="text-neutral-300">/</span>
            <span className="text-[#c41e3a]">{article.type}</span>
            <span aria-hidden className="text-neutral-300">/</span>
            <span>{article.category}</span>
          </div>
          <h2 className="text-2xl font-semibold leading-tight text-neutral-900 lg:text-[1.7rem]">
            {article.title}
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-neutral-700">{article.summary}</p>
          <div className="pt-2 text-sm font-semibold text-[#c41e3a] group-hover:text-[#a01830]">
            Read more &rarr;
          </div>
        </div>
      </ArticleCardLink>
    );
  }

  return (
    <ArticleCardLink
      article={article}
      className="group grid gap-5 border-b border-black/[0.08] pb-10 transition hover:bg-neutral-50/60 md:grid-cols-[180px_1fr] md:gap-7 lg:grid-cols-[220px_1fr]"
    >
      <div className="relative h-32 w-full overflow-hidden rounded-xl bg-neutral-100 md:h-40">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 220px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
          <span>{article.monthLabel} {article.yearLabel}</span>
          <span aria-hidden className="text-neutral-300">/</span>
          <span className="text-[#c41e3a]">{article.type}</span>
          <span aria-hidden className="text-neutral-300">/</span>
          <span>{article.category}</span>
        </div>
        <h3 className="text-[1.2rem] font-semibold leading-snug text-neutral-900 lg:text-[1.3rem]">
          {article.title}
        </h3>
        <p className="text-[15px] leading-[1.7] text-neutral-700">{article.summary}</p>
        <div className="pt-1 text-sm font-semibold text-[#c41e3a] group-hover:text-[#a01830]">
          Read more &rarr;
        </div>
      </div>
    </ArticleCardLink>
  );
}

export function InsightsList() {
  const [filter, setFilter] = useState<Filter>(ALL_FILTER);

  const filtered = useMemo(() => {
    const all = [...INSIGHTS].sort((a, b) => (a.date < b.date ? 1 : -1));
    if (filter === ALL_FILTER) return all;
    return all.filter((a) => a.category === filter);
  }, [filter]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="space-y-12">
      <div className="space-y-5 border-b border-black/[0.08] pb-8">
        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
          Filter by category
        </div>
        <FilterBar active={filter} onChange={setFilter} />
      </div>

      {featured ? <InsightItem article={featured} featured /> : null}

      {rest.length ? (
        <div className="space-y-10">
          {rest.map((a) => (
            <InsightItem key={a.id} article={a} />
          ))}
        </div>
      ) : !featured ? (
        <div className="rounded-2xl border border-black/[0.08] bg-white p-10 text-center text-neutral-600">
          No articles in this category yet. New publications will appear here as they are released.
        </div>
      ) : null}
    </div>
  );
}
