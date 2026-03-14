import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlaceholderSection } from "@/sections/PlaceholderSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto py-12 px-6 flex flex-col gap-8">
        <PlaceholderSection label="Hero" id="hero" />
        <PlaceholderSection label="Features" id="features" />
        <PlaceholderSection label="CTA" id="cta" />
      </main>
      <Footer />
    </>
  );
}
