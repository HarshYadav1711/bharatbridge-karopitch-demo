import {
  ShoppingBag,
  Factory,
  Cpu,
  Package,
  Store,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/Card";
import { AnimatedSection } from "@/components/AnimatedSection";

const categories = [
  { name: "D2C", icon: ShoppingBag },
  { name: "MSMEs", icon: Factory },
  { name: "SaaS", icon: Cpu },
  { name: "Manufacturing", icon: Package },
  { name: "Consumer Brands", icon: Store },
  { name: "Bharat-focused startups", icon: MapPin },
] as const;

export function WhoCanApply() {
  return (
    <AnimatedSection id="apply" className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          title="Who Can Apply"
          subtitle="We welcome early-stage startups across these areas."
          align="center"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ name, icon: Icon }) => (
            <li key={name}>
              <Card className="h-full">
                <CardContent className="flex items-center gap-4 p-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-primary-brand"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-foreground">{name}</span>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </AnimatedSection>
  );
}
