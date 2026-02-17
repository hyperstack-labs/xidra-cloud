import { BookOpen, Scale, Heart } from "lucide-react"

const principles = [
  {
    icon: Scale,
    title: "Shariah Compliance",
    description:
      "All financial practices and operations adhere to Islamic principles, ensuring ethical and transparent business conduct.",
  },
  {
    icon: Heart,
    title: "Ethical Data Governance",
    description:
      "We believe data is a trust. Our governance framework ensures privacy, security, and ethical use of all data handled through our platform.",
  },
  {
    icon: BookOpen,
    title: "Transparent Operations",
    description:
      "Full operational transparency with regular audits, compliance reports, and community governance participation for SidraChain stakeholders.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-widest text-accent uppercase">
            Our Principles
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Built on Islamic Values, Powered by Innovation
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Xidra Cloud Services operates at the intersection of cutting-edge
            technology and timeless ethical principles, serving a global
            community that values integrity.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon
            return (
              <div
                key={principle.title}
                className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
