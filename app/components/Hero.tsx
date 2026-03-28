import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import GrassBlades from "./GrassBlades";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/Corner-Lot-Landscaping.jpg')" }}
        aria-hidden="true"
      />
      {/* Dark overlay for text readability over future photo */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-24 sm:px-6 sm:pb-36 sm:pt-32 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="flex-1">
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Professional Landscaping in Peachtree City, GA
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              From lawn care and landscape design to hardscaping and tree service
              &mdash; Turf n Trunk delivers quality results you can count on.
              Serving Peachtree City, Fayetteville, Senoia, Newnan, and Tyrone.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-cream px-8 py-3 text-center font-bold text-forest transition-colors hover:bg-white"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border-2 border-white/40 px-8 py-3 text-center font-bold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Hero image placeholder — hidden on mobile/tablet */}
          <div className="hidden max-w-md flex-shrink-0 lg:block lg:w-5/12">
            <PlaceholderImage
              variant="lawn"
              label="Hero Image"
              className="aspect-4/3 w-full rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>

      {/* Grass blade border — curved blades using quadratic bezier paths */}
      <GrassBlades />
    </section>
  );
}
