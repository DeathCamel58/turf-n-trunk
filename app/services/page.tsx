import Link from "next/link";
import { createMetadata } from "@/app/lib/metadata";
import { SERVICES } from "@/app/lib/constants";
import ServiceIcon from "@/app/components/ServiceIcon";
import QuoteSection from "@/app/components/QuoteSection";

export const metadata = createMetadata(
  "Landscaping Services in Peachtree City, GA",
  "Explore our full range of landscaping services including lawn care, landscape design, tree & shrub care, mulching, seasonal cleanups, hardscaping, and irrigation in the Peachtree City, GA area."
);

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sage-light/50 to-sand py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-charcoal md:text-5xl">
              Our Landscaping Services
            </h1>
            <p className="mt-4 text-lg text-slate">
              From routine lawn maintenance to complete landscape
              transformations, we offer comprehensive services to keep your
              property looking its best throughout the year.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-xl border border-sage/30 bg-cream p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sage-light text-forest">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </div>
                <h2 className="font-heading text-lg font-bold text-charcoal">
                  {service.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                  {service.shortDescription}
                </p>
                <span className="mt-4 text-sm font-semibold text-forest group-hover:underline">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        heading="Not Sure What You Need?"
        subtext="No problem — fill out the form and we'll recommend the right services for your property."
      />
    </>
  );
}
