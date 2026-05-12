export type ThemedImage = {
  src: string;
  alt: string;
};

export const THEMED_IMAGES = {
  scrabble: {
    src: "/assets/tingey-injury-law-firm-veNb0DDegzE-unsplash.jpg",
    alt: "Wooden scrabble tiles spelling the word LAWYER",
  },
  documents: {
    src: "/assets/melinda-gimpel-xcVW_sFp4jQ-unsplash.jpg",
    alt: "Stack of contract documents on a desk",
  },
  scales: {
    src: "/assets/brusk-dede-tjd5CfdDPRA-unsplash.jpg",
    alt: "Brass scales of justice on a marble surface",
  },
  signing: {
    src: "/assets/markus-winkler-398SN7CwP88-unsplash.jpg",
    alt: "Lawyer reviewing and signing legal paperwork",
  },
  consultation: {
    src: "/assets/sasun-bughdaryan-FaTLrG5-ViE-unsplash.jpg",
    alt: "Lawyer in consultation with a client",
  },
  behindBars: {
    src: "/assets/behind-bars.jpg",
    alt: "Silhouette of bars representing criminal justice",
  },
  bribery: {
    src: "/assets/bribery.jpg",
    alt: "Hands exchanging cash in an envelope",
  },
  bribery1: {
    src: "/assets/bribery-1.jpg",
    alt: "Close up of cash being passed under a table",
  },
  bribery3: {
    src: "/assets/bribery-3.jpg",
    alt: "Bundle of currency notes representing financial crime",
  },
  child: {
    src: "/assets/child.jpg",
    alt: "Child outdoors representing family and private wealth",
  },
  houseForSale: {
    src: "/assets/house-for-sale.jpg",
    alt: "Residential property with a for sale sign",
  },
  land: {
    src: "/assets/land.jpg",
    alt: "Wide expanse of land representing real estate and natural resources",
  },
  office: {
    src: "/assets/office.jpg",
    alt: "Modern office interior with city skyline through the windows",
  },
  city: {
    src: "/assets/welcome-to-our-city.jpg",
    alt: "Lagos city scene representing local jurisdiction and commerce",
  },
} as const;

export type ThemedImageKey = keyof typeof THEMED_IMAGES;

export function themedImage(key: ThemedImageKey): ThemedImage {
  return THEMED_IMAGES[key];
}
