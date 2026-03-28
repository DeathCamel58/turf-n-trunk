import { ogSize, generateOgImage } from "./lib/og-image";

export const dynamic = "force-static";

export const alt = "Turf n Trunk - Professional Landscaping in Peachtree City, GA";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage(
    "Professional Landscaping in Peachtree City, GA",
    "Lawn care, landscape design, tree service, hardscaping, and more."
  );
}
