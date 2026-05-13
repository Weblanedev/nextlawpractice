import type { Metadata } from "next";
import { ContactUsForm } from "@/components/forms/ContactUsForm";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { SITE } from "@/content/site";

const PRACTICE_CONTACTS: Array<{ id: string; label: string; description: string }> = [
  {
    id: "new-mandates",
    label: "New mandates",
    description:
      "For transactions, advisory work, or disputes, share a brief outline of the matter and we will confirm scope and a senior point of contact within one business day.",
  },
  {
    id: "media",
    label: "Media and press",
    description:
      "For interview requests, commentary, and press enquiries, please write directly to our communications team and mark your message for the attention of Media Relations.",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NEXTLAW for new mandates, media enquiries, or general questions. Full service corporate, finance, disputes, energy, tax, and technology advice in Nigeria.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="office"
        eyebrow="Contact"
        title="Contact Us"
        intro={[
          "To discuss an engagement, reach us using the details below. We respond during business hours and will confirm next steps after initial conflict and scope review.",
          "Our central client team will route enquiries to the appropriate practice group within one business day.",
        ]}
      >
        <section className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-14 lg:gap-16">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c41e3a]">
              Get in touch
            </div>
            <h2 className="mt-3 text-[1.85rem] font-semibold leading-[1.15] text-neutral-900 lg:text-[2.1rem]">
              Contact details
            </h2>

            <dl className="mt-8 grid gap-7">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Telephone
                </dt>
                <dd className="mt-2">
                  <a
                    className="text-[16px] font-semibold text-neutral-900 underline underline-offset-4"
                    href={`tel:${SITE.contact.phoneE164}`}
                  >
                    {SITE.contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    className="text-[16px] font-semibold text-neutral-900 underline underline-offset-4"
                    href={`mailto:${SITE.contact.email}`}
                  >
                    {SITE.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Hours
                </dt>
                <dd className="mt-2 text-[16px] leading-[1.7] text-neutral-800">
                  Monday to Friday, 9:00 to 18:00 WAT.
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c41e3a]">
              Send a Message
            </div>
            <h2 className="mt-3 text-[1.85rem] font-semibold leading-[1.15] text-neutral-900 lg:text-[2.1rem]">
              How can we help?
            </h2>
            <p className="mt-4 max-w-[560px] text-[15.5px] leading-[1.7] text-neutral-700">
              Share a few details about your matter and we will route your enquiry to the right team
              within one business day.
            </p>

            <ContactUsForm />
          </div>
        </section>

        <section className="mt-20 border-t border-black/[0.08] pt-14 lg:mt-24 lg:pt-16">
          <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c41e3a]">
            Who to contact
          </div>
          <h2 className="mt-3 text-[1.85rem] font-semibold leading-[1.15] text-neutral-900 lg:text-[2.1rem]">
            Routing your enquiry
          </h2>
          <p className="mt-4 max-w-[760px] text-[15.5px] leading-[1.7] text-neutral-700">
            Most enquiries come through the channels below. If you are not sure where your matter fits,
            send a short note and our client team will guide you to the right specialist.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            {PRACTICE_CONTACTS.map((c) => (
              <div key={c.id} className="border-t-2 border-neutral-900 pt-5">
                <h3 className="text-[1.1rem] font-semibold text-neutral-900">{c.label}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-neutral-700">{c.description}</p>
              </div>
            ))}
          </div>
        </section>
      </ContentLayout>
    </PageShell>
  );
}
