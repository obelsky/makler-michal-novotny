'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChevronRight, Check, Home, Building, Landmark } from 'lucide-react'

interface FormData {
  location: string
  propertyType: 'byt' | 'dům' | 'pozemek' | ''
  name: string
  phone: string
  email: string
  consent: boolean
}

const pragueDistricts = [
  'Praha 1', 'Praha 2', 'Praha 3', 'Praha 4', 'Praha 5',
  'Praha 6', 'Praha 7', 'Praha 8', 'Praha 9', 'Praha 10',
  'Praha - východ', 'Praha - západ'
]

export default function LeadForm() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      location: '',
      propertyType: '',
      name: '',
      phone: '',
      email: '',
      consent: false,
    }
  })

  const location = watch('location')
  const propertyType = watch('propertyType')

  const onSubmit = async (data: FormData) => {
    console.log('Form data:', data)
    // TODO: Implement EmailJS or API call
    setIsSubmitted(true)
    
    // Simulace odeslání
    setTimeout(() => {
      alert(`Děkuji za zájem! Brzy se vám ozvu na ${data.phone}`)
    }, 500)
  }

  const propertyTypes = [
    { value: 'byt', label: 'Byt', icon: Home },
    { value: 'dům', label: 'Dům', icon: Building },
    { value: 'pozemek', label: 'Pozemek', icon: Landmark },
  ]

  if (isSubmitted) {
    return (
      <div className="bg-bg-light rounded-2xl p-8 shadow-xl text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-text-dark mb-2">
          Děkuji za zájem!
        </h3>
        <p className="text-text-gray">
          Brzy se vám ozvu a domluvíme si schůzku.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-bg-light rounded-2xl p-8 shadow-xl">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-text-gray">
            Krok {step} ze 3
          </span>
          <span className="text-sm font-medium text-brand-orange">
            {Math.round((step / 3) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-brand-orange h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* KROK 1: Lokalita */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-text-dark">
              Kde se nemovitost nachází?
            </h3>
            <select
              {...register('location', { required: 'Vyberte lokalitu' })}
              className="input-field"
            >
              <option value="">Vyberte městskou část</option>
              {pragueDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
            <button
              type="button"
              onClick={() => location && setStep(2)}
              disabled={!location}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>Pokračovat</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* KROK 2: Typ nemovitosti */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-text-dark">
              Jaký typ nemovitosti?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {propertyTypes.map((type) => {
                const Icon = type.icon
                return (
                  <label
                    key={type.value}
                    className={`flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      propertyType === type.value
                        ? 'border-brand-orange bg-brand-orange/5'
                        : 'border-gray-300 hover:border-brand-orange'
                    }`}
                  >
                    <input
                      type="radio"
                      {...register('propertyType', { required: true })}
                      value={type.value}
                      className="sr-only"
                    />
                    <Icon
                      className={`w-8 h-8 mb-2 ${
                        propertyType === type.value
                          ? 'text-brand-orange'
                          : 'text-text-gray'
                      }`}
                    />
                    <span className="font-medium text-sm">{type.label}</span>
                  </label>
                )
              })}
            </div>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary flex-1"
              >
                Zpět
              </button>
              <button
                type="button"
                onClick={() => propertyType && setStep(3)}
                disabled={!propertyType}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>Pokračovat</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* KROK 3: Kontaktní údaje */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-text-dark mb-4">
              Váš kontakt
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Jméno a příjmení *
              </label>
              <input
                type="text"
                {...register('name', { required: 'Vyplňte jméno' })}
                className="input-field"
                placeholder="Jan Novák"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Telefon *
              </label>
              <input
                type="tel"
                {...register('phone', {
                  required: 'Vyplňte telefon',
                  pattern: {
                    value: /^(\+420)?[0-9]{9}$/,
                    message: 'Zadejte platné telefonní číslo',
                  },
                })}
                className="input-field"
                placeholder="+420 123 456 789"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Email *
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Vyplňte email',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Zadejte platný email',
                  },
                })}
                className="input-field"
                placeholder="jan.novak@email.cz"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                {...register('consent', { required: true })}
                className="mt-1"
                id="consent"
              />
              <label htmlFor="consent" className="text-sm text-text-gray">
                Souhlasím se zpracováním osobních údajů za účelem kontaktování
                a poskytnutí služeb.
              </label>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-sm">Je nutný souhlas</p>
            )}

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-secondary flex-1"
              >
                Zpět
              </button>
              <button
                type="submit"
                className="btn-primary flex-1 flex items-center justify-center space-x-2"
              >
                <span>Získat odhad zdarma</span>
                <Check className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Info text */}
      <div className="mt-6 pt-6 border-t border-gray-300">
        <p className="text-xs text-text-gray text-center">
          Odhad je zcela zdarma a nezávazný. Brzy se vám ozvu a domluvíme si osobní schůzku.
        </p>
      </div>
    </div>
  )
}
