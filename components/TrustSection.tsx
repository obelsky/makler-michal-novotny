import { Home, Key, Users } from 'lucide-react'
import agentData from '@/content/michal-novotny'

export default function TrustSection() {
  const stats = [
    { 
      icon: Home, 
      value: agentData.trustStats.soldProperties, 
      label: 'Prodaných nemovitostí' 
    },
    { 
      icon: Key, 
      value: agentData.trustStats.rentedProperties, 
      label: 'Pronajatých nemovitostí' 
    },
    { 
      icon: Users, 
      value: agentData.trustStats.agents, 
      label: 'Makléřů v síti' 
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 text-brand-orange mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-5xl font-bold text-brand-orange mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
          {agentData.trustStats.tagline}
        </p>
      </div>
    </section>
  )
}
