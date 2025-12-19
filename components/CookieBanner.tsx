'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Zkontrolovat, jestli uživatel už souhlasil
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Zobrazit po 1 sekundě pro lepší UX
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-white border-t-4 border-brand-orange shadow-2xl">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Text */}
            <div className="flex-1">
              <h3 className="font-heading font-bold text-text-dark text-lg mb-2">
                🍪 Používáme cookies
              </h3>
              <p className="text-text-gray text-sm leading-relaxed">
                Tyto webové stránky používají pouze technické cookies nezbytné pro správné fungování webu. 
                Nesledujeme vaše chování ani nesdílíme data s třetími stranami. 
                Více informací najdete v{' '}
                <Link 
                  href="/ochrana-osobnich-udaju" 
                  className="text-brand-orange hover:text-brand-orange-hover underline"
                >
                  zásadách ochrany osobních údajů
                </Link>
                .
              </p>
            </div>

            {/* Tlačítka */}
            <div className="flex items-center gap-3">
              <button
                onClick={rejectCookies}
                className="px-4 py-2 text-text-gray hover:text-text-dark transition-colors text-sm font-medium"
              >
                Odmítnout
              </button>
              <button
                onClick={acceptCookies}
                className="btn-primary text-sm"
              >
                Rozumím
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={rejectCookies}
              className="absolute top-4 right-4 md:relative md:top-0 md:right-0 text-text-gray hover:text-text-dark transition-colors"
              aria-label="Zavřít"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
