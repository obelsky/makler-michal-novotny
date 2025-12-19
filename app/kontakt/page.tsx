'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Check } from 'lucide-react'
import agentData from '@/content/michal-novotny'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  consent: boolean
}

export default function KontaktPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    console.log('Contact form data:', data)
    // TODO: Implement EmailJS or API call
    setIsSubmitted(true)
    
    setTimeout(() => {
      alert(`Děkuji za zprávu! Brzy se vám ozvu na ${data.phone}`)
    }, 500)
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-6">
            Kontakt
          </h1>
          <p className="text-xl text-text-gray max-w-3xl">
            Máte otázky? Chcete si domluvit schůzku? Neváhejte mě kontaktovat.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Levá strana - Osobní karta (2/5) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Foto a základní info */}
              <div className="bg-white rounded-xl p-8 shadow-card text-center">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <Image
                    src="/images/michal-novotny.png"
                    alt={agentData.name}
                    fill
                    className="rounded-full object-cover border-4 border-brand-orange"
                  />
                </div>
                
                <h2 className="text-2xl font-heading font-bold text-text-dark mb-2">
                  {agentData.name}
                </h2>
                <p className="text-lg text-text-gray mb-1">
                  Realitní makléř - {agentData.location}
                </p>
                <p className="text-sm text-brand-orange font-medium">
                  {agentData.company}
                </p>
              </div>

              {/* Kontaktní údaje */}
              <div className="bg-white rounded-xl p-8 shadow-card space-y-6">
                <h3 className="text-xl font-heading font-bold text-text-dark mb-4">
                  Kontaktní údaje
                </h3>

                {/* Telefon */}
                <a
                  href={`tel:${agentData.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <Phone className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-text-gray">Telefon</div>
                    <div className="font-medium text-text-dark group-hover:text-brand-orange transition-colors">
                      {agentData.phone}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${agentData.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <Mail className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-text-gray">Email</div>
                    <div className="font-medium text-text-dark group-hover:text-brand-orange transition-colors break-all">
                      {agentData.email}
                    </div>
                  </div>
                </a>

                {/* Lokalita */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-text-gray">Působnost</div>
                    <div className="font-medium text-text-dark">
                      {agentData.region}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pravá strana - Formulář (3/5) */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="bg-white rounded-xl p-8 shadow-card text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-text-dark mb-2">
                    Děkuji za zprávu!
                  </h3>
                  <p className="text-text-gray">
                    Brzy se vám ozvu a domluvíme si další kroky.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-8 shadow-card">
                  <h3 className="text-2xl font-heading font-bold text-text-dark mb-6">
                    Napište mi
                  </h3>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Jméno */}
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

                    {/* Email */}
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

                    {/* Telefon */}
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

                    {/* Zpráva */}
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Zpráva *
                      </label>
                      <textarea
                        {...register('message', { required: 'Vyplňte zprávu' })}
                        className="input-field"
                        rows={6}
                        placeholder="Napište mi, s čím vám mohu pomoci..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Souhlas */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        {...register('consent', { required: true })}
                        className="mt-1"
                        id="consent"
                      />
                      <label htmlFor="consent" className="text-sm text-text-gray">
                        Souhlasím se zpracováním osobních údajů za účelem kontaktování
                        a poskytnutí služeb. *
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-red-500 text-sm">Je nutný souhlas</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Odeslat zprávu
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Mapa */}
          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-card">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1285377426!2d14.224867858203125!3d50.08804324999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPraha!5e0!3m2!1scs!2scz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Praha a okolí"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
