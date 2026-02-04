"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [guidelinesOpen, setGuidelinesOpen] = useState(false)

  return (
    <>
      {/* Main Header */}
      <header className="bg-[#F9D85C] border-b-4 border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="PM Plastics Machinery"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <Link
              href="/"
              className="px-5 py-2 text-[#1a1a1a] font-bold text-sm uppercase hover:bg-[#E5C654] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/line-card"
              className="px-5 py-2 text-[#1a1a1a] font-bold text-sm uppercase hover:bg-[#E5C654] transition-colors"
            >
              Line Card
            </Link>
            <div className="relative group">
              <button className="px-5 py-2 text-[#1a1a1a] font-bold text-sm uppercase hover:bg-[#E5C654] transition-colors flex items-center gap-1">
                Guidelines
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link
                  href="/drying-and-conveying"
                  className="block px-4 py-3 text-[#1a1a1a] text-sm hover:bg-[#F9D85C] transition-colors border-b border-gray-100"
                >
                  Drying and Conveying
                </Link>
                <Link
                  href="/screw-and-barrel-rebuilding"
                  className="block px-4 py-3 text-[#1a1a1a] text-sm hover:bg-[#F9D85C] transition-colors border-b border-gray-100"
                >
                  Screw and Barrel Rebuilding
                </Link>
                <Link
                  href="/water-sizing"
                  className="block px-4 py-3 text-[#1a1a1a] text-sm hover:bg-[#F9D85C] transition-colors"
                >
                  Water Sizing
                </Link>
              </div>
            </div>
            <Link
              href="/contact-plastics-machinery"
              className="px-5 py-2 text-[#1a1a1a] font-bold text-sm uppercase hover:bg-[#E5C654] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1a1a1a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-[#F9D85C] border-t border-[#E5C654]">
            <Link href="/" className="block px-4 py-3 text-[#1a1a1a] font-bold text-sm uppercase border-b border-[#E5C654]">
              Home
            </Link>
            <Link href="/line-card" className="block px-4 py-3 text-[#1a1a1a] font-bold text-sm uppercase border-b border-[#E5C654]">
              Line Card
            </Link>
            <div>
              <button
                className="w-full px-4 py-3 text-[#1a1a1a] font-bold text-sm uppercase border-b border-[#E5C654] flex items-center justify-between"
                onClick={() => setGuidelinesOpen(!guidelinesOpen)}
              >
                Guidelines
                <ChevronDown className={`w-4 h-4 transition-transform ${guidelinesOpen ? "rotate-180" : ""}`} />
              </button>
              {guidelinesOpen && (
                <div className="bg-[#E5C654]">
                  <Link href="/drying-and-conveying" className="block px-6 py-2 text-[#1a1a1a] text-sm border-b border-[#d4b84c]">
                    Drying and Conveying
                  </Link>
                  <Link href="/screw-and-barrel-rebuilding" className="block px-6 py-2 text-[#1a1a1a] text-sm border-b border-[#d4b84c]">
                    Screw and Barrel Rebuilding
                  </Link>
                  <Link href="/water-sizing" className="block px-6 py-2 text-[#1a1a1a] text-sm border-b border-[#d4b84c]">
                    Water Sizing
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact-plastics-machinery" className="block px-4 py-3 text-[#1a1a1a] font-bold text-sm uppercase">
              Contact
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}
