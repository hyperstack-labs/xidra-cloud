"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function CtaSection() {
  const ref = useRef<HTMLElement>(null)
  const [stars, setStars] = useState<{
    slow: Array<{ width: string; height: string; top: string; left: string }>;
    fast: Array<{ width: string; height: string; top: string; left: string }>;
  }>({ slow: [], fast: [] })

  useEffect(() => {
    setStars({
      slow: [...Array(20)].map(() => ({
        width: Math.random() * 2 + 'px',
        height: Math.random() * 2 + 'px',
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
      })),
      fast: [...Array(10)].map(() => ({
        width: Math.random() * 3 + 1 + 'px',
        height: Math.random() * 3 + 1 + 'px',
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
      }))
    })
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const xPct = (clientX - left) / width - 0.5
    const yPct = (clientY - top) / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 "
        >

          {/* Parallax Starfield Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.15),transparent_70%)]" />

            {/* Layer 1 - Deep Stars (Slow) */}
            <motion.div
              style={{
                x: useTransform(mouseX, [-0.5, 0.5], [20, -20]),
                y: useTransform(mouseY, [-0.5, 0.5], [20, -20]),
              }}
              className="absolute inset-0"
            >
              {stars.slow.map((star, i) => (
                <div
                  key={`star-1-${i}`}
                  className="absolute rounded-full bg-white/20"
                  style={star}
                />
              ))}
            </motion.div>

            {/* Layer 2 - Near Stars (Fast) */}
            <motion.div
              style={{
                x: useTransform(mouseX, [-0.5, 0.5], [50, -50]),
                y: useTransform(mouseY, [-0.5, 0.5], [50, -50]),
              }}
              className="absolute inset-0"
            >
              {stars.fast.map((star, i) => (
                <div
                  key={`star-2-${i}`}
                  className="absolute rounded-full bg-white/80"
                  style={star}
                />
              ))}
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-col items-center px-8 py-20 text-center md:px-16 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 "
            >
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-primary">
                Join the Network
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl font-display text-4xl font-bold text-foreground md:text-6xl text-balance tracking-tight"
            >
              The Future Is <span className="text-primary">Xidra Cloud</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
            >
              As SidraChain grows, so does our infrastructure. Join us in
              building the most resilient, ethical, and innovative cloud
              platform the decentralized world has ever seen. We are not just
              hosting the future. We are building it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:shadow-[0_0_50px_rgba(var(--primary),0.6)] transition-all duration-300">
                    Contribute Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/docs">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 bg-white/5  text-foreground hover:bg-white/10 transition-all duration-300">
                    Read Documentation
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-sm text-muted-foreground bg-black/40 px-4 py-2 rounded-full border border-white/5 "
            >
              Total SDA Contributions:{" "}
              <span className="font-mono font-bold text-primary ml-2">7,806.67 SDA</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
