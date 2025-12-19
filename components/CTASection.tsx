import { Phone, Mail } from 'lucide-react'
import agentData from '@/content/michal-novotny'

export default function CTASection() {
  return (
    <section className="section-padding bg-brand-orange">
      <div className="container-custom">
        <div className="text-center text-white">
          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Zaujal jsem vás? Domluvme si schůzku.
          </h2>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ozvěte se mi pro nezávaznou konzultaci a odhad vaší nemovitosti zdarma.
          </p>

          {/* CTA tlačítka */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${agentData.phone}`}
              className="inline-flex items-center space-x-2 bg-white text-brand-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Zavolat: {agentData.phone}</span>
            </a>

            <a
              href={`mailto:${agentData.email}`}
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brand-orange transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Napsat email</span>
            </a>
          </div>

          {/* Dodatečný text */}
          <p className="mt-8 text-sm opacity-75">
            První konzultace je vždy zdarma a nezávazná
          </p>
        </div>
      </div>
    </section>
  )
}
