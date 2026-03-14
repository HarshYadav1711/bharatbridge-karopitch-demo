import {
  Send,
  ListChecks,
  Presentation,
  CircleDollarSign,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/Card";

const steps = [
  {
    step: 1,
    title: "Apply",
    description: "Submit your startup details and tell us what you’re building.",
    icon: Send,
  },
  {
    step: 2,
    title: "Get Shortlisted",
    description:
      "Our team reviews applications and selects founders for the pitch day.",
    icon: ListChecks,
  },
  {
    step: 3,
    title: "Pitch to Investors",
    description:
      "Present live to investors and mentors. Answer questions and get feedback.",
    icon: Presentation,
  },
  {
    step: 4,
    title: "Raise Funding",
    description:
      "Connect with interested investors and take the next steps toward closing rounds.",
    icon: CircleDollarSign,
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 bg-muted/30"
      aria-labelledby="how-heading"
    >
      <Container className="flex flex-col gap-12 sm:gap-16">
        <SectionTitle
          title="How It Works"
          subtitle="From application to funding—four steps."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ step, title, description, icon: Icon }, index) => (
            <div key={step} className="relative flex flex-col">
              <Card className="flex h-full flex-col">
                <CardContent className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-brand text-sm font-semibold text-white"
                      aria-hidden
                    >
                      {step}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary-brand">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div
                  className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-border lg:block"
                  aria-hidden
                >
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
