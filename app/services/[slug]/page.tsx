import { notFound } from "next/navigation";
import Link from "next/link";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { SERVICES, CITY_SLUGS, SITE_URL } from "@/app/lib/constants";
import { SERVICE_CONTENT } from "./content";
import OptimizedImage from "@/app/components/OptimizedImage";
import type { OptimizedImageData } from "@/app/components/OptimizedImage";
import ServiceIcon from "@/app/components/ServiceIcon";
import FaqJsonLd from "@/app/components/FaqJsonLd";
import QuoteSection from "@/app/components/QuoteSection";

let imageManifest: Record<string, OptimizedImageData> = {};
const manifestPath = join(process.cwd(), "public/images/optimized/manifest.json");
if (existsSync(manifestPath)) {
  imageManifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = SERVICE_CONTENT[slug];
  if (!content) return {};

  const canonical = `${SITE_URL}/services/${slug}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      type: "website",
      locale: "en_US",
      siteName: "Turf n Trunk",
      url: canonical,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = SERVICE_CONTENT[slug];
  const service = SERVICES.find((s) => s.slug === slug);

  if (!content || !service) {
    notFound();
  }

  return (
    <>
      <FaqJsonLd faqs={content.faqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-dark via-forest to-sage py-16 sm:py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/services"
              className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              Services
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-sm font-semibold text-white">
              {service.title}
            </span>
          </div>
          <div className="mt-6 flex items-start gap-5">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white sm:flex">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                {content.headline}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">
                {content.intro}
              </p>
              <a
                href="#quote"
                className="mt-8 inline-block rounded-full bg-cream px-8 py-3 font-bold text-forest transition-colors hover:bg-white"
              >
                Request a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service sections */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {content.sections.map((section, index) => {
              const isReversed = index % 2 === 1;
              const optimizedImg = section.image
                ? imageManifest[section.image]
                : null;
              return (
                <div
                  key={section.heading}
                  className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2">
                    {optimizedImg && (
                      <OptimizedImage
                        image={optimizedImg}
                        alt={section.heading}
                        className="aspect-video w-full rounded-lg"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    )}
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="font-heading text-2xl font-bold text-charcoal md:text-3xl">
                      {section.heading}
                    </h2>
                    <p className="mt-4 leading-relaxed text-slate">
                      {section.body}
                    </p>
                    {section.items && (
                      <ul className="mt-6 space-y-2">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-charcoal"
                          >
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {content.faqs.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 space-y-6">
              {content.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-sage/20 bg-white p-6"
                >
                  <h3 className="font-heading text-lg font-bold text-charcoal">
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* City pages */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal md:text-4xl">
            {service.title} Near You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
            We provide {service.title.toLowerCase()} throughout the Peachtree
            City area. Find service information for your community.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {Object.entries(CITY_SLUGS).map(([citySlug, cityName]) => (
              <Link
                key={citySlug}
                href={`/services/${slug}/${citySlug}`}
                className="rounded-full border border-sage/40 bg-cream px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:border-forest hover:text-forest"
              >
                {service.title} in {cityName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        heading={`Get a Free ${service.title} Quote`}
        subtext="Fill out the form below and we'll get back to you within one business day with a custom estimate for your project."
      />
    </>
  );
}
