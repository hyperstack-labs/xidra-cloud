"use client"

import { useRef } from "react"
import { Globe, Shield, Zap, Cpu, Server, Network } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Globe,
    title: "Multi-Geographic Replication",
    description: "Real-time database mirroring across Asia, Europe, and North America. No single points of failure.",
    className: "md:col-span-2",
  },
  {
    icon: Shield,
    title: "Shariah-Compliant Security",
    description: "Ethical financial data handling with military-grade encryption.",
    className: "md:col-span-1",
  },
  {
    icon: Zap,
    title: "Edge Computing",
    description: "Deploy logic to the edge for sub-10ms latency globally.",
    className: "md:col-span-1",
  },
  {
    icon: Cpu,
    title: "Auto-Scaling Groups",
    description: "Infrastructure that grows with your DApp's user base instantly.",
    className: "md:col-span-2",
  },
  {
    icon: Server,
    title: "Dedicated Nodes",
    description: "Bare-metal performance for high-throughput blockchain validators.",
    className: "md:col-span-2",
  },
  {
    icon: Network,
    title: "Private VPC Peering",
    description: "Direct, secure connection to SidraChain without public internet exposure.",
    className: "md:col-span-1",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    x.set(clientX - left)
    y.set(clientY - top)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 p-8 hover:border-white/20 transition-colors",
        feature.className
      )}
    >
      <div className="absolute inset-0 z-0 transition-opacity bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100" />

      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([newX, newY]) => `radial-gradient(600px circle at ${newX}px ${newY}px, rgba(var(--primary), 0.15), transparent 40%)`
          ),
        }}
      />

      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <feature.icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 font-display text-xl font-bold text-foreground">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-black/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest text-primary uppercase"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance"
          >
            Infrastructure Built for the <span className="text-primary">Decentralized Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg leading-relaxed text-muted-foreground"
          >
            Forget generic cloud providers. Xidra Cloud is architected specifically for
            high-performance blockchain nodes, DApps, and financial systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
