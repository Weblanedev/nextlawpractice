import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { ContentLayout } from "@/components/site/ContentLayout";
import { SectionBanner } from "@/components/site/SectionBanner";
import { getPublications } from "@/data/publications";
import { themedImage, type ThemedImageKey } from "@/content/themedImages";
import { INSIGHTS } from "@/data/insights";

const PLACEHOLDER_PUBLICATIONS: Array<{
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  imageKey: ThemedImageKey;
  insightId?: string;
}> = [
  {
    id: "nuprc-ghg-methane",
    insightId: "nuprc-ghg-methane",
    date: "13 April 2026",
    category: "Energy and Natural Resources",
    title:
      "NUPRC Issues Directive on Standardised Templates and Measurement-Based Methane and GHG Reporting",
    summary:
      "Upstream operators must use standardised templates for GHG emissions management planning and report methane and GHG inventories on a measurement basis. The Directive shifts upstream emissions oversight to an auditable, evidence-driven framework.",
    imageKey: "land",
  },
  {
    id: "lagos-blue-book-2026",
    insightId: "lagos-blue-book-2026",
    date: "29 April 2026",
    category: "Real Estate",
    title: "Lagos State Blue Book to Take Effect from 1 May 2026",
    summary:
      "Following its five-year review of the Blue Book, the Lagos State Lands Bureau will roll out revised FMV rates from 1 May 2026, affecting Governor's Consent fees, land registration premiums, land use charge, and compensation across the State.",
    imageKey: "houseForSale",
  },
  {
    id: "energy-digest",
    date: "06 May 2026",
    category: "Energy and Natural Resources",
    title: "NEXTLAW Transcripts: Energy and Natural Resources Digest",
    summary:
      "Our quarterly digest highlights a more disciplined execution phase across Nigeria, with firmer regulation, active project delivery, and clearer investment signals across upstream, midstream, and gas-to-power.",
    imageKey: "land",
  },
  {
    id: "responsible-business-2025",
    date: "30 April 2026",
    category: "Responsible Business",
    title: "Responsible Business Report 2025",
    summary:
      "In 2025, our Nigerian responsible business work focused on access to justice, institutional strength, and talent development as a core part of how the firm creates value.",
    imageKey: "child",
  },
  {
    id: "cross-border-product-liability",
    date: "28 April 2026",
    category: "Dispute Resolution",
    title: "Jurisdiction in Cross-Border Product Liability Claims: The Nigerian Framework",
    summary:
      "Jurisdiction is no longer a threshold technicality in cross-border product liability claims. It is a commercial lever that determines where claims are heard, how liability is framed, and the cost and exposure profile for cross-border businesses.",
    imageKey: "scales",
  },
  {
    id: "ndpa-update",
    date: "12 March 2026",
    category: "Data Protection",
    title: "NDPC Enforcement Trends Under the Nigeria Data Protection Act",
    summary:
      "A practical review of recent NDPC enforcement priorities, common issues raised in audit cycles, and the controls Nigerian businesses are tightening in response.",
    imageKey: "scrabble",
  },
  {
    id: "fccpc-merger",
    date: "18 February 2026",
    category: "Competition and Antitrust",
    title: "FCCPC Merger Review: What Investors Should Expect",
    summary:
      "Timing, documentation, and competitive assessment under the FCCPC's current merger regime, with practical guidance for sponsors and corporate development teams.",
    imageKey: "signing",
  },
  {
    id: "white-collar-trends",
    date: "29 January 2026",
    category: "White Collar and Investigations",
    title: "White Collar and Financial Crime Trends in Nigeria",
    summary:
      "EFCC, ICPC, and NFIU priorities, sector hot spots, and the controls in-house teams are putting in place to manage parallel global enforcement exposure.",
    imageKey: "bribery",
  },
];

export default function PublicationsPage() {
  const datasourcePubs = getPublications();
  const publications = datasourcePubs.length ? datasourcePubs : null;
  const linkedInsightIds = new Set(
    INSIGHTS.filter((a) => a.body && a.body.length > 0).map((a) => a.id),
  );

  return (
    <PageShell>
      <ContentLayout
        bannerImageKey="documents"
        eyebrow="Publications"
        title="Knowledge Centre"
        intro={[
          "View our publications across Nigerian commercial law — written by the partners and senior associates who lead the matters.",
          "Each piece is action-oriented: what changed, who is affected in Nigeria, and what to do next within typical compliance timelines.",
        ]}
        contentWidth="wide"
      >
        {publications ? (
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {publications.map((p) => (
              <article
                key={p.id}
                className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-7 lg:p-9"
              >
                <div className="text-xs font-semibold tracking-wide text-black/60">
                  {new Date(p.dateISO).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <h2 className="mt-3 text-xl font-semibold">{p.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">{p.summary}</p>
                {p.href ? (
                  <a className="mt-6 inline-block text-sm font-semibold text-[#c41e3a]" href={p.href}>
                    Read more &rarr;
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <>
            <div className="-mx-6 mb-12 md:-mx-10 lg:-mx-12">
              <SectionBanner
                title="Publications"
                body="Briefings and long-form analysis on Nigerian regulatory, transactional, and disputes work — written so in-house teams can act on them."
              />
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
              {PLACEHOLDER_PUBLICATIONS.map((p) => {
                const img = themedImage(p.imageKey);
                const insightId = p.insightId && linkedInsightIds.has(p.insightId) ? p.insightId : null;
                const cardClass =
                  "group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)]";
                const card = (
                  <>
                    <div className="relative h-56 w-full overflow-hidden bg-neutral-100 lg:h-60">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-black/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {p.category}
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-3 p-7 lg:p-9">
                      <div className="text-xs font-semibold tracking-wide text-neutral-500">{p.date}</div>
                      <h2 className="text-[1.3rem] font-semibold leading-snug text-neutral-900 lg:text-[1.4rem]">
                        {p.title}
                      </h2>
                      <p className="text-[15px] leading-relaxed text-neutral-700">{p.summary}</p>
                      <div className="mt-auto pt-2 text-sm font-semibold text-[#c41e3a] group-hover:text-[#a01830]">
                        Read more &rarr;
                      </div>
                    </div>
                  </>
                );

                return insightId ? (
                  <Link key={p.id} href={`/insights/${insightId}`} className={cardClass}>
                    {card}
                  </Link>
                ) : (
                  <article key={p.id} className={cardClass}>
                    {card}
                  </article>
                );
              })}
            </div>
          </>
        )}
      </ContentLayout>
    </PageShell>
  );
}
