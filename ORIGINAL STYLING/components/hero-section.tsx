import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Cloud, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/8 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-medium tracking-wide text-primary">
              Powering the Future of SidraChain
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            The Digital Backbone for{" "}
            <span className="text-primary">Decentralized</span>{" "}
            Innovation
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
            Secure, scalable, and Shariah-compliant cloud infrastructure.
            Multi-cloud redundancy with 99.999% uptime — built for the
            next generation of decentralized applications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary px-8">
                Explore Platform
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
            {[
              { value: "99.999%", label: "Uptime SLA" },
              { value: "3+", label: "Cloud Regions" },
              { value: "7,806", label: "SDA Contributed" },
              { value: "0ms", label: "Failover Time" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 bg-card px-6 py-6">
                <span className="font-display text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Infrastructure Image */}
          <div className="mt-16 w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/xcs-infrastructure.jpg"
                alt="Xidra Cloud Services infrastructure visualization showing decentralized network nodes, server racks, and multi-cloud integration"
                width={1200}
                height={675}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-center gap-6">
                {[
                  { icon: Shield, label: "End-to-End Encryption" },
                  { icon: Cloud, label: "Multi-Cloud Redundancy" },
                  { icon: Zap, label: "Zero-Downtime" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 ">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
