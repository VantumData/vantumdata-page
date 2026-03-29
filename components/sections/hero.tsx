"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { gsap, useGSAP } from "@/lib/gsap"
import { HeroConstellation } from "@/components/graphics/hero-constellation"
import {
  ChartLineUpIcon,
  TrendUpIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!contentRef.current || !visualRef.current) return

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(contentRef.current.children, {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
      })

      tl.from(
        visualRef.current.children,
        {
          y: 30,
          opacity: 0,
          scale: 0.96,
          stagger: 0.15,
          duration: 0.8,
        },
        "-=0.5"
      )

      // Subtle float for visual cards
      gsap.to(visualRef.current.children[0], {
        y: -6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
      gsap.to(visualRef.current.children[1], {
        y: 6,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      })
      if (visualRef.current.children[2]) {
        gsap.to(visualRef.current.children[2], {
          y: -4,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1,
        })
      }
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative -mt-14 flex min-h-[calc(75vh+3.5rem)] items-center overflow-hidden px-6 pt-[calc(4rem+3.5rem)] pb-12 sm:pb-16 md:min-h-[calc(90vh+3.5rem)] md:pt-[calc(6rem+3.5rem)] md:pb-24"
    >
      {/* Abstract constellation background */}
      <HeroConstellation className="pointer-events-none absolute inset-0 h-full w-full text-foreground/8" />

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--color-glow),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        {/* Content */}
        <div ref={contentRef} className="flex max-w-xl flex-col gap-6">
          <Badge variant="outline" className="w-fit font-sans">
            Early Access 2026
          </Badge>

          <h1 className="text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            The Intelligence Layer Your ERP Was Missing
          </h1>

          <p className="text-base text-muted-foreground sm:text-lg lg:text-xl">
            VantumData transforms fragmented ERP data into strategic visibility,
            actionable insights, and faster business decisions — so leadership
            can act with clarity, not guesswork.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="#waitlist">
                Request Early Access
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#what-is">See the Vision</a>
            </Button>
          </div>
        </div>

        {/* Abstract Hero Visual — mock dashboard fragment */}
        <div
          ref={visualRef}
          className="relative hidden h-105 lg:block"
          aria-hidden="true"
        >
          {/* Card 1: Revenue metric */}
          <Card className="absolute top-0 left-8 w-64 border-border/50 bg-card/60 shadow-2xl backdrop-blur-sm">
            <CardContent className="flex flex-col gap-2">
              <span className="font-sans text-xs text-muted-foreground">
                Monthly Revenue
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-2xl text-foreground tabular-nums">
                  $2.4M
                </span>
                <Badge variant="secondary" className="font-sans">
                  <TrendUpIcon data-icon="inline-start" />
                  +12.3%
                </Badge>
              </div>
              <div className="mt-1 flex gap-1">
                {[40, 55, 35, 65, 50, 70, 80, 60, 75, 90, 85, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-primary/30"
                      style={{ height: `${h * 0.4}px` }}
                    />
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Operational signal */}
          <Card className="absolute top-32 right-0 w-60 border-border/50 bg-card/60 shadow-2xl backdrop-blur-sm">
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ChartLineUpIcon className="size-4 text-primary" />
                <span className="font-sans text-xs text-muted-foreground">
                  Order Fulfillment
                </span>
              </div>
              <span className="font-sans text-xl text-foreground tabular-nums">
                96.8%
              </span>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[96.8%] rounded-full bg-primary" />
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Financial insight */}
          <Card className="absolute bottom-0 left-16 w-56 border-border/50 bg-card/60 shadow-2xl backdrop-blur-sm">
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CurrencyDollarIcon className="size-4 text-primary" />
                <span className="font-sans text-xs text-muted-foreground">
                  Cash Flow Forecast
                </span>
              </div>
              <span className="font-sans text-xl text-foreground tabular-nums">
                +$840K
              </span>
              <span className="font-sans text-xs text-muted-foreground">
                Next 30 days · 3 signals detected
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
