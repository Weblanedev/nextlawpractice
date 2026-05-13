import Link from "next/link";
import { SITE } from "@/content/site";

const FOOTER_LINKS: Array<{ label: string; href: string }> = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 w-full bg-[#1a1a1a] text-white lg:mt-24">
      <div className="mx-auto w-full max-w-[1180px] px-6 pb-10 pt-12 md:px-10 lg:px-12 lg:pb-12 lg:pt-16">
        <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-neutral-400">
          Get in touch
        </div>
        <h2 className="mt-3 text-2xl font-semibold tracking-wide text-white">CONTACT US</h2>

        <div className="mt-7">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
            Sign up for our newsletter
          </div>
          <form
            className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
            method="POST"
            action="/__forms.html"
            name="newsletter-form"
          >
            <input type="hidden" name="form-name" value="newsletter-form" />
            <input type="hidden" name="redirect" value="/" />
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-md border border-white/15 bg-white/[0.06] px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#1f8fe0] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1a7ec6]"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        <p className="mt-10 max-w-[860px] text-[14px] leading-[1.7] text-neutral-300 lg:mt-12">
          NEXTLAW is a commercial law firm based in Lagos, Nigeria. Our practice areas include
          banking and finance, capital markets, corporate and commercial, dispute resolution,
          energy and natural resources, real estate, tax, and technology. Contact our team to
          discuss your matter.
        </p>
        <p className="mt-4 max-w-[860px] text-[12px] leading-[1.6] text-neutral-500">
          The content of this website is provided for general information only and does not
          constitute legal advice. No lawyer-client relationship is created until terms of
          engagement are agreed in writing.
        </p>
      </div>

      <div className="border-t border-white/10 bg-[#141414]">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center gap-x-4 gap-y-2 px-6 py-5 text-[12px] text-neutral-400 md:px-10 lg:px-12">
          <span className="font-medium text-neutral-300">
            Copyright &copy; {year} {SITE.name}
          </span>
          {FOOTER_LINKS.map((link) => (
            <span key={link.label} className="flex items-center gap-4">
              <span aria-hidden className="text-neutral-600">
                &bull;
              </span>
              <Link href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
