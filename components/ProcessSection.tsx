import agentData from '@/content/michal-novotny'

export default function ProcessSection() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-4">
            Jak pracuji
          </h2>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            Šest kroků k úspěšnému prodeji vaší nemovitosti
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {agentData.process.map((step, index) => {
            const isLast = index === agentData.process.length - 1
            return (
              <div
                key={step.step}
                className="relative pb-12 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Vertikální čára */}
                {!isLast && (
                  <div className="absolute left-10 top-20 bottom-0 w-1 bg-gradient-to-b from-brand-orange to-brand-orange/30" />
                )}

                <div className="flex gap-6">
                  {/* Číslo kroku */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-heading font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Obsah */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-heading font-bold text-text-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-text-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
