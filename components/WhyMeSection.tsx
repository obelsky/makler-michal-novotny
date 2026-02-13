'use client'

import { TrendingUp, Shield, Users, Filter, FileCheck } from 'lucide-react'
import agentData from '@/content/michal-novotny'

const iconMap: { [key: string]: any } = {
  TrendingUp,
  Shield,
  Handshake: Users,
  Filter,
  FileCheck,
}

export default function WhyMeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Grid důvodů */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentData.whyMe.map((reason, index) => {
            const Icon = iconMap[reason.icon] || TrendingUp
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-orange/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Ikona v barevném boxu */}
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
