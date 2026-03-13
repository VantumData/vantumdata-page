import { type SVGProps, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Variant = "left" | "right" | "center"

const variants: Record<Variant, ReactNode> = {
  left: (
    <>
      <path
        d="M20 120 C50 90, 90 60, 140 80 C190 100, 220 50, 280 40"
        stroke="currentColor"
        strokeWidth={1.2}
      />
      <path
        d="M140 80 C150 130, 170 160, 220 180"
        stroke="currentColor"
        strokeWidth={0.9}
      />
      <circle cx={20} cy={120} r={4} fill="var(--color-primary)" />
      <circle cx={140} cy={80} r={4.5} fill="var(--color-primary)" />
      <circle cx={280} cy={40} r={3.5} fill="var(--color-primary)" />
      <circle cx={220} cy={180} r={3.5} fill="var(--color-primary)" />
      <circle cx={80} cy={70} r={2} fill="var(--color-primary)" />
    </>
  ),
  right: (
    <>
      <path
        d="M280 40 C240 70, 200 100, 160 80 C120 60, 80 90, 20 120"
        stroke="currentColor"
        strokeWidth={1.2}
      />
      <path
        d="M160 80 C170 40, 200 20, 260 10"
        stroke="currentColor"
        strokeWidth={0.9}
      />
      <circle cx={280} cy={40} r={4} fill="var(--color-primary)" />
      <circle cx={160} cy={80} r={4.5} fill="var(--color-primary)" />
      <circle cx={20} cy={120} r={3.5} fill="var(--color-primary)" />
      <circle cx={260} cy={10} r={3.5} fill="var(--color-primary)" />
      <circle cx={220} cy={90} r={2} fill="var(--color-primary)" />
    </>
  ),
  center: (
    <>
      <path
        d="M40 100 C80 60, 130 40, 180 60 C230 80, 260 40, 300 30"
        stroke="currentColor"
        strokeWidth={1.2}
      />
      <path
        d="M100 160 C130 130, 160 90, 180 60"
        stroke="currentColor"
        strokeWidth={0.9}
      />
      <path
        d="M180 60 C210 90, 240 130, 260 160"
        stroke="currentColor"
        strokeWidth={0.9}
      />
      <circle cx={40} cy={100} r={3.5} fill="var(--color-primary)" />
      <circle cx={180} cy={60} r={5} fill="var(--color-primary)" />
      <circle cx={300} cy={30} r={3.5} fill="var(--color-primary)" />
      <circle cx={100} cy={160} r={3.5} fill="var(--color-primary)" />
      <circle cx={260} cy={160} r={3.5} fill="var(--color-primary)" />
      <circle cx={130} cy={50} r={2} fill="var(--color-primary)" />
    </>
  ),
}

interface SectionAccentProps extends SVGProps<SVGSVGElement> {
  variant?: Variant
}

export function SectionAccent({
  variant = "center",
  className,
  ...props
}: SectionAccentProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
      {...props}
    >
      {variants[variant]}
    </svg>
  )
}
