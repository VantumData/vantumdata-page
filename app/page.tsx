import { SiteHeader } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem"
import { WhatIsSection } from "@/components/sections/what-is"
import { WhyItMattersSection } from "@/components/sections/why-it-matters"
import { ErpEcosystemSection } from "@/components/sections/erp-ecosystem"
import { CapabilitiesSection } from "@/components/sections/capabilities"
import { WaitlistSection } from "@/components/sections/waitlist"
import { FaqSection } from "@/components/sections/faq"
import { SiteFooter } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatIsSection />
        <WhyItMattersSection />
        <ErpEcosystemSection />
        <CapabilitiesSection />
        <WaitlistSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  )
}
