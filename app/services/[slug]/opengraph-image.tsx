import { ogSize, generateOgImage } from "../../lib/og-image";
import { SERVICES } from "@/app/lib/constants";
import { SERVICE_CONTENT } from "./content";

export const alt = "Turf n Trunk Service";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = SERVICE_CONTENT[slug];
  const service = SERVICES.find((s) => s.slug === slug);

  return generateOgImage(
    content?.headline ?? service?.title ?? "Our Services",
    "Professional landscaping in Peachtree City, GA and surrounding areas."
  );
}
