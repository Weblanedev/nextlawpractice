import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import {
  LegalDoc,
  LegalList,
  LegalSection,
} from "@/components/site/LegalContent";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use | NEXTLAW",
  description:
    "Terms governing your use of the NEXTLAW website and the information made available through it.",
};

export default function TermsOfUsePage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="documents"
        eyebrow="Legal"
        title="Terms of Use"
        intro={[
          "These terms govern your use of the NEXTLAW website and any content made available through it. By accessing or using this website, you agree to be bound by these terms as updated by us from time to time.",
        ]}
      >
        <LegalDoc lastUpdated="May 2026">
          <LegalSection heading="1. About this website">
            <p>
              This website is operated by {SITE.name}, a Service law firm with its
              principal office at {SITE.contact.addressLine}. References in these terms to “we”,
              “us”, “our” or the “Firm” are to {SITE.name}. References to “you” are to any natural
              or legal person accessing this website.
            </p>
            <p>
              These terms apply alongside our{" "}
              <Link href="/privacy-policy" className="font-semibold text-[#c41e3a] hover:text-[#a01830]">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/cookies-policy" className="font-semibold text-[#c41e3a] hover:text-[#a01830]">
                Cookies Policy
              </Link>
              . By continuing to use this website, you confirm that you have read, understood, and
              accepted all of them.
            </p>
          </LegalSection>

          <LegalSection heading="2. Permitted use of website content">
            <p>
              We grant you a limited, non-exclusive, non-transferable permission to view, store,
              print, reproduce, and distribute pages from this website for non-commercial use
              within your organisation only. This includes temporary local storage for the purpose
              of viewing the pages on a personal device.
            </p>
            <p>
              You may not reproduce, store permanently, retransmit, frame, mirror, or distribute
              the content of this website in any other form without our prior written consent. Any
              copy of materials you are permitted to make under these terms must keep all
              copyright, trade-mark, and other proprietary notices in place.
            </p>
          </LegalSection>

          <LegalSection heading="3. No legal advice">
            <p>
              The content of this website is provided for general information only. It does not
              constitute legal, tax, regulatory, or other professional advice and should not be
              relied upon as a substitute for advice tailored to a specific matter.
            </p>
            <p>
              If you require advice on a particular issue, please contact a relevant member of the
              team or write to{" "}
              <a
                href={`mailto:${SITE.contact.email}`}
                className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
              >
                {SITE.contact.email}
              </a>
              . No lawyer-client relationship is created by your use of this website or by
              correspondence with us until we have agreed terms of engagement in writing and
              completed our intake checks.
            </p>
          </LegalSection>

          <LegalSection heading="4. Intellectual property">
            <p>
              All trademarks, service marks, logos, content, designs, and other materials displayed
              on this website are owned by, licensed to, or otherwise lawfully used by the Firm.
              Nothing on this website should be construed as granting any licence or right to use
              any of these without our prior written consent.
            </p>
          </LegalSection>

          <LegalSection heading="5. Linking to this website">
            <p>
              You may not establish an electronic link to any part of this website without our
              written consent. To request consent, please email{" "}
              <a
                href={`mailto:${SITE.contact.email}`}
                className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
              >
                {SITE.contact.email}
              </a>
              . We may withdraw any consent given at any time and without notice.
            </p>
          </LegalSection>

          <LegalSection heading="6. Third-party links and content">
            <p>
              This website may contain links to third-party websites, plug-ins, and applications.
              These are provided for convenience only. We do not endorse, monitor, or control any
              third-party site and we accept no responsibility for the content or practices of any
              such site.
            </p>
          </LegalSection>

          <LegalSection heading="7. Acceptable use">
            <p>You agree not to:</p>
            <LegalList
              items={[
                "use this website in any way that is unlawful, fraudulent, or harmful, or in connection with any unlawful, fraudulent, or harmful activity;",
                "interfere with, damage, or disrupt this website, its servers, or any networks connected to it;",
                "attempt to gain unauthorised access to any part of this website, the systems on which it is hosted, or any related accounts;",
                "use any robot, crawler, scraper, or other automated means to access or copy any content on this website without our prior written consent;",
                "introduce viruses, trojans, worms, or any other malicious code to this website.",
              ]}
            />
          </LegalSection>

          <LegalSection heading="8. Disclaimers and limitation of liability">
            <p>
              This website is provided on an “as is” and “as available” basis. To the maximum
              extent permitted by applicable law, we exclude all warranties, conditions, and
              representations, whether express or implied, relating to this website and its
              content, including any warranties as to accuracy, completeness, timeliness, fitness
              for a particular purpose, or non-infringement.
            </p>
            <p>
              We will not be liable for any loss or damage of any kind arising out of or in
              connection with your access to, use of, or inability to use this website, except
              where such exclusion is prohibited by Nigerian law.
            </p>
          </LegalSection>

          <LegalSection heading="9. Changes to these terms">
            <p>
              We may amend these terms from time to time. The current version is the one published
              on this page. By continuing to use the website after a change has been published,
              you accept the amended terms. If you do not agree with the amended terms, you should
              stop using the website.
            </p>
          </LegalSection>

          <LegalSection heading="10. Governing law">
            <p>
              These terms and your use of this website are governed by the laws of the Federal
              Republic of Nigeria. The courts of Nigeria have exclusive jurisdiction over any
              dispute arising from or in connection with these terms or this website.
            </p>
          </LegalSection>

          <LegalSection heading="11. Contact us">
            <p>
              For any question concerning these terms, you can reach us at{" "}
              <a
                href={`mailto:${SITE.contact.email}`}
                className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
              >
                {SITE.contact.email}
              </a>{" "}
              or write to us at {SITE.contact.addressLine}.
            </p>
          </LegalSection>
        </LegalDoc>
      </ContentLayout>
    </PageShell>
  );
}
