import type { Metadata } from "next"
import Image from "next/image"
import {
  Server,
  Globe,
  Gauge,
  HardDrive,
  Network,
  Clock,
  Check,
  Cloud,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Infrastructure — Xidra Cloud Services",
  description:
    "Explore the enterprise-grade infrastructure behind XCS: multi-cloud architecture, geographic replication, and 99.999% uptime SLA.",
}

const providers = [
  {
    name: "Amazon Web Services",
    abbr: "AWS",
    capabilities: [
      "Elastic Compute (EC2)",
      "S3 Object Storage",
      "Lambda Serverless",
      "CloudFront CDN",
    ],
  },
  {
    name: "Microsoft Azure",
    abbr: "Azure",
    capabilities: [
      "Virtual Machines",
      "Blob Storage",
      "Azure Functions",
      "Azure CDN",
    ],
  },
  {
    name: "Google Cloud Platform",
    abbr: "GCP",
    capabilities: [
      "Compute Engine",
      "Cloud Storage",
      "Cloud Functions",
      "Cloud CDN",
    ],
  },
]

const regions = [
  { name: "Asia-Pacific", cities: "Singapore, Tokyo, Mumbai", status: "Active" },
  { name: "Europe", cities: "Frankfurt, London, Amsterdam", status: "Active" },
  { name: "North America", cities: "Virginia, Oregon, Toronto", status: "Active" },
  { name: "Middle East", cities: "Bahrain, UAE", status: "Expanding" },
]

const specs = [
  { icon: Gauge, label: "Latency", value: "< 10ms", detail: "Global average response time" },
  { icon: Network, label: "Throughput", value: "100 Gbps", detail: "Network backbone capacity" },
  { icon: HardDrive, label: "Storage", value: "Petabyte+", detail: "Distributed storage capacity" },
  { icon: Clock, label: "Uptime", value: "99.999%", detail: "SLA-backed availability" },
  { icon: Server, label: "Nodes", value: "500+", detail: "Active SidraChain nodes" },
  { icon: Cloud, label: "Providers", value: "3+", detail: "Hyperscaler integrations" },
]

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader
        badge="Infrastructure"
        title="Enterprise-Grade Architecture for the Decentralized Era"
        description="Multi-cloud orchestration, geographic replication, and autonomous failover. Built for 99.999% uptime across three continents."
      />

      {/* Architecture Diagram */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/xcs-infrastructure.jpg"
              alt="Xidra Cloud Services infrastructure architecture with decentralized nodes, servers, and multi-cloud integration"
              width={1200}
              height={675}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Technical Specs Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Performance
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Numbers That Speak for Themselves
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {specs.map((spec) => {
              const Icon = spec.icon
              return (
                <div key={spec.label} className="flex flex-col items-center gap-3 bg-card p-8 text-center">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="font-display text-3xl font-bold text-foreground">
                    {spec.value}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {spec.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {spec.detail}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-widest text-accent uppercase">
              Multi-Cloud
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Integrated with the World's Leading Cloud Providers
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              XCS orchestrates resources across all major hyperscalers for
              maximum resilience and optimal performance.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {providers.map((provider) => (
              <div
                key={provider.abbr}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 font-display text-sm font-bold text-primary">
                    {provider.abbr}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {provider.name}
                    </h3>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  {provider.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Regions */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Global Presence
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Multi-Geographic Replication
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Data is replicated in real time across three continents, ensuring
              consistency, availability, and resilience regardless of regional disruptions.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {regions.map((region) => (
              <div
                key={region.name}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground">
                      {region.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {region.cities}
                    </p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    region.status === "Active"
                      ? "bg-accent/20 text-accent"
                      : "bg-chart-4/20 text-chart-4"
                  }`}
                >
                  {region.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/xcs-ecosystem.jpg"
                  alt="XCS multi-cloud ecosystem"
                  width={800}
                  height={800}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-medium tracking-widest text-accent uppercase">
                Reliability
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
                SLA-Backed 99.999% Uptime
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our infrastructure is designed for five-nines availability.
                Autonomous orchestration, self-healing nodes, and multi-cloud
                failover ensure your services stay online through any scenario.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { value: "< 1ms", label: "Failover Time" },
                  { value: "24/7", label: "Monitoring" },
                  { value: "3x", label: "Redundancy" },
                  { value: "Auto", label: "Self-Healing" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-secondary p-4 text-center">
                    <div className="font-display text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
