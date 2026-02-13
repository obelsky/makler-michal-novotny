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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/zfp-reality-logo.png"
              alt="ZFP Reality"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigace */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-orange font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA tlačítko */}
          <a
            href={`tel:${agentData.phone}`}
            className="hidden lg:flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-full hover:bg-brand-orange-hover transition-all duration-300 font-semibold shadow-lg shadow-brand-orange/25"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            <span>{agentData.phone}</span>
          </a>

          {/* Mobilní menu tlačítko */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand-orange transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobilní menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container-custom py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-orange rounded-xl transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${agentData.phone}`}
              className="flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-4 rounded-full hover:bg-brand-orange-hover transition-colors mt-4 font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span>{agentData.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
