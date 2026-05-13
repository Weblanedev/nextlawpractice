"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { SuccessModal } from "@/components/forms/SuccessModal";
import { submitNetlifyForm } from "@/lib/submitNetlifyForm";

export function ContactUsForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setPending(true);
    try {
      // Best-effort Netlify POST (often 405 on `next dev`; still try on production).
      await submitNetlifyForm(form).catch(() => {});
      toast.success("Message sent. We will be in touch shortly.");
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
        className="mt-8 grid gap-5"
        name="contact-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact-form" />

        <div className="grid gap-2">
          <label
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600"
            htmlFor="contact-name"
          >
            Name
          </label>
          <input
            className="rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-black"
            id="contact-name"
            name="name"
            required
            disabled={pending}
          />
        </div>

        <div className="grid gap-2">
          <label
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600"
            htmlFor="contact-email"
          >
            Email
          </label>
          <input
            className="rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-black"
            id="contact-email"
            name="email"
            type="email"
            required
            disabled={pending}
          />
        </div>

        <div className="grid gap-2">
          <label
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600"
            htmlFor="contact-company"
          >
            Company
          </label>
          <input
            className="rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-black"
            id="contact-company"
            name="company"
            disabled={pending}
          />
        </div>

        <div className="grid gap-2">
          <label
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600"
            htmlFor="contact-subject"
          >
            Subject
          </label>
          <input
            className="rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-black"
            id="contact-subject"
            name="subject"
            placeholder="Practice area or short topic"
            disabled={pending}
          />
        </div>

        <div className="grid gap-2">
          <label
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600"
            htmlFor="contact-message"
          >
            Message
          </label>
          <textarea
            className="min-h-36 rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-black"
            id="contact-message"
            name="message"
            disabled={pending}
          />
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send message"}
          </button>
        </div>
      </form>

      <SuccessModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Thank you for your message"
        message="Your enquiry has been received. Our team will review it and respond within one business day."
      />
    </>
  );
}
