import type { Metadata } from 'next'
import { Star } from 'lucide-react'
import agentData from '@/content/michal-novotny'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Reference | Michal Novotný - Realitní makléř Praha',
  description: 'Co říkají moji klienti o spolupráci se mnou.',
}

export default function ReferencePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Reference klientů
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Co říkají moji klienti o spolupráci se mnou.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {agentData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
