import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Globe,
  Layers,
  Cpu,
  Rocket,
  ArrowUpDown,
  BrainCircuit,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Services — Xidra Cloud Services",
  description:
    "Explore the full suite of XCS services: multi-cloud orchestration, DApp deployment, AI intelligence, adaptive scaling, and Shariah-compliant infrastructure.",
}

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/30">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-2.5">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
              <Check className="h-3 w-3 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">{f}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const services: ServiceCardProps[] = [
  {
    icon: Layers,
    title: "Multi-Cloud Redundancy",
    description:
      "Seamless integration with hyperscalers like AWS, Google Cloud, and Azure. Instant failover, adaptive routing, and geographic distribution ensure zero single points of failure.",
    features: [
      "AWS, Google Cloud, Azure integration",
      "Instant failover with adaptive routing",
      "Geographic load balancing",
      "Unified management console",
    ],
  },
  {
    icon: Globe,
    title: "Multi-Geographic Replication",
    description:
      "Real-time database mirroring across Asia, Europe, and North America. Data remains consistent, available, and resilient regardless of regional disruptions.",
    features: [
      "3-continent data replication",
      "Real-time database mirroring",
      "Disaster recovery built-in",
      "Sub-millisecond sync latency",
    ],
  },
  {
    icon: Rocket,
    title: "Web Tier & DApp Deployment",
    description:
      "The Xidra Web Tier is your control center for every web deployment. One-click migration from web2 to web3 with developer-ready APIs, SDKs, and optimization tools.",
    features: [
      "One-click DApp deployment",
      "Web2-to-Web3 migration wizards",
      "Developer APIs and SDKs",
      "Custom domain management",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Intelligence",
    description:
      "Machine learning anomaly detection, predictive analytics, and automated threat response built into every layer. Smart resource optimization that adapts in real time.",
    features: [
      "ML anomaly detection",
      "Predictive analytics engine",
      "Automated threat response",
      "Smart cost optimization",
    ],
  },
  {
    icon: ArrowUpDown,
    title: "Adaptive Scaling",
    description:
      "AI-driven resource optimization that automatically scales to meet demand while maintaining cost efficiency. From zero to global in seconds.",
    features: [
      "Auto-scaling infrastructure",
      "Demand-based resource allocation",
      "Cost-efficient scaling",
      "Global CDN distribution",
    ],
  },
  {
    icon: Cpu,
    title: "Zero-Downtime Infrastructure",
    description:
      "Autonomous orchestration ensures SidraChain nodes, applications, and services stay online through any outage, maintenance window, or attack vector.",
    features: [
      "99.999% uptime SLA",
      "Rolling updates with zero impact",
      "Self-healing node management",
      "Automated backup & recovery",
    ],
  },
]

const pricingTiers = [
  {
    name: "Starter",
    description: "For individual developers and small DApps",
    price: "Free",
    period: "",
    features: [
      "1 DApp deployment",
      "5GB storage",
      "Shared compute resources",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing teams and production workloads",
    price: "500 SDA",
    period: "/month",
    features: [
      "Unlimited DApp deployments",
      "100GB storage",
      "Dedicated compute",
      "Priority support",
      "Advanced analytics & monitoring",
      "Multi-region replication",
      "Custom domains",
    ],
    cta: "Start Professional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For organizations running critical infrastructure",
    price: "Custom",
    period: "",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "Dedicated infrastructure",
      "24/7 premium support",
      "Custom SLA agreements",
      "Shariah compliance audit",
      "On-boarding assistance",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

const faqs = [
  {
    question: "What cloud providers does XCS integrate with?",
    answer:
      "Xidra Cloud Services integrates with all major hyperscalers including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform. Our multi-cloud orchestration layer provides unified management across all providers with automatic failover.",
  },
  {
    question: "How does the Shariah compliance model work?",
    answer:
      "All financial operations within XCS adhere to Islamic finance principles. This means no interest-based transactions, full transparency in pricing, ethical data governance, and regular audits by qualified Shariah scholars to ensure compliance.",
  },
  {
    question: "Can I migrate my existing web2 application to XCS?",
    answer:
      "Yes. Our Web Tier includes migration wizards specifically designed for web2-to-web3 transformation. Our developer APIs and SDKs make it straightforward to integrate decentralized capabilities into your existing applications.",
  },
  {
    question: "What is the SDA payment model?",
    answer:
      "SDA (Sidra Digital Asset) is the native token used for all transactions within the SidraChain ecosystem. XCS accepts SDA for service subscriptions, resource usage, and enterprise agreements. Current total community contributions stand at 7,806.67 SDA.",
  },
  {
    question: "What uptime guarantee does XCS provide?",
    answer:
      "We provide a 99.999% uptime SLA backed by multi-cloud redundancy, geographic replication across three continents, and autonomous orchestration that ensures zero-downtime even during maintenance or failover events.",
  },
  {
    question: "How does AI-driven security work?",
    answer:
      "Our AI security layer uses machine learning models that continuously scan for threats, intrusions, and irregular patterns in real time. Combined with automated threat response and DDoS mitigation, the system provides enterprise-grade protection.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Platform Services"
        title="Everything You Need to Build on SidraChain"
        description="From multi-cloud orchestration to AI-powered security, Xidra Cloud provides the complete infrastructure stack for decentralized applications."
      />

      {/* Ecosystem Image */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/xcs-ecosystem.jpg"
              alt="XCS ecosystem showing integration with AWS, Azure, SidraChain, and blockchain technologies"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-widest text-accent uppercase">
              Pricing
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Choose the plan that fits your needs. All plans include
              Shariah-compliant operations and ethical data governance.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm text-muted-foreground">
                      {tier.period}
                    </span>
                  )}
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-8">
                  <Link href="/contact" className="block">
                    <Button
                      className={`w-full ${
                        tier.highlighted
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              FAQ
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base font-medium text-foreground hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
