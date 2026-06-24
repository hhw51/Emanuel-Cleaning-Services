import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Home as HomeIcon, Building2, Users, Star, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Fort Belvoir, VA",
      role: "Military Homeowner",
      text: "The military move-out cleaning was pristine. They knew precisely what base housing inspectors look for, allowing us to clear clearance protocols seamlessly.",
      rating: 5
    },
    {
      name: "Marcus K.",
      location: "Arlington, VA",
      role: "Operations Director",
      text: "Our commercial facilities require deep cleaning intervals that don't conflict with office operating hours. Emanuel Cleaners executed beautifully.",
      rating: 5
    },
    {
      name: "Elena D.",
      location: "Alexandria, VA",
      role: "Residential Client",
      text: "Exceptional recurring residential cleaning service. The team is disciplined, thorough, and highly respectful of our spacing and micro-details.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30">
      <Header />
      <main className="flex-1">
        
        {/* Premium Geometric Hero Space */}
        <section className="relative bg-primary text-white overflow-hidden py-24 lg:py-32 border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,188,212,0.12),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck size={14} className="animate-pulse" /> Fully Insured, Bonded & Certified
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
                  You name it, <br />
                  <span className="bg-gradient-to-r from-accent via-[#4dd0e1] to-white bg-clip-text text-transparent">we clean it!</span>
                </h1>
                <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                  Elite property maintenance engineered for premium residential properties, enterprise commercial offices, and rapid military base move-out standards across Northern Virginia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Link href="/estimate" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-accent text-primary hover:bg-[#4dd0e1] font-bold h-12 px-8 rounded-xl shadow-lg shadow-accent/10 transition-all duration-300">
                      Get Free Quote
                    </Button>
                  </Link>
                  <a href="tel:(202)355-8110" className="w-full sm:w-auto">
                  <Button 
  variant="outline" 
  className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold h-12 px-8 rounded-xl transition-colors"
>
  Call Operational Desk
</Button>
                  </a>
                </div>
              </div>

              {/* High-End Clean Asset Hero Image Block */}
              <div className="lg:col-span-5 relative hidden lg:block">
                <div className="relative aspect-[4/5] max-w-[420px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
                  <Image 
                    src="/images/residential-cleaning.png" 
                    alt="Premium House Maintenance Layout"
                    fill
                    sizes="420px"
                    className="object-cover object-center scale-102 filter contrast-[1.02] brightness-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-20" />
                  
                  {/* Micro-UI Detail Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-primary/85 backdrop-blur-md border border-white/10 p-5 rounded-xl flex items-center gap-4 z-30 shadow-xl">
                    <div className="bg-accent/10 p-2.5 rounded-lg text-accent border border-accent/20">
                      <CheckCircle2 size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Active Footprint</p>
                      <p className="text-sm font-semibold text-white tracking-tight">Fort Belvoir, VA & DC Metro</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Clean Balanced Dynamic Grid Section */}
        <section className="py-24 sm:py-32 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 space-y-4 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Comprehensive Services</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                Systematic, checklist-driven procedures optimized for diverse space configurations.
              </p>
            </div>

            {/* Premium Bento Grid Config */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                title="Residential Cleaning"
                description="Ultra-meticulous maintenance program designed for premium residences. Includes allergen containment filtering, eco-friendly surface solutions, and thorough room sanitization."
                icon={<HomeIcon size={22} />}
                image="/images/residential-cleaning.png"
                featured
                className="md:col-span-2 md:row-span-2 min-h-[360px]"
              />

              <ServiceCard
                title="Military Move-Out"
                description="Strict checklist protocols guaranteed to satisfy challenging base housing clearance requirements."
                icon={<Users size={20} />}
                image="/images/military-cleaning.png"
                className="min-h-[200px]"
              />

              <ServiceCard
                title="Commercial Spaces"
                description="Flexible clean logistics engineered around your enterprise runtime workflows to keep spaces immaculate."
                icon={<Building2 size={20} />}
                image="/images/commercial-cleaning.png"
                className="min-h-[200px]"
              />

              <ServiceCard
                title="Premium Detail Package"
                description="Deep extraction cleaning focusing heavily on architectural glass, hard surface sealing, and dense upholstery revitalization paths."
                icon={<Sparkles size={18} />}
                className="md:col-span-3 min-h-[130px]"
              />
            </div>

            <div className="text-center md:text-left mt-12">
              <Link href="/services">
                <Button className="bg-primary text-white hover:bg-primary/95 font-semibold h-11 px-6 rounded-xl inline-flex items-center gap-2 shadow-xs cursor-pointer">
                  View Detailed Checklists <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* High End Metrics Ribbon */}
        <section className="py-16 bg-white border-y border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-border/60">
              <div className="space-y-1 py-4 sm:py-0">
                <div className="text-4xl font-black text-primary tracking-tight">500+</div>
                <p className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground">Properties Managed</p>
              </div>
              <div className="space-y-1 py-4 sm:py-0">
                <div className="text-4xl font-black text-primary tracking-tight">10+</div>
                <p className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground">Years Trade Expertise</p>
              </div>
              <div className="space-y-1 py-4 sm:py-0">
                <div className="text-4xl font-black text-primary tracking-tight">24/7</div>
                <p className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground">Emergency Dispatch</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Frame */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">What Our Clients Say</h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-secondary/40 rounded-2xl p-8 border border-border/50 flex flex-col justify-between shadow-xs hover:border-accent/20 transition-colors duration-300">
                  <div>
                    <div className="flex gap-0.5 mb-5 text-accent">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={15} className="fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-primary/90 italic leading-relaxed mb-8">
                      &quot;{t.text}&quot;
                    </p>
                  </div>
                  <div className="border-t border-border/40 pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-primary">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                    <span className="text-[11px] bg-white border border-border/50 px-2 py-0.5 rounded font-medium text-muted-foreground shadow-2xs">
                      {t.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Immersive Action Call to Action */}
        <section className="py-24 sm:py-32 bg-primary text-white relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,188,212,0.08),transparent_45%)]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to Experience True Spotless Standards?</h2>
            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed font-normal">
              Acquire an immediate architectural service estimation breakdown or reach our staging dispatch lines directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/estimate" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-accent text-primary hover:bg-[#4dd0e1] font-bold h-12 px-8 rounded-xl shadow-xl shadow-accent/10 transition-colors cursor-pointer">
                  Request Free Quote
                </Button>
              </Link>
              <a href="tel:(202)355-8110" className="w-full sm:w-auto">
  <Button 
    variant="outline" 
    className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold h-12 px-8 rounded-xl transition-colors"
  >
    (202) 355-8110
  </Button>
</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}