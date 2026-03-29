import type { Metadata } from "next"
import { Geist, Geist_Mono, Lora } from "next/font/google"

import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/structured-data"
import { cn } from "@/lib/utils"

const lora = Lora({ subsets: ["latin"], variable: "--font-serif" })

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const siteUrl = "https://vantumdata.com"

export const metadata: Metadata = {
  title: {
    template: "%s — VantumData",
    default: "VantumData — ERP Data Intelligence Platform | Early Access",
  },
  description:
    "VantumData transforms ERP data into strategic visibility, actionable intelligence, and faster business decisions. Join the early access waitlist.",
  keywords: [
    "ERP data intelligence",
    "ERP analytics",
    "ERP data platform",
    "enterprise resource planning intelligence",
    "ERP visibility",
    "ERP decision making",
    "SAP analytics",
    "Dynamics 365 analytics",
    "NetSuite analytics",
    "Odoo analytics",
    "operational intelligence",
    "business intelligence ERP",
    "VantumData",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "VantumData — ERP Data Intelligence Platform",
    description:
      "Turn ERP complexity into decision advantage. VantumData is the intelligence layer your business operations need.",
    url: siteUrl,
    siteName: "VantumData",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VantumData — ERP Data Intelligence Platform",
    description:
      "Turn ERP complexity into decision advantage. Join early access.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        "font-serif",
        lora.variable
      )}
    >
      <head>
        <StructuredData />
        <link rel="author" href="/humans.txt" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
