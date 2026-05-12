import type { PageContent } from "@/content/pageTypes";
import type { ThemedImageKey } from "@/content/themedImages";

export type AttorneyProfile = {
  id: string;
  name: string;
  role: string;
  practice: string;
  bio: string;
  imageKey: ThemedImageKey;
};

export const ATTORNEYS_PAGE: PageContent = {
  title: "Attorneys",
  intro: [
    "Our lawyers combine technical depth with practical commercial judgement across the Nigerian market.",
    "Each profile below sets out practice focus, representative experience areas, and the type of work they typically lead.",
    "Final headshots and biographies will be confirmed during content review.",
  ],
  sections: [],
};

export const ATTORNEYS: AttorneyProfile[] = [
  {
    id: "managing-partner",
    name: "Lead Partner Profile",
    role: "Managing Partner",
    practice: "Corporate and Commercial",
    bio: "Leads the firm's corporate practice with a focus on Nigerian and cross-border M&A, joint ventures, and strategic investments across financial services, energy, and consumer sectors.",
    imageKey: "office",
  },
  {
    id: "finance-partner",
    name: "Banking and Finance Lead",
    role: "Partner",
    practice: "Banking and Finance",
    bio: "Advises Nigerian and international lenders, sponsors, and corporates on syndicated lending, acquisition finance, structured finance, and project finance.",
    imageKey: "signing",
  },
  {
    id: "energy-partner",
    name: "Energy and Resources Lead",
    role: "Partner",
    practice: "Energy and Natural Resources",
    bio: "Handles upstream, midstream, and downstream oil and gas mandates, power sector transactions, and energy transition projects under Nigerian regulation.",
    imageKey: "land",
  },
  {
    id: "disputes-partner",
    name: "Dispute Resolution Lead",
    role: "Partner",
    practice: "Litigation, Dispute Resolution and Arbitration",
    bio: "Leads commercial litigation and international arbitration with experience under ICC, LCIA, UNCITRAL, and ad hoc rules, including enforcement work in Nigerian courts.",
    imageKey: "scales",
  },
  {
    id: "tax-partner",
    name: "Tax and Customs Lead",
    role: "Partner",
    practice: "Tax",
    bio: "Advises on corporate tax, transfer pricing, VAT, and customs matters, including FIRS audit defence and Tax Appeal Tribunal proceedings.",
    imageKey: "documents",
  },
  {
    id: "tmt-partner",
    name: "TMT, Data and IP Lead",
    role: "Partner",
    practice: "Technology, Media and IP",
    bio: "Supports telcos, technology platforms, and content businesses on Nigerian licensing, data protection, IP, and commercial arrangements.",
    imageKey: "scrabble",
  },
  {
    id: "real-estate-counsel",
    name: "Real Estate Lead",
    role: "Managing Counsel",
    practice: "Real Estate",
    bio: "Advises developers, investors, and occupiers on acquisitions, development, leasing, and disposals across Lagos and other commercial centres.",
    imageKey: "houseForSale",
  },
  {
    id: "investigations-counsel",
    name: "Investigations and Compliance Lead",
    role: "Managing Counsel",
    practice: "White Collar and Compliance",
    bio: "Leads internal investigations and regulator-facing matters before EFCC, ICPC, NFIU, and CBN, including parallel global enforcement coordination.",
    imageKey: "bribery",
  },
  {
    id: "private-wealth-counsel",
    name: "Private Wealth Lead",
    role: "Senior Associate",
    practice: "Private Wealth Services",
    bio: "Advises founders, families, and family offices on succession planning, trusts, and intergenerational wealth structures in Nigeria.",
    imageKey: "child",
  },
  {
    id: "ma-senior",
    name: "M&A Senior Associate",
    role: "Senior Associate",
    practice: "Mergers and Acquisitions",
    bio: "Manages day-to-day execution of Nigerian and cross-border M&A transactions, including due diligence, transaction documentation, and regulatory filings.",
    imageKey: "consultation",
  },
  {
    id: "fintech-associate",
    name: "Fintech and Payments Associate",
    role: "Associate",
    practice: "Fintech and Payments",
    bio: "Advises payment service providers and digital lenders on CBN licensing, product structuring, and partnership arrangements.",
    imageKey: "city",
  },
  {
    id: "competition-associate",
    name: "Competition and Antitrust Associate",
    role: "Associate",
    practice: "Competition and Antitrust",
    bio: "Supports merger notifications, FCCPC investigations, and competition compliance programme design for Nigerian and multinational businesses.",
    imageKey: "behindBars",
  },
];
