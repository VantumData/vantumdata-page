import type { Metadata } from "next"
import { Geist, Geist_Mono, Lora } from "next/font/google"

import "./globals.css"
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

const siteUrl = "https://vantumiqp.com"

export const metadata: Metadata = {
  title: "VantumIQP — ERP Data Intelligence Platform | Early Access",
  description:
    "VantumIQP transforms ERP data into strategic visibility, actionable intelligence, and faster business decisions. Join the early access waitlist.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "VantumIQP — ERP Data Intelligence Platform",
    description:
      "Turn ERP complexity into decision advantage. VantumIQP is the intelligence layer your business operations need.",
    url: siteUrl,
    siteName: "VantumIQP",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VantumIQP — ERP Data Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VantumIQP — ERP Data Intelligence Platform",
    description:
      "Turn ERP complexity into decision advantage. Join early access.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
