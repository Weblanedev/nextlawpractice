import type { AccordionGroup } from "@/components/site/AccordionSection";

const KC = "NEXTLAW";

type P = { title: string; body: string[] };

const P: Record<string, P> = {
  banking: {
    title: "Banking",
    body: [
      "We act for domestic and international banks, development finance institutions, and corporate borrowers on syndicated lending, bilateral facilities, and structured finance transactions.",
      "Our team supports trade finance, working capital, acquisition finance, and asset-based lending, drafting and negotiating credit, security, and inter-creditor arrangements.",
    ],
  },
  "capital-markets": {
    title: "Capital Markets",
    body: [
      "We advise issuers, sponsors, and underwriters on equity and debt issuances, including IPOs, rights issues, bond programmes, and commercial paper.",
      "Our work covers securities registration, exchange and debt-market listings, sovereign and corporate bonds, sukuk, green bonds, and ongoing post-listing compliance.",
    ],
  },
  competition: {
    title: "Competition and Antitrust",
    body: [
      "We advise on merger control filings, conduct investigations, and compliance under applicable competition statutes.",
      "Our team supports clients through merger notifications, dawn raid response, leniency strategy, and competition compliance training.",
    ],
  },
  corporate: {
    title: "Corporate Services",
    body: [
      "We support company formation, group restructuring, ongoing corporate governance, and board advisory aligned to companies legislation and financial reporting standards.",
      "Our work includes shareholder agreements, corporate housekeeping, statutory filings, and compliance with sector regulators.",
    ],
  },
  "data-protection": {
    title: "Data Protection and Privacy",
    body: [
      "We advise data controllers and processors on compliance with applicable data protection law and supervisory guidance.",
      "Our team supports DPIAs, breach response, cross-border transfer mechanisms, and engagement with data protection authorities.",
    ],
  },
  "employment-immigration": {
    title: "Employment, Immigration and Incentives",
    body: [
      "We advise on contracts of employment, terminations, restructurings, and employee equity arrangements under applicable employment law.",
      "Our work includes work authorisation, business permits, mobility programmes, and the design of pension, gratuity, and incentive arrangements.",
    ],
  },
  energy: {
    title: "Energy and Natural Resources",
    body: [
      "We advise oil and gas, power, and renewable energy clients across the value chain, from licensing through commercial operations.",
      "Our team handles joint operating arrangements, production-sharing structures, gas sale agreements, EPC arrangements, and engagement with upstream, downstream, and electricity regulators.",
    ],
  },
  esg: {
    title: "Environmental, Social and Governance (ESG)",
    body: [
      "We advise corporates, financial institutions, and project sponsors on ESG strategy, disclosure, and risk management under domestic and international frameworks.",
      "Our work supports climate-related disclosure, social licence to operate, supply chain due diligence, and sustainability-linked financing.",
    ],
  },
  "financial-institutions": {
    title: "Financial Institutions Advisory",
    body: [
      "We advise banks, payment service providers, asset managers, and insurers on licensing, prudential requirements, and product launches.",
      "Our team supports engagement with banking, securities, pensions, and insurance supervisors, including resolution and recovery planning.",
    ],
  },
  restructuring: {
    title: "Financial Restructuring and Insolvency",
    body: [
      "We act for stakeholders in restructurings, schemes of arrangement, administration, receivership, and liquidation under applicable insolvency law.",
      "Our team supports inter-creditor negotiations, debt-for-equity swaps, pre-pack arrangements, and contested enforcement.",
    ],
  },
  grc: {
    title: "Governance, Risk and Compliance",
    body: [
      "We advise boards and management on governance frameworks aligned to recognised corporate governance codes and sector-specific requirements.",
      "Our team supports policy design, board effectiveness reviews, conflict management, and compliance with whistleblowing and reporting obligations.",
    ],
  },
  ppp: {
    title: "Infrastructure Finance and PPP",
    body: [
      "We support sponsors, lenders, and public sector counterparties on PPP and concession arrangements across transport, power, and social infrastructure.",
      "Our work covers concession processes, project agreements, financing structures, and dispute resolution clauses tailored to long-life assets.",
    ],
  },
  ip: {
    title: "Intellectual Property",
    body: [
      "We advise on trademarks, patents, designs, copyright, and trade secrets across local and international portfolios.",
      "Our team supports brand protection strategy, technology licensing, anti-counterfeiting, and IP-led disputes.",
    ],
  },
  "international-trade": {
    title: "International Trade",
    body: [
      "We advise on customs, regional trade agreements, sanctions, export control, and trade remedies relevant to importers and exporters.",
      "Our work covers tariff classification, rules of origin, customs valuation disputes, and engagement with customs authorities.",
    ],
  },
  disputes: {
    title: "Litigation, Dispute Resolution and Arbitration",
    body: [
      "We handle complex commercial litigation before national courts and international arbitration under ICC, LCIA, UNCITRAL, and ad hoc rules.",
      "Our team supports pre-action strategy, mediation, advocacy, enforcement of foreign judgments, and arbitral award enforcement under applicable arbitration legislation.",
    ],
  },
  mna: {
    title: "Mergers and Acquisitions",
    body: [
      "We advise on public and private M&A across all sectors, including share purchases, asset deals, take-privates, schemes, and joint ventures.",
      "Our team manages due diligence, deal documentation, merger filings, sector regulator approvals, and post-completion integration.",
    ],
  },
  "private-equity": {
    title: "Private Equity",
    body: [
      "We act for sponsors, portfolio companies, and management teams on fund formation, primary and secondary investments, and exit transactions.",
      "Our team supports growth equity, venture, and infrastructure fund structures, including DFI and impact-aligned investors active in our markets.",
    ],
  },
  "private-wealth": {
    title: "Private Wealth Services",
    body: [
      "We advise founders, families, and family offices on succession planning, trusts, and intergenerational wealth structures.",
      "Our work includes estate planning, asset protection, philanthropy, and coordination with corporate and tax colleagues.",
    ],
  },
  privatisation: {
    title: "Privatisation and Public Procurement",
    body: [
      "We advise public sector entities and private investors on privatisation, concession, and procurement processes.",
      "Our team supports competitive tenders, divestment programmes, and regulated procurement for infrastructure and service contracts.",
    ],
  },
  "real-estate": {
    title: "Real Estate",
    body: [
      "We advise developers, lenders, REITs, and occupiers on acquisitions, development, leasing, and disposals of commercial and residential real estate.",
      "Our team handles title perfection, registration and consent requirements, property finance, and tenant arrangements across residential, commercial, and mixed-use assets.",
    ],
  },
  whistleblowing: {
    title: "Reporting and Whistleblowing",
    body: [
      "We help organisations design and operate whistleblowing programmes consistent with applicable regulatory expectations and global parent group standards.",
      "Our team manages confidential intake, investigation, and reporting workflows, alongside non-retaliation safeguards.",
    ],
  },
  tax: {
    title: "Tax",
    body: [
      "We advise on corporate income tax, VAT, withholding tax, transfer pricing, and digital services tax where applicable.",
      "Our team supports planning, audit defence, tribunal proceedings, and engagement with national and sub-national revenue authorities.",
    ],
  },
  tmt: {
    title: "Telecommunications, Media and Technology",
    body: [
      "We advise telcos, towercos, OTT platforms, broadcasters, and digital media companies on licensing, content regulation, and commercial arrangements.",
      "Our work covers telecoms and broadcast licensing, content rules, distribution agreements, and infrastructure sharing.",
    ],
  },
  venture: {
    title: "Venture Technology and Emerging Growth",
    body: [
      "We act for founders, angels, accelerators, and venture funds at every stage from formation through to exit.",
      "Our team supports SAFE and equity rounds, ESOPs, cross-border holding structures, and bespoke advisory on regulatory exposure for digital products.",
    ],
  },
  "white-collar": {
    title: "White Collar and Business Crime Investigations",
    body: [
      "We conduct internal and regulator-facing investigations into fraud, bribery, money laundering, and other financial crime.",
      "Our team advises on engagement with criminal justice, anti-corruption, and financial intelligence authorities, with parallel attention to global enforcement exposure under the FCPA, UKBA, and sanctions regimes.",
    ],
  },
};

function items(ids: string[]) {
  return ids.map((id) => ({
    id,
    title: P[id]!.title,
    body: P[id]!.body,
    keyContacts: KC,
  }));
}

export const PRACTICES_PAGE = {
  title: "Innovative thinking to develop practical and insightful solutions",
  eyebrow: "Practices",
  intro: [
    "At NEXTLAW, we pride ourselves on sector strengths across corporate and commercial, energy and natural resources, telecommunications, foreign investment, shipping and maritime, aviation, taxation, commercial litigation, alternative dispute resolution, and project finance, all delivered with a service-first lens.",
    "Each practice group combines technical depth with practical judgement, supporting clients on transactions, advisory work, and disputes from inception to outcome.",
  ],
  groups: [
    {
      id: "corporate-private-markets",
      heading: "Corporate, M&A and private markets",
      description:
        "Company law, transactions, and private client structures for businesses operating and investing across markets.",
      items: items([
        "corporate",
        "mna",
        "private-equity",
        "private-wealth",
        "privatisation",
        "real-estate",
      ]),
    },
    {
      id: "banking-finance-tax",
      heading: "Banking, finance and tax",
      description:
        "Lending, markets, restructuring, and revenue authority engagement for financial and corporate clients.",
      items: items(["banking", "financial-institutions", "capital-markets", "restructuring", "tax"]),
    },
    {
      id: "energy-projects-esg",
      heading: "Energy, projects and ESG",
      description:
        "Upstream to downstream energy, infrastructure finance, and sustainability-linked advice aligned to each mandate.",
      items: items(["energy", "ppp", "esg"]),
    },
    {
      id: "disputes-trade-regulatory",
      heading: "Disputes, employment and trade",
      description:
        "Contentious work, competition law, people issues, and cross-border trade and customs matters.",
      items: items(["disputes", "competition", "employment-immigration", "international-trade"]),
    },
    {
      id: "technology-media-ip",
      heading: "Technology, media and intellectual property",
      description:
        "Regulated communications, digital products, IP portfolios, and growth-company financings.",
      items: items(["data-protection", "tmt", "ip", "venture"]),
    },
    {
      id: "governance-investigations",
      heading: "Governance, compliance and investigations",
      description:
        "Board and enterprise controls, whistleblowing programmes, and business crime response across jurisdictions.",
      items: items(["grc", "whistleblowing", "white-collar"]),
    },
  ] satisfies AccordionGroup[],
};
