import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

/** Bordered card container; optional semantic element via `as`. */
export function Card({
  children,
  className,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      {children}
    </Component>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

/** Card header block with bottom padding removed for content. */
export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-1.5 p-6 pb-0", className)}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

/** Card body with standard padding. */
export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("p-6 pt-4", className)}>{children}</div>;
}
