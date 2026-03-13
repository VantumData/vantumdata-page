"use client"

import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { gsap, useGSAP } from "@/lib/gsap"
import { SectionAccent } from "@/components/graphics/section-accent"
import {
  PuzzlePieceIcon,
  ClockCounterClockwiseIcon,
  PlugsConnectedIcon,
  EyeSlashIcon,
} from "@phosphor-icons/react"

const problems = [
  {
    icon: PuzzlePieceIcon,
    title: "Fragmented Data",
    description:
      "Critical business data lives in silos across modules, spreadsheets, and disconnected exports — making a unified view nearly impossible.",
  },
  {
    icon: ClockCounterClockwiseIcon,
    title: "Reactive Reporting",
    description:
      "By the time reports are compiled and reviewed, the window for proactive action has already closed. Decisions are made on stale data.",
  },
  {
    icon: PlugsConnectedIcon,
    title: "Disconnected Tools",
    description:
      "BI dashboards, spreadsheets, and manual extracts create a patchwork of partial truths — none of which tell the full operational story.",
  },
  {
    icon: EyeSlashIcon,
    title: "Delayed Visibility",
    description:
      "Leaders discover margin erosion, fulfillment issues, and cash flow gaps weeks after they begin — when the cost of inaction has already compounded.",
  },
]

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from("[data-animate='problem-card']", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative overflow-hidden px-6 py-24"
    >
      <SectionAccent
        variant="right"
        className="absolute -top-8 -right-12 w-80 text-foreground/5"
      />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl tracking-tight sm:text-4xl">
            Your ERP Holds the Answers.
            <br />
            But They&rsquo;re Trapped.
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise resource planning systems contain the operational truth
            of your business. Yet most organizations struggle to extract timely,
            actionable intelligence from them.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {problems.map((problem) => (
            <Card key={problem.title} data-animate="problem-card">
              <CardHeader>
                <problem.icon className="size-6 text-primary" />
                <CardTitle className="text-base">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
