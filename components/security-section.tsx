"use client"

import { Shield, Lock, ScanEye, FileCheck, Server, Fingerprint } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

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
  const containerRef = useRef(null)

  return (
    <section id="security" ref={containerRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest text-primary uppercase"
          >
            Security & Compliance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance flex items-center justify-center gap-3"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="h-8 w-8 text-primary" />
            </motion.div>
            Security as a Foundation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Every layer of Xidra Cloud is fortified with enterprise-grade
            security. Shariah-compliant operations with full transparency and
            ethical data governance.
          </motion.p>
        </div>

        {/* Security Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/40  p-8 transition-colors hover:border-primary/50 hover:bg-card/60"
              >
                {/* Scanner Beam Effect */}
                <motion.div
                  initial={{ top: "-100%" }}
                  whileInView={{ top: "200%" }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"
                />

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                    <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
