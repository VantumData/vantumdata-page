import type { MetadataRoute } from "next"

const baseUrl = "https://vantumdata.com"

/**
 * Sitemap for vantumdata.com
 *
 * To add a new page, append an entry to the `pages` array below.
 * Next.js generates /sitemap.xml automatically from this file.
 */

type Page = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}

const pages: Page[] = [
  // ── Core ──────────────────────────────────────────────
  { path: "/", changeFrequency: "weekly", priority: 1.0 },

  // ── Legal ─────────────────────────────────────────────
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
