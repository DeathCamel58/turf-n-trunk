import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export function generateOgImage(
  title: string,
  subtitle?: string
): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #1E3D1A 0%, #2D5A27 50%, #7A9E7E 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "8px",
            marginBottom: "40px",
          }}
        >
          <span style={{ fontSize: 42, fontWeight: 700, color: "#D4E4D6" }}>
            Turf
          </span>
          <span style={{ fontSize: 42, fontWeight: 400, color: "rgba(255,255,255,0.6)" }}>
            n
          </span>
          <span style={{ fontSize: 42, fontWeight: 700, color: "#F5F0E8" }}>
            Trunk
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.75)",
              marginTop: "24px",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        )}

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "auto",
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <span>turf-n-trunk.com</span>
          <span>•</span>
          <span>Peachtree City, GA</span>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
