"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Cloud, Zap, Globe, Cpu } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const words = ["The", "Cloud", "Backbone", "for", "Decentralized", "Innovation"]

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-3xl opacity-30 animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-3xl opacity-30" />
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 blur-3xl animate-float" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <span className="text-xs font-medium tracking-wide text-primary">
              Official Infrastructure for SidraChain
            </span>
          </motion.div>

          {/* Heading with Staggered Words */}
          <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="inline-block px-1"
              >
                {word === "Decentralized" ? (
                  <span className="text-primary">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty"
          >
            Secure, scalable, and Shariah-compliant cloud infrastructure engineered for the next generation of DApps.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-shadow duration-300">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="h-12 border-border/50 bg-background/50  text-foreground hover:bg-secondary/50 px-8 text-base">
                  Explore Platform
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats Glass Strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-20 w-full max-w-4xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/20 rounded-2xl border border-white/5 bg-white/5 ">
              {[
                { value: "99.999%", label: "Uptime SLA" },
                { value: "3+", label: "Cloud Regions" },
                { value: "7,806", label: "SDA Contributed" },
                { value: "0ms", label: "Failover Time" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center justify-center p-6 transition-colors hover:bg-white/5">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + (i * 0.1), type: "spring" }}
                    className="font-display text-2xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent md:text-3xl"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Infrastructure Visualization (Parallax) */}
          <motion.div
            style={{ y, opacity }}
            className="mt-24 w-full max-w-6xl"
          >
            <div className="relative group rounded-3xl border border-white/10 bg-black/40 p-2 ">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-grid-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

                <Image
                  src="/images/header.png"
                  alt="Xidra Cloud Network Visualization"
                  fill
                  className="object-cover opacity-60 mix-blend-screen"
                  priority
                />

                {/* Floating Cards with subtle float animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 left-1/4 z-20 hidden md:block"
                >
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 ">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-green-400">Node Status: Active</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/3 right-1/4 z-20 hidden md:block"
                >
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 ">
                    <Shield className="h-3 w-3 text-primary" />
                    <span className="text-xs font-mono text-primary">Encryption: AES-256</span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Feature Bar */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-4">
                {[
                  { icon: Cloud, label: "Multi-Cloud" },
                  { icon: Shield, label: "Secure" },
                  { icon: Zap, label: "Fast" },
                  { icon: Globe, label: "Global" },
                ].map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50  text-primary/80"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  )
}

