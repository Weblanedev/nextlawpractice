export type AboutValue = {
  id: string;
  title: string;
  body: string;
};

export type AboutPillar = {
  id: string;
  title: string;
  body: string;
};

export const ABOUT_PAGE = {
  eyebrow: "Who We Are",
  title: "At the forefront of full service legal advice",
  intro: [
    "NEXTLAW is a full service law firm, advising clients across sectors to provide practical and insightful solutions to their most pressing business challenges.",
    "We apply initiative thinking to develop commercially grounded advice for business leaders, regulated institutions, and disruptors operating in demanding markets.",
    "Our clients include global and regional businesses, market disruptors, and some of the most exciting growth companies in our markets. We advise energy firms, leading financial institutions, manufacturers, technology businesses, and a broad range of other clients, and we act on the most significant transactions and disputes we see.",
  ],
  vision: {
    eyebrow: "Our Vision",
    title: "To be the legal advisers of choice for the industry leaders of today and tomorrow",
    body: [
      "NEXTLAW was founded to address a clear gap in the market: high-quality legal advice delivered with an unmistakable commercial imperative.",
      "We have built the firm around that single idea, and we have never lost the commercial focus that drives it.",
    ],
  },
  mission: {
    eyebrow: "Our Mission",
    heading:
      "Provide high-quality, commercially grounded advice that solves our clients' business challenges and sets them up for success.",
  },
  whatWeDo: {
    eyebrow: "What We Do",
    title: "We solve problems",
    body:
      "We solve complex problems for industry leaders and disruptors. Our clients include energy firms, financial institutions, technology businesses, and some of the most ambitious growth companies we serve.",
    pillars: [
      {
        id: "complexity",
        title: "Relishing complexity",
        body: "We welcome difficult matters and look for new, practical answers, not formulaic responses.",
      },
      {
        id: "quality",
        title: "Quality legal advice",
        body: "We work alongside leading global firms on local aspects of significant cross-border transactions and disputes.",
      },
      {
        id: "expertise",
        title: "Deep local expertise",
        body: "We help clients navigate the realities of the legal, regulatory, and commercial landscape with confidence.",
      },
    ],
  },
  clientCommitment: {
    eyebrow: "Our Client Commitment",
    title: "Committed to client care and to building long-term relationships",
    subTitle: "Embracing new challenges",
    body: [
      "Our advice is rooted in a careful understanding of the client, their industry, and the commercial challenge in front of them.",
      "We embrace new challenges, welcome complexity, and bring fresh thinking to the most pressing matters our clients face.",
      "We pride ourselves on advice that is concise, impactful, and practical, and never lost in legal abstraction.",
    ],
  },
  values: {
    eyebrow: "Our Values",
    title: "The values that drive us as a firm",
    items: [
      {
        id: "client-centric",
        title: "Client centric",
        body:
          "Every engagement begins with an understanding of the client and the context in which they operate. Our advice is shaped around helping them reach their commercial goals.",
      },
      {
        id: "innovative",
        title: "Innovative",
        body:
          "We tailor our advice to each client and each objective. We challenge ourselves to think differently in the face of complexity.",
      },
      {
        id: "practical",
        title: "Practical",
        body:
          "We pair intellectual rigour with advice that is actionable, enforceable, and ready to apply on the ground for our clients.",
      },
      {
        id: "collaborative",
        title: "Collaborative",
        body:
          "We work as an extension of our clients, embedding ourselves in their industry and supporting strong ideas from every level of the firm.",
      },
    ],
  },
  discoverMore: {
    eyebrow: "Discover More",
    items: [
      {
        id: "responsible-business",
        title: "Responsible Business",
        body: "How we engage with and support the communities around us.",
        href: "/about-us#responsible-business",
        cta: "Our Responsible Business",
      },
      {
        id: "our-people",
        title: "Our People",
        body: "Partner-led teams, how we develop lawyers, and who you will work with.",
        href: "/our-people",
        cta: "Meet the team",
      },
    ],
  },
  responsibleBusiness: {
    eyebrow: "Responsible Business",
    title: "Engaging with and supporting our communities",
    body: [
      "We support initiatives focused on access to justice, institutional strength, and talent development as a core part of how we create value.",
      "We uphold strict confidentiality and conflict checks, and we operate with an ethics-first mindset on every engagement, with a continuing commitment to pro bono work and community capacity building.",
    ],
  },
} as const;
