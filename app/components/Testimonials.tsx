import { TESTIMONIALS } from "@/app/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-sage/20 bg-white p-6 shadow-sm"
            >
              <svg
                className="mb-3 h-8 w-8 text-sage"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <p className="text-sm italic leading-relaxed text-slate">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-sage/20 pt-4">
                <p className="font-bold text-charcoal">{testimonial.name}</p>
                <p className="text-xs text-slate">{testimonial.city}, GA</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
