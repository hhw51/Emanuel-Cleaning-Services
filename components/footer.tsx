import Link from 'next/link'
import { Phone, Mail, MapPin, Shield } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* Brand Presentation Section */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-black text-base">E</span>
              </div>
              <div>
                <div className="text-xs font-black tracking-widest text-white">EMANUEL</div>
                <div className="text-[10px] uppercase font-semibold text-white/60 tracking-wider">Cleaning Services</div>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-sm font-normal leading-relaxed">
              Premium checklist property upkeep for corporate networks, premium estates, and tactical military personnel base housing.
            </p>
          </div>

          {/* Quick Links Map */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-accent">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home Base</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Service Checklists</Link></li>
              <li><Link href="/military" className="text-white/70 hover:text-white transition-colors">Military Operations</Link></li>
              <li><Link href="/estimate" className="text-white/70 hover:text-white transition-colors">Instant Proposal Form</Link></li>
            </ul>
          </div>

          {/* Operational Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-accent">Contact Desk</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 text-white/50 flex-shrink-0" />
                <a href="tel:(202)355-8110" className="text-white/80 hover:text-white transition-colors font-medium">(202) 355-8110</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 text-white/50 flex-shrink-0" />
                <a href="mailto:hello@emanuelcleaning.com" className="text-white/80 hover:text-white transition-colors font-medium">hello@emanuelcleaning.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 text-white/50 flex-shrink-0" />
                <span className="text-white/80 font-medium">Fort Belvoir, VA & DC Metro</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="border-t border-white/5 pt-8 mt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>&copy; {new Date().getFullYear()} Emanuel Cleaning Services LLC. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-white/60">
                <Shield size={13} className="text-accent" /> Insured & Bonded
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}