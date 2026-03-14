import Link from "next/link";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

const buttonBase =
  "inline-flex items-center justify-center rounded-lg font-medium h-10 px-6 text-base transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function CTA() {
  return (
    <AnimatedSection
      id="cta"
      className="py-16 sm:py-20 lg:py-24 bg-primary-brand"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Ready to Pitch Your Startup?
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="#apply"
              className={cn(
                buttonBase,
                "bg-accent-brand text-white hover:opacity-90 focus-visible:ring-accent-brand focus-visible:ring-offset-primary-brand"
              )}
            >
              Apply Now
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonBase,
                "border-2 border-white/80 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-primary-brand"
              )}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
