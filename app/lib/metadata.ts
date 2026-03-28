import type { Metadata } from "next";
import { BUSINESS_NAME } from "./constants";

export function createMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      type: "website",
      locale: "en_US",
      siteName: BUSINESS_NAME,
    },
  };
}
