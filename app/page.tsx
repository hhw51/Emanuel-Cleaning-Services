import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Home as HomeIcon, Building2, Users, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary to-primary/95 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  ✓ Insured & Bonded
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                  You name it, <span className="text-accent">we clean it!</span>
                </h1>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Professional cleaning services for residential, commercial, and military properties in Fort Belvoir, Washington D.C. Metro, and Northern Virginia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/estimate">
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
                  <div className="text-6xl opacity-50">🧹</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Services */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From residential deep cleans to commercial maintenance, we handle it all with precision and care.
              </p>
            </div>

            {/* Asymmetric Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Featured Card */}
              <ServiceCard
                title="Residential Cleaning"
                description="Deep clean your home with our eco-friendly products and attention to detail. Perfect for move-in/move-out or regular maintenance."
                icon={<HomeIcon size={32} />}
                image="/images/residential-cleaning.png"
                featured
                className="md:col-span-2 md:row-span-2 p-8 min-h-80"
              />

              {/* Top Right - Military */}
              <ServiceCard
                title="Military Move-Out"
                description="Specialized cleaning for military families relocating. Full compliance with base requirements."
                icon={<Users size={24} />}
                image="/images/military-cleaning.png"
                className="p-6"
              />

              {/* Middle Right - Commercial */}
              <ServiceCard
                title="Commercial Cleaning"
                description="Keep your office professional and clean. Flexible scheduling for minimal disruption."
                icon={<Building2 size={24} />}
                image="/images/commercial-cleaning.png"
                className="p-6"
              />

              {/* Bottom Right - Premium */}
              <ServiceCard
                title="Premium Detail Service"
                description="Our most thorough cleaning package with specialized treatments for carpets and upholstery."
                icon={<Sparkles size={24} />}
                className="p-6"
              />
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-base">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-accent text-4xl font-bold mb-2">500+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-accent text-4xl font-bold mb-2">10+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-accent text-4xl font-bold mb-2">24/7</div>
                <p className="text-muted-foreground">Emergency Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Get Your Space Cleaned?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free, no-obligation quote from our team. Response within 24 hours guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/estimate">
                <Button className="w-full sm:w-auto bg-accent text-primary hover:bg-accent/90 text-base px-8 py-6 font-semibold">
                  Request Free Quote
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

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-8 border border-border">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">
                    &quot;Exceptional service! The team was professional, thorough, and left our home spotless. Highly recommended!&quot;
                  </p>
                  <p className="font-semibold text-primary">Sarah M.</p>
                  <p className="text-sm text-muted-foreground">Fort Belvoir, VA</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
