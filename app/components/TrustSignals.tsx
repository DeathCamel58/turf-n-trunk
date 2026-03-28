const SIGNALS = [
  {
    title: "Licensed & Insured",
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
  },
  {
    title: "Locally Owned",
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
  },
  {
    title: "Free Estimates",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",
  },
  {
    title: "Satisfaction Guaranteed",
    icon: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  },
];

export default function TrustSignals() {
  return (
    <section className="bg-sage-light py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {SIGNALS.map((signal) => (
          <div
            key={signal.title}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d={signal.icon} />
              </svg>
            </div>
            <span className="text-sm font-bold text-charcoal">
              {signal.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
