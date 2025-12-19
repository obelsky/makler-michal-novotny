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
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-4">
            Proč prodávat se mnou
          </h2>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            Mám zkušenosti, znám trh a chráním vaše zájmy
          </p>
        </div>

        {/* Grid důvodů */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentData.whyMe.map((reason, index) => {
            const Icon = iconMap[reason.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="group bg-white border-2 border-transparent rounded-xl p-6 shadow-card hover:shadow-card-hover hover:border-brand-orange transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-12 h-12 text-brand-orange mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                  {reason.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
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
