'use client'

import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import agentData from '@/content/michal-novotny'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Levá strana - Text */}
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {agentData.hero.headline}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {agentData.hero.subheadline}
            </p>
            
            {/* Profil makléře */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-brand-orange/20">
                <Image
                  src="/images/michal-novotny.png"
                  alt={agentData.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{agentData.name}</h3>
                <p className="text-gray-600">Realitní makléř - {agentData.location}</p>
                <p className="text-brand-orange font-medium">{agentData.company}</p>
              </div>
            </div>
            
            {/* CTA tlačítka */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${agentData.phone}`}
                className="btn-primary"
              >
                <Phone className="w-5 h-5" />
                ZAVOLAT: {agentData.phone}
              </a>
              <a
                href={`mailto:${agentData.email}`}
                className="btn-secondary"
              >
                <Mail className="w-5 h-5" />
                NAPSAT EMAIL
              </a>
            </div>
          </div>
          
          {/* Pravá strana - Formulář */}
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
