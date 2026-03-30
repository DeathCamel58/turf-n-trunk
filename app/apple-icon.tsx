import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E3D1A 0%, #2D5A27 100%)",
          borderRadius: "36px",
        }}
      >
        <svg
          viewBox="0 0 96 96"
          width="140"
          height="140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(6, 2)">
            {/* Canopy */}
            <ellipse cx="42" cy="28" rx="28" ry="24" fill="#4A8B43" />
            <ellipse cx="28" cy="35" rx="20" ry="17" fill="#5AA352" />
            <ellipse cx="56" cy="33" rx="17" ry="15" fill="#5AA352" />
            <ellipse cx="42" cy="21" rx="18" ry="15" fill="#6BBF62" />
            {/* Trunk */}
            <path
              d="M37 46 L35 76 Q35 81 40 81 L44 81 Q49 81 49 76 L47 46"
              fill="#C4956C"
            />
            {/* Grass */}
            <path d="M14 90 Q17 68 22 60 Q19 72 24 90 Z" fill="#4A8B43" />
            <path d="M22 90 Q26 70 24 56 Q27 66 30 90 Z" fill="#5AA352" />
            <path d="M28 90 Q28 72 33 62 Q31 74 35 90 Z" fill="#4A8B43" />
            <path d="M49 90 Q51 72 49 60 Q52 68 56 90 Z" fill="#5AA352" />
            <path d="M54 90 Q58 68 61 58 Q58 72 62 90 Z" fill="#4A8B43" />
            <path d="M60 90 Q63 72 67 64 Q63 76 70 90 Z" fill="#5AA352" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
