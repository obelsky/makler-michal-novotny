'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import agentData from '@/content/michal-novotny'

const navigation = [
  { name: 'Úvod', href: '/' },
  { name: 'Jak pracuji', href: '/jak-pracuji' },
  { name: 'Proč s makléřem', href: '/proc-s-maklerem' },
  { name: 'Prodané', href: '/prodane-nemovitosti' },
  // { name: 'Reference', href: '/reference' }, // Skryto - zatím není relevantní
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/zfp-reality-logo.png"
              alt="ZFP Reality - Součást ZFP GROUP"
              width={220}
              height={74}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigace */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="link-hover font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA tlačítko - Desktop */}
          <a
            href={`tel:${agentData.phone}`}
            className="hidden lg:flex items-center space-x-2 bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-brand-orange-hover transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            <span className="font-bold">{agentData.phone}</span>
          </a>

          {/* Mobilní menu tlačítko */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-dark hover:text-brand-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobilní menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container-custom py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-text-dark hover:bg-bg-light hover:text-brand-orange rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA v mobilním menu */}
            <a
              href={`tel:${agentData.phone}`}
              className="flex items-center justify-center space-x-2 bg-brand-orange text-white px-6 py-4 rounded-lg hover:bg-brand-orange-hover transition-colors mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold">{agentData.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
