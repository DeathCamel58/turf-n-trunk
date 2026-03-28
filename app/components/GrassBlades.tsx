/**
 * Generates SVG grass blade border with curved, natural-looking blades.
 * Each blade is a closed path with quadratic bezier curves creating
 * an arc from base to pointed tip and back.
 *
 * Rendered at build time (server component) — no JS shipped to client.
 */

interface Blade {
  x: number;       // base center x position
  height: number;  // how tall the blade reaches
  lean: number;    // horizontal offset of tip from base (-1 to 1 range, scaled)
  curve: number;   // how much the blade bows (control point offset)
  width: number;   // blade width at base
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateBlades(
  count: number,
  minHeight: number,
  maxHeight: number,
  seed: number,
  minWidth = 2,
  maxWidth = 4
): Blade[] {
  const rand = seededRandom(seed);
  const blades: Blade[] = [];
  const spacing = 1200 / count;

  for (let i = 0; i < count; i++) {
    const x = i * spacing + (rand() - 0.5) * spacing * 0.8;
    const height = minHeight + rand() * (maxHeight - minHeight);
    const lean = (rand() - 0.5) * 2 * (height * 0.3);
    const curve = (rand() - 0.3) * height * 0.5;
    const width = minWidth + rand() * maxWidth;

    blades.push({ x, height, lean, curve, width });
  }

  return blades;
}

function bladePath(blade: Blade, baseY: number): string {
  const { x, height, lean, curve, width } = blade;
  const halfW = width / 2;

  // Tip position
  const tipX = x + lean;
  const tipY = baseY - height;

  // Left edge control point — curves the left side of the blade
  const lcpX = x - halfW + curve * 0.6;
  const lcpY = baseY - height * 0.55;

  // Right edge control point — curves the right side
  const rcpX = x + halfW + curve * 0.4;
  const rcpY = baseY - height * 0.5;

  // Path: start at base-left, curve up to tip, curve back down to base-right, close
  return [
    `M${x - halfW},${baseY}`,
    `Q${lcpX},${lcpY} ${tipX},${tipY}`,
    `Q${rcpX},${rcpY} ${x + halfW},${baseY}`,
    "Z",
  ].join(" ");
}

export default function GrassBlades() {
  const baseY = 75;

  // Dense base layers — wide, overlapping blades to completely fill the bottom
  const denseBase1 = generateBlades(250, 8, 22, 7, 4, 8);
  const denseBase2 = generateBlades(250, 6, 18, 333, 4, 8);
  // Back layer — short-to-medium
  const backBlades = generateBlades(140, 15, 35, 42);
  // Mid layer
  const midBlades = generateBlades(110, 25, 55, 137);
  // Front layer — tallest blades
  const frontBlades = generateBlades(90, 38, 68, 891);

  return (
    <div className="absolute -bottom-2 left-0 w-full leading-[0]" aria-hidden="true">
      {/* Solid color block behind and below SVG to kill any subpixel gaps */}
      <div className="absolute bottom-0 left-0 h-6 w-full bg-[#F5F0E8]" />
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="relative block h-20 w-full sm:h-24 md:h-32"
        fill="#F5F0E8"
      >
        {/* Base fill — starts well into the blade zone so bottom is fully solid */}
        <rect x="-1" y={baseY - 2} width="1202" height={105 - baseY} />
        {/* Dense base — two overlapping layers to completely fill gaps */}
        {denseBase1.map((b, i) => (
          <path key={`d1${i}`} d={bladePath(b, baseY)} />
        ))}
        {denseBase2.map((b, i) => (
          <path key={`d2${i}`} d={bladePath(b, baseY)} />
        ))}
        {/* Back layer */}
        {backBlades.map((b, i) => (
          <path key={`b${i}`} d={bladePath(b, baseY)} />
        ))}
        {/* Mid layer */}
        {midBlades.map((b, i) => (
          <path key={`m${i}`} d={bladePath(b, baseY)} />
        ))}
        {/* Front layer — tallest blades */}
        {frontBlades.map((b, i) => (
          <path key={`f${i}`} d={bladePath(b, baseY)} />
        ))}
      </svg>
    </div>
  );
}
