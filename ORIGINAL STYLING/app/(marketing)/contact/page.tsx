import type { Metadata } from "next"
import Link from "next/link"
import {
  Mail,
  MessageCircle,
  BookOpen,
  Globe,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Contact & Get Started — Xidra Cloud Services",
  description:
    "Get in touch with the XCS team. Start building on SidraChain with Xidra Cloud Services today.",
}

const channels = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Reach our support team for technical assistance and account inquiries.",
    contact: "support@xidracloud.com",
    href: "mailto:support@xidracloud.com",
  },
  {
    icon: MessageCircle,
    title: "Community Chat",
    description: "Join our developer community for real-time discussions and help.",
    contact: "Join Discord",
    href: "#",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Browse our comprehensive docs for guides, API references, and tutorials.",
    contact: "Visit Docs",
    href: "/docs",
  },
  {
    icon: Globe,
    title: "Enterprise Sales",
    description: "Custom solutions for organizations with specialized requirements.",
    contact: "enterprise@xidracloud.com",
    href: "mailto:enterprise@xidracloud.com",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Get Started"
        badgeColor="accent"
        title="Let's Build the Future Together"
        description="Whether you're a developer starting your first DApp or an enterprise planning large-scale deployments, we're here to help."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Send Us a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form className="mt-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="plan" className="text-sm font-medium text-foreground">
                    Interest
                  </label>
                  <select
                    id="plan"
                    className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your interest
                    </option>
                    <option value="starter">Starter Plan</option>
                    <option value="professional">Professional Plan</option>
                    <option value="enterprise">Enterprise Plan</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project or how we can help..."
                    className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Support Channels */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Other Ways to Reach Us
              </h2>
              <p className="mt-2 text-muted-foreground">
                Choose the channel that works best for you.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {channels.map((channel) => {
                  const Icon = channel.icon
                  const Wrapper = channel.href.startsWith("/") ? Link : "a"
                  return (
                    <Wrapper
                      key={channel.title}
                      href={channel.href}
                      className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">
                          {channel.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {channel.description}
                        </p>
                        <span className="mt-2 inline-flex text-sm font-medium text-primary">
                          {channel.contact}
                        </span>
                      </div>
                    </Wrapper>
                  )
                })}
              </div>

              {/* Coverage Areas */}
              <div className="mt-12 rounded-xl border border-border bg-card p-6">
                <h3 className="font-display font-semibold text-foreground">
                  Global Coverage
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Xidra Cloud Services operates across multiple regions:
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    "Asia-Pacific",
                    "Europe",
                    "North America",
                    "Middle East",
                  ].map((region) => (
                    <div
                      key={region}
                      className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2"
                    >
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">{region}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
