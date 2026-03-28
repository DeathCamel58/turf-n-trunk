import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-dark via-forest to-sage py-24 sm:py-32">
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Professional Landscaping in Peachtree City, GA
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
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
      </div>
    </section>
  );
}
