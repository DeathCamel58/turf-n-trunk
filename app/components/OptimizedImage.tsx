"use client";

import { useState, useRef, useEffect } from "react";

interface ImageVariant {
  width: number;
  height: number;
  webp: string;
  jpeg: string;
}

export interface OptimizedImageData {
  width: number;
  height: number;
  aspectRatio: number;
  blur: string;
  variants: ImageVariant[];
}

interface OptimizedImageProps {
  image: OptimizedImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

const BASE_PATH = "/images/optimized";

/**
 * Renders a responsive, progressively-loaded image.
 *
 * - Shows a tiny blurred placeholder immediately
 * - Lazy loads the full image (unless priority is set)
 * - Uses <picture> with WebP srcset and JPEG fallback
 * - Transitions from blur to sharp on load
 */
export default function OptimizedImage({
  image,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the image is already cached by the browser, it may load before
  // the onLoad handler is attached. Check on mount.
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const webpSrcSet = image.variants
    .map((v) => `${BASE_PATH}/${v.webp} ${v.width}w`)
    .join(", ");

  const jpegSrcSet = image.variants
    .map((v) => `${BASE_PATH}/${v.jpeg} ${v.width}w`)
    .join(", ");

  // Use the largest variant as the fallback src
  const fallbackSrc = `${BASE_PATH}/${image.variants[image.variants.length - 1].jpeg}`;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      {/* Blur placeholder */}
      <img
        src={image.blur}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ filter: "blur(20px)", transform: "scale(1.1)" }}
      />

      {/* Full image with srcset */}
      <picture>
        <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
        <source type="image/jpeg" srcSet={jpegSrcSet} sizes={sizes} />
        <img
          ref={imgRef}
          src={fallbackSrc}
          alt={alt}
          width={image.width}
          height={image.height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </picture>
    </div>
  );
}
