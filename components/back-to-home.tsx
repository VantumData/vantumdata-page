"use client"

import Link from "next/link"
import { ArrowLeftIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"

export function BackToHome() {
  return (
    <Button variant="ghost" size="sm" asChild>
      <Link href="/">
        <ArrowLeftIcon data-icon="inline-start" />
        Back to Home
      </Link>
    </Button>
  )
}
