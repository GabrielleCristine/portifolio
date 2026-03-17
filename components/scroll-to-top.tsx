"use client"

import Link from "next/link"
import { ArrowUpCircle } from "lucide-react"

export default function ScrollToTop() {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block js-only">
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
      >
        <ArrowUpCircle className="h-10 w-10 text-primary animate-bounce" />
      </Link>
    </div>
  )
}
