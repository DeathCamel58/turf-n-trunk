import { createMetadata } from "./lib/metadata";
import Hero from "./components/Hero";
import ServicesOverview from "./components/ServicesOverview";
import TrustSignals from "./components/TrustSignals";
import ServiceArea from "./components/ServiceArea";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";

export const metadata = createMetadata(
  "Professional Landscaping & Lawn Care in Peachtree City, GA",
  "Turf n Trunk provides expert landscaping, lawn care, tree service, hardscaping, and irrigation for Peachtree City, Fayetteville, Senoia, Newnan, and Tyrone, GA. Request a free quote today."
);

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <TrustSignals />
      <ServiceArea />
      <Testimonials />
      <CTABanner
        heading="Ready to Transform Your Yard?"
        subtext="Get a free, no-obligation estimate for your landscaping project. We'd love to help you create the outdoor space you've always wanted."
        buttonText="Request a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
