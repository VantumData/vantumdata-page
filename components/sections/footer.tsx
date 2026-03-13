import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="px-6 pt-0 pb-12">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-12" />

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-serif text-lg tracking-tight">VantumIQP</span>
            <p className="max-w-xs text-sm text-muted-foreground">
              The intelligence layer for ERP data. Strategic visibility,
              actionable insight, faster decisions.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-6 font-sans text-sm text-muted-foreground"
          >
            <a
              href="mailto:hello@vantumiqp.com"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="https://linkedin.com/company/vantumiqp"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <p className="mt-8 font-sans text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} VantumIQP. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
