import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { PlaceholderSection } from "@/sections/PlaceholderSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-16">
        <Container className="flex flex-col gap-12 sm:gap-16">
          <PlaceholderSection label="Hero" id="hero" />
          <PlaceholderSection label="Features" id="features" />
          <PlaceholderSection label="CTA" id="cta" />
        </Container>
      </main>
      <Footer />
    </>
  );
}
