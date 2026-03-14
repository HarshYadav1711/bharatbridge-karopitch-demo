/**
 * Open Graph image for link previews. next/og ImageResponse (Satori) only accepts
 * inline style objects—external CSS is not loaded. The "no-inline-styles" rule
 * does not apply here.
 */
/* eslint-disable react/no-inline-styles -- next/og requires inline style objects */
import { ImageResponse } from "next/og";

export const alt = "BharatBridge – Pitch Your Startup to Investors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const containerStyle = {
  width: "100%" as const,
  height: "100%" as const,
  display: "flex" as const,
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  background: "linear-gradient(135deg, #0b3a6b 0%, #0d4a7a 100%)",
  padding: 48,
};

const titleStyle = {
  fontSize: 56,
  fontWeight: 700 as const,
  color: "white",
  textAlign: "center" as const,
  lineHeight: 1.2,
  maxWidth: 900,
};

const taglineStyle = {
  fontSize: 28,
  color: "rgba(255,255,255,0.85)",
  marginTop: 24,
  textAlign: "center" as const,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div style={containerStyle}>
        <div style={titleStyle}>
          BharatBridge – Pitch Your Startup to Investors
        </div>
        <div style={taglineStyle}>
          A demo landing page for the Karo Pitch platform
        </div>
      </div>
    ),
    { ...size }
  );
}
