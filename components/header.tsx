"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col items-center space-y-2">
            <Image src="/logo.png" alt="JustFold Logo" width={240} height={80} className="h-20 w-auto brightness-110" />
            <p className="text-base text-gray-700 text-center font-medium">
              Clean Folds, Freedom Forever - Unshackled Bliss!
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/coming-soon" className="text-gray-700 hover:text-gray-900 transition-colors">
              Download App (Coming Soon!)
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#A3BFFA] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                For Customers
              </Link>
              <Link
                href="/laundry-folding-pros"
                className="text-gray-700 hover:text-[#C1E1C1] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                For Laundry Folding Pros
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/coming-soon"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Coming Soon
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
