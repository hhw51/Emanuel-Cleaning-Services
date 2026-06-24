'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Frame */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-102 shadow-xs">
              <span className="text-white font-black text-lg tracking-tighter">E</span>
            </div>
            <div>
              <div className="text-xs font-black text-primary tracking-widest">EMANUEL</div>
              <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Cleaning Services</div>
            </div>
          </Link>

          {/* Premium Desktop Navigation Layout */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/military" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors">
              Military
            </Link>
            <Link href="/estimate" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors">
              Free Estimate
            </Link>
          </nav>

          {/* Desktop Right Desk Interactions */}
          <div className="hidden md:flex items-center gap-5">
            <a href="tel:(202)355-8110" className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold">
              <Phone size={15} className="text-accent" />
              <span className="text-sm tracking-tight">(202) 355-8110</span>
            </a>
            <Link href="/estimate">
              <Button size="sm" className="bg-primary text-white hover:bg-primary/95 font-bold text-xs uppercase tracking-wider px-5 h-9 rounded-lg shadow-2xs cursor-pointer">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-primary hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Structured Responsive Mobile Nav Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl absolute top-16 left-0 w-full z-40 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-1.5">
            <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-sm font-bold tracking-tight text-primary hover:bg-secondary px-3 py-2.5 rounded-lg transition-colors">
              Home
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/services" className="text-sm font-bold tracking-tight text-primary hover:bg-secondary px-3 py-2.5 rounded-lg transition-colors">
              Services
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/military" className="text-sm font-bold tracking-tight text-primary hover:bg-secondary px-3 py-2.5 rounded-lg transition-colors">
              Military
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/estimate" className="text-sm font-bold tracking-tight text-primary hover:bg-secondary px-3 py-2.5 rounded-lg transition-colors">
              Free Estimate
            </Link>
          </nav>
          
          <div className="border-t border-border/50 pt-4 flex flex-col gap-3">
            <a href="tel:(202)355-8110" className="flex items-center gap-2 text-primary font-bold px-3 py-2">
              <Phone size={16} className="text-accent" />
              <span className="text-sm">(202) 355-8110</span>
            </a>
            <Link onClick={() => setIsMenuOpen(false)} href="/estimate" className="block w-full">
              <Button className="w-full bg-primary text-white hover:bg-primary/95 font-bold h-11 rounded-xl">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}