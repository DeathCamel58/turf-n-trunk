import ContactForm from "./ContactForm";
import { PHONE, PHONE_HREF } from "@/app/lib/constants";

interface QuoteSectionProps {
  heading?: string;
  subtext?: string;
}

export default function QuoteSection({
  heading = "Request a Free Quote",
  subtext = "Fill out the form below and we'll get back to you within one business day with a custom quote for your project.",
}: QuoteSectionProps) {
  return (
    <section id="quote" className="scroll-mt-20 bg-forest py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-white/70">{subtext}</p>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8">
              <h3 className="font-heading text-xl font-bold text-white">
                Prefer to Talk?
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Give us a call and we&apos;ll be happy to discuss your project
                over the phone.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-cream px-6 py-3 font-bold text-forest transition-colors hover:bg-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {PHONE}
              </a>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="font-heading text-lg font-bold text-white">
                  What to Expect
                </h3>
                <ul className="mt-3 space-y-3">
                  {[
                    "Free, no-obligation estimate",
                    "Response within 1 business day",
                    "Licensed & insured team",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-sage"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
