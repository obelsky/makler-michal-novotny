import { Home, Key, Users } from 'lucide-react'
import agentData from '@/content/michal-novotny'

export default function TrustSection() {
  const stats = [
    {
      icon: Home,
      number: agentData.trustStats.soldProperties,
      label: 'prodaných nemovitostí',
    },
    {
      icon: Key,
      number: agentData.trustStats.rentedProperties,
      label: 'pronajatých nemovitostí',
    },
    {
      icon: Users,
      number: agentData.trustStats.agents,
      label: 'realitních zprostředkovatelů',
    },
  ]

  return (
    <section className="section-padding bg-bg-light">
      <div className="container-custom">
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <div className="text-5xl lg:text-6xl font-heading font-bold text-brand-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-lg lg:text-xl text-text-dark font-medium">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tagline */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl lg:text-2xl text-text-dark leading-relaxed">
            {agentData.trustStats.tagline}
          </p>
        </div>
      </div>
    </section>
  )
}
