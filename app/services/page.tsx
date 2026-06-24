import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Home, Building2, Sparkles, Zap, Leaf, Clock } from 'lucide-react'

const services = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Your home deserves professional care. We provide deep cleaning services tailored to your needs.',
    icon: Home,
    details: [
      'Weekly, bi-weekly, or monthly recurring service',
      'Deep cleaning of all rooms and spaces',
      'Bathroom and kitchen sanitization',
      'Carpet and floor care',
      'Eco-friendly cleaning products available',
      'Flexible scheduling around your lifestyle',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description: 'Keep your workplace professional and hygienic with our commercial cleaning expertise.',
    icon: Building2,
    details: [
      'Office spaces and corporate facilities',
      'Retail store cleaning',
      'Medical office sanitization',
      'Post-construction cleanup',
      'Daily maintenance programs',
      'After-hours and weekend scheduling available',
    ],
  },
  {
    id: 'military',
    title: 'Military Move-Out Cleaning',
    description: 'Specialized cleaning for military families relocating with full compliance to base requirements.',
    icon: Sparkles,
    details: [
      'Full base compliance',
      'Detailed unit inspections',
      'Professional deep clean',
      'Carpet and upholstery treatment',
      'Quick turnaround times',
      'Military appreciation pricing',
    ],
  },
  {
    id: 'eco',
    title: 'Eco-Friendly Cleaning',
    description: 'Green cleaning solutions that are safe for your family, pets, and the environment.',
    icon: Leaf,
    details: [
      'Non-toxic cleaning products',
      'Biodegradable solutions',
      'Safe for children and pets',
      'Allergy-friendly options',
      'Environmentally responsible practices',
      'Same great results as traditional cleaning',
    ],
  },
  {
    id: 'premium',
    title: 'Premium Detail Service',
    description: 'Our most comprehensive cleaning package with specialized treatments and attention to detail.',
    icon: Sparkles,
    details: [
      'Professional deep clean of all areas',
      'Specialized carpet and upholstery treatment',
      'Window and blind cleaning',
      'Baseboard and trim detailing',
      'Appliance deep cleaning',
      'Post-move inspections',
    ],
  },
  {
    id: 'express',
    title: 'Express Cleaning',
    description: 'Quick, efficient cleaning for busy professionals who need results fast.',
    icon: Zap,
    details: [
      'Focused on high-traffic areas',
      'Quick 2-3 hour turnaround',
      'Same-day scheduling available',
      'Perfect for busy schedules',
      'Maintenance-focused approach',
      'Affordable pricing',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary to-primary/95 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Cleaning Services</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From residential to commercial, we offer specialized cleaning solutions for every need.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.id} className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <Icon size={32} className="text-accent mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="text-accent mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/estimate?service=${service.id}`}>
  <Button className="w-full bg-primary text-white hover:bg-primary/90">
    Get Quote
  </Button>
</Link>                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-secondary/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Don&apos;t see what you need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us for custom cleaning solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(202)355-8110">
                <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 px-8 py-6">
                  Call Us Today
                </Button>
              </a>
              <Link href="/estimate">
                <Button className="w-full sm:w-auto bg-accent text-primary hover:bg-accent/90 px-8 py-6">
                  Request Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
