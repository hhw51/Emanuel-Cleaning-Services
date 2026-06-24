import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">E</span>
              </div>
              <div>
                <div className="font-bold">EMANUEL</div>
                <div className="text-xs opacity-90">Cleaning Services</div>
              </div>
            </div>
            <p className="text-sm opacity-90">Professional cleaning services for residential, commercial, and military properties.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link href="/military" className="opacity-90 hover:opacity-100 transition-opacity">Military</Link></li>
              <li><Link href="/estimate" className="opacity-90 hover:opacity-100 transition-opacity">Free Estimate</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">Residential Cleaning</Link></li>
              <li><Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">Commercial Cleaning</Link></li>
              <li><Link href="/military" className="opacity-90 hover:opacity-100 transition-opacity">Military Move-Out</Link></li>
              <li><Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">Office Cleaning</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:(202)355-8110" className="opacity-90 hover:opacity-100 transition-opacity">(202) 355-8110</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@emanuelcleaning.com" className="opacity-90 hover:opacity-100 transition-opacity">hello@emanuelcleaning.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Fort Belvoir, VA & DC Metro</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm opacity-90">
            <p>&copy; 2024 Emanuel Cleaning Services LLC. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <span className="flex items-center gap-1">✓ Insured</span>
              <span className="flex items-center gap-1">✓ Bonded</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
