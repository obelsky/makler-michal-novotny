'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import agentData from '@/content/michal-novotny'
import CTASection from '@/components/CTASection'

type FilterType = 'all' | 'prodáno' | 'pronajato'

export default function ProdaneNemovitostiPage() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [activeImage, setActiveImage] = useState<{ [key: string]: number }>({})

  const filteredProperties = filter === 'all' 
    ? agentData.soldProperties 
    : agentData.soldProperties.filter(p => p.status === filter)

  const nextImage = (propertyId: string, totalImages: number) => {
    setActiveImage(prev => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (propertyId: string, totalImages: number) => {
    setActiveImage(prev => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-6">
            Prodané a pronajáté nemovitosti
          </h1>
          <p className="text-xl text-text-gray max-w-3xl">
            Příklady developerských projektů, které jsem úspěšně realizoval. 
            Od výstavby po prodej všech jednotek.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          {/* Filter tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border-2 border-gray-200 bg-white p-1">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-brand-orange text-white'
                    : 'text-text-gray hover:text-brand-orange'
                }`}
              >
                Vše
              </button>
              <button
                onClick={() => setFilter('prodáno')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  filter === 'prodáno'
                    ? 'bg-brand-orange text-white'
                    : 'text-text-gray hover:text-brand-orange'
                }`}
              >
                Prodané
              </button>
            </div>
          </div>

          {/* Grid nemovitostí */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProperties.map((property) => {
              const currentImageIndex = activeImage[property.id] || 0
              const currentImage = property.images[currentImageIndex]
              
              return (
                <div
                  key={property.id}
                  className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
                >
                  {/* Obrázek s galerií */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={currentImage}
                      alt={`${property.location} - ${property.type}`}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-4 py-2 rounded-lg font-bold text-xs uppercase ${
                        property.status === 'prodáno'
                          ? 'bg-red-500 text-white'
                          : 'bg-green-500 text-white'
                      }`}>
                        {property.status}
                      </span>
                    </div>

                    {/* Gallery navigation - zobrazí se jen pokud je více fotek */}
                    {property.images.length > 1 && (
                      <>
                        {/* Prev button */}
                        <button
                          onClick={() => prevImage(property.id, property.images.length)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                          aria-label="Předchozí fotka"
                        >
                          <ChevronLeft className="w-6 h-6 text-text-dark" />
                        </button>

                        {/* Next button */}
                        <button
                          onClick={() => nextImage(property.id, property.images.length)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                          aria-label="Další fotka"
                        >
                          <ChevronRight className="w-6 h-6 text-text-dark" />
                        </button>

                        {/* Dots indicator */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {property.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveImage(prev => ({ ...prev, [property.id]: index }))}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? 'bg-white w-6'
                                  : 'bg-white/60 hover:bg-white/80'
                              }`}
                              aria-label={`Fotka ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Obsah */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-text-dark mb-2">
                          {property.location}
                        </h3>
                        <p className="text-text-gray mb-1">
                          {property.type} {property.size && `• ${property.size}`}
                        </p>
                      </div>
                    </div>

                    <p className="text-text-gray mb-4 leading-relaxed">
                      {property.description}
                    </p>

                    {/* Website link */}
                    {property.website && (
                      <a
                        href={`https://${property.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-hover font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{property.website}</span>
                      </a>
                    )}

                    {/* Datum */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-sm text-text-gray">
                        Realizováno: {property.soldDate}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Empty state */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-text-gray">
                Žádné nemovitosti v této kategorii.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info o specializaci */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6 text-center">
            Specializace na developerské projekty
          </h2>
          <div className="space-y-4 text-lg text-text-gray leading-relaxed">
            <p>
              Jako dvorní realitní makléř společnosti ZFP Reality se specializuji na <strong>komplexní developerské projekty</strong>. 
              To znamená, že nejde jen o prodej jednotlivých bytů, ale o celý proces od projektu po předání klíčů poslednímu kupci.
            </p>
            <p>
              Mám zkušenosti s koordinací developerů, projektantů, dodavatelů a kupujících. Umím nastavit marketingovou strategii, 
              správně ocenit jednotky, řídit prodejní proces a zajistit spokojenost všech stran.
            </p>
            <p>
              Aktuálně připravuji další projekty v <strong>České Kanadě</strong> - pokud uvažujete o investici do rezidenčního 
              developmentu nebo hledáte nemovitost v připravovaných projektech, rád vám poradím.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
