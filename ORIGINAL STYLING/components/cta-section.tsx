import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/4 translate-y-1/4 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center px-8 py-20 text-center md:px-16 md:py-28">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
              The Future Is Xidra Cloud
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              As SidraChain grows, so does our infrastructure. Join us in
              building the most resilient, ethical, and innovative cloud
              platform the decentralized world has ever seen. We are not just
              hosting the future — we are building it.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  Contribute Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary px-8">
                  Read Documentation
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Total SDA Contributions:{" "}
              <span className="font-semibold text-primary">7,806.67 SDA</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
