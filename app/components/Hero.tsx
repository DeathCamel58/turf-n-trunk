import Link from "next/link";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import GrassBlades from "./GrassBlades";
import HeroBackground from "./HeroBackground";
import type { OptimizedImageData } from "./OptimizedImage";

// Load the image manifest at build time using fs (avoids Turbopack require() warnings)
let heroImage: OptimizedImageData | null = null;
const manifestPath = join(process.cwd(), "public/images/optimized/manifest.json");
if (existsSync(manifestPath)) {
  const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
  heroImage = manifest["Corner-Lot-Landscaping"] ?? null;
}

export default function Hero() {
  return (
    <section className="relative overflow-x-clip">
      {/* Parallax background with progressive loading */}
      {heroImage ? (
        <HeroBackground image={heroImage} />
      ) : (
        <div
          className="absolute inset-0 md:bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/Corner-Lot-Landscaping.jpg')" }}
          aria-hidden="true"
        />
      )}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-24 sm:px-6 sm:pb-36 sm:pt-32 lg:px-8">
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
            <a
              href="#quote"
              className="rounded-full bg-cream px-8 py-3 text-center font-bold text-forest transition-colors hover:bg-white"
            >
              Request a Free Quote
            </a>
            <Link
              href="/services"
              className="rounded-full border-2 border-white/40 px-8 py-3 text-center font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Grass blade border — curved blades using quadratic bezier paths */}
      <GrassBlades />
    </section>
  );
}
