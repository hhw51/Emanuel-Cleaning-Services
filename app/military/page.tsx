import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check, MapPin, Clock, Shield } from 'lucide-react'

export default function MilitaryPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary to-primary/95 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Military-Approved Service
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Military Move-Out Cleaning Specialists
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Trusted by military families across Fort Belvoir and the Washington D.C. Metro area. Full compliance with base requirements and military standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/estimate?service=military">
                    <Button className="w-full sm:w-auto bg-accent text-primary hover:bg-accent/90 text-base px-8 py-6 font-semibold">
                      Get Free Quote
                    </Button>
                  </Link>
                  <a href="tel:(202)355-8110">
                    <Button className="w-full sm:w-auto bg-white/20 text-white hover:bg-white/30 text-base px-8 py-6 font-semibold">
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-white/10 rounded-2xl border-2 border-accent/30 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🎖️</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Locations */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Service Areas</h2>
              <p className="text-lg text-muted-foreground">
                We proudly serve military families across these regions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { location: 'Fort Belvoir', description: 'Primary service area with specialized military housing knowledge' },
                { location: 'Washington D.C. Metro', description: 'Including all DC, Maryland, and Northern Virginia areas' },
                { location: 'Northern Virginia', description: 'Extending to all nearby military-connected communities' },
              ].map((area, idx) => (
                <div key={idx} className="bg-secondary/50 border border-border rounded-xl p-8 text-center">
                  <MapPin size={32} className="text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{area.location}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Military Move-Out Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We understand military housing inspections. Our process ensures your unit passes with flying colors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Initial Consultation</h3>
                    <p className="text-muted-foreground">
                      We discuss your specific base requirements and housing type to create a customized plan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Pre-Inspection Walk-Through</h3>
                    <p className="text-muted-foreground">
                      We assess the unit and identify any areas that need special attention or repairs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Professional Deep Clean</h3>
                    <p className="text-muted-foreground">
                      Complete deep cleaning following military housing standards and inspection checklists.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Detailed Treatments</h3>
                    <p className="text-muted-foreground">
                      Specialized cleaning of carpets, appliances, and hard-to-reach areas military inspectors check.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Final Inspection</h3>
                    <p className="text-muted-foreground">
                      We conduct a thorough final walk-through to ensure everything meets military standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Pass Guarantee</h3>
                    <p className="text-muted-foreground">
                      If any areas don&apos;t pass initial inspection, we&apos;ll re-clean them at no additional cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Military Families Trust Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Insured & Bonded',
                  description: 'Full insurance coverage and bonded for your peace of mind and protection.',
                },
                {
                  icon: Check,
                  title: 'Military Experience',
                  description: 'Over 10 years of experience with military housing standards and requirements.',
                },
                {
                  icon: Clock,
                  title: 'Fast Turnaround',
                  description: 'Quick scheduling with flexible timing to match your PCS timeline.',
                },
                {
                  icon: Shield,
                  title: 'Satisfaction Guarantee',
                  description: 'If you&apos;re not satisfied, we make it right with no additional charges.',
                },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="flex gap-4">
                    <Icon size={32} className="text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready for Your PCS Move-Out?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let our military-experienced team handle your move-out cleaning. Quick, thorough, and guaranteed to pass inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/estimate?service=military">
                <Button className="w-full sm:w-auto bg-accent text-primary hover:bg-accent/90 text-base px-8 py-6 font-semibold">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:(202)355-8110">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-base px-8 py-6 font-semibold">
                  (202) 355-8110
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
