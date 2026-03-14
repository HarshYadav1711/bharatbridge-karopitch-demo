import { Megaphone, Users, Heart } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/Card";
import { AnimatedSection } from "@/components/AnimatedSection";

/** KaroStartup value pillars (media, ecosystem, supporting founders). */
const karostartupPillars = [
  {
    icon: Megaphone,
    title: "Startup media",
    description:
      "We tell founder stories and share practical advice so more people can learn from real journeys.",
  },
  {
    icon: Users,
    title: "Ecosystem",
    description:
      "We connect founders, investors, and mentors so the right people find each other.",
  },
  {
    icon: Heart,
    title: "Supporting founders",
    description:
      "Karo Pitch and our other initiatives exist to give early-stage teams a fair shot at visibility and funding.",
  },
] as const;

/** About KaroStartup: intro copy and three value pillars. */
export function AboutKaroStartup() {
  return (
    <AnimatedSection id="about-karostartup" className="py-16 sm:py-20 bg-muted/30">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          title="About KaroStartup"
          subtitle="The team and platform behind Karo Pitch."
          align="center"
        />
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6 sm:p-8">
            <p className="text-body text-muted-foreground leading-relaxed">
              KaroStartup is a startup media and ecosystem platform. We support
              founders through stories, events, and programs like Karo Pitch—so
              that building in India, especially outside the big metros, feels a
              bit less lonely and a bit more possible.
            </p>
          </CardContent>
        </Card>
        <ul className="grid gap-4 sm:grid-cols-3">
          {karostartupPillars.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-3 p-5">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary-brand"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </AnimatedSection>
  );
}
