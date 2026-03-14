import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "text-center mx-auto",
        align === "left" && "text-left",
        className
      )}
    >
      <h2 className="text-section text-foreground font-semibold tracking-tight sm:text-display-sm">
        {title}
      </h2>
      {subtitle != null && (
        <p className="text-body-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
