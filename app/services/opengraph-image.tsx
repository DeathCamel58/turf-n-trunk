import { ogSize, generateOgImage } from "../lib/og-image";

export const dynamic = "force-static";

export const alt = "Landscaping Services - Turf n Trunk";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage(
    "Our Landscaping Services",
    "Lawn care, landscape design, tree & shrub care, mulching, seasonal cleanups, hardscaping, and irrigation."
  );
}
