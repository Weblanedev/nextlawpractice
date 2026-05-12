/**
 * Homepage section copy — structure inspired by leading Nigerian commercial law firm
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
    id: "lagos-blue-book-2026",
    dateLabel: "April 2026",
    title: "Lagos State Blue Book to take effect from 1 May 2026",
    summary:
      "The Lagos State Lands Bureau has finalised its five-year review of the Blue Book; revised Fair Market Value rates will apply to a wide range of land transactions in Lagos from 1 May 2026.",
    href: "/insights/lagos-blue-book-2026",
  },
  {
    id: "nuprc-ghg-methane",
    dateLabel: "April 2026",
    title:
      "NUPRC issues Directive on standardised templates and measurement-based methane and GHG reporting",
    summary:
      "The Commission has issued a Directive requiring upstream operators to use standardised templates for GHG emissions management planning and to report methane and GHG inventories on a measurement basis.",
    href: "/insights/nuprc-ghg-methane",
  },
];
