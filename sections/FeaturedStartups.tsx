import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { CardContent } from "@/components/Card";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedSection } from "@/components/AnimatedSection";

const placeholderStartups: {
  name: string;
  category: string;
  description: string;
}[] = [
  {
    name: "Startup Alpha",
    category: "D2C",
    description:
      "Building direct-to-consumer brands for everyday products in tier 2 cities.",
  },
  {
    name: "Startup Beta",
    category: "SaaS",
    description:
      "Tools for small businesses to manage inventory and orders from one place.",
  },
  {
    name: "Startup Gamma",
    category: "Consumer Brands",
    description:
      "Affordable quality essentials for Indian households.",
  },
  {
    name: "Startup Delta",
    category: "Bharat-focused",
    description:
      "Local language and voice-first solutions for regional users.",
  },
  {
    name: "Startup Epsilon",
    category: "MSMEs",
    description:
      "Helping manufacturers digitize operations and reach new buyers.",
  },
  {
    name: "Startup Zeta",
    category: "Manufacturing",
    description:
      "Clean, efficient production for sustainable consumer goods.",
  },
];

export function FeaturedStartups() {
  return (
    <AnimatedSection id="startups" className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          title="Featured Startups"
          subtitle="Examples of founders pitching on Karo Pitch."
          align="center"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderStartups.map(({ name, category, description }) => (
            <li key={name}>
              <AnimatedCard className="h-full">
                <CardContent className="flex flex-col gap-3 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-foreground">{name}</span>
                    <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </AnimatedCard>
            </li>
          ))}
        </ul>
      </Container>
    </AnimatedSection>
  );
}
