import { createMetadata } from "@/app/lib/metadata";
import ServiceArea from "@/app/components/ServiceArea";
import CTABanner from "@/app/components/CTABanner";

export const metadata = createMetadata(
  "About Turf n Trunk",
  "Learn about Turf n Trunk, a locally owned landscaping company proudly serving Peachtree City, Fayetteville, Senoia, Newnan, and Tyrone, GA with quality lawn care and landscaping services."
);

const VALUES = [
  {
    title: "Quality Workmanship",
    description:
      "We take pride in every project, big or small. Our team pays attention to the details that make the difference between good and great.",
    icon: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  },
  {
    title: "Customer First",
    description:
      "Your satisfaction drives everything we do. We listen to your needs, communicate clearly, and deliver results that exceed expectations.",
    icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  },
  {
    title: "Environmental Responsibility",
    description:
      "We use sustainable practices, eco-friendly products, and water-wise techniques to care for your landscape and our community.",
    icon: "M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z",
  },
  {
    title: "Community Roots",
    description:
      "As a locally owned business, we're invested in the Peachtree City community. Your success is our success.",
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Company Story */}
      <section className="bg-gradient-to-b from-sage-light/50 to-sand py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold text-charcoal md:text-5xl">
              About Turf n Trunk
            </h1>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate">
              <p>
                Turf n Trunk was founded with a simple mission: to help
                homeowners in the Peachtree City area create and maintain
                beautiful outdoor spaces they can be proud of. What started as a
                small lawn care operation has grown into a full-service
                landscaping company trusted by families across Fayette and Coweta
                counties.
              </p>
              <p>
                Our team brings years of experience in lawn care, landscape
                design, tree service, hardscaping, and irrigation. We combine
                industry knowledge with a genuine passion for the outdoors to
                deliver results that stand the test of time and Georgia&apos;s
                seasons.
              </p>
              <p>
                We believe every property has potential, and every homeowner
                deserves a landscaping partner who listens, communicates, and
                delivers on their promises. That&apos;s the Turf n Trunk
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal md:text-4xl">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-sage/20 bg-cream p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sage-light text-forest">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={value.icon} />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceArea />

      <CTABanner
        heading="Let's Work Together"
        subtext="Ready to transform your outdoor space? Contact us for a free consultation and estimate."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
