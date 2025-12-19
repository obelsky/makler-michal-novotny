import type { Metadata } from 'next'
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Proč prodávat s makléřem | Michal Novotný - Realitní makléř Praha',
  description: 'Férové srovnání prodeje svépomocí vs. s makléřem. Nejčastější chyby majitelů a kdy dává smysl použít realitního makléře.',
}

export default function ProcSMakleremPage() {
  const comparison = {
    svepomoci: [
      { text: 'Časová náročnost (inzerce, prohlídky, vyjednávání)', negative: true },
      { text: 'Riziko špatného ocenění', negative: true },
      { text: 'Neprověření kupující', negative: true },
      { text: 'Právní rizika a chyby v dokumentaci', negative: true },
      { text: 'Emocionální tlak při vyjednávání', negative: true },
      { text: 'Žádná provize', negative: false },
    ],
    sMaklerem: [
      { text: 'Makléř řeší vše za vás', negative: false },
      { text: 'Reálné tržní ocenění založené na datech', negative: false },
      { text: 'Screening zájemců a filtrace', negative: false },
      { text: 'Kompletní právní servis a ochrana', negative: false },
      { text: 'Objektivní vyjednávání bez emocí', negative: false },
      { text: 'Provize makléře', negative: true },
    ],
  }

  const mistakes = [
    {
      title: 'Špatná cena',
      description: 'Příliš vysoká cena = nemovitost visí v inzerci měsíce a ztrácí na atraktivitě. Kupující si myslí, že s ní je něco špatně. Příliš nízká = přicházíte o peníze, které by vám práv ně patřily.',
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
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-6">
            Proč prodávat nemovitost s realitním makléřem
          </h1>
          <p className="text-xl text-text-gray max-w-3xl">
            Férové srovnání výhod a nevýhod. Makléř není vždy nutnost - ale měli byste vědět, do čeho jdete.
          </p>
        </div>
      </section>

      {/* Srovnávací tabulka */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-8 text-center">
            Prodej svépomocí vs. prodej s makléřem
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Svépomocí */}
            <div className="bg-white rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-text-dark mb-6">
                Prodej svépomocí
              </h3>
              <ul className="space-y-4">
                {comparison.svepomoci.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {item.negative ? (
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-text-gray">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* S makléřem */}
            <div className="bg-white rounded-xl p-8 shadow-card border-2 border-brand-orange">
              <h3 className="text-2xl font-heading font-bold text-text-dark mb-6">
                Prodej s makléřem
              </h3>
              <ul className="space-y-4">
                {comparison.sMaklerem.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {item.negative ? (
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-text-gray">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nejčastější chyby */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-12 text-center">
            Co nejčastěji zkazí prodej nemovitosti
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {mistakes.map((mistake, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-card border-l-4 border-red-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <h3 className="text-xl font-heading font-bold text-text-dark">
                    {mistake.title}
                  </h3>
                </div>
                <p className="text-text-gray leading-relaxed">
                  {mistake.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kdy dává smysl makléř */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-12 text-center">
            Kdy makléře potřebujete a kdy ne
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Makléř má smysl */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-green-600 mb-6">
                Makléř má smysl když:
              </h3>
              <ul className="space-y-4">
                {[
                  'Nemáte čas na prohlídky a jednání s kupujícími',
                  'Nejste si jistí správnou cenou nemovitosti',
                  'Chcete právní jistotu a ochranu',
                  'Nemovitost je komplikovaná (dědictví, spoluvlastnictví)',
                  'Nemáte zkušenosti s prodejem nemovitostí',
                  'Chcete prodat rychle a bez stresu',
                  'Bydlíte daleko a nemůžete být u prohlídek',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Makléř NENÍ nutný */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-text-dark mb-6">
                Makléř NENÍ nutný když:
              </h3>
              <ul className="space-y-4">
                {[
                  'Máte dostatek času a zkušeností',
                  'Nemovitost je jednoduchá a žádaná',
                  'Znáte dobře místní trh a ceny',
                  'Máte kupce už předem (rodina, známí)',
                  'Nemovitost je v perfektním stavu',
                  'Nejste časově nebo finančně pod tlakem',
                  'Umíte vyjednat a jste asertivní',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 flex items-center justify-center text-text-gray font-bold flex-shrink-0 mt-0.5">
                      •
                    </span>
                    <span className="text-text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-white rounded-xl border-2 border-brand-orange">
            <p className="text-lg text-text-gray text-center leading-relaxed">
              <strong className="text-text-dark">Nejste si jistí?</strong> Zavolejte mi a poradím vám férově - i když to bude 
              znamenat, že makléře nepotřebujete. Radši vám řeknu pravdu, než abych vás přesvědčoval o službě, 
              kterou nepotřebujete.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
