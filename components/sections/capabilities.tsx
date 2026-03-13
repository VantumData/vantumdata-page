"use client"

import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { gsap, useGSAP } from "@/lib/gsap"
import { SectionAccent } from "@/components/graphics/section-accent"
import {
  ChartBarIcon,
  BroadcastIcon,
  GaugeIcon,
  BellRingingIcon,
  CurrencyCircleDollarIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react"

const capabilities = [
  {
    icon: ChartBarIcon,
    title: "Executive-Ready Visibility",
    description:
      "Consolidated views built for leadership — not analysts. See what matters at a glance.",
  },
  {
    icon: BroadcastIcon,
    title: "ERP Signal Monitoring",
    description:
      "Continuous monitoring of operational and financial signals flowing through your ERP.",
  },
  {
    icon: GaugeIcon,
    title: "KPI Intelligence",
    description:
      "Move beyond static KPIs to dynamic intelligence that tracks performance in context.",
  },
  {
    icon: BellRingingIcon,
    title: "Alerts & Anomaly Detection",
    description:
      "Surface deviations, risks, and opportunities before they become visible in standard reports.",
  },
  {
    icon: CurrencyCircleDollarIcon,
    title: "Operational & Financial Insight",
    description:
      "Bridge the gap between operational metrics and financial outcomes with unified intelligence.",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Advanced Business Querying",
    description:
      "Explore your ERP data with powerful querying — without needing to build custom reports.",
  },
]

export function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from("[data-animate='cap-card']", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative overflow-hidden px-6 py-12 sm:py-16 md:py-24"
    >
      <SectionAccent
        variant="left"
        className="absolute -bottom-6 -left-10 w-72 text-foreground/5"
      />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl tracking-tight sm:text-4xl">
            What&rsquo;s Coming
          </h2>
          <p className="text-lg text-muted-foreground">
            VantumIQP is being built to deliver a new standard of ERP data
            intelligence. Here is a preview of the capabilities on the roadmap.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <Card key={cap.title} data-animate="cap-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <cap.icon className="size-6 text-primary" />
                  <Badge variant="secondary" className="font-sans">
                    Planned
                  </Badge>
                </div>
                <CardTitle className="text-base">{cap.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cap.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
