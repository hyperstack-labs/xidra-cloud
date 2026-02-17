import { Shield, Lock, ScanEye, FileCheck, Server, Fingerprint } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Every byte of SidraChain data is encrypted in transit and at rest using military-grade protocols.",
  },
  {
    icon: Fingerprint,
    title: "Zero-Trust Access",
    description: "Multi-layered identity verification with biometric and token-based authentication systems.",
  },
  {
    icon: ScanEye,
    title: "AI Anomaly Detection",
    description: "Machine learning models continuously scan for threats, intrusions, and irregular patterns in real time.",
  },
  {
    icon: FileCheck,
    title: "Compliance Monitoring",
    description: "Continuous Shariah-compliance auditing and regulatory adherence across all operations.",
  },
  {
    icon: Server,
    title: "Penetration Testing",
    description: "Regular automated and manual security assessments to identify and patch vulnerabilities.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade distributed denial-of-service mitigation with automatic traffic scrubbing.",
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Security & Compliance
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Security Is Not an Option — It Is a Foundation
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Every layer of Xidra Cloud is fortified with enterprise-grade
            security. Shariah-compliant operations with full transparency and
            ethical data governance.
          </p>
        </div>

        {/* Security Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
              >
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
