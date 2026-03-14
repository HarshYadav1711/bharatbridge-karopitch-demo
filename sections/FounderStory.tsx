import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/Card";
import { AnimatedSection } from "@/components/AnimatedSection";

/** Single founder testimonial (quote, name, city, category). */
const founderTestimonial = {
  quote:
    "Karo Pitch helped us connect with investors outside our city. The platform gave us visibility we would not have had otherwise.",
  founderName: "Priya Sharma",
  city: "Indore",
  startupCategory: "D2C",
};

/** Founder story: one testimonial card (quote + attribution). */
export function FounderStory() {
  return (
    <AnimatedSection id="founder-story" className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          title="Founders from across India are already pitching."
          align="center"
        />
        <Card className="mx-auto max-w-2xl border-border bg-card">
          <CardContent className="p-6 sm:p-8">
            <blockquote className="flex flex-col gap-6">
              <p className="text-body-lg text-foreground leading-relaxed">
                &ldquo;{founderTestimonial.quote}&rdquo;
              </p>
              <footer className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
                <cite className="not-italic font-semibold text-foreground">
                  {founderTestimonial.founderName}
                </cite>
                <span className="text-muted-foreground" aria-hidden>
                  ·
                </span>
                <span className="text-muted-foreground">
                  {founderTestimonial.city}
                </span>
                <span className="text-muted-foreground" aria-hidden>
                  ·
                </span>
                <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-medium text-muted-foreground">
                  {founderTestimonial.startupCategory}
                </span>
              </footer>
            </blockquote>
          </CardContent>
        </Card>
      </Container>
    </AnimatedSection>
  );
}
