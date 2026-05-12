import type { PageContent } from "@/content/pageTypes";

export const CONTACT_PAGE: PageContent = {
  title: "Contact Us",
  intro: [
    "To discuss an engagement, reach us using the details below. We respond during business hours and will confirm next steps after initial conflict and scope review.",
    "Our central client team will route enquiries to the appropriate practice group within one business day.",
  ],
  sections: [
    {
      id: "lagos-office",
      eyebrow: "Lagos Office",
      imageKey: "office",
      title: "Our Lagos office",
      body: [
        "Our principal office is located on Lagos Island, with meeting rooms available for client briefings and external advisors.",
        "Visitors should pre-arrange appointments to streamline access and conflict checks.",
      ],
    },
    {
      id: "client-team",
      eyebrow: "Client Team",
      imageKey: "consultation",
      title: "Speak to our client team",
      body: [
        "Our client team handles new mandates, scoping discussions, and initial routing to the right practice group.",
        "We typically confirm next steps within one business day, including a draft engagement scope and a senior point of contact.",
      ],
    },
  ],
};
