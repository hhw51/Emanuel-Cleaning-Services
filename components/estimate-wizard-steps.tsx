'use client'

import { Button } from './ui/button'
import { Home, Building2, Users, Sparkles, Zap, Leaf, MapPin, Calendar, Phone, Mail, User } from 'lucide-react'
import { FormData } from '@/lib/types'

interface StepProps {
  data: FormData
  onUpdate: (field: keyof FormData, value: any) => void
  onNext: () => void
  onBack: () => void
}

export function StepService({ data, onUpdate, onNext, onBack }: StepProps) {
  const services = [
    { id: 'residential', label: 'Residential Cleaning', icon: Home },
    { id: 'commercial', label: 'Commercial Cleaning', icon: Building2 },
    { id: 'military', label: 'Military Move-Out', icon: Users },
    { id: 'premium', label: 'Premium Detail Service', icon: Sparkles },
    { id: 'express', label: 'Express Cleaning', icon: Zap },
    { id: 'eco', label: 'Eco-Friendly Cleaning', icon: Leaf },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">What service do you need?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {services.map((service) => {
          const Icon = service.icon
          const isSelected = data.service === service.id
          return (
            <button
              key={service.id}
              onClick={() => onUpdate('service', service.id)}
              className={`p-6 rounded-lg border-2 transition-all text-left ${
                isSelected
                  ? 'border-accent bg-accent/10'
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <Icon size={24} className={isSelected ? 'text-accent' : 'text-foreground'} />
              <p className={`mt-2 font-semibold ${isSelected ? 'text-accent' : 'text-foreground'}`}>
                {service.label}
              </p>
            </button>
          )
        })}
      </div>
      <div className="flex justify-between gap-4">
        <Button onClick={onBack} variant="outline" className="px-8">
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!data.service}
          className="px-8 bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export function StepSize({ data, onUpdate, onNext, onBack }: StepProps) {
  const sizes = [
    { id: 'small', label: 'Small (< 1000 sq ft)', desc: 'Studio to 1 bed' },
    { id: 'medium', label: 'Medium (1000-2000 sq ft)', desc: '2-3 bedrooms' },
    { id: 'large', label: 'Large (2000-3000 sq ft)', desc: '4-5 bedrooms' },
    { id: 'xlarge', label: 'Extra Large (> 3000 sq ft)', desc: '5+ bedrooms' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">What&apos;s the size of your space?</h2>
      <div className="space-y-3 mb-8">
        {sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => onUpdate('propertySize', size.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              data.propertySize === size.id
                ? 'border-accent bg-accent/10'
                : 'border-border hover:border-accent/50'
            }`}
          >
            <p className={`font-semibold ${data.propertySize === size.id ? 'text-accent' : 'text-foreground'}`}>
              {size.label}
            </p>
            <p className="text-sm text-muted-foreground">{size.desc}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-between gap-4">
        <Button onClick={onBack} variant="outline" className="px-8">
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!data.propertySize}
          className="px-8 bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export function StepFrequency({ data, onUpdate, onNext, onBack }: StepProps) {
  const frequencies = [
    { id: 'oneTime', label: 'One-Time Cleaning', desc: 'Single appointment' },
    { id: 'weekly', label: 'Weekly', desc: 'Regular maintenance' },
    { id: 'biweekly', label: 'Bi-Weekly', desc: 'Every 2 weeks' },
    { id: 'monthly', label: 'Monthly', desc: 'Once per month' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">How often do you need cleaning?</h2>
      <div className="space-y-3 mb-8">
        {frequencies.map((freq) => (
          <button
            key={freq.id}
            onClick={() => onUpdate('frequency', freq.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              data.frequency === freq.id
                ? 'border-accent bg-accent/10'
                : 'border-border hover:border-accent/50'
            }`}
          >
            <p className={`font-semibold ${data.frequency === freq.id ? 'text-accent' : 'text-foreground'}`}>
              {freq.label}
            </p>
            <p className="text-sm text-muted-foreground">{freq.desc}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-between gap-4">
        <Button onClick={onBack} variant="outline" className="px-8">
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!data.frequency}
          className="px-8 bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export function StepLocation({ data, onUpdate, onNext, onBack }: StepProps) {
  const locations = [
    { id: 'fort-belvoir', label: 'Fort Belvoir', icon: MapPin },
    { id: 'dc-metro', label: 'Washington D.C. Metro', icon: MapPin },
    { id: 'northern-va', label: 'Northern Virginia', icon: MapPin },
    { id: 'other', label: 'Other Location', icon: MapPin },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Where is your property located?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {locations.map((loc) => {
          const Icon = loc.icon
          const isSelected = data.location === loc.id
          return (
            <button
              key={loc.id}
              onClick={() => onUpdate('location', loc.id)}
              className={`p-6 rounded-lg border-2 transition-all text-center ${
                isSelected
                  ? 'border-accent bg-accent/10'
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <Icon size={24} className={`mx-auto mb-2 ${isSelected ? 'text-accent' : 'text-foreground'}`} />
              <p className={`font-semibold ${isSelected ? 'text-accent' : 'text-foreground'}`}>
                {loc.label}
              </p>
            </button>
          )
        })}
      </div>
      <div className="flex justify-between gap-4">
        <Button onClick={onBack} variant="outline" className="px-8">
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!data.location}
          className="px-8 bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export function StepContact({ data, onUpdate, onNext, onBack }: StepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Your Contact Information</h2>
      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onUpdate('name', e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onUpdate('email', e.target.value)}
            placeholder="john@example.com"
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onUpdate('phone', e.target.value)}
            placeholder="(202) 555-0000"
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Additional Notes</label>
          <textarea
            value={data.notes}
            onChange={(e) => onUpdate('notes', e.target.value)}
            placeholder="Any special requests or details about your property..."
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <Button onClick={onBack} variant="outline" className="px-8">
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!data.name || !data.email || !data.phone}
          className="px-8 bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
