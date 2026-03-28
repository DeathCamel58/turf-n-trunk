import Link from "next/link";

interface CTABannerProps {
  heading: string;
  subtext?: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTABanner({
  heading,
  subtext,
  buttonText,
  buttonHref,
}: CTABannerProps) {
  return (
    <section className="bg-forest py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          {heading}
        </h2>
        {subtext && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {subtext}
          </p>
        )}
        <Link
          href={buttonHref}
          className="mt-8 inline-block rounded-full bg-cream px-8 py-3 font-bold text-forest transition-colors hover:bg-white"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
