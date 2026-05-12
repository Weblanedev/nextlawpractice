import { THEMED_IMAGES } from "@/content/themedImages";

export type HeroSlide = {
  /** Plain headline when `emphasize` is omitted; also used for accessibility. */
  title: string;
  emphasize?: { before: string; italic: string; after: string };
  subtitle?: string;
  href: string;
  cta: string;
  bgImage: string;
  circleImage: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "A fresh perspective.",
    emphasize: { before: "A fresh ", italic: "perspective", after: "." },
    subtitle: "Complex legal challenges, understood.",
    href: "/about-us",
    cta: "About NEXTLAW",
    bgImage: THEMED_IMAGES.city.src,
    circleImage: THEMED_IMAGES.scrabble.src,
  },
  {
    title: "At the forefront of commercial law in Nigeria.",
    href: "/capabilities",
    cta: "Explore capabilities",
    bgImage: THEMED_IMAGES.office.src,
    circleImage: THEMED_IMAGES.documents.src,
  },
  {
    title: "Solving complex problems for industry leaders and disruptors.",
    href: "/sectors",
    cta: "View sectors",
    bgImage: THEMED_IMAGES.land.src,
    circleImage: THEMED_IMAGES.scales.src,
  },
  {
    title: "Action-oriented insight on Nigerian law.",
    href: "/insights",
    cta: "Read insights",
    bgImage: THEMED_IMAGES.documents.src,
    circleImage: THEMED_IMAGES.consultation.src,
  },
];
