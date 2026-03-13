"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useGSAP, ScrollTrigger } from "@/lib/gsap"

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!headerRef.current) return

      ScrollTrigger.create({
        trigger: document.body,
        start: "80px top",
        onToggle: (self) => {
          headerRef.current?.classList.toggle("header-scrolled", self.isActive)
        },
      })
    },
    { scope: headerRef }
  )

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-transparent backdrop-blur-md transition-[background-color,border-color] duration-300"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-serif text-lg tracking-tight text-foreground"
        >
          VantumIQP
        </a>
        <Button size="sm" asChild>
          <a href="#waitlist">Request Early Access</a>
        </Button>
      </div>
    </header>
  )
}
