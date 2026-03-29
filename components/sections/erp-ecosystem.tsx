"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { gsap, useGSAP } from "@/lib/gsap"

const erpSystems = ["SAP", "Microsoft Dynamics 365", "NetSuite", "Odoo"]

export function ErpEcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from("[data-animate='erp']", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="px-6 py-12 sm:py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            data-animate="erp"
            className="mb-4 text-3xl tracking-tight sm:text-4xl"
          >
            Built for the ERP Systems You Run
          </h2>
          <p data-animate="erp" className="mb-10 text-lg text-muted-foreground">
            VantumData is architecting connector-based ingestion pipelines for
            the ERP ecosystems that power modern business operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {erpSystems.map((system) => (
              <Badge
                key={system}
                variant="outline"
                data-animate="erp"
                className="px-4 py-1.5 font-sans text-sm"
              >
                {system}
              </Badge>
            ))}
          </div>

          <div
            data-animate="erp"
            className="mx-auto mt-12 flex max-w-lg flex-col gap-4 text-center text-muted-foreground"
          >
            <p>
              Planned support for both{" "}
              <strong className="text-foreground">cloud-hosted</strong> and{" "}
              <strong className="text-foreground">on-premise</strong> ERP
              deployments — because enterprise infrastructure is rarely
              one-size-fits-all.
            </p>
            <p>
              A connector-based architecture designed for extensibility, so
              VantumData can meet your data where it lives.
            </p>
          </div>
        </div>

        <Separator className="mx-auto mt-24 max-w-xs" />
      </div>
    </section>
  )
}
