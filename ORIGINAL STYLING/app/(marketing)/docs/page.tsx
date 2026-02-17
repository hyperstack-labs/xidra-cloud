import type { Metadata } from "next"
import {
  Rocket,
  Code,
  Globe,
  Shield,
  Layers,
  ArrowUpDown,
  ArrowRight,
  Terminal,
  Copy,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Documentation — Xidra Cloud Services",
  description:
    "Comprehensive documentation for Xidra Cloud Services. Getting started guides, API references, SDKs, and more.",
}

const docCategories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Quick-start guide for new users. Set up your account, deploy your first service, and explore the platform.",
    articles: ["Account Setup", "First Deployment", "Platform Overview", "CLI Installation"],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete REST API documentation for programmatic access to all XCS services and features.",
    articles: ["Authentication", "Deployments API", "Services API", "Analytics API"],
  },
  {
    icon: Terminal,
    title: "SDKs & Tools",
    description: "Client libraries for JavaScript, Python, Go, and Rust. CLI tools and developer utilities.",
    articles: ["JavaScript SDK", "Python SDK", "Go SDK", "CLI Reference"],
  },
  {
    icon: Globe,
    title: "Web Tier",
    description: "Deploy, manage, and scale web applications. Custom domains, SSL, and CDN configuration.",
    articles: ["Domain Setup", "SSL Certificates", "CDN Configuration", "Deployment Hooks"],
  },
  {
    icon: Shield,
    title: "Security",
    description: "Security best practices, access control, encryption configuration, and compliance documentation.",
    articles: ["Access Control", "Encryption", "Audit Logs", "Compliance Guide"],
  },
  {
    icon: ArrowUpDown,
    title: "Migration Guides",
    description: "Step-by-step guides for migrating from other cloud providers and transitioning from web2 to web3.",
    articles: ["From AWS", "From Azure", "From GCP", "Web2 to Web3"],
  },
]

const codeExample = `import { XidraCloud } from '@xidra/sdk';

// Initialize the client
const xcs = new XidraCloud({
  apiKey: process.env.XCS_API_KEY,
  region: 'asia-pacific',
});

// Deploy a new service
const deployment = await xcs.deploy({
  name: 'my-dapp',
  runtime: 'nodejs-20',
  source: './dist',
  replicas: 3,
  regions: ['asia', 'europe', 'north-america'],
});

console.log(\`Deployed: \${deployment.url}\`);
// => https://my-dapp.xidracloud.com`

export default function DocsPage() {
  return (
    <>
      <PageHeader
        badge="Documentation"
        title="Everything You Need to Build with XCS"
        description="Comprehensive guides, API references, SDKs, and code samples to help you build on Xidra Cloud Services."
      />

      {/* Doc Categories */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {docCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.title}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                    {cat.articles.map((article) => (
                      <a
                        key={article}
                        href="#"
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {article}
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Start Code Example */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-medium tracking-widest text-accent uppercase">
                Quick Start
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
                Deploy in Minutes, Not Hours
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Get your first application deployed on XCS with just a few lines
                of code. Our SDK handles authentication, multi-region
                replication, and scaling automatically.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { step: "1", text: "Install the XCS SDK from npm" },
                  { step: "2", text: "Initialize with your API key" },
                  { step: "3", text: "Deploy to multiple regions" },
                  { step: "4", text: "Monitor from the dashboard" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-display text-sm font-bold text-primary">
                      {step}
                    </div>
                    <span className="text-sm text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                    <div className="h-3 w-3 rounded-full bg-accent/60" />
                  </div>
                  <span className="text-xs text-muted-foreground">deploy.ts</span>
                  <button className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Copy code">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <pre className="overflow-x-auto p-6 text-sm leading-relaxed">
                  <code className="text-muted-foreground">
                    {codeExample}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Layers,
                title: "Changelog",
                description: "Stay up to date with the latest features, improvements, and fixes.",
              },
              {
                icon: Code,
                title: "GitHub",
                description: "Explore our open-source SDKs, report issues, and contribute.",
              },
              {
                icon: Shield,
                title: "Status Page",
                description: "Real-time status of all XCS services and infrastructure components.",
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.title}
                  href="#"
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/30"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
