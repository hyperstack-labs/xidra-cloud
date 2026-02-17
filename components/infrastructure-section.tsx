"use client"

import Image from "next/image"
import { Check, Server, Globe2, Network } from "lucide-react"
import { cn } from "@/lib/utils"

const capabilities = [
  { text: "Multi-Geographic Data Replication across 3 continents", icon: Globe2 },
  { text: "Real-time failover with adaptive routing protocols", icon: Network },
  { text: "AWS, Google Cloud, and Azure hyperscaler integration", icon: Server },
  { text: "Autonomous orchestration for node management", icon: Check },
  { text: "Developer-ready APIs and SDKs for rapid deployment", icon: Check },
  { text: "AI-driven resource optimization and cost management", icon: Check },
]

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Image Area with Radar Effect */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Radar Rings */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <div className="w-[120%] h-[120%] border border-primary/10 rounded-full animate-radar" />
              <div className="w-[120%] h-[120%] border border-primary/10 rounded-full animate-radar animation-delay-500" />
            </div>

            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-black/40  shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/images/xcs-infrastructure.jpg"
                alt="Xidra Cloud Services ecosystem"
                width={800}
                height={800}
                className="w-full object-cover relative z-10 opacity-90 transition-opacity group-hover:opacity-100"
              />

              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                <div className="bg-black/60  rounded-lg p-3 border border-white/10">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Active Nodes</div>
                  <div className="text-xl font-mono font-bold text-primary">1,240</div>
                </div>
                <div className="bg-black/60  rounded-lg p-3 border border-white/10">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Global Latency</div>
                  <div className="text-xl font-mono font-bold text-green-400">~24ms</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-medium tracking-widest text-primary uppercase animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              The Xidra Web Tier
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl text-balance animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Your Control Center for <span className="text-primary">Every Deployment</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Whether you are deploying a decentralized marketplace, an
              enterprise-grade API, or a real-time analytics engine, Xidra Cloud
              provides the tools, resources, and scalability to make it happen.
            </p>

            <div className="mt-10 flex flex-col gap-3">
              {capabilities.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300 animate-fade-up opacity-0"
                    style={{ animationDelay: `${0.3 + (i * 0.1)}s`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
