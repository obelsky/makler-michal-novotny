import type { Metadata } from 'next'
import { Star } from 'lucide-react'
import agentData, { getInitials } from '@/content/michal-novotny'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Reference | Michal Novotný - Realitní makléř Praha',
  description: 'Reference spokojených klientů. Přečtěte si, co říkají lidé, kterým jsem pomohl prodat nebo pronajmout nemovitost.',
}

export default function ReferencePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-6">
            Reference klientů
          </h1>
          <p className="text-xl text-text-gray max-w-3xl">
            Co říkají lidé, kterým jsem pomohl prodat nebo pronajmout nemovitost
          </p>
        </div>
      </section>

      {/* Grid referencí */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {agentData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header s avatarem */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar s iniciálami */}
                  <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-heading font-bold text-white">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  
                  {/* Jméno a lokalita */}
                  <div className="flex-1">
                    <div className="font-heading text-lg font-bold text-text-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-gray">
                      {testimonial.location}
                    </div>
                    
                    {/* Rating */}
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? 'fill-brand-orange text-brand-orange'
                              : 'fill-gray-300 text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Citace */}
                <div className="relative">
                  <span className="text-6xl text-brand-orange/20 font-heading absolute -top-4 -left-2">
                    "
                  </span>
                  <p className="text-text-gray text-lg italic leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                </div>

                {/* Datum */}
                <div className="mt-6 text-sm text-text-gray">
                  {new Date(testimonial.date + '-01').toLocaleDateString('cs-CZ', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA na další reference */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            Chcete být další spokojený klient?
          </h2>
          <p className="text-xl text-text-gray mb-8">
            Pomohu vám prodat nebo pronajmout nemovitost rychle, bezpečně a za nejlepší cenu.
          </p>
          <a
            href={`tel:${agentData.phone}`}
            className="btn-primary inline-block"
          >
            Zavolejte mi: {agentData.phone}
          </a>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
