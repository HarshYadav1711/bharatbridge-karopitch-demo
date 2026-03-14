interface PlaceholderSectionProps {
  label?: string;
  id?: string;
}

export function PlaceholderSection({ label = "Section", id }: PlaceholderSectionProps) {
  return (
    <section
      id={id}
      className="w-full max-w-5xl mx-auto py-12 px-6 border border-dashed border-border rounded-lg flex items-center justify-center min-h-[120px]"
    >
      <span className="text-muted-foreground text-sm font-medium">{label}</span>
    </section>
  );
}
