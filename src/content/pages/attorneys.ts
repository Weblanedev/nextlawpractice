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
    "Partner-led teams across corporate, finance, disputes, energy, tax, and investigations — with clear ownership from instruction to completion.",
    "Profiles and imagery will be added as the directory is finalised.",
  ],
  sections: [],
};

/** Two editorial blocks (same visual language as “Our People” on the homepage). */
export const ATTORNEY_EDITORIAL_SECTIONS: AttorneyEditorialSection[] = [
  {
    eyebrow: "Partners & leadership",
    title: "Senior practitioners who carry the mandate.",
    body: [
      "This section will list partners and managing counsel, with practice focus and representative experience. Names and biographies will appear here once approved.",
      "Until then, use Our People for firm-wide context on how we staff matters and develop lawyers.",
    ],
    align: "left",
    tone: "white",
  },
  {
    eyebrow: "Counsel & associates",
    title: "Execution depth on the matters that matter.",
    body: [
      "This section will list counsel, senior associates, and associates who support partner-led teams across transactions, disputes, and regulatory work.",
      "Photographs and expanded bios will be published in a later content pass.",
    ],
    align: "right",
    tone: "cream",
  },
];
