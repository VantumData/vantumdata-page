"use client"

import { useRef } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { gsap, useGSAP } from "@/lib/gsap"
import { faqItems } from "@/components/structured-data"

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from("[data-animate='faq']", {
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
    <section ref={sectionRef} id="faq" className="px-6 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2
          data-animate="faq"
          className="mb-10 text-center text-3xl tracking-tight sm:text-4xl"
        >
          Frequently Asked Questions
        </h2>

        <div data-animate="faq">
          <Accordion type="single" collapsible>
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-sm font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
