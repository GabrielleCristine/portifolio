import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Gabrielle Cristine | BI Developer",
  description:
    "Portfolio of Gabrielle Cristine, a BI Developer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
  keywords: [
    "Gabrielle Cristine",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
  ],
  authors: [{ name: "Gabrielle Cristine" }],
  creator: "Gabrielle Cristine",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://GabrielleCristine.com",
    title: "Gabrielle Cristine | BI Developer",
    description:
      "Portfolio of Gabrielle Cristine, a BI Developer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
    siteName: "Gabrielle Cristine Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Gabrielle Cristine Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabrielle Cristine | BI Developer",
    description:
      "Portfolio of Gabrielle Cristine, a BI Developer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
    creator: "@CristineGabrielle",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'