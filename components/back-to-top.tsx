"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "@phosphor-icons/react"
import { useGSAP, ScrollTrigger } from "@/lib/gsap"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "400px top",
      onToggle: (self) => setVisible(self.isActive),
    })
  })

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Back to top"
      className={`fixed right-4 bottom-4 z-50 backdrop-blur-md transition-opacity duration-300 sm:right-6 sm:bottom-6 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUpIcon />
    </Button>
  )
}
