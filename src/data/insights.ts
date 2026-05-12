import type { ThemedImageKey } from "@/content/themedImages";

export type InsightType = "PUBLICATIONS" | "NEWS" | "REGULATORY UPDATE" | "ALERT" | "NEWSLETTER";

export type InsightCategory =
  | "Banking and Corporate Finance"
  | "Capital Markets"
  | "Corporate and Commercial"
  | "Data Protection"
  | "Dispute Resolution"
  | "Energy and Natural Resources"
  | "Fintech"
  | "Intellectual Property"
  | "Mergers and Acquisitions"
  | "Real Estate"
  | "Tax"
  | "Telecommunications and TMT"
  | "White Collar and Investigations";

export type InsightAuthor = {
  name: string;
  role: string;
  email: string;
  phone?: string;
};

export type InsightArticle = {
  id: string;
  date: string;
  monthLabel: string;
  yearLabel: string;
  type: InsightType;
  category: InsightCategory;
  title: string;
  summary: string;
  imageKey: ThemedImageKey;
  /** Optional full article body — when present the article gets a dedicated detail page. */
  body?: string[];
  authors?: InsightAuthor[];
  /** Optional named practice mailbox to display in the “for more information” block. */
  practiceContact?: { label: string; email: string };
  /** Optional “download the full publication” link. */
  downloadLabel?: string;
  downloadHref?: string;
};

/**
 * Insights list is intentionally limited to items whose factual source we can verify
 * (Nigerian regulatory developments reported by publicly available primary or
 * established secondary sources). Additional items should only be added with a
 * confirmed source.
 */
export const INSIGHTS: InsightArticle[] = [
  {
    id: "lagos-blue-book-2026",
    date: "2026-04-29",
    monthLabel: "Apr",
    yearLabel: "2026",
    type: "NEWS",
    category: "Real Estate",
    title: "Lagos State Blue Book to Take Effect from 1 May 2026",
    summary:
      "At a stakeholders' engagement on Fair Market Value held on 28 April 2026, the Lagos State Lands Bureau confirmed that it has concluded a review of its Blue Book, which sets out FMV rates. The review is conducted every five years and the revised rates will apply to a wide range of land transactions in Lagos.",
    imageKey: "houseForSale",
    body: [
      "At the stakeholders’ engagement on Fair Market Value (the “Blue Book”) held on 28 April 2026, the Lagos State Lands Bureau announced that it has completed its periodic review of the Blue Book, which prescribes Fair Market Value (FMV) rates for land transactions across the State. The review is undertaken every five years to keep the rates aligned with market conditions.",
      "Stakeholders were informed that the revised FMV rates have already been gazetted and will take effect on 1 May 2026. The Bureau clarified that applications submitted before the effective date will continue to be assessed using the existing rates, while filings made on or after 1 May 2026 will be processed under the new schedule.",
      "FMV rates are the baseline for a range of statutory and regulatory charges in Lagos State. These include Governor’s Consent fees on sales, mortgages, and leases; premiums payable on land regularisation and registration; land use charge assessments; and compensation payable on compulsory acquisition. A revision to the rates therefore feeds through to the transaction cost of most land dealings in the State.",
      "According to the Lands Bureau, the review reflects continued urban expansion across Lagos and is intended to improve ease of doing business, broaden revenue mobilisation, strengthen transparency, and bring the rate card closer to prevailing market realities. Parties currently structuring real estate transactions in Lagos — including developers, lenders, and corporate occupiers — should factor the new rates into closing economics, particularly where consent or registration is still outstanding.",
    ],
    authors: [
      {
        name: "NEXTLAW Real Estate Team",
        role: "Real Estate",
        email: "realestate@nextlawpractice.com",
      },
    ],
    practiceContact: {
      label: "NEXTLAW Real Estate Practice",
      email: "realestate@nextlawpractice.com",
    },
  },
  {
    id: "nuprc-ghg-methane",
    date: "2026-04-13",
    monthLabel: "Apr",
    yearLabel: "2026",
    type: "PUBLICATIONS",
    category: "Energy and Natural Resources",
    title:
      "NUPRC Issues Directive on Standardised Templates and Measurement-Based Methane and GHG Reporting",
    summary:
      "On 13 April 2026, the Nigerian Upstream Petroleum Regulatory Commission issued a Directive requiring upstream operators to adopt standardised templates for greenhouse gas emissions management planning and to report methane and GHG inventories on a measurement basis. The Directive shifts upstream emissions oversight from policy-level expectations to an auditable, evidence-driven framework.",
    imageKey: "land",
    body: [
      "On 13 April 2026, the Nigerian Upstream Petroleum Regulatory Commission (NUPRC) issued a Directive requiring upstream petroleum operators to use standardised templates for greenhouse gas (GHG) emissions management planning and for reporting their methane and GHG accounting and inventories. The Directive applies across exploration, production, and associated upstream activities.",
      "The instrument is significant because it converts a long-standing policy expectation into a documented, auditable compliance regime. Operators are now expected to maintain a written GHG Emissions Management Plan that follows the regulator’s template, with measurement-based estimation of methane and other GHGs rather than reliance on default emission factors where direct measurement is technically feasible.",
      "Submissions will follow a defined reporting cycle and must reconcile against operational data, including production volumes, flaring, venting events, and equipment-level emissions. Operators should expect closer scrutiny of methodology choices, leak detection programmes, and source-level attribution, and should prepare for spot verification by the Commission.",
      "The Directive also fits into Nigeria’s broader decarbonisation posture under the Petroleum Industry Act, 2021 and the Nigeria Climate Change Act, 2021. For sponsors, lenders, and offtakers, it strengthens the link between emissions performance and regulatory standing — a link that increasingly affects bankability and reputational risk on Nigerian upstream assets.",
      "Operators that have not yet aligned internal reporting with the new templates should begin gap assessments now, with particular attention to data quality, measurement equipment, and the governance trail behind reported figures.",
    ],
    authors: [
      {
        name: "NEXTLAW Energy and Natural Resources Team",
        role: "Energy and Natural Resources",
        email: "energy@nextlawpractice.com",
      },
    ],
    practiceContact: {
      label: "NEXTLAW Energy and Natural Resources Practice",
      email: "energy@nextlawpractice.com",
    },
  },
];

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  "Energy and Natural Resources",
  "Real Estate",
];

export const INSIGHT_TYPES: InsightType[] = [
  "PUBLICATIONS",
  "NEWS",
  "REGULATORY UPDATE",
  "ALERT",
  "NEWSLETTER",
];
