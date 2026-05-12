"use client";

import { useEffect, useMemo, useState } from "react";

export type SectionNavItem = {
  id: string;
  label: string;
};

export function SectionNav({
  items,
  className,
}: {
  items: SectionNavItem[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const itemIds = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    const els = itemIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.1, 0.2, 0.5, 1] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [itemIds]);

  if (items.length === 0) return null;

  return (
    <div className={className}>
      <div className="text-xs font-semibold tracking-wide text-black/70">On this page</div>
      <div className="mt-3 space-y-1">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={[
                "block rounded-md px-3 py-2 text-sm",
                isActive ? "bg-black text-white" : "text-black/75 hover:bg-black/5",
              ].join(" ")}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

