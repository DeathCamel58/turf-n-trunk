import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES, CITY_SLUGS } from "@/app/lib/constants";
import { SERVICE_CONTENT } from "../content";
import { CITY_CONTENT } from "./city-content";
import PlaceholderImage from "@/app/components/PlaceholderImage";
import ServiceIcon from "@/app/components/ServiceIcon";
import FaqJsonLd from "@/app/components/FaqJsonLd";
import QuoteSection from "@/app/components/QuoteSection";

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  for (const service of SERVICES) {
    for (const citySlug of Object.keys(CITY_SLUGS)) {
      params.push({ slug: service.slug, city: citySlug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const cityName = CITY_SLUGS[city];
  if (!service || !cityName) return {};

  const title = `${service.title} in ${cityName}, GA`;
  const description = `Professional ${service.title.toLowerCase()} services in ${cityName}, GA. Turf n Trunk provides expert ${service.shortDescription.toLowerCase()} Serving ${cityName} and surrounding areas.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Turf n Trunk`,
      description,
      type: "website",
      locale: "en_US",
      siteName: "Turf n Trunk",
    },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city } = await params;
  const content = SERVICE_CONTENT[slug];
  const service = SERVICES.find((s) => s.slug === slug);
  const cityInfo = CITY_CONTENT[city];
  const cityName = CITY_SLUGS[city];

  if (!content || !service || !cityInfo || !cityName) {
    notFound();
  }

  return (
    <>
      <FaqJsonLd faqs={content.faqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-dark via-forest to-sage py-16 sm:py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm">
            <Link
              href="/services"
              className="font-semibold text-white/70 transition-colors hover:text-white"
            >
              Services
            </Link>
            <span className="text-white/40">/</span>
            <Link
              href={`/services/${slug}`}
              className="font-semibold text-white/70 transition-colors hover:text-white"
            >
              {service.title}
            </Link>
            <span className="text-white/40">/</span>
            <span className="font-semibold text-white">{cityName}</span>
          </div>
          <div className="mt-6 flex items-start gap-5">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white sm:flex">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                {service.title} in {cityName}, GA
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">
                {cityInfo.intro}
              </p>
              <p className="mt-3 text-sm text-white/60">{cityInfo.nearbyAreas}</p>
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

      {/* Service sections (shared from parent service content) */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {content.sections.map((section, index) => {
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={section.heading}
                  className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2">
                    <PlaceholderImage
                      variant={content.imageVariant}
                      label={section.heading}
                      className="aspect-video w-full"
                    />
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

      <QuoteSection
        heading={`Get a Free ${service.title} Quote in ${cityName}`}
        subtext={`Fill out the form below for a free estimate on ${service.title.toLowerCase()} for your ${cityName} property.`}
      />
    </>
  );
}
