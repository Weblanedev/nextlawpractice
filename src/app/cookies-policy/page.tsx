import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import {
  LegalDoc,
  LegalList,
  LegalSection,
  LegalTable,
} from "@/components/site/LegalContent";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "How NEXTLAW uses cookies and similar technologies on this website, and how you can control them.",
  alternates: { canonical: "/cookies-policy" },
};

export default function CookiesPolicyPage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="scrabble"
        eyebrow="Legal"
        title="Cookies Policy"
        intro={[
          "This Cookies Policy explains how NEXTLAW uses cookies and similar technologies on this website. It should be read together with our Privacy Policy.",
        ]}
      >
        <LegalDoc lastUpdated="May 2026">
          <LegalSection heading="1. Introduction">
            <p>
              References in this policy to “we”, “us”, “our” or the “Firm” are to NEXTLAW.
              References to “you” are to any natural person who visits this website.
            </p>
            <p>
              We use cookies to distinguish you from other users and to understand how visitors
              interact with this website, so we can keep improving it. Depending on your settings,
              we may store cookies on your device when you visit the website. Where cookies are not
              strictly necessary, we will only set them once you have provided consent through our
              cookie banner.
            </p>
            <p>
              You can change your cookie preferences at any time using the cookie controls in your
              browser. Disabling non-essential cookies may limit some functions of this website.
            </p>
          </LegalSection>

          <LegalSection heading="2. What is a cookie?">
            <p>
              A cookie is a small text file placed on your device when you visit a website. Cookies
              allow a site to remember information about your visit, such as preferences and
              settings, and to collect information such as your IP address, browser type and
              version, device characteristics, the pages you view, and the date and time of your
              visit.
            </p>
            <p>The types of cookies used on this website fall under the categories below.</p>
            <LegalTable
              headers={["Category", "Description"]}
              rows={[
                [
                  <strong key="t1">Strictly necessary cookies</strong>,
                  "Required for the basic operation of this website, such as remembering your cookie consent and ensuring that pages load correctly. These cookies cannot be turned off in our systems.",
                ],
                [
                  <strong key="t2">First-party cookies</strong>,
                  "Cookies set directly by this website. They are used to support core site functionality and analytics.",
                ],
                [
                  <strong key="t3">Persistent cookies</strong>,
                  "Cookies that remain on your device for a defined retention period (or until you delete them), so that we can recognise you on return visits.",
                ],
                [
                  <strong key="t4">Optional cookies</strong>,
                  "Cookies that are not strictly necessary for this website to function. Examples include analytics and performance cookies. We will only set these where you have given consent.",
                ],
              ]}
            />
          </LegalSection>

          <LegalSection heading="3. How we use cookies">
            <p>
              We use cookies for website analytics, to understand visit patterns and identify
              areas where we can improve the website. Details of the cookies we use are set out
              below.
            </p>
            <LegalTable
              headers={[
                "Cookie type",
                "Cookie name",
                "Provider",
                "Purpose",
                "Duration",
                "Basis",
              ]}
              rows={[
                [
                  "Analytics",
                  "_ga, _ga_*",
                  "First-party (Google Analytics)",
                  "Used solely for statistical purposes to measure interactions with the website and understand how visitors find and use our content.",
                  "Persistent · up to 2 years",
                  "Consent (optional)",
                ],
                [
                  "Strictly necessary",
                  "nl-consent",
                  "First-party (NEXTLAW)",
                  "Stores your cookie consent choices so that we do not prompt you on every visit.",
                  "Persistent · up to 12 months",
                  "Legitimate interest",
                ],
              ]}
            />
          </LegalSection>

          <LegalSection heading="4. Managing your cookie preferences">
            <p>
              You can give, withhold, or withdraw consent to optional cookies at any time using the
              cookie controls on this website. You can also manage cookies through your browser
              settings using the relevant link below.
            </p>
            <LegalTable
              headers={["Browser", "Cookie controls"]}
              rows={[
                [
                  "Chrome",
                  <a
                    key="chrome"
                    href="https://support.google.com/chrome/answer/95647?hl=en"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
                  >
                    support.google.com/chrome
                  </a>,
                ],
                [
                  "Edge",
                  <a
                    key="edge"
                    href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
                  >
                    privacy.microsoft.com
                  </a>,
                ],
                [
                  "Firefox",
                  <a
                    key="firefox"
                    href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
                  >
                    support.mozilla.org
                  </a>,
                ],
                [
                  "Safari",
                  <a
                    key="safari"
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
                  >
                    support.apple.com/safari
                  </a>,
                ],
              ]}
            />
            <p>
              You can also opt out of Google Analytics using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noreferrer noopener"
                className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
              >
                official Google Analytics opt-out
              </a>
              . Disabling cookies in your browser may affect other websites that use similar
              technologies.
            </p>
          </LegalSection>

          <LegalSection heading="5. Personal data and cookies">
            <p>
              Some of the information collected by cookies may amount to personal data under
              applicable data protection legislation. For information on how we handle personal data,
              please review our{" "}
              <Link href="/privacy-policy" className="font-semibold text-[#c41e3a] hover:text-[#a01830]">
                Privacy Policy
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection heading="6. Changes to this policy">
            <p>
              We keep this Cookies Policy under review and may update it from time to time to
              reflect changes in the cookies we use, applicable laws, or our practices. The current
              version is the one published on this page; by continuing to use the website after an
              update has been published, you accept the updated policy.
            </p>
          </LegalSection>

          <LegalSection heading="7. Need more information?">
            <p>If you have questions about how we use cookies, you can contact us using:</p>
            <LegalList
              items={[
                <>
                  Email:{" "}
                  <a
                    href="mailto:privacy@nextlawpractice.com"
                    className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
                  >
                    privacy@nextlawpractice.com
                  </a>
                </>,
                <>
                  Visit our{" "}
                  <Link href="/contact-us" className="font-semibold text-[#c41e3a] hover:text-[#a01830]">
                    Contact us
                  </Link>{" "}
                  page for postal and telephone details.
                </>,
              ]}
            />
          </LegalSection>
        </LegalDoc>
      </ContentLayout>
    </PageShell>
  );
}
