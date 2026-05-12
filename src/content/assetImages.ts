export const ASSET_IMAGES = [
  "/assets/tingey-injury-law-firm-veNb0DDegzE-unsplash.jpg",
  "/assets/melinda-gimpel-xcVW_sFp4jQ-unsplash.jpg",
  "/assets/brusk-dede-tjd5CfdDPRA-unsplash.jpg",
  "/assets/markus-winkler-398SN7CwP88-unsplash.jpg",
  "/assets/sasun-bughdaryan-FaTLrG5-ViE-unsplash.jpg",
] as const;

export type AssetImagePath = (typeof ASSET_IMAGES)[number];

export function assetImageAt(index: number): AssetImagePath {
  const n = ASSET_IMAGES.length;
  const i = ((index % n) + n) % n;
  return ASSET_IMAGES[i]!;
}
