import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="font-heading text-7xl font-extrabold text-forest sm:text-9xl">
          404
        </p>

        <h1 className="mt-4 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Page Not Found
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-slate">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or no longer exists.
        </p>

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
            View Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-sage px-8 py-3 font-bold text-charcoal transition-colors hover:border-forest hover:text-forest"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
