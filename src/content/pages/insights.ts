import type { PageContent } from "@/content/pageTypes";

export const INSIGHTS_PAGE: PageContent = {
  title: "Media and Insights",
  intro: [
    "Updates, events, legal alerts, and publications from our team — written for clients who need to act, not just be informed.",
    "Each piece is reviewed by a lead practitioner with first-hand experience in the matter type discussed.",
  ],
  sections: [
    {
      id: "news",
      eyebrow: "News",
      imageKey: "office",
      title: "News and Events",
      body: [
        "Headline mandates, recognitions, and senior team updates from across the firm.",
        "Public-facing announcements covering significant transactions, awards, and Nigerian market developments will appear here as they are released.",
      ],
    },
    {
      id: "knowledge",
      eyebrow: "Knowledge Centre",
      imageKey: "documents",
      title: "Knowledge Centre",
      body: [
        "Long-form analysis on the legal, regulatory, and commercial issues shaping Nigerian business.",
        "Topics typically include capital markets, energy transition, data protection, dispute resolution, tax administration, and emerging technology law.",
      ],
    },
    {
      id: "legal-alerts",
      eyebrow: "Legal Alerts",
      imageKey: "scales",
      title: "Legal Alerts",
      body: [
        "Short, action-oriented bulletins on new legislation, regulator guidance, court decisions, and enforcement trends.",
        "Each alert sets out what changed, who is affected in Nigeria, and what to do next within typical compliance timelines.",
      ],
    },
    {
      id: "videos",
      eyebrow: "Insight Videos",
      imageKey: "consultation",
      title: "Insight Videos",
      body: [
        "Conversations with our senior lawyers and invited specialists on practical issues across Nigerian commercial law.",
        "Recurring themes include regulator engagement, sector outlooks, governance, and emerging risk topics for in-house counsel and boards.",
      ],
    },
    {
      id: "responsible-business",
      eyebrow: "Responsible Business",
      imageKey: "child",
      title: "Responsible Business Reports",
      body: [
        "Annual reporting on the firm's pro bono, access-to-justice, and institutional strengthening initiatives in Nigeria.",
        "We focus on access, institutional strength, and talent development as a core part of how we create value alongside commercial work.",
      ],
    },
    {
      id: "events",
      eyebrow: "Speaking and Events",
      imageKey: "city",
      title: "Speaking and Events",
      body: [
        "Conference appearances, panels, and roundtables hosted or attended by our partners and senior associates.",
        "Listings will include event dates, topics, and registration details where applicable.",
      ],
    },
  ],
};
