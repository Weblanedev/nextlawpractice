import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import {
  LegalDoc,
  LegalList,
  LegalSection,
  LegalSubheading,
  LegalTable,
} from "@/components/site/LegalContent";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NEXTLAW collects, uses, shares, and protects personal data under applicable data protection laws.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="documents"
        eyebrow="Legal"
        title="Privacy Policy"
        intro={[
          "This Privacy Policy explains how NEXTLAW collects, uses, shares, and protects your personal data, and the choices and rights you have under applicable data-protection law.",
        ]}
      >
        <LegalDoc lastUpdated="May 2026">
          <LegalSection id="who-we-are" heading="1. Who we are">
            <p>
              {SITE.name} is a full service law firm. We are committed to protecting your
              privacy and to processing your personal data in line with the Applicable Data
              Protection Law (defined in Section 22 below). References in this policy to “we”,
              “us”, “our” or the “Firm” are to {SITE.name}; references to “you” are to any natural
              person whose personal data we process.
            </p>
            <p>
              The Firm acts as the data controller for personal data collected through this website
              and through our offices and electronic channels. When we act on behalf of clients,
              the relevant client is typically the data controller and we process personal data on
              their instructions in accordance with our engagement terms and the Applicable Data
              Protection Law.
            </p>
            <LegalTable
              headers={["Category of data subject", "Description"]}
              rows={[
                ["Visitor", "Any person who visits our website, our offices, or attends a Firm event."],
                ["Prospective client", "Any person seeking to engage the Firm for legal services."],
                ["Client", "Any person who has engaged the Firm, including individuals acting for organisations that have engaged us."],
                ["Employee", "Any person currently employed by the Firm, including interns, secondees, and contract staff."],
                ["Prospective employee", "Any person engaging with our recruitment processes."],
                ["Vendor", "Any person engaged to provide goods or services to the Firm."],
                ["Partner", "Any person admitted to the Firm’s partnership."],
                ["Alumni", "Former Firm employees and partners with whom we maintain a relationship."],
              ]}
            />
          </LegalSection>

          <LegalSection id="principles" heading="2. Our data-processing principles">
            <p>We process personal data in accordance with the following principles:</p>
            <LegalList
              items={[
                "processed lawfully, fairly, and in a transparent manner;",
                "collected for specific, explicit, and legitimate purposes, and not further processed in a way incompatible with those purposes;",
                "adequate, relevant, and limited to what is necessary for the purposes for which it is processed;",
                "accurate, complete, not misleading, and kept up to date having regard to the purpose;",
                "retained in a form that permits identification of the data subject for no longer than is necessary; and",
                "processed in a manner that ensures appropriate security, including protection against unauthorised or unlawful processing, accidental loss, destruction, or damage.",
              ]}
            />
          </LegalSection>

          <LegalSection id="legal-bases" heading="3. Legal bases for processing">
            <p>
              We rely on one or more of the following legal bases under the Applicable Data
              Protection Law when we process your personal data:
            </p>
            <LegalSubheading>Your consent</LegalSubheading>
            <p>
              Where required, we will obtain your consent before processing your personal data.
              Consent may be given through check-boxes, online forms, written confirmation, or
              other clear affirmative action. You may withdraw your consent at any time using the
              contact channels in Section 21. Where we rely on consent and you withdraw it, we may
              be unable to continue providing the relevant service.
            </p>

            <LegalSubheading>Other lawful bases</LegalSubheading>
            <LegalList
              items={[
                <><strong>Contract:</strong> to perform a contract with you, or to take steps at your request before entering into a contract.</>,
                <><strong>Legal obligation:</strong> to comply with laws and regulations applicable to the Firm.</>,
                <><strong>Legitimate interests:</strong> for our own legitimate interests or those of a third party, where these are not overridden by your rights and interests.</>,
                <><strong>Vital interests:</strong> to protect your vital interests where you are unable to give consent.</>,
                <><strong>Public interest:</strong> for the performance of a task carried out in the public interest or in the exercise of official authority vested in us.</>,
              ]}
            />
          </LegalSection>

          <LegalSection id="data-we-collect" heading="4. Personal data we may collect">
            <p>
              The categories of personal data we may collect about you depend on the nature of our
              relationship with you. They may include:
            </p>
            <LegalTable
              headers={["Category", "Examples"]}
              rows={[
                ["Identity information", "Name, date of birth, gender, nationality, government-issued ID numbers, photographs."],
                ["Identity documentation", "Passport, NIN, driver's licence, Firm ID, and other identification documents."],
                ["Contact information", "Email address, telephone number, postal address, employer details."],
                ["Professional information", "Employment history, role, professional qualifications, memberships, publications."],
                ["Credential information", "Academic certificates, transcripts, references, and professional licences."],
                ["Financial information", "Bank account details, tax numbers, billing data, and information needed to make or receive payments."],
                ["Compliance data", "Information collected for client due diligence, KYC, conflicts, and sanctions screening."],
                ["Performance data", "Performance reviews, training records, compensation, and disciplinary records (employees and partners)."],
                ["Technical data", "IP address, device identifiers, browser type, session data, and cookie identifiers."],
                ["Audio-visual data", "CCTV footage, photographs, and recordings of meetings or events where applicable."],
                ["Referential data", "Information about next of kin, emergency contacts, or other individuals provided to us by data subjects."],
                ["Sensitive personal data", "Health information, ethnicity, religion, and biometric data, where collected with appropriate safeguards and a lawful basis."],
              ]}
            />
            <p>
              We will only process sensitive personal data and personal data of children where we
              have a clear legal basis, including, where required, explicit consent.
            </p>
          </LegalSection>

          <LegalSection id="sources" heading="5. How we collect personal data">
            <p>We collect personal data in the following ways:</p>
            <LegalList
              items={[
                <><strong>Directly from you:</strong> when you engage us, contact us by email or phone, attend our offices or events, complete a form on this website, or submit an application for employment.</>,
                <><strong>Automated technologies:</strong> as you interact with this website, we automatically collect technical data through cookies, server logs, and similar technologies. See our <Link href="/cookies-policy" className="font-semibold text-[#c41e3a] hover:text-[#a01830]">Cookies Policy</Link> for further information.</>,
                <><strong>CCTV:</strong> we use CCTV at our offices to help protect visitors, employees, and assets.</>,
                <><strong>Recruitment processes:</strong> we may collect data about education, employment history, identity, and right to work from you, your referees, recruitment agencies, screening providers, and publicly available sources.</>,
                <><strong>Third parties and public sources:</strong> we may receive personal data from clients, counterparties, regulators, courts, professional advisers, screening providers, and publicly available registers in the course of our work.</>,
              ]}
            />
          </LegalSection>

          <LegalSection id="purposes" heading="6. How and why we use personal data">
            <p>
              We use personal data to provide legal services and to operate the Firm. The main
              purposes for which we process personal data, by business function, are summarised
              below.
            </p>
            <LegalTable
              headers={["Business function", "Examples", "Typical legal basis"]}
              rows={[
                [
                  "Legal services",
                  "Client engagement, conflict and KYC checks, advising and representing clients, court and arbitral proceedings, regulatory filings, and related professional support.",
                  "Contract, legal obligation, legitimate interests",
                ],
                [
                  "Recruitment",
                  "Assessing applications, conducting interviews, carrying out reference and background checks, and onboarding successful candidates.",
                  "Contract, legitimate interests, consent",
                ],
                [
                  "People and culture",
                  "Employee administration, training and development, performance reviews, compensation, benefits, and wellbeing.",
                  "Contract, legal obligation, legitimate interests",
                ],
                [
                  "Finance",
                  "Invoicing, payments, vendor management, tax and pension administration, statutory reporting, and audits.",
                  "Contract, legal obligation, legitimate interests",
                ],
                [
                  "IT and security",
                  "Maintaining our network, systems, and devices, monitoring for security incidents, and protecting against fraud and unauthorised access.",
                  "Legitimate interests, legal obligation",
                ],
                [
                  "Marketing and communications",
                  "Sending Firm newsletters, regulatory alerts, event invitations, and managing our presence at speaking engagements and conferences.",
                  "Consent, legitimate interests",
                ],
                [
                  "Facilities and visitors",
                  "Front-desk accreditation, vehicle management, and CCTV for the safety of our offices.",
                  "Legitimate interests, legal obligation",
                ],
              ]}
            />
            <p>
              We may also use personal data for general business purposes such as fraud prevention,
              dispute resolution, business continuity, internal audit, and corporate
              restructuring, and to comply with court orders, regulatory requests, and law
              enforcement obligations.
            </p>
          </LegalSection>

          <LegalSection id="profiling" heading="7. Automated decision-making and profiling">
            <p>
              We do not subject you to automated decision-making (including profiling) that
              produces a legal effect concerning you or similarly significantly affects you, unless
              (a) the decision is necessary for the performance of a contract with you, (b) you
              have provided explicit consent, or (c) the decision is authorised by law.
            </p>
          </LegalSection>

          <LegalSection id="marketing" heading="8. Marketing communications">
            <p>
              You may receive marketing communications from us where you have provided consent or
              where we have another lawful basis to do so. You can object to direct marketing or
              opt out of further communications at any time using the unsubscribe link in any
              marketing email or by writing to us. We do not share your personal data with third
              parties for their own marketing purposes without your express consent.
            </p>
          </LegalSection>

          <LegalSection id="cookies" heading="9. Cookies">
            <p>
              We use cookies and similar technologies on this website. For further information on
              what these are, how we use them, and how to manage your preferences, see our{" "}
              <Link
                href="/cookies-policy"
                className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
              >
                Cookies Policy
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection id="sharing" heading="10. How and with whom we share personal data">
            <p>
              We share personal data with third parties only where we have a lawful basis to do so
              and only to the extent necessary. We require third parties to process personal data
              on our instructions, subject to contractual confidentiality and security
              obligations, and in accordance with the Applicable Data Protection Law.
            </p>
            <LegalTable
              headers={["Recipient", "Purpose"]}
              rows={[
                ["Client affiliates and counterparties", "Where required to deliver legal services, including local and foreign counsel."],
                ["Courts, tribunals, regulators, and authorities", "Where required for proceedings, regulatory filings, or compliance obligations."],
                ["Financial institutions and auditors", "For banking, insurance, audit, and financial reporting purposes."],
                ["IT, cloud, and security providers", "Hosting, communications, productivity tools, security, and other IT support."],
                ["Event, marketing, and recruitment partners", "Event management, marketing operations, recruitment services, and screening providers."],
                ["Compliance and award organisations", "Anti-money-laundering, sanctions, awards submissions, and related compliance functions."],
                ["Corporate transactions", "Prospective buyers, partners, or counterparties in a corporate transaction involving the Firm."],
              ]}
            />
          </LegalSection>

          <LegalSection id="international-transfers" heading="11. International transfers">
            <p>
              In the course of providing services, we may transfer personal data across borders.
              We will only do so where (a) the destination is recognised by the competent supervisory
              authority as providing an adequate level of protection, (b)
              appropriate safeguards are in place (such as contractual data-protection clauses), or
              (c) one of the lawful derogations under the Applicable Data Protection Law applies.
              In each case we take reasonable steps to ensure that personal data is handled
              securely.
            </p>
          </LegalSection>

          <LegalSection id="security" heading="12. Data security">
            <p>
              We maintain administrative, technical, and physical safeguards designed to protect
              personal data against unauthorised access, accidental loss, destruction, or damage.
              These include access controls, encryption where appropriate, logging and monitoring,
              segregation of duties, vendor due diligence, and confidentiality obligations for our
              partners, employees, and third-party providers.
            </p>
          </LegalSection>

          <LegalSection id="retention" heading="13. How long we retain personal data">
            <p>
              We retain personal data only for as long as is necessary to fulfil the purposes for
              which it was collected, including for the purposes of satisfying any legal,
              regulatory, accounting, or reporting requirements. Where personal data is no longer
              required, we will securely delete or anonymise it.
            </p>
          </LegalSection>

          <LegalSection id="your-rights" heading="14. Your rights as a data subject">
            <p>
              Subject to the Applicable Data Protection Law and any applicable exemptions, you
              have the following rights in relation to your personal data:
            </p>
            <LegalList
              items={[
                <><strong>To be informed</strong> about how we process your personal data. This Privacy Policy is designed to give you that information.</>,
                <><strong>Access</strong> a copy of the personal data we hold about you.</>,
                <><strong>Rectification</strong> of personal data that is inaccurate or incomplete.</>,
                <><strong>Erasure</strong> of personal data where there is no overriding lawful reason for us to continue processing it.</>,
                <><strong>Restriction</strong> of processing in certain circumstances, for example while we verify accuracy or assess an objection.</>,
                <><strong>Data portability</strong> for personal data you have provided to us under a contract or with your consent and which is processed by automated means.</>,
                <><strong>Object</strong> to processing carried out on the basis of our legitimate interests, including profiling, and to processing for direct marketing.</>,
                <><strong>Withdraw consent</strong> at any time, without affecting the lawfulness of processing carried out before the withdrawal.</>,
                <><strong>Lodge a complaint</strong> with the competent supervisory authority if you consider that our processing of your personal data infringes the Applicable Data Protection Law.</>,
              ]}
            />
            <p>
              We typically respond to requests within one month. If your request is complex or you
              have made several requests, we may extend that period and will keep you informed.
            </p>
          </LegalSection>

          <LegalSection id="children" heading="15. Children and persons with legal disability">
            <p>
              We do not knowingly collect personal data directly from children or persons under a
              legal disability without the consent of a parent, legal guardian, or other authorised
              representative. If you believe that we have collected such data, please contact us so
              that we can investigate and take appropriate action.
            </p>
          </LegalSection>

          <LegalSection id="third-party-links" heading="16. Third-party links">
            <p>
              This website may contain links to third-party websites, plug-ins, and applications.
              Clicking on those links or enabling those connections may allow third parties to
              collect or share data about you. We do not control these third-party sites and are
              not responsible for their privacy practices. When you leave this website, we
              encourage you to review the privacy policy of every site you visit.
            </p>
          </LegalSection>

          <LegalSection id="complaints" heading="17. Complaints and remedies">
            <p>
              If you have a complaint about how we process your personal data, please contact our
              Privacy Office in the first instance using the details in Section 21. We will work to
              resolve your concerns. If you are not satisfied with our response, you have the right
              to lodge a complaint with the competent supervisory authority.
            </p>
          </LegalSection>

          <LegalSection id="changes" heading="18. Changes to this Privacy Policy">
            <p>
              We keep this Privacy Policy under review and may update it from time to time to
              reflect changes in the Applicable Data Protection Law, our services, or our data
              practices. Any updates will be published on this page; by continuing to use this
              website after an update has been published, you accept the updated policy.
            </p>
          </LegalSection>

          <LegalSection id="contact" heading="19. Contact our Privacy Office">
            <p>
              For any question, concern, or request relating to this Privacy Policy or our data
              practices, please contact:
            </p>
            <LegalList
              items={[
                <>
                  Email:{" "}
                  <a
                    href="mailto:privacy@nextlawpractice.com"
                    className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
                  >
                    privacy@nextlawpractice.com
                  </a>{" "}
                  /{" "}
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
                  >
                    {SITE.contact.email}
                  </a>
                </>,
                <>
                  Telephone:{" "}
                  <a
                    href={`tel:${SITE.contact.phoneE164}`}
                    className="font-semibold text-[#c41e3a] hover:text-[#a01830]"
                  >
                    {SITE.contact.phoneDisplay}
                  </a>
                </>,
              ]}
            />
          </LegalSection>

          <LegalSection id="definitions" heading="20. Glossary">
            <LegalTable
              headers={["Term", "Meaning"]}
              rows={[
                [
                  "Applicable Data Protection Law",
                  "National data protection statutes, sector regulations, and supervisory guidance in force from time to time in the jurisdictions where we operate.",
                ],
                [
                  "Personal data",
                  "Any information relating to an identified or identifiable natural person, including identifiers such as names, identification numbers, location data, online identifiers, or one or more factors specific to the person.",
                ],
                [
                  "Processing",
                  "Any operation or set of operations performed on personal data, whether or not by automated means, including collection, recording, organisation, storage, retrieval, use, disclosure, and erasure.",
                ],
                [
                  "Data controller",
                  "The Firm, where the Firm determines the purposes and means of processing personal data. Where applicable, the meaning given to the term under the Applicable Data Protection Law.",
                ],
                [
                  "Data subject",
                  "A natural person who can be identified, directly or indirectly, by reference to personal data.",
                ],
                [
                  "Third parties",
                  "Persons or organisations external to the Firm with whom we may share personal data, subject to the safeguards described in this policy.",
                ],
              ]}
            />
          </LegalSection>
        </LegalDoc>
      </ContentLayout>
    </PageShell>
  );
}
