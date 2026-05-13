"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRIMARY_NAV } from "@/content/navigation";
import { SITE } from "@/content/site";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between border-b border-black/10 bg-white px-5 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.jpg" alt={`${SITE.name} logo`} className="h-8 w-auto" />
          <div className="text-[11px] font-semibold tracking-[0.28em] text-[#c41e3a]">
            {SITE.name}
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-black/15"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" aria-hidden>
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[65px] z-40 flex flex-col bg-[#f3f3f0]"
        >
          <div className="flex flex-1 flex-col items-center pt-14">
            <div className="flex flex-col items-center gap-2">
              <img src="/logo.jpg" alt={`${SITE.name} logo`} className="h-14 w-auto" />
              <div className="text-[10px] font-semibold tracking-[0.32em] text-[#c41e3a]">
                {SITE.name}
              </div>
            </div>

            <ul className="mt-16 flex flex-col items-center gap-10">
              {PRIMARY_NAV.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href + "/"));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "block text-[13px] font-medium uppercase tracking-[0.32em]",
                        isActive ? "text-black" : "text-neutral-700",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto w-full border-t border-black/10 bg-white/60 px-6 py-6 text-center text-xs leading-relaxed text-neutral-700">
              <div className="flex flex-col items-center gap-1">
                <a href={`tel:${SITE.contact.phoneE164}`} className="font-semibold">
                  {SITE.contact.phoneDisplay}
                </a>
                <a href={`mailto:${SITE.contact.email}`} className="font-semibold underline">
                  {SITE.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
