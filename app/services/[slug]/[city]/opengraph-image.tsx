import { ogSize, generateOgImage } from "../../../lib/og-image";
import { SERVICES, CITY_SLUGS } from "@/app/lib/constants";

export const alt = "Turf n Trunk Service";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  for (const service of SERVICES) {
    for (const citySlug of Object.keys(CITY_SLUGS)) {
      params.push({ slug: service.slug, city: citySlug });
    }
  }
  return params;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const cityName = CITY_SLUGS[city];

  return generateOgImage(
    `${service?.title ?? "Landscaping"} in ${cityName ?? "Your Area"}, GA`,
    `Professional ${service?.title?.toLowerCase() ?? "landscaping"} serving ${cityName ?? "your community"} and surrounding areas.`
  );
}
