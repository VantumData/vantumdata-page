import { type SVGProps } from "react"

/**
 * Large abstract constellation graphic for the hero background.
 * Organic curves and nodes in the same visual language as the logo.
 */
export function HeroConstellation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1200 800"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Primary flowing curve — left to right */}
      <path
        d="M80 450 C160 380, 280 320, 400 350 C520 380, 560 280, 680 240 C800 200, 880 260, 960 220 C1040 180, 1080 140, 1140 120"
        stroke="currentColor"
        strokeWidth={1.5}
      />

      {/* Secondary curve — lower arc */}
      <path
        d="M200 600 C320 560, 440 520, 560 540 C680 560, 740 480, 860 460"
        stroke="currentColor"
        strokeWidth={1.2}
      />

      {/* Branch from primary curve upward */}
      <path
        d="M400 350 C380 280, 340 200, 320 140"
        stroke="currentColor"
        strokeWidth={1}
      />

      {/* Branch connecting primary and secondary curves */}
      <path
        d="M680 240 C700 340, 720 420, 860 460"
        stroke="currentColor"
        strokeWidth={1}
      />

      {/* Small spur — top right */}
      <path
        d="M960 220 C980 160, 1020 120, 1060 80"
        stroke="currentColor"
        strokeWidth={0.8}
      />

      {/* Small spur — lower left */}
      <path
        d="M200 600 C160 640, 120 680, 100 720"
        stroke="currentColor"
        strokeWidth={0.8}
      />

      {/* Connector between mid-points */}
      <path
        d="M560 540 C580 480, 600 400, 680 240"
        stroke="currentColor"
        strokeWidth={0.8}
      />

      {/* Gentle arc — far right lower */}
      <path
        d="M860 460 C920 440, 1000 420, 1080 380"
        stroke="currentColor"
        strokeWidth={1}
      />

      {/* Nodes — varying sizes for depth */}
      <circle cx={80} cy={450} r={5} fill="var(--color-primary)" />
      <circle cx={400} cy={350} r={6} fill="var(--color-primary)" />
      <circle cx={680} cy={240} r={6} fill="var(--color-primary)" />
      <circle cx={960} cy={220} r={5} fill="var(--color-primary)" />
      <circle cx={1140} cy={120} r={4.5} fill="var(--color-primary)" />
      <circle cx={200} cy={600} r={5} fill="var(--color-primary)" />
      <circle cx={560} cy={540} r={5.5} fill="var(--color-primary)" />
      <circle cx={860} cy={460} r={5.5} fill="var(--color-primary)" />
      <circle cx={320} cy={140} r={4} fill="var(--color-primary)" />
      <circle cx={1060} cy={80} r={3.5} fill="var(--color-primary)" />
      <circle cx={100} cy={720} r={3.5} fill="var(--color-primary)" />
      <circle cx={1080} cy={380} r={4.5} fill="var(--color-primary)" />

      {/* Small accent nodes for depth — even smaller */}
      <circle cx={240} cy={360} r={2.5} fill="var(--color-primary)" />
      <circle cx={520} cy={300} r={2.5} fill="var(--color-primary)" />
      <circle cx={780} cy={230} r={2.5} fill="var(--color-primary)" />
      <circle cx={640} cy={480} r={2.5} fill="var(--color-primary)" />
    </svg>
  )
}
