import { Phone, Mail } from 'lucide-react'
import agentData from '@/content/michal-novotny'

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container-custom text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Chcete prodat nemovitost?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Zavolejte mi nebo napište. První konzultace je zdarma a nezávazná.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${agentData.phone}`}
            className="btn-primary"
          >
            <Phone className="w-5 h-5" />
            {agentData.phone}
          </a>
          <a
            href={`mailto:${agentData.email}`}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Napsat e-mail
          </a>
        </div>
      </div>
    </section>
  )
}
