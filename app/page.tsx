import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { AboutKaroPitch } from "@/sections/AboutKaroPitch";
import { HowItWorks } from "@/sections/HowItWorks";
import { WhoCanApply } from "@/sections/WhoCanApply";
import { Investors } from "@/sections/Investors";
import { FeaturedStartups } from "@/sections/FeaturedStartups";
import { FounderStory } from "@/sections/FounderStory";
import { AboutKaroStartup } from "@/sections/AboutKaroStartup";
import { CTA } from "@/sections/CTA";

/** Landing page: hero, pitch info, how it works, CTA, and footer. */
export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-primary-brand focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-ring focus:w-auto focus:h-auto focus:p-4 focus:m-0 focus:overflow-visible focus:[clip:auto]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Hero />
        <AboutKaroPitch />
        <HowItWorks />
        <WhoCanApply />
        <Investors />
        <FeaturedStartups />
        <FounderStory />
        <AboutKaroStartup />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
