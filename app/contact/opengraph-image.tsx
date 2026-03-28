import { ogSize, generateOgImage } from "../lib/og-image";

export const dynamic = "force-static";

export const alt = "Contact Turf n Trunk";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage(
    "Request a Free Quote",
    "Get a free landscaping estimate. Serving Peachtree City and the surrounding communities."
  );
}
