import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { AboutKaroPitch } from "@/sections/AboutKaroPitch";
import { HowItWorks } from "@/sections/HowItWorks";
import { WhoCanApply } from "@/sections/WhoCanApply";
import { Investors } from "@/sections/Investors";
import { FeaturedStartups } from "@/sections/FeaturedStartups";
import { AboutKaroStartup } from "@/sections/AboutKaroStartup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutKaroPitch />
        <HowItWorks />
        <WhoCanApply />
        <Investors />
        <FeaturedStartups />
        <AboutKaroStartup />
      </main>
      <Footer />
    </>
  );
}
