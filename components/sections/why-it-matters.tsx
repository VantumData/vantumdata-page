"use client"

import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { gsap, useGSAP } from "@/lib/gsap"
import {
  LightningIcon,
  EyeIcon,
  ShieldCheckIcon,
  WarningIcon,
  CrosshairIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react"

const values = [
  {
    icon: LightningIcon,
    title: "Faster Decisions",
    description:
      "Replace weeks of report compilation with real-time intelligence that surfaces what matters now.",
  },
  {
    icon: EyeIcon,
    title: "Operational Visibility",
    description:
      "See across departments, processes, and financial data streams — from a single intelligence layer.",
  },
  {
    icon: WarningIcon,
    title: "Earlier Issue Detection",
    description:
      "Catch margin erosion, fulfillment slowdowns, and cash flow disruptions before they compound.",
  },
  {
    icon: CrosshairIcon,
    title: "Stronger Execution",
    description:
      "Turn operational data into clear action signals that align teams around what needs to happen next.",
  },
  {
    icon: UsersThreeIcon,
    title: "Cross-Functional Clarity",
    description:
      "Break down silos between finance, operations, and supply chain with unified data intelligence.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Confident Leadership",
    description:
      "Give executives and board-level stakeholders the validated, current visibility they need to lead decisively.",
  },
]

export function WhyItMattersSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from("[data-animate='value-card']", {
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
    <section ref={sectionRef} id="why" className="px-6 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl tracking-tight sm:text-4xl">
            From Data Lag to Decision Advantage
          </h2>
          <p className="text-lg text-muted-foreground">
            When ERP data becomes live intelligence, every layer of your
            organization operates with greater speed, clarity, and confidence.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} data-animate="value-card">
              <CardHeader>
                <value.icon className="size-6 text-primary" />
                <CardTitle className="text-base">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
