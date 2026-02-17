import {
  Globe,
  Layers,
  Cpu,
  Rocket,
  ArrowUpDown,
  BrainCircuit,
} from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Multi-Geographic Replication",
    description:
      "Real-time database mirroring across Asia, Europe, and North America to eliminate single points of failure.",
  },
  {
    icon: Layers,
    title: "Multi-Cloud Redundancy",
    description:
      "Seamless integration with hyperscalers like AWS, Google Cloud, and Azure with instant failover and adaptive routing.",
  },
  {
    icon: Cpu,
    title: "Zero-Downtime Infrastructure",
    description:
      "Autonomous orchestration ensures SidraChain nodes, apps, and services stay online through any outage or attack.",
  },
  {
    icon: Rocket,
    title: "One-Click DApp Deployment",
    description:
      "Migration wizards for web2 to web3 transformation with developer-ready APIs, SDKs, and optimization tools.",
  },
  {
    icon: ArrowUpDown,
    title: "Adaptive Scaling",
    description:
      "AI-driven resource optimization that automatically scales to meet demand while maintaining cost efficiency.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Intelligence",
    description:
      "Machine learning anomaly detection, predictive analytics, and automated threat response built into every layer.",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Core Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Infrastructure Built for the Decentralized Future
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            From multi-cloud orchestration to AI-powered security, every layer
            of Xidra Cloud is engineered for resilience, performance, and
            Shariah compliance.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
