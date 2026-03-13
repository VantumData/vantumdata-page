# Copilot Instructions

## Package Manager

This project uses **bun** as its package manager.

- Install packages: `bun add <package>`
- Dev dependencies: `bun add -d <package>`
- Run scripts: `bun run <script>`
- shadcn CLI: `bunx --bun shadcn@latest <command>`

## Icons

- For `@phosphor-icons/react`, always use the `*Icon` export names. Avoid deprecated names without the `Icon` suffix.

## Design Philosophy

Inspiration: Anthropic, Claude, Perplexity — understated premium, not flashy.

**Must follow:**

- Let shadcn/Tailwind base styles handle font weights. Do NOT add explicit `font-bold`, `font-semibold`, `font-medium` etc. on headings or body text unless there is a specific, justified exception (e.g. tabular data figures).
- Typography hierarchy comes from size and color contrast, not weight.
- Dark luxury-tech aesthetic — forced dark mode, minimal borders, generous whitespace.
- Muted, desaturated color palette. Color is used sparingly and intentionally (primary accent only).
- Subtle texture (grain overlay) and glow effects for depth — never bright or loud.
- Micro-interactions via GSAP should feel effortless: small, slow, eased. No bouncy or playful motion.
- Prefer `backdrop-blur` and translucency over hard opaque surfaces.
- Use CSS transitions/classes for state changes (e.g. scroll states) — avoid GSAP color interpolation which can produce unwanted hue shifts in OKLCH.

**Do NOT:**

- Add decorative elements, gradients, or effects that feel startup-y, gamified, or overly colorful.
- Override shadcn component typography unless absolutely necessary.
- Use animations that draw attention to themselves. Motion should be invisible — felt, not seen.
