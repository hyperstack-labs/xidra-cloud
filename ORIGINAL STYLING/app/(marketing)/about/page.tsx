import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Scale,
  BookOpen,
  Heart,
  Users,
  Target,
  Lightbulb,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "About — Xidra Cloud Services",
  description:
    "Learn about Xidra Cloud Services' mission, values, and the team building the future of Shariah-compliant decentralized infrastructure for SidraChain.",
}

const values = [
  {
    icon: Scale,
    title: "Shariah Compliance",
    description:
      "All financial practices and operations adhere to Islamic principles, ensuring ethical and transparent business conduct throughout our platform.",
  },
  {
    icon: Heart,
    title: "Ethical Data Governance",
    description:
      "We believe data is a trust (Amanah). Our governance framework ensures privacy, security, and ethical use of all data handled through our platform.",
  },
  {
    icon: BookOpen,
    title: "Transparent Operations",
    description:
      "Full operational transparency with regular audits, compliance reports, and community governance participation for SidraChain stakeholders.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Built by the community, for the community. Every decision is guided by the collective benefit of SidraChain ecosystem participants.",
  },
  {
    icon: Target,
    title: "Resilience by Design",
    description:
      "Every system is engineered for maximum uptime, fault tolerance, and disaster recovery with multi-cloud redundancy across three continents.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "We invest in cutting-edge technology from AI-driven security to autonomous orchestration to keep the SidraChain ecosystem at the forefront.",
  },
]

const milestones = [
  {
    year: "2024",
    title: "Foundation",
    description: "Xidra Cloud Services conceived as the backbone infrastructure for SidraChain. Initial architecture design and Shariah compliance framework established.",
  },
  {
    year: "2024",
    title: "Alpha Launch",
    description: "First multi-cloud integration deployed with AWS and Azure. Core node orchestration engine operational with zero-downtime capabilities.",
  },
  {
    year: "2025",
    title: "Platform Expansion",
    description: "Web Tier launched with DApp deployment tools. Geographic replication across Asia, Europe, and North America. AI anomaly detection integrated.",
  },
  {
    year: "2025",
    title: "Community Growth",
    description: "7,806.67 SDA contributed by community members. Enterprise tier launched. Google Cloud integration added for full multi-cloud coverage.",
  },
  {
    year: "2026",
    title: "Global Scale",
    description: "Middle East region expansion underway. Full Shariah compliance certification achieved. 500+ active SidraChain nodes managed by XCS.",
  },
]

const team = [
  { name: "Ahmad Al-Rashid", role: "Chief Executive Officer", initials: "AR" },
  { name: "Fatima Hassan", role: "Chief Technology Officer", initials: "FH" },
  { name: "Omar Khalid", role: "VP of Engineering", initials: "OK" },
  { name: "Aisha Binti Yusuf", role: "Head of Security", initials: "AY" },
  { name: "Ibrahim Musa", role: "Shariah Compliance Officer", initials: "IM" },
  { name: "Zainab Al-Farsi", role: "Head of Product", initials: "ZF" },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About XCS"
        badgeColor="accent"
        title="Building the Future of Ethical Cloud Infrastructure"
        description="Xidra Cloud Services operates at the intersection of cutting-edge technology and timeless Islamic principles, serving a global community that values integrity."
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/xcs-infrastructure.jpg"
                  alt="XCS decentralized infrastructure"
                  width={800}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-medium tracking-widest text-accent uppercase">
                Our Mission
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
                Empowering SidraChain Through Resilient Infrastructure
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                In a rapidly evolving digital landscape, the need for a
                resilient, secure, and scalable digital infrastructure is
                paramount. Xidra Cloud Services aims to create a decentralized
                system that supports innovative applications while adhering to
                Islamic principles.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We build robust backend services that ensure seamless operations
                for businesses within the decentralized ecosystem. This service
                is based entirely online, involving cloud services and data
                management that complies with Shariah finance, ensuring ethical
                financial practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Our Values
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
              Principles That Guide Everything We Build
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SDA Contributions */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-accent/20 bg-card p-8 md:p-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <Scale className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Community SDA Contributions
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Our community of builders, developers, and stakeholders have
                collectively contributed to the growth of the SidraChain
                ecosystem through SDA (Sidra Digital Asset) contributions.
              </p>
              <div className="mt-4 rounded-2xl border border-border bg-secondary px-12 py-8">
                <span className="font-display text-5xl font-bold text-primary md:text-6xl">
                  7,806.67
                </span>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  SDA Total Contributions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Our Journey
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Milestones Along the Way
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
              <div className="flex flex-col gap-12">
                {milestones.map((milestone, i) => (
                  <div
                    key={`${milestone.year}-${milestone.title}`}
                    className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                      i % 2 === 0
                        ? "md:pr-12 md:self-start md:text-right"
                        : "md:pl-12 md:self-end"
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-auto ${
                        i % 2 === 0
                          ? "md:right-[-6.5px]"
                          : "md:left-[-6.5px]"
                      }`}
                    />
                    <span className="text-sm font-medium text-primary">
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-widest text-accent uppercase">
              Leadership
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              The Team Behind XCS
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Join Us in Building the Future
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Whether you are a developer, a business, or a community member,
            there is a place for you in the Xidra Cloud ecosystem.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary px-8">
                Read Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
