import Link from "next/link";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

const buttonBase =
  "inline-flex items-center justify-center rounded-lg font-medium h-10 px-6 text-base transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50";

export function Hero() {
  return (
    <AnimatedSection
      id="hero"
      className="relative py-16 sm:py-24 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1
            id="hero-heading"
            className="text-display-lg font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Pitch Your Startup to Real Investors
          </h1>
          <p className="mt-4 text-body-lg text-muted-foreground sm:text-xl">
            Karo Pitch connects early-stage founders with investors and mentors
            across India.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="#apply"
              className={cn(
                buttonBase,
                "bg-accent-brand text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent-brand/50 focus-visible:ring-offset-2"
              )}
            >
              Apply to Pitch
            </Link>
            <Link
              href="#startups"
              className={cn(
                buttonBase,
                "border border-border bg-transparent text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              Explore Startups
            </Link>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
