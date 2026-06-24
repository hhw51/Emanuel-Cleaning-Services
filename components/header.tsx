'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-primary">EMANUEL</div>
              <div className="text-xs text-muted-foreground">Cleaning Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/military" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Military
            </Link>
            <Link href="/estimate" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Free Estimate
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a href="tel:(202)355-8110" className="hidden sm:flex items-center gap-2 text-accent font-semibold hover:opacity-80 transition-opacity">
              <Phone size={18} />
              <span className="text-sm">(202) 355-8110</span>
            </a>
            <Link href="/estimate">
              <Button className="bg-accent text-primary hover:bg-accent/90 hidden sm:block">
                Get Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors block py-2">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-accent transition-colors block py-2">
              Services
            </Link>
            <Link href="/military" className="text-sm font-medium text-foreground hover:text-accent transition-colors block py-2">
              Military
            </Link>
            <Link href="/estimate" className="text-sm font-medium text-foreground hover:text-accent transition-colors block py-2">
              Free Estimate
            </Link>
            <a href="tel:(202)355-8110" className="flex items-center gap-2 text-accent font-semibold py-2">
              <Phone size={18} />
              <span className="text-sm">(202) 355-8110</span>
            </a>
            <Link href="/estimate">
              <Button className="w-full bg-accent text-primary hover:bg-accent/90">
                Get Quote
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
