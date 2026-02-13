'use client'

import { TrendingUp, Shield, Handshake, Filter, FileCheck } from 'lucide-react'
import agentData from '@/content/michal-novotny'

const iconMap = {
  TrendingUp,
  Shield,
  Handshake,
  Filter,
  FileCheck,
}

export default function WhyMeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Grid důvodů - 3 sloupce na desktopu, 2 na tabletu, 1 na mobilu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentData.whyMe.map((reason, index) => {
            const Icon = iconMap[reason.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-orange/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Ikona */}
                <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors">
                  <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />
                </div>
                
                {/* Nadpis */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                
                {/* Popis */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
