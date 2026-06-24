import { ReactNode } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: ReactNode
  image?: string
  className?: string
  featured?: boolean
}

export function ServiceCard({ title, description, icon, image, className = '', featured = false }: ServiceCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden group transition-all duration-500 border ${
        featured 
          ? 'bg-primary border-white/10 text-white' 
          : 'bg-white border-border/80 text-primary hover:border-accent/30'
      } shadow-xs hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      {/* Premium Backdrop Configuration */}
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              featured ? 'opacity-15 brightness-[0.3]' : 'opacity-[0.03] group-hover:opacity-[0.06] brightness-95'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${
            featured ? 'from-primary via-primary/50 to-transparent' : 'from-white via-white/80 to-transparent'
          }`} />
        </div>
      )}

      {/* Structured Card View Shell */}
      <div className="relative z-10 p-8 flex flex-col h-full justify-between gap-6">
        <div>
          <div className="flex justify-between items-start mb-6">
            {icon && (
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                featured ? 'bg-accent/10 text-accent' : 'bg-secondary text-primary border border-border/40'
              }`}>
                {icon}
              </div>
            )}
            <div className={`opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${
              featured ? 'text-accent' : 'text-muted-foreground'
            }`}>
              <ArrowUpRight size={20} />
            </div>
          </div>
          
          <h3 className="text-xl font-bold tracking-tight mb-2.5">
            {title}
          </h3>
          <p className={`text-sm leading-relaxed ${
            featured ? 'text-white/80' : 'text-muted-foreground'
          }`}>
            {description}
          </p>
        </div>

        <div className="pt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
          <span className={`inline-block w-6 h-[2px] transition-all duration-300 group-hover:w-8 ${
            featured ? 'bg-accent' : 'bg-primary'
          }`} />
          <span className={featured ? 'text-accent' : 'text-primary'}>View Protocol</span>
        </div>
      </div>
    </div>
  )
}