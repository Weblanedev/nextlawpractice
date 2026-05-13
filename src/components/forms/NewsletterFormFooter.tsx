"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { SuccessModal } from "@/components/forms/SuccessModal";
import { submitNetlifyForm } from "@/lib/submitNetlifyForm";

export function NewsletterFormFooter() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setPending(true);
    try {
      await submitNetlifyForm(form).catch(() => {});
      toast.success("You are subscribed to our newsletter.");
      setModalOpen(true);
      form.reset();
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <form
        ref={formRef}
        className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
        name="newsletter-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="newsletter-form" />
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          disabled={pending}
          placeholder="Your email address"
          className="min-w-0 flex-1 rounded-md border border-white/15 bg-white/[0.06] px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#1f8fe0] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1a7ec6] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Subscribing…" : "Subscribe Now"}
        </button>
      </form>

      <SuccessModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="You are on the list"
        message="Thanks for subscribing. You will hear from us with updates and insights."
      />
    </>
  );
}
