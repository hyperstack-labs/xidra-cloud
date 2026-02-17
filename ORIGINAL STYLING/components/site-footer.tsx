import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  Platform: [
    { label: "Cloud Services", href: "/services" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Security", href: "/security" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Get Started", href: "/contact" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Compliance: [
    { label: "Shariah Compliance", href: "/security" },
    { label: "Data Governance", href: "/security" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="flex max-w-sm flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/xcs-logo.jpg"
                alt="Xidra Cloud Services logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <div>
                <span className="font-display text-base font-bold text-foreground">
                  Xidra Cloud Services
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Powering the future of SidraChain with secure, scalable, and
              Shariah-compliant cloud infrastructure for the next generation of
              decentralized innovation.
            </p>
            <p className="text-sm text-muted-foreground">
              Total SDA Contributions:{" "}
              <span className="font-semibold text-primary">7,806.67 SDA</span>
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <span className="text-sm font-semibold text-foreground">
                  {category}
                </span>
                <div className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Xidra Cloud Services. All rights reserved. Shariah-compliant
            operations.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/security" className="text-xs text-muted-foreground hover:text-foreground">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
