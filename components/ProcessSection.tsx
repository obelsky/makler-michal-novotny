'use client'

import agentData from '@/content/michal-novotny'

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {agentData.process.map((step, index) => {
            const isLast = index === agentData.process.length - 1
            return (
              <div
                key={step.step}
                className="relative pl-24 pb-12 last:pb-0"
              >
                {/* Vertikální čára */}
                {!isLast && (
                  <div className="absolute left-[39px] top-[72px] bottom-0 w-0.5 bg-gradient-to-b from-brand-orange to-brand-orange/20" />
                )}

                {/* Číslo kroku - kruhy */}
                <div className="absolute left-0 top-0">
                  <div className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/25">
                    <span className="text-3xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Obsah */}
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
