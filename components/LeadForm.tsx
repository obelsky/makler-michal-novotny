'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const districts = [
  'Praha 1', 'Praha 2', 'Praha 3', 'Praha 4', 'Praha 5',
  'Praha 6', 'Praha 7', 'Praha 8', 'Praha 9', 'Praha 10',
  'Praha - západ', 'Praha - východ', 'Jiná lokalita'
]

export default function LeadForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    district: '',
    propertyType: '',
    name: '',
    phone: '',
    email: ''
  })

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    alert('Děkujeme! Brzy se vám ozveme.')
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">Krok {step} ze 3</span>
          <span className="text-sm font-semibold text-brand-orange">{Math.round((step / 3) * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-orange transition-all duration-300 rounded-full"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1 - Lokalita */}
      {step === 1 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Kde se nemovitost nachází?</h3>
          <select
            value={formData.district}
            onChange={(e) => setFormData({ ...formData, district: e.target.value })}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all mb-6"
          >
            <option value="">Vyberte městskou část</option>
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <button
            onClick={() => formData.district && setStep(2)}
            disabled={!formData.district}
            className="w-full bg-brand-orange text-white font-semibold py-4 rounded-xl hover:bg-brand-orange-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            POKRAČOVAT <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Step 2 - Typ nemovitosti */}
      {step === 2 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">O jaký typ nemovitosti jde?</h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {['Byt', 'Dům', 'Pozemek', 'Komerční'].map((type) => (
              <button
                key={type}
                onClick={() => setFormData({ ...formData, propertyType: type })}
                className={`py-4 px-4 rounded-xl border-2 font-medium transition-all ${
                  formData.propertyType === type
                    ? 'border-brand-orange bg-brand-orange/5 text-brand-orange'
                    : 'border-gray-200 text-gray-700 hover:border-brand-orange/50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <button
            onClick={() => formData.propertyType && setStep(3)}
            disabled={!formData.propertyType}
            className="w-full bg-brand-orange text-white font-semibold py-4 rounded-xl hover:bg-brand-orange-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            POKRAČOVAT <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Step 3 - Kontakt */}
      {step === 3 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Vaše kontaktní údaje</h3>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Jméno a příjmení"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
            />
            <input
              type="tel"
              placeholder="Telefon"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.phone}
            className="w-full bg-brand-orange text-white font-semibold py-4 rounded-xl hover:bg-brand-orange-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ODESLAT NEZÁVAZNOU POPTÁVKU
          </button>
        </div>
      )}

      <p className="text-center text-sm text-gray-500 mt-6">
        Odhad je zcela zdarma a nezávazný. Brzy se vám ozvu a domluvíme si osobní schůzku.
      </p>
    </div>
  )
}
