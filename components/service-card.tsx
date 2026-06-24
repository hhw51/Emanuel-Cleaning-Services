import { ReactNode } from 'react'
import Image from 'next/image'

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
      className={`relative rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl ${
        featured ? 'bg-accent' : 'bg-card border border-border'
      } ${className}`}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-20 group-hover:opacity-30 transition-opacity"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6 flex flex-col h-full">
        {icon && (
          <div className={`mb-4 ${featured ? 'text-primary' : 'text-accent'}`}>
            {icon}
          </div>
        )}
        <h3 className={`text-lg font-bold mb-2 ${featured ? 'text-primary' : 'text-foreground'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${featured ? 'text-primary/80' : 'text-muted-foreground'}`}>
          {description}
        </p>
      </div>
    </div>
  )
}
