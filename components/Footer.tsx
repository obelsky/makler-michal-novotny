import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import agentData from '@/content/michal-novotny'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-bold mb-6">{agentData.name}</h3>
            <div className="space-y-4">
              <a href={`tel:${agentData.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-brand-orange transition-colors">
                <Phone className="w-5 h-5" />
                {agentData.phone}
              </a>
              <a href={`mailto:${agentData.email}`} className="flex items-center gap-3 text-gray-300 hover:text-brand-orange transition-colors">
                <Mail className="w-5 h-5" />
                {agentData.email}
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                {agentData.location}
              </div>
            </div>
          </div>

          {/* Odkazy */}
          <div>
            <h3 className="text-lg font-bold mb-6">Odkazy</h3>
            <div className="space-y-3">
              <Link href="/jak-pracuji" className="block text-gray-300 hover:text-brand-orange transition-colors">
                Jak pracuji
              </Link>
              <Link href="/proc-s-maklerem" className="block text-gray-300 hover:text-brand-orange transition-colors">
                Proč s makléřem
              </Link>
              <Link href="/prodane-nemovitosti" className="block text-gray-300 hover:text-brand-orange transition-colors">
                Prodané nemovitosti
              </Link>
              <Link href="/kontakt" className="block text-gray-300 hover:text-brand-orange transition-colors">
                Kontakt
              </Link>
              <Link href="/ochrana-osobnich-udaju" className="block text-gray-300 hover:text-brand-orange transition-colors">
                Ochrana osobních údajů
              </Link>
            </div>
          </div>

          {/* O společnosti */}
          <div>
            <h3 className="text-lg font-bold mb-6">ZFP Reality</h3>
            <p className="text-gray-300 leading-relaxed">
              Jsem součástí ZFP Reality, jedné z největších realitních sítí v České republice. 
              Díky tomu vám mohu nabídnout profesionální servis a zázemí silné společnosti.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {agentData.name}. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}
