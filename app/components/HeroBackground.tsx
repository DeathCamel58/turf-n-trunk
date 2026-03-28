"use client";

import { useState, useEffect } from "react";
import type { OptimizedImageData } from "./OptimizedImage";

interface HeroBackgroundProps {
  image: OptimizedImageData;
}

const BASE_PATH = "/images/optimized";

/**
 * Parallax hero background with progressive loading.
 * Shows blur placeholder immediately, then swaps to full image.
 */
export default function HeroBackground({ image }: HeroBackgroundProps) {
  const [loaded, setLoaded] = useState(false);

  // Pick the largest variant for the background
  const best = image.variants[image.variants.length - 1];
  const fullUrl = `${BASE_PATH}/${best.webp}`;

  useEffect(() => {
    const img = new Image();
    img.src = fullUrl;
    if (img.complete) {
      setLoaded(true);
    } else {
      img.onload = () => setLoaded(true);
    }
  }, [fullUrl]);

  return (
    <>
      {/* Blur placeholder — shows immediately */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url('${image.blur}')`,
          filter: "blur(20px)",
          transform: "scale(1.1)",
        }}
        aria-hidden="true"
      />
      {/* Full image — parallax */}
      <div
        className={`absolute inset-0 bg-fixed bg-cover bg-center transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url('${fullUrl}')` }}
        aria-hidden="true"
      />
    </>
  );
}
