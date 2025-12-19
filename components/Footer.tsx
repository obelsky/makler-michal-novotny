import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import agentData from '@/content/michal-novotny'

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo a brand */}
          <div>
            <div className="text-2xl font-heading font-bold mb-2">
              ZFP Reality
            </div>
            <p className="text-gray-400 mb-4">Součást ZFP GROUP</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Profesionální realitní služby s osobním přístupem a kompletním zázemím.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">{agentData.name}</div>
                  <div className="text-gray-400 text-sm">
                    {agentData.location} a okolí
                  </div>
                </div>
              </div>

              <a
                href={`tel:${agentData.phone}`}
                className="flex items-center space-x-3 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span>{agentData.phone}</span>
              </a>

              <a
                href={`mailto:${agentData.email}`}
                className="flex items-center space-x-3 hover:text-brand-orange transition-colors"
              >
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="text-sm">{agentData.email}</span>
              </a>
            </div>
          </div>

          {/* Odkazy */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Odkazy</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://zfpgroup.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  O ZFP GROUP
                </a>
              </li>
              <li>
                <a
                  href="https://zfpreality.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  ZFP Reality
                </a>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/ochrana-osobnich-udaju"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  Ochrana osobních údajů (GDPR)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Spodní řádek */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} ZFP Reality | {agentData.name}
            </p>
            <p className="text-sm text-gray-400 text-center md:text-right">
              Web vytvořen podle ZFP webdesign manuálu
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
