import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Resolved origin for OG/Twitter image URLs. */
const metadataBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: "BharatBridge – Pitch Your Startup to Investors",
  description:
    "A demo landing page illustrating the Karo Pitch platform, where founders connect with investors and mentors.",
  openGraph: {
    title: "BharatBridge – Pitch Your Startup to Investors",
    description:
      "A demo landing page illustrating the Karo Pitch platform, where founders connect with investors and mentors.",
    siteName: "BharatBridge",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b3a6b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
