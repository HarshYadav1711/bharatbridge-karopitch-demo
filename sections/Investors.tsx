import { Users, Building2, Network } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/Card";
import { cn } from "@/lib/utils";

type InvestorType = "Angel" | "VC" | "Network";

const placeholderInvestors: { name: string; type: InvestorType }[] = [
  { name: "Investor One", type: "Angel" },
  { name: "Investor Two", type: "VC" },
  { name: "Investor Three", type: "Network" },
  { name: "Investor Four", type: "Angel" },
  { name: "Investor Five", type: "VC" },
  { name: "Investor Six", type: "Angel" },
];

const typeConfig: Record<
  InvestorType,
  { icon: typeof Users; label: string; className: string }
> = {
  Angel: {
    icon: Users,
    label: "Angel",
    className: "bg-primary-brand/10 text-primary-brand border-primary-brand/20",
  },
  VC: {
    icon: Building2,
    label: "VC",
    className: "bg-muted text-muted-foreground border-border",
  },
  Network: {
    icon: Network,
    label: "Network",
    className: "bg-accent-brand/10 text-accent-foreground border-accent-brand/20",
  },
};

export function Investors() {
  return (
    <section id="investors" className="py-16 sm:py-20 bg-muted/30">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          title="Investors on the Platform"
          subtitle="Founders get in front of angels, VCs, and ecosystem partners."
          align="center"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderInvestors.map(({ name, type }) => {
            const config = typeConfig[type];
            const Icon = config.icon;
            return (
              <li key={`${name}-${type}`}>
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-3 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold text-foreground">
                        {name}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium shrink-0",
                          config.className
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden />
                        {config.label}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
