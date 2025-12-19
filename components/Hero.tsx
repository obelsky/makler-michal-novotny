'use client'

import Image from 'next/image'
import agentData from '@/content/michal-novotny'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Levá strana - Text a foto */}
          <div className="space-y-8 animate-fade-in">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-dark leading-tight">
                {agentData.hero.headline}
              </h1>
              <p className="text-xl lg:text-2xl text-text-gray leading-relaxed">
                {agentData.hero.subheadline}
              </p>
            </div>

            {/* Foto makléře */}
            <div className="flex items-center space-x-6">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
                <Image
                  src="/images/michal-novotny.png"
                  alt={agentData.name}
                  fill
                  className="rounded-full object-cover border-4 border-brand-orange shadow-lg"
                  priority
                />
              </div>
              
              <div>
                <div className="text-2xl font-heading font-bold text-text-dark mb-1">
                  {agentData.name}
                </div>
                <div className="text-lg text-text-gray mb-2">
                  Realitní makléř - {agentData.location}
                </div>
                <div className="text-sm text-brand-orange font-medium">
                  {agentData.company}
                </div>
              </div>
            </div>

            {/* Rychlý kontakt - pouze desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${agentData.phone}`}
                className="btn-primary"
              >
                Zavolat: {agentData.phone}
              </a>
              <a
                href={`mailto:${agentData.email}`}
                className="btn-secondary"
              >
                Napsat email
              </a>
            </div>
          </div>

          {/* Pravá strana - Lead formulář */}
          <div className="animate-slide-in-right animation-delay-200">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
