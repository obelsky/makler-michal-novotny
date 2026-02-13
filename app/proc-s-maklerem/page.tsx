import type { Metadata } from 'next'
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Proč prodávat s makléřem | Michal Novotný - Realitní makléř Praha',
  description: 'Férové srovnání prodeje svépomocí vs. s makléřem. Nejčastější chyby majitelů a kdy dává smysl použít realitního makléře.',
}

export default function ProcSMakleremPage() {
  const mistakes = [
    {
      title: 'Špatná cena',
      description: 'Příliš vysoká cena = nemovitost visí v inzerci měsíce a ztrácí na atraktivitě. Kupující si myslí, že s ní je něco špatně. Příliš nízká = přicházíte o peníze, které by vám právem patřily.',
    },
    {
      title: 'Právní chyby',
      description: 'Chybějící dokumenty, nesrovnalosti v katastru, nedořešené spoluvlastnictví nebo věcná břemena. Problémy se objeví těsně před podpisem a celý prodej se zastaví.',
    },
    {
      title: 'Neprověření kupující',
      description: 'Kupující slibuje, ale nemá peníze. Nebo má hypotéku podmíněnou oceněním, které nedopadne. Promarnili jste měsíce jednání a nemovitost mezitím klesla na ceně.',
    },
    {
      title: 'Tlak na slevu',
      description: 'Kupující vidí, že spěcháte, že jste emotivně vázaní, nebo že se bojíte ztratit jediného zájemce. Využijí to při vyjednávání a vytlačí cenu dolů.',
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proč prodávat nemovitost s realitním makléřem
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Férové srovnání výhod a nevýhod. Makléř není vždy nutnost - ale měli byste vědět, do čeho jdete.
          </p>
        </div>
      </section>

      {/* Nejčastější chyby */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Co nejčastěji zkazí prodej nemovitosti
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {mistakes.map((mistake, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 pt-1">
                    {mistake.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-14">
                  {mistake.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kdy makléř má/nemá smysl */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Kdy makléře potřebujete a kdy ne
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Makléř má smysl */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-green-600 mb-6">
                Makléř má smysl když:
              </h3>
              <ul className="space-y-4">
                {[
                  'Nemáte čas na prohlídky a jednání',
                  'Nejste si jistí správnou cenou',
                  'Chcete právní jistotu a ochranu',
                  'Nemovitost je komplikovaná',
                  'Nemáte zkušenosti s prodejem',
                  'Chcete prodat rychle a bez stresu',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Makléř NENÍ nutný */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-700 mb-6">
                Makléř NENÍ nutný když:
              </h3>
              <ul className="space-y-4">
                {[
                  'Máte dostatek času a zkušeností',
                  'Nemovitost je jednoduchá a žádaná',
                  'Znáte dobře místní trh a ceny',
                  'Máte kupce už předem',
                  'Umíte vyjednat a jste asertivní',
                  'Nejste pod časovým tlakem',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-gray-400 flex-shrink-0">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
