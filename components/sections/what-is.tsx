"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { gsap, useGSAP } from "@/lib/gsap"
import { ArrowRightIcon } from "@phosphor-icons/react"

export function WhatIsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from("[data-animate='what-is']", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 30,
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
      id="what-is"
      className="px-6 py-12 sm:py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl">
          <h2
            data-animate="what-is"
            className="mb-6 text-3xl tracking-tight sm:text-4xl"
          >
            VantumData: Strategic Intelligence for ERP Data
          </h2>

          <div className="flex flex-col gap-6 text-lg text-muted-foreground">
            <p data-animate="what-is">
              VantumData is an intelligence layer designed to sit over your
              existing ERP system. It ingests, interprets, and transforms
              operational and financial data into decision-ready insight, giving
              leaders the visibility they need to act with confidence.
            </p>

            <p data-animate="what-is">
              Unlike traditional BI tools that require manual configuration and
              return static reports, VantumData is built for live intelligence.
              It monitors business signals across your ERP data, surfaces
              anomalies and trends, and delivers clarity that moves at the speed
              of your operations.
            </p>

            <p data-animate="what-is">
              This is not another dashboard. It is a strategic visibility engine
              — purpose-built for the complexity of enterprise resource planning
              data.
            </p>
          </div>

          {/* Visual schematic */}
          <div
            data-animate="what-is"
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Badge variant="outline" className="px-4 py-1.5 font-sans text-sm">
              Your ERP
            </Badge>
            <ArrowRightIcon className="size-5 shrink-0 rotate-90 text-muted-foreground sm:rotate-0" />
            <Badge className="px-4 py-1.5 font-sans text-sm">VantumData</Badge>
            <ArrowRightIcon className="size-5 shrink-0 rotate-90 text-muted-foreground sm:rotate-0" />
            <Badge variant="outline" className="px-4 py-1.5 font-sans text-sm">
              Decision Advantage
            </Badge>
          </div>
        </div>

        <Separator className="mx-auto mt-24 max-w-xs" />
      </div>
    </section>
  )
}
