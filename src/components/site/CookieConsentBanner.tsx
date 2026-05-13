"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "nextlaw_cookie_consent";

export type CookieConsentChoice = "essential" | "all" | "dismissed";

export function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setOpen(!stored);
    } catch {
      setOpen(true);
    }
  }, []);

  const save = useCallback((choice: CookieConsentChoice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setOpen(false);
  }, []);

  if (!mounted || !open) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="pointer-events-none fixed bottom-0 right-0 z-[100] flex max-h-[100dvh] w-full items-end justify-end p-4 pb-[max(1rem,env(safe-area-inset-bottom))] pr-[max(1rem,env(safe-area-inset-right))]"
    >
      <div className="pointer-events-auto relative w-full max-w-[min(100%,22rem)] rounded-2xl border border-white/10 bg-[#0c1a2e] p-4 pt-3 pr-11 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:max-w-[24rem] sm:p-5 sm:pr-12">
        <button
          type="button"
          onClick={() => save("dismissed")}
          className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-lg text-white/75 transition hover:bg-white/10 hover:text-white"
          aria-label="Close cookie notice"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="stroke-current" fill="none" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="min-w-0">
          <p id="cookie-consent-title" className="pr-1 text-[13px] font-semibold tracking-wide text-white">
            Cookies on this site
          </p>
          <p
            id="cookie-consent-desc"
            className="mt-2 text-[12px] leading-relaxed text-white/85 sm:text-[13px]"
          >
            We use cookies to remember your choices and to understand how the site is used. See our{" "}
            <Link
              href="/cookies-policy"
              className="font-semibold text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
            >
              Cookies Policy
            </Link>{" "}
            for details.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            onClick={() => save("essential")}
            className="rounded-full border border-white/35 bg-transparent px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition hover:border-white/60 hover:bg-white/10 sm:text-[12px]"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            className="rounded-full bg-[#c41e3a] px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#a01830] sm:text-[12px]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
