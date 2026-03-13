import { type SVGProps } from "react"

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M20 30 C31 47, 42 64, 60 90"
        stroke="currentColor"
        strokeWidth={4.5}
      />
      <path
        d="M60 90 C72 78, 85 64, 100 50"
        stroke="currentColor"
        strokeWidth={4.5}
      />
      <path
        d="M100 50 C113 40, 126 30, 140 20"
        stroke="currentColor"
        strokeWidth={4.5}
      />
      <path
        d="M60 90 C80 88.5, 99 87, 120 85"
        stroke="currentColor"
        strokeWidth={3.8}
      />
      <circle cx={20} cy={30} r={7} fill="var(--color-primary)" />
      <circle cx={60} cy={90} r={7} fill="var(--color-primary)" />
      <circle cx={100} cy={50} r={7} fill="var(--color-primary)" />
      <circle cx={140} cy={20} r={7} fill="var(--color-primary)" />
      <circle cx={120} cy={85} r={7} fill="var(--color-primary)" />
    </svg>
  )
}
