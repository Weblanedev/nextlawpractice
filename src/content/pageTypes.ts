import type { ThemedImageKey } from "@/content/themedImages";

export type PageSection = {
  id: string;
  title: string;
  body: string[];
  imageKey?: ThemedImageKey;
  eyebrow?: string;
};

export type PageContent = {
  title: string;
  intro: string[];
  sections: PageSection[];
};
