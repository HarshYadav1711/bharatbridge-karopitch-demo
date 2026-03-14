import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/Card";
import { AnimatedSection } from "@/components/AnimatedSection";

/** About Karo Pitch: what it is, who it’s for, and how investors use it. */
export function AboutKaroPitch() {
  return (
    <AnimatedSection id="about" className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          title="About Karo Pitch"
          subtitle="What we do and why it exists."
          align="center"
          className="max-w-2xl mx-auto"
        />
        <Card className="max-w-3xl mx-auto">
          <CardContent className="space-y-4 text-body text-muted-foreground">
            <p>
              Karo Pitch is a pitching platform run by KaroStartup. Founders
              apply with their startup details. Shortlisted teams get to pitch
              live to a panel of investors and mentors.
            </p>
            <p>
              We focus on early-stage companies—especially from tier 2 and tier
              3 cities—so that good ideas get a fair shot at funding and
              guidance, no matter where they’re built.
            </p>
            <p>
              Investors use Karo Pitch to discover and back promising startups in
              one place, and founders get direct access to real decision-makers.
            </p>
          </CardContent>
        </Card>
      </Container>
    </AnimatedSection>
  );
}
