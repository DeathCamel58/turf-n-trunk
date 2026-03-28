import Link from "next/link";
import { createMetadata } from "@/app/lib/metadata";
import { PHONE, PHONE_HREF } from "@/app/lib/constants";
import PhoneLink from "@/app/components/PhoneLink";

export const metadata = createMetadata(
  "Thank You",
  "Thank you for contacting Turf n Trunk. We've received your message and will get back to you within one business day."
);

export default function ThankYouPage() {
  return (
    <section className="flex flex-1 items-center py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sage-light text-forest">
          <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>

        <h1 className="font-heading text-4xl font-bold text-charcoal md:text-5xl">
          Thank You!
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-slate">
          We&apos;ve received your message and will get back to you within one
          business day. If you need immediate assistance, feel free to give us a
          call.
        </p>

        <PhoneLink
          href={PHONE_HREF}
          className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-forest transition-colors hover:text-forest-dark"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          {PHONE}
        </PhoneLink>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-forest px-8 py-3 font-bold text-white transition-colors hover:bg-forest-dark"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="rounded-full border-2 border-forest px-8 py-3 font-bold text-forest transition-colors hover:bg-forest hover:text-white"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
