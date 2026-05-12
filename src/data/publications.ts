import publications from "@/data/publications.json";

export type Publication = {
  id: string;
  title: string;
  dateISO: string;
  summary: string;
  href?: string;
};

export function getPublications(): Publication[] {
  if (!Array.isArray(publications)) return [];
  return publications as Publication[];
}

