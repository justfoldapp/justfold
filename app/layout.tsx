import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JustFold – Folding-Only Laundry Service",
  description: "Ditch folding with JustFold – affordable, hygienic, and convenient for everyone.",
  keywords: "laundry service, folding, laundry pros, clean clothes, eco-friendly",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
