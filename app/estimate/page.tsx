'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  StepService,
  StepSize,
  StepFrequency,
  StepLocation,
  StepContact,
} from '@/components/estimate-wizard-steps'
import { FormData, emptyFormData } from '@/lib/types'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

function EstimateContent() {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>(emptyFormData)

  // Pre-fill service from URL params
  useEffect(() => {
    const service = searchParams.get('service')
    if (service) {
      setFormData((prev) => ({ ...prev, service }))
    }
  }, [searchParams])

  const handleUpdate = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = async () => {
    if (currentStep === 4) {
      // Submit form
      handleSubmit()
    } else {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1))
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        console.error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const steps = [
    <StepService
      key="service"
      data={formData}
      onUpdate={handleUpdate}
      onNext={handleNext}
      onBack={handleBack}
    />,
    <StepSize
      key="size"
      data={formData}
      onUpdate={handleUpdate}
      onNext={handleNext}
      onBack={handleBack}
    />,
    <StepFrequency
      key="frequency"
      data={formData}
      onUpdate={handleUpdate}
      onNext={handleNext}
      onBack={handleBack}
    />,
    <StepLocation
      key="location"
      data={formData}
      onUpdate={handleUpdate}
      onNext={handleNext}
      onBack={handleBack}
    />,
    <StepContact
      key="contact"
      data={formData}
      onUpdate={handleUpdate}
      onNext={handleNext}
      onBack={handleBack}
    />,
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/95 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Estimate</h1>
            <p className="text-xl text-white/90">
              Quick and easy. We&apos;ll contact you within 24 hours with a detailed quote.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {isSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-accent" />
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Thank You!</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We&apos;ve received your request. Our team will review your information and contact you within 24 hours with a detailed quote.
                </p>
                <div className="bg-secondary/50 rounded-lg p-6 mb-8 text-left">
                  <h3 className="font-semibold text-foreground mb-4">Your Request Summary:</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">Service:</span> {formData.service}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Size:</span> {formData.propertySize}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Frequency:</span> {formData.frequency}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Location:</span> {formData.location}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Contact:</span> {formData.email}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 px-8 py-6">
                      Return Home
                    </Button>
                  </Link>
                  <a href="tel:(202)355-8110">
                    <Button className="w-full sm:w-auto bg-accent text-primary hover:bg-accent/90 px-8 py-6">
                      Call Us Now
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="flex justify-between mb-4">
                    {[0, 1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`flex items-center ${step < 4 ? 'flex-1' : ''}`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                            step <= currentStep
                              ? 'bg-accent text-primary'
                              : 'bg-border text-muted-foreground'
                          }`}
                        >
                          {step + 1}
                        </div>
                        {step < 4 && (
                          <div
                            className={`flex-1 h-1 mx-2 ${
                              step < currentStep ? 'bg-accent' : 'bg-border'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    Step {currentStep + 1} of 5
                  </div>
                </div>

                {/* Form Content */}
                <div className="bg-white border border-border rounded-xl p-8 mb-8">
                  {steps[currentStep]}
                </div>

                {/* Help Text */}
                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    Questions? Call us anytime at{' '}
                    <a href="tel:(202)355-8110" className="text-accent font-semibold hover:underline">
                      (202) 355-8110
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function EstimatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EstimateContent />
    </Suspense>
  )
}
