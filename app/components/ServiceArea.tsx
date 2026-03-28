import { SERVICE_AREAS } from "@/app/lib/constants";

export default function ServiceArea() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            Proudly Serving South Metro Atlanta
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate">
            We provide professional landscaping services throughout the
            Peachtree City area and surrounding communities in Fayette and
            Coweta counties.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {SERVICE_AREAS.map((city) => (
            <div
              key={city}
              className="flex items-center gap-2 rounded-full border border-sage/40 bg-cream px-5 py-2"
            >
              <svg
                className="h-5 w-5 text-forest"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
              <span className="font-semibold text-charcoal">{city}, GA</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
