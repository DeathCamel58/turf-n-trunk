import { createMetadata } from "@/app/lib/metadata";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  BUSINESS_HOURS,
  SERVICE_AREAS,
} from "@/app/lib/constants";
import ContactForm from "@/app/components/ContactForm";

export const metadata = createMetadata(
  "Contact Us | Request a Quote",
  "Get a free landscaping estimate from Turf n Trunk. Serving Peachtree City, Fayetteville, Senoia, Newnan, and Tyrone, GA. Call us or fill out our quote request form."
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sage-light/50 to-sand py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-charcoal md:text-5xl">
              Get Your Free Estimate
            </h1>
            <p className="mt-4 text-lg text-slate">
              Fill out the form below and we&apos;ll get back to you within one
              business day with a custom quote for your project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Business info sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Phone & Email */}
                <div>
                  <h2 className="font-heading text-xl font-bold text-charcoal">
                    Contact Info
                  </h2>
                  <div className="mt-4 space-y-3">
                    <a
                      href={PHONE_HREF}
                      className="flex items-center gap-3 text-charcoal transition-colors hover:text-forest"
                    >
                      <svg
                        className="h-5 w-5 text-forest"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                      <span className="font-semibold">{PHONE}</span>
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-3 text-charcoal transition-colors hover:text-forest"
                    >
                      <svg
                        className="h-5 w-5 text-forest"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span className="font-semibold">{EMAIL}</span>
                    </a>
                  </div>
                </div>

                {/* Business hours */}
                <div>
                  <h2 className="font-heading text-xl font-bold text-charcoal">
                    Business Hours
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm text-slate">
                    <li>{BUSINESS_HOURS.weekdays}</li>
                    <li>{BUSINESS_HOURS.saturday}</li>
                    <li>{BUSINESS_HOURS.sunday}</li>
                  </ul>
                </div>

                {/* Service areas */}
                <div>
                  <h2 className="font-heading text-xl font-bold text-charcoal">
                    Service Areas
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {SERVICE_AREAS.map((city) => (
                      <li
                        key={city}
                        className="flex items-center gap-2 text-sm text-slate"
                      >
                        <svg
                          className="h-4 w-4 text-forest"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        {city}, GA
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
