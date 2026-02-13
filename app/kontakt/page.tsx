import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import agentData from '@/content/michal-novotny'

export const metadata: Metadata = {
  title: 'Kontakt | Michal Novotný - Realitní makléř Praha',
  description: 'Kontaktujte mě pro nezávaznou konzultaci. Telefon, email nebo osobní schůzka v Praze.',
}

export default function KontaktPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kontaktujte mě
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Máte dotaz nebo chcete prodat nemovitost? Ozvěte se mi a domluvíme si nezávaznou konzultaci.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Kontaktní informace */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                    <a href={`tel:${agentData.phone}`} className="text-brand-orange hover:text-brand-orange-hover text-lg font-medium">
                      {agentData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                    <a href={`mailto:${agentData.email}`} className="text-brand-orange hover:text-brand-orange-hover font-medium">
                      {agentData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Lokalita</h3>
                    <p className="text-gray-600">{agentData.location} a okolí</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Dostupnost</h3>
                    <p className="text-gray-600">Po-Pá: 9:00 - 18:00</p>
                    <p className="text-gray-500 text-sm">Víkendy po domluvě</p>
                  </div>
                </div>
              </div>

              {/* Kontaktní formulář */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Napište mi</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Jméno a příjmení"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all bg-white"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all bg-white"
                  />
                  <textarea
                    placeholder="Vaše zpráva"
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all resize-none bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-brand-orange text-white font-semibold py-4 rounded-xl hover:bg-brand-orange-hover transition-all"
                  >
                    Odeslat zprávu
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
