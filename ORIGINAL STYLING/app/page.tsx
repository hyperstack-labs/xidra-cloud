import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { SecuritySection } from "@/components/security-section"
import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InfrastructureSection />
        <SecuritySection />
        <AboutSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
