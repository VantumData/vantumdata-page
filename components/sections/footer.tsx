import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="px-6 pt-0 pb-12">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-12" />

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <a href="/" className="flex items-center gap-2.5">
              <Logo className="h-8 w-auto" />
              <span className="font-serif text-lg tracking-tight">
                VantumIQP
              </span>
            </a>
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
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms
            </a>
            <a
              href="https://www.linkedin.com/company/actaer"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <p className="mt-8 font-sans text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Actaer. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
