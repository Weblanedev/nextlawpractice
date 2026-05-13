import type { PageContent } from "@/content/pageTypes";

export type AttorneyEditorialSection = {
  eyebrow: string;
  title: string;
  body: string[];
  align?: "left" | "right";
  tone?: "white" | "cream";
};

export const ATTORNEYS_PAGE: PageContent = {
  title: "Attorneys",
  intro: [
    "Partner-led teams across corporate, finance, disputes, energy, tax, and investigations, with clear ownership from instruction to completion.",
    "The directory groups lawyers by seniority and practice focus so you can see who leads our work and who supports each mandate.",
  ],
  sections: [],
};

/** Two editorial blocks (same visual language as “Our People” on the homepage). */
export const ATTORNEY_EDITORIAL_SECTIONS: AttorneyEditorialSection[] = [
  {
    eyebrow: "Partners & leadership",
    title: "Senior practitioners who carry the mandate.",
    body: [
      "Partners and managing counsel lead client relationships and complex mandates across our core practices.",
      "Profiles summarise practice emphasis and the types of work we routinely handle for Nigerian and international clients.",
    ],
    align: "left",
    tone: "white",
  },
  {
    eyebrow: "Counsel & associates",
    title: "Execution depth on the matters that matter.",
    body: [
      "Counsel, senior associates, and associates work alongside partners on transactions, disputes, and regulatory matters, with clear roles and accountability.",
      "They provide specialist depth on documentation, research, and matter execution under partner oversight.",
    ],
    align: "right",
    tone: "cream",
  },
];
