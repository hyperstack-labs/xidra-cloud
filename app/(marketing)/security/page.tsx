import type { Metadata } from "next"
import {
  Shield,
  Lock,
  ScanEye,
  FileCheck,
  Server,
  Fingerprint,
  Scale,
  BookOpen,
  Check,
  AlertTriangle,
  Eye,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Security & Compliance | Xidra Cloud Services",
  description:
    "Enterprise-grade security with Shariah compliance. End-to-end encryption, zero-trust access, AI anomaly detection, and continuous compliance monitoring.",
}

const securityPillars = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Every byte of SidraChain data is encrypted in transit and at rest using military-grade AES-256 and TLS 1.3 protocols. Encryption keys are managed through a decentralized key management service.",
    details: [
      "AES-256 encryption at rest",
      "TLS 1.3 in transit",
      "Decentralized key management",
      "Hardware security modules (HSM)",
    ],
  },
  {
    icon: Fingerprint,
    title: "Zero-Trust Access",
    description:
      "Multi-layered identity verification with biometric and token-based authentication. Every request is verified, every session is monitored, and no user or service is trusted by default.",
    details: [
      "Multi-factor authentication",
      "Biometric verification",
      "Token-based session management",
      "Role-based access control (RBAC)",
    ],
  },
  {
    icon: ScanEye,
    title: "AI Anomaly Detection",
    description:
      "Machine learning models continuously scan for threats, intrusions, and irregular patterns in real time. Our AI security layer adapts to new threats automatically.",
    details: [
      "Real-time threat monitoring",
      "Behavioral analysis",
      "Automated threat classification",
      "Predictive threat modeling",
    ],
  },
  {
    icon: FileCheck,
    title: "Compliance Monitoring",
    description:
      "Continuous Shariah-compliance auditing and regulatory adherence across all operations. Automated compliance checks run 24/7 with full audit trails.",
    details: [
      "24/7 automated compliance checks",
      "Full audit trail logging",
      "Regulatory reporting",
      "Third-party compliance verification",
    ],
  },
  {
    icon: Server,
    title: "Penetration Testing",
    description:
      "Regular automated and manual security assessments to identify and patch vulnerabilities. Both internal teams and third-party security firms conduct regular testing.",
    details: [
      "Quarterly penetration tests",
      "Automated vulnerability scanning",
      "Bug bounty program",
      "Third-party security audits",
    ],
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description:
      "Enterprise-grade distributed denial-of-service mitigation with automatic traffic scrubbing. Multi-layer protection shields all services from volumetric and application-layer attacks.",
    details: [
      "Multi-layer DDoS mitigation",
      "Automatic traffic scrubbing",
      "Rate limiting & throttling",
      "Global anycast network",
    ],
  },
]

const shariahPrinciples = [
  {
    icon: Scale,
    title: "Shariah Finance Compliance",
    description:
      "All financial practices adhere to Islamic principles. No interest-based transactions (Riba), full transparency in pricing, and profit-sharing models that align with Mudarabah and Musharakah frameworks.",
  },
  {
    icon: Eye,
    title: "Ethical Data Governance",
    description:
      "Data is treated as a trust (Amanah). Our governance framework ensures privacy, security, and ethical use of all data handled through our platform, with consent-based data processing.",
  },
  {
    icon: BookOpen,
    title: "Transparent Operations",
    description:
      "Full operational transparency with regular audits, compliance reports, and community governance participation. All stakeholders have visibility into how the platform operates.",
  },
]

const certifications = [
  { name: "ISO 27001", category: "Information Security" },
  { name: "SOC 2 Type II", category: "Service Organization" },
  { name: "AAOIFI", category: "Shariah Compliance" },
  { name: "GDPR", category: "Data Privacy" },
  { name: "PCI DSS", category: "Payment Security" },
  { name: "CSA STAR", category: "Cloud Security" },
]

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        badge="Security & Compliance"
        title="Security Is Not an Option. It Is a Foundation."
        description="Every layer of Xidra Cloud is fortified with enterprise-grade security. Shariah-compliant operations with full transparency and ethical data governance."
      />

      {/* Security Pillars */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityPillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
                >
                  <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                    <div className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
                      {pillar.details.map((d) => (
                        <div key={d} className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 shrink-0 text-accent" />
                          <span className="text-sm text-muted-foreground">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Shariah Compliance */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-widest text-accent uppercase">
              Islamic Principles
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
              Built on Islamic Values, Powered by Innovation
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our operations adhere to the highest standards of Islamic ethics
              and Shariah finance, ensuring every transaction and data operation
              aligns with timeless principles.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {shariahPrinciples.map((principle) => {
              const Icon = principle.icon
              return (
                <div
                  key={principle.title}
                  className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Certifications
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Industry-Leading Compliance Standards
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center gap-2 bg-card p-8 text-center">
                <Shield className="h-8 w-8 text-primary" />
                <span className="font-display text-lg font-bold text-foreground">
                  {cert.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {cert.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-primary/20 bg-card p-8 md:p-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <AlertTriangle className="h-10 w-10 text-chart-4" />
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Report a Security Vulnerability
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                We take security seriously. If you discover a vulnerability in
                our systems, please report it responsibly. Our security team
                reviews all reports within 24 hours.
              </p>
              <a
                href="mailto:security@xidracloud.com"
                className="mt-4 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                security@xidracloud.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
