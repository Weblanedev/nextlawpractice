import type { ReactNode } from "react";

export function LegalDoc({
  lastUpdated,
  children,
}: {
  lastUpdated?: string;
  children: ReactNode;
}) {
  return (
    <article className="space-y-12 text-[16px] leading-[1.85] text-neutral-800">
      {lastUpdated ? (
        <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
          Last updated · {lastUpdated}
        </p>
      ) : null}
      {children}
    </article>
  );
}

export function LegalSection({
  id,
  heading,
  children,
}: {
  id?: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-serif text-[1.5rem] font-semibold text-neutral-900 md:text-[1.75rem]">
        {heading}
      </h2>
      <div className="mt-5 space-y-5 text-[16px] leading-[1.85] text-neutral-700">
        {children}
      </div>
    </section>
  );
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-4 text-[1.05rem] font-semibold text-neutral-900">
      {children}
    </h3>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="ml-5 list-disc space-y-2 text-[16px] leading-[1.8] text-neutral-700 marker:text-neutral-400">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalTable({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10">
      {caption ? (
        <div className="border-b border-black/10 bg-neutral-50 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
          {caption}
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-[14.5px]">
          <thead>
            <tr className="bg-neutral-100/80 text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-700">
              {headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border-b border-black/10 px-4 py-3 align-top"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="border-b border-black/[0.06] px-4 py-3 align-top text-neutral-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
