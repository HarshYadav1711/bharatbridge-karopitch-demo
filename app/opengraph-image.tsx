import { ImageResponse } from "next/og";

export const alt = "BharatBridge – Pitch Your Startup to Investors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b3a6b 0%, #0d4a7a 100%)",
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          BharatBridge – Pitch Your Startup to Investors
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.85)",
            marginTop: 24,
            textAlign: "center",
          }}
        >
          A demo landing page for the Karo Pitch platform
        </div>
      </div>
    ),
    { ...size }
  );
}
