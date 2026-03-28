/**
 * Image optimization pipeline.
 *
 * Reads images from public/images/originals/ and generates:
 *   - Multiple responsive widths (400, 800, 1200, 1600) in WebP and JPEG
 *   - A tiny 20px-wide base64 blur placeholder
 *   - A manifest JSON mapping original filenames to their generated variants
 *
 * Usage: node scripts/optimize-images.mjs
 *
 * Output goes to public/images/optimized/ with a manifest at
 * public/images/optimized/manifest.json
 */

import sharp from "sharp";
import { readdir, mkdir, writeFile, rm } from "node:fs/promises";
import { join, parse } from "node:path";
import { existsSync } from "node:fs";

const ORIGINALS_DIR = "public/images/originals";
const OUTPUT_DIR = "public/images/optimized";
const WIDTHS = [400, 800, 1200, 1600];
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;
const BLUR_WIDTH = 20;

const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function processImage(filePath, fileName) {
  const { name } = parse(fileName);
  const image = sharp(filePath);
  const metadata = await image.metadata();
  const originalWidth = metadata.width ?? 1600;
  const originalHeight = metadata.height ?? 900;

  const variants = [];

  // Generate responsive sizes
  for (const width of WIDTHS) {
    // Skip sizes larger than the original
    if (width > originalWidth) continue;

    const height = Math.round((width / originalWidth) * originalHeight);

    // WebP
    const webpName = `${name}-${width}w.webp`;
    await sharp(filePath)
      .resize(width, height, { fit: "cover" })
      .webp({ quality: WEBP_QUALITY })
      .toFile(join(OUTPUT_DIR, webpName));

    // JPEG fallback
    const jpegName = `${name}-${width}w.jpg`;
    await sharp(filePath)
      .resize(width, height, { fit: "cover" })
      .jpeg({ quality: JPEG_QUALITY })
      .toFile(join(OUTPUT_DIR, jpegName));

    variants.push({ width, height, webp: webpName, jpeg: jpegName });
  }

  // If original is smaller than smallest target, generate at original size
  if (variants.length === 0) {
    const webpName = `${name}-${originalWidth}w.webp`;
    await sharp(filePath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(join(OUTPUT_DIR, webpName));

    const jpegName = `${name}-${originalWidth}w.jpg`;
    await sharp(filePath)
      .jpeg({ quality: JPEG_QUALITY })
      .toFile(join(OUTPUT_DIR, jpegName));

    variants.push({
      width: originalWidth,
      height: originalHeight,
      webp: webpName,
      jpeg: jpegName,
    });
  }

  // Generate blur placeholder (tiny base64 image)
  const blurBuffer = await sharp(filePath)
    .resize(BLUR_WIDTH, Math.round((BLUR_WIDTH / originalWidth) * originalHeight), {
      fit: "cover",
    })
    .webp({ quality: 20 })
    .toBuffer();

  const blurDataUrl = `data:image/webp;base64,${blurBuffer.toString("base64")}`;

  return {
    original: fileName,
    width: originalWidth,
    height: originalHeight,
    aspectRatio: originalWidth / originalHeight,
    blur: blurDataUrl,
    variants,
  };
}

async function main() {
  // Clean and recreate output directory
  if (existsSync(OUTPUT_DIR)) {
    await rm(OUTPUT_DIR, { recursive: true });
  }
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Read originals
  let files;
  try {
    files = await readdir(ORIGINALS_DIR);
  } catch {
    console.log(`No originals directory found at ${ORIGINALS_DIR}. Creating it.`);
    await mkdir(ORIGINALS_DIR, { recursive: true });
    files = [];
  }

  const imageFiles = files.filter((f) => {
    const ext = parse(f).ext.toLowerCase();
    return SUPPORTED_EXTENSIONS.has(ext);
  });

  if (imageFiles.length === 0) {
    console.log("No images found in", ORIGINALS_DIR);
    console.log("Place images there and run this script again.");
    // Write empty manifest
    await writeFile(
      join(OUTPUT_DIR, "manifest.json"),
      JSON.stringify({}, null, 2)
    );
    return;
  }

  console.log(`Processing ${imageFiles.length} image(s)...`);

  const manifest = {};

  for (const file of imageFiles) {
    const filePath = join(ORIGINALS_DIR, file);
    console.log(`  ${file}...`);
    const result = await processImage(filePath, file);
    const { name } = parse(file);
    manifest[name] = result;
  }

  // Write manifest
  await writeFile(
    join(OUTPUT_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );

  const totalVariants = Object.values(manifest).reduce(
    (sum, img) => sum + img.variants.length * 2,
    0
  );
  console.log(
    `Done. Generated ${totalVariants} files from ${imageFiles.length} original(s).`
  );
  console.log(`Manifest: ${join(OUTPUT_DIR, "manifest.json")}`);
}

main().catch((err) => {
  console.error("Image optimization failed:", err);
  process.exit(1);
});
