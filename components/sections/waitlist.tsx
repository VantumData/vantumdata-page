"use client"

import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod/v4"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"
import { gsap, useGSAP } from "@/lib/gsap"
import { SectionAccent } from "@/components/graphics/section-accent"
import { PaperPlaneTiltIcon, CheckCircleIcon } from "@phosphor-icons/react"

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`

const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid work email"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z
    .string()
    .max(500, "Message must be 500 characters or fewer")
    .optional(),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

type SubmitState = "idle" | "success" | "error"

export function WaitlistSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [submitState, setSubmitState] = useState<SubmitState>("idle")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  useGSAP(
    () => {
      gsap.from("[data-animate='waitlist']", {
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

  async function onSubmit(data: WaitlistFormData) {
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        setSubmitState("success")
      } else {
        setSubmitState("error")
      }
    } catch {
      setSubmitState("error")
    }
  }

  return (
    <section
      ref={sectionRef}
      id="waitlist"
      className="relative overflow-hidden px-6 py-12 sm:py-16 md:py-24"
    >
      <SectionAccent
        variant="center"
        className="absolute top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 text-foreground/4"
      />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl">
          <div className="mb-10 text-center">
            <h2
              data-animate="waitlist"
              className="mb-4 text-3xl tracking-tight sm:text-4xl"
            >
              Be First to See What&rsquo;s Possible
            </h2>
            <p
              data-animate="waitlist"
              className="text-lg text-muted-foreground"
            >
              VantumIQP is opening early access to a select group of
              forward-thinking operations and finance leaders. Request your spot
              below.
            </p>
          </div>

          <Card data-animate="waitlist">
            <CardHeader>
              <CardTitle className="font-sans text-base">
                Request Early Access
              </CardTitle>
              <CardDescription>
                We&rsquo;ll reach out with details as VantumIQP approaches
                launch. No spam, no fluff — just a direct line to early access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitState === "success" ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <CheckCircleIcon className="size-10 text-primary" />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg">You&rsquo;re on the list.</p>
                    <p className="text-muted-foreground">
                      Thank you for your interest in VantumIQP. We&rsquo;ll be
                      in touch as early access opens.
                    </p>
                  </div>
                  <Badge variant="secondary" className="font-sans">
                    Early Access Confirmed
                  </Badge>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-4"
                >
                  <FieldGroup>
                    <Field data-invalid={!!errors.name || undefined}>
                      <FieldLabel htmlFor="name" className="font-sans">
                        Full name
                      </FieldLabel>
                      <Input
                        id="name"
                        placeholder="Jane Smith"
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                      />
                      <FieldError>{errors.name?.message}</FieldError>
                    </Field>
                    <Field data-invalid={!!errors.email || undefined}>
                      <FieldLabel htmlFor="email" className="font-sans">
                        Work email
                      </FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@company.com"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                      <FieldError>{errors.email?.message}</FieldError>
                    </Field>
                    <Field data-invalid={!!errors.company || undefined}>
                      <FieldLabel htmlFor="company" className="font-sans">
                        Company
                      </FieldLabel>
                      <Input
                        id="company"
                        placeholder="Acme Corp"
                        autoComplete="organization"
                        aria-invalid={!!errors.company}
                        {...register("company")}
                      />
                      <FieldError>{errors.company?.message}</FieldError>
                    </Field>
                    <Field data-invalid={!!errors.message || undefined}>
                      <FieldLabel htmlFor="message" className="font-sans">
                        Message{" "}
                        <span className="text-muted-foreground">
                          (optional)
                        </span>
                      </FieldLabel>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your ERP environment or what challenges you're facing..."
                        rows={3}
                        aria-invalid={!!errors.message}
                        {...register("message")}
                      />
                      <FieldError>{errors.message?.message}</FieldError>
                    </Field>
                  </FieldGroup>

                  {submitState === "error" && (
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <PaperPlaneTiltIcon data-icon="inline-start" />
                        Request Early Access
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
