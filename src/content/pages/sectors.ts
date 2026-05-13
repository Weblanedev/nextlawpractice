import type { AccordionGroup } from "@/components/site/AccordionSection";

const KC = "NEXTLAW";

type S = { title: string; body: string[] };

const S: Record<string, S> = {
  energy: {
    title: "Energy and Oil & Gas",
    body: [
      "Our Energy and Projects team provides legal and commercial support to the upstream, midstream and downstream energy industry in Nigeria.",
      "We advise on licensing rounds, asset acquisitions, integrated gas projects, gas sale and tolling agreements, EPC contracting, financing, and the management of regulatory engagement with NUPRC, NMDPRA, and NNPC Limited.",
    ],
  },
  power: {
    title: "Power and Infrastructure",
    body: [
      "We have extensive experience advising private developers, lenders, and government counterparties on Nigeria's power sector, from generation and transmission to embedded and off-grid power.",
      "Our infrastructure work spans roads, ports, water, and social infrastructure, covering financing, concession arrangements, EPC documentation, and regulatory consents.",
    ],
  },
  "energy-transition": {
    title: "Energy Transition and Renewables",
    body: [
      "We solve complex problems for industry leaders and disruptors across Nigeria's energy transition, including solar, wind, mini-grids, hydrogen, and emissions advisory.",
      "We support project development, PPA negotiation, blended finance, carbon market participation, and engagement with regulators on emerging frameworks.",
    ],
  },
  "financial-institutions": {
    title: "Financial Institutions",
    body: [
      "We act for commercial banks, merchant banks, payment service providers, microfinance banks, and asset managers operating under CBN, SEC, and PenCom oversight.",
      "Our work covers licensing, product structuring, regulatory engagement, treasury and capital instruments, and recovery and resolution planning.",
    ],
  },
  fintech: {
    title: "Fintech and Payments",
    body: [
      "We partner with some of Africa and the wider world's most exciting fintech companies, helping them to navigate Nigeria's payment, lending, and digital asset regulatory environment.",
      "Our team advises on PSP licensing, sandbox participation, BVN and KYC obligations, open banking, and partnerships with banks and global payment networks.",
    ],
  },
  "capital-markets": {
    title: "Capital Markets",
    body: [
      "We advise Nigerian and international clients on all aspects of capital markets, from listings and rights issues to bond programmes, commercial paper, and structured products.",
      "Our team has a strong track record on SEC-registered offerings, NGX and FMDQ listings, and Sukuk and green bond issuances by federal, sub-national, and corporate issuers.",
    ],
  },
  "project-finance": {
    title: "Project Finance",
    body: [
      "Our project finance specialists advise on all aspects of project finance in Nigeria, from limited recourse structuring to inter-creditor and security arrangements.",
      "We have supported sponsors and lenders on landmark infrastructure, power, and natural resource financings, coordinating multilateral, DFI, and commercial bank participation.",
    ],
  },
  telecoms: {
    title: "Telecommunications, Media and Technology",
    body: [
      "We advise on telecommunications law and regulation in Nigeria, market entry strategy, statutory applications, interconnect agreements, infrastructure sharing, and procurement of NCC licences.",
      "Our team supports operators, towercos, OTT players, and content businesses through privatisation, joint ventures, and acquisitions across the TMT value chain.",
    ],
  },
  technology: {
    title: "Technology and Disruptors",
    body: [
      "We advise some of the most exciting technology start-ups and disruptors helping them to access and scale within the Nigerian economy.",
      "Our work covers company formation, equity and SAFE financings, employee equity plans, data protection (NDPC compliance), cross-border IP, and exit transactions.",
    ],
  },
  "real-estate": {
    title: "Real Estate",
    body: [
      "Our real estate team handles the entire property life-cycle, from acquisition and development through to letting and disposal in Lagos, Abuja, and other commercial centres.",
      "We support residential, commercial, retail, and mixed-use projects with title perfection, financing, joint ventures, and tenant arrangements.",
    ],
  },
  infrastructure: {
    title: "Infrastructure",
    body: [
      "We advise sponsors, lenders, and government counterparties on Nigerian infrastructure investment, including transportation, ports and terminals, water, logistics, and social infrastructure.",
      "Our team handles financing, PPP structuring, planning and consenting, and complex multiparty contracting.",
    ],
  },
  insurance: {
    title: "Insurance",
    body: [
      "We advise insurers, reinsurers, and brokers operating in Nigeria across product distribution, regulatory engagement with NAICOM, and disputes.",
      "Our work spans capital, liquidity, investment, and product launch, including bancassurance, micro-insurance, and InsurTech distribution channels.",
    ],
  },
  manufacturing: {
    title: "Manufacturing and Industrial",
    body: [
      "We advise leading manufacturing and industrial groups in Nigeria on business-critical issues, from complex transactions to intellectual property, supply chain, and product compliance.",
      "Our work supports raw material sourcing, distribution, regulatory engagement with NAFDAC and SON, and operational restructuring.",
    ],
  },
  fmcg: {
    title: "FMCG and Consumer",
    body: [
      "We help some of the world's biggest and best known brands navigate the Nigerian legal landscape, supporting market entry and growth across consumer categories.",
      "Our team advises on distribution, advertising and consumer protection, brand protection, and regulatory clearance for new product launches.",
    ],
  },
  maritime: {
    title: "Maritime and Shipping",
    body: [
      "Our Maritime team regularly advises on marine commerce, carriage of goods by sea, cabotage, and NIMASA regulatory engagement.",
      "We handle maritime litigation, ship arrest and release, P&I support, and chartering disputes on behalf of lenders, owners, and charterers.",
    ],
  },
  aviation: {
    title: "Aviation",
    body: [
      "Our Aviation unit advises on licensing and regulation of airlines, passenger rights, carrier rights and liabilities, and air accident matters under the NCAA framework.",
      "We support airline operations, ground handling, leasing, and infrastructure arrangements with strong commercial sensitivity to operational continuity.",
    ],
  },
  mining: {
    title: "Mining and Metals",
    body: [
      "We offer advice to businesses throughout the Nigerian mining industry, from formation of joint ventures and structuring of shareholder arrangements, through to real estate, exploration and development rights.",
      "Our team supports licensing, community engagement, ESG, and offtake arrangements for metallic and industrial minerals.",
    ],
  },
  healthcare: {
    title: "Healthcare and Life Sciences",
    body: [
      "Our lawyers understand all aspects of healthcare and life sciences industries, with their unique regulatory and ethical challenges in Nigeria.",
      "We advise on NAFDAC engagement, hospital operations, clinical research, medical devices, and digital health platforms.",
    ],
  },
  chemicals: {
    title: "Chemicals",
    body: [
      "We advise clients on regulatory and liability issues arising from chemical manufacture, distribution, storage, and use under Nigerian environmental and safety law.",
      "Our team supports product registration, environmental impact, and incident response.",
    ],
  },
};

function items(ids: string[]) {
  return ids.map((id) => ({
    id,
    title: S[id]!.title,
    body: S[id]!.body,
    keyContacts: KC,
  }));
}

export const SECTORS_PAGE = {
  title: "Solving complex problems for industry leaders and disruptors",
  eyebrow: "Sectors",
  intro: [
    "Solving complex problems for industry leaders and disruptors.",
    "We relish complexity, constantly looking for new and innovative solutions. Our sector teams blend technical legal expertise with direct industry knowledge of the markets we advise.",
    "We have advised on some of the largest transactions in the region and hold close working relationships with leading global law firms supporting cross-border mandates.",
  ],
  groups: [
    {
      id: "energy-power-transition",
      heading: "Energy, power and transition",
      description:
        "Upstream to downstream oil and gas, electricity markets, renewables, and critical minerals, with a focus on regulators and project delivery.",
      items: items(["energy", "power", "energy-transition", "mining"]),
    },
    {
      id: "financial-capital",
      heading: "Financial services and capital",
      description:
        "Banks, fintechs, insurers, and capital markets and project finance transactions shaping our clients' markets.",
      items: items([
        "financial-institutions",
        "fintech",
        "capital-markets",
        "project-finance",
        "insurance",
      ]),
    },
    {
      id: "built-environment-mobility",
      heading: "Infrastructure, property and mobility",
      description:
        "Large-scale infrastructure, real estate investment, aviation, and maritime commerce.",
      items: items(["infrastructure", "real-estate", "aviation", "maritime"]),
    },
    {
      id: "industrials-life-sciences",
      heading: "Industrials, consumer and life sciences",
      description:
        "Manufacturing, FMCG, chemicals, and healthcare, where regulatory compliance meets commercial growth.",
      items: items(["manufacturing", "fmcg", "chemicals", "healthcare"]),
    },
    {
      id: "technology-communications",
      heading: "Technology and communications",
      description:
        "Telecoms regulation, digital platforms, and technology-led growth companies scaling in Nigeria.",
      items: items(["telecoms", "technology"]),
    },
  ] satisfies AccordionGroup[],
};
