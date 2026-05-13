"use client";

import { useEffect } from "react";

type SuccessModalProps = {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export function SuccessModal({ open, title, message, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[10050] flex items-center justify-center p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/55"
        aria-label="Dismiss dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        className="relative z-[1] flex w-full max-w-md flex-col items-center rounded-2xl bg-white px-8 py-8 text-center text-neutral-900 shadow-xl"
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c41e3a]">
          Success
        </div>
        <h2
          id="success-modal-title"
          className="mt-3 max-w-[28ch] font-serif text-2xl font-semibold leading-snug"
        >
          {title}
        </h2>
        <p className="mt-4 max-w-[36ch] text-pretty text-[15px] leading-relaxed text-neutral-600">
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 inline-flex min-w-[11rem] items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}
