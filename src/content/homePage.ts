/**
 * Homepage section copy: structure inspired by leading full service law firm
 * homepages, with original NEXTLAW wording.
 */

export type HomeNewsItem = {
  id: string;
  dateLabel: string;
  title: string;
  summary: string;
  href: string;
};

export const HOME_LATEST_NEWS: HomeNewsItem[] = [
  {
    id: "land-fmv-schedule-2026",
    dateLabel: "April 2026",
    title: "Fair market value schedule updated for land transactions",
    summary:
      "Following a periodic review, revised fair market value rates will apply to a wide range of land registrations and related charges from 1 May 2026. Developers, lenders, and occupiers should refresh models and registration sequencing.",
    href: "/insights/land-fmv-schedule-2026",
  },
  {
    id: "upstream-ghg-reporting-2026",
    dateLabel: "April 2026",
    title: "Upstream directive on standardised methane and GHG reporting templates",
    summary:
      "Operators face template-based emissions management plans and measurement-led methane and GHG reporting, tightening the link between environmental performance and regulatory standing.",
    href: "/insights/upstream-ghg-reporting-2026",
  },
];
