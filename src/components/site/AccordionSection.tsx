"use client";

import { useCallback, useEffect, useId, useState } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  body: string[];
  keyContacts?: string;
};

export type AccordionGroup = {
  id: string;
  heading: string;
  description?: string;
  items: AccordionItem[];
};

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

export function AccordionSection({ groups }: { groups: AccordionGroup[] }) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  useEffect(() => {
    if (!openId) return;
    const el = document.getElementById(`${baseId}-panel-${openId}`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [openId, baseId]);

  return (
    <div className="space-y-16 lg:space-y-20">
      {groups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-24">
          <h2 className="font-serif text-[1.65rem] font-semibold leading-tight text-neutral-900 md:text-[1.85rem]">
            {group.heading}
          </h2>
          {group.description ? (
            <p className="mt-3 max-w-[720px] text-[15px] leading-relaxed text-neutral-600">{group.description}</p>
          ) : null}

          <div className="mt-8 space-y-4">
            {chunk(group.items, 3).map((row, rowIndex) => {
              const openInRow = row.find((item) => item.id === openId);
              const openItem = openInRow ?? null;

              return (
                <div
                  key={`${group.id}-row-${rowIndex}`}
                  className="overflow-hidden rounded-lg border border-black/[0.08] bg-[#f3f6fa] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                >
                  <div className="grid divide-y divide-black/[0.08] md:grid-cols-3 md:divide-x md:divide-y-0 md:divide-black/[0.08]">
                    {row.map((item) => {
                      const open = openId === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          id={`${baseId}-trigger-${item.id}`}
                          aria-expanded={open}
                          aria-controls={`${baseId}-panel-${item.id}`}
                          onClick={() => toggle(item.id)}
                          className={[
                            "flex min-h-[4.75rem] w-full items-center justify-between gap-3 px-5 py-4 text-left transition",
                            "bg-transparent hover:bg-white/60",
                            open ? "bg-white/80" : "",
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "font-serif text-[1.05rem] leading-snug text-neutral-900 md:text-[1.1rem]",
                              open ? "font-semibold underline decoration-[#1a4d6b]/45 underline-offset-4" : "",
                            ].join(" ")}
                          >
                            {item.title}
                          </span>
                          <span
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#2a8a94]/45 text-lg font-light leading-none text-[#2a8a94]"
                            aria-hidden
                          >
                            {open ? "−" : "+"}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {openItem ? (
                    <div
                      id={`${baseId}-panel-${openItem.id}`}
                      role="region"
                      aria-labelledby={`${baseId}-trigger-${openItem.id}`}
                      className="border-t border-black/[0.08] bg-white px-5 py-6 md:px-8 md:py-8"
                    >
                      <div className="max-w-[920px] space-y-4 text-[15px] leading-[1.75] text-neutral-700">
                        {openItem.body.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                      {openItem.keyContacts ? (
                        <div className="mt-6 border-t border-black/[0.06] pt-5">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                            Key contact
                          </div>
                          <p className="mt-2 text-[15px] font-semibold text-[#0c2d4a]">{openItem.keyContacts}</p>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
