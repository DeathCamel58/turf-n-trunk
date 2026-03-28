import { ogSize, generateOgImage } from "../lib/og-image";

export const dynamic = "force-static";

export const alt = "About Turf n Trunk";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage(
    "About Turf n Trunk",
    "Locally owned landscaping serving Peachtree City, Fayetteville, Senoia, Newnan, and Tyrone, GA."
  );
}
