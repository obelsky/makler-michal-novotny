'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import agentData from '@/content/michal-novotny'
import CTASection from '@/components/CTASection'

export default function ProdaneNemovitostiPage() {
  const [activeImage, setActiveImage] = useState<{ [key: string]: number }>({})

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
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Prodané nemovitosti
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Příklady developerských projektů, které jsem úspěšně realizoval.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {agentData.soldProperties.map((property) => {
              const currentImageIndex = activeImage[property.id] || 0
              const currentImage = property.images[currentImageIndex]
              
              return (
                <div
                  key={property.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Obrázek s galerií */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={currentImage}
                      alt={`${property.location} - ${property.type}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1.5 rounded-full font-semibold text-xs uppercase tracking-wide bg-gray-900 text-white">
                        {property.status}
                      </span>
                    </div>

                    {/* Gallery navigation */}
                    {property.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(property.id, property.images.length)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                        </button>

                        <button
                          onClick={() => nextImage(property.id, property.images.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {property.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveImage(prev => ({ ...prev, [property.id]: index }))}
                              className={`h-1.5 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? 'bg-white w-6'
                                  : 'bg-white/60 hover:bg-white/80 w-1.5'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Obsah */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {property.location}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      {property.type} • {property.size}
                    </p>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {property.description}
                    </p>

                    {property.website && (
                      <a
                        href={`https://${property.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-hover font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                        {property.website}
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
