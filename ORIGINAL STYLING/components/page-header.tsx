interface PageHeaderProps {
  badge: string
  title: string
  description: string
  badgeColor?: "primary" | "accent"
}

export function PageHeader({ badge, title, description, badgeColor = "primary" }: PageHeaderProps) {
  const colorClasses = badgeColor === "accent"
    ? "border-accent/30 bg-accent/10 text-accent"
    : "border-primary/30 bg-primary/10 text-primary"

  return (
    <div className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl animate-pulse-glow" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${colorClasses}`}>
          <div className="h-2 w-2 rounded-full bg-current" />
          <span className="text-xs font-medium tracking-wide">{badge}</span>
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      </div>
    </div>
  )
}
