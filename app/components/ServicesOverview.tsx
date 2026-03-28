import Link from "next/link";
import { SERVICES } from "@/app/lib/constants";
import ServiceCard from "./ServiceCard";

export default function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate">
            Comprehensive landscaping solutions for homeowners across the
            Peachtree City area.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block rounded-full bg-forest px-8 py-3 font-bold text-white transition-colors hover:bg-forest-dark"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
