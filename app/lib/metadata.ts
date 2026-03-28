import type { Metadata } from "next";
import { BUSINESS_NAME, SITE_URL } from "./constants";

export function createMetadata(
  title: string,
  description: string,
  path = ""
): Metadata {
  const canonical = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      type: "website",
      locale: "en_US",
      siteName: BUSINESS_NAME,
      url: canonical,
    },
  };
}
