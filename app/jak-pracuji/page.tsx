import type { Metadata } from 'next'
import ProcessSection from '@/components/ProcessSection'
import WhyMeSection from '@/components/WhyMeSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Jak pracuji | Michal Novotný - Realitní makléř Praha',
  description: 'Jak probíhá spolupráce se mnou? 6 kroků k úspěšnému prodeji vaší nemovitosti v Praze.',
}

export default function JakPracujiPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Jak pracuji
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Každý prodej je unikátní, ale vždy postupuji systematicky a transparentně. 
            Tady je mých 6 kroků k úspěšnému prodeji.
          </p>
        </div>
      </section>

      <ProcessSection />
      <WhyMeSection />
      <CTASection />
    </>
  )
}
