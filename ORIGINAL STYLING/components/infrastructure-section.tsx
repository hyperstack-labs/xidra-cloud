import Image from "next/image"
import { Check } from "lucide-react"

const capabilities = [
  "Multi-Geographic Data Replication across 3 continents",
  "Real-time failover with adaptive routing protocols",
  "AWS, Google Cloud, and Azure hyperscaler integration",
  "Autonomous orchestration for node management",
  "Developer-ready APIs and SDKs for rapid deployment",
  "AI-driven resource optimization and cost management",
]

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/xcs-ecosystem.jpg"
                alt="Xidra Cloud Services ecosystem showing integration with AWS, Azure, SidraChain, and blockchain technologies"
                width={800}
                height={800}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-medium tracking-widest text-accent uppercase">
              The Xidra Web Tier
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Your Control Center for Every Web Deployment
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Whether you are deploying a decentralized marketplace, an
              enterprise-grade API, or a real-time analytics engine, Xidra Cloud
              provides the tools, resources, and scalability to make it happen.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
