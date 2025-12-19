import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Mail, Phone, FileText } from 'lucide-react'
import agentData from '@/content/michal-novotny'

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů | Michal Novotný - Realitní makléř',
  description: 'Zásady ochrany osobních údajů a zpracování dat v souladu s GDPR',
}

export default function OchranaOsobnichUdajuPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-brand-orange" />
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark">
              Ochrana osobních údajů
            </h1>
          </div>
          <p className="text-xl text-text-gray max-w-3xl">
            Informace o zpracování osobních údajů v souladu s nařízením GDPR
          </p>
        </div>
      </section>

      {/* Obsah */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl p-8 shadow-card space-y-8">
            
            {/* Správce osobních údajů */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                1. Správce osobních údajů
              </h2>
              <div className="space-y-3 text-text-gray">
                <p>
                  <strong className="text-text-dark">Správcem osobních údajů je:</strong>
                </p>
                <div className="pl-4 space-y-2">
                  <p><strong>Jméno:</strong> {agentData.name}</p>
                  <p><strong>IČO:</strong> [doplnit IČO]</p>
                  <p><strong>Adresa:</strong> [doplnit adresu]</p>
                  <p><strong>Email:</strong> {agentData.email}</p>
                  <p><strong>Telefon:</strong> {agentData.phone}</p>
                </div>
              </div>
            </div>

            {/* Jaké údaje zpracováváme */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                2. Jaké osobní údaje zpracováváme
              </h2>
              <div className="space-y-3 text-text-gray">
                <p>
                  V rámci poskytování služeb realitního makléře zpracováváme následující osobní údaje:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li><strong>Identifikační údaje:</strong> jméno, příjmení</li>
                  <li><strong>Kontaktní údaje:</strong> email, telefonní číslo</li>
                  <li><strong>Údaje o nemovitosti:</strong> lokalita, typ nemovitosti (pouze pokud je zadáte do formuláře)</li>
                  <li><strong>Komunikace:</strong> obsah zpráv a požadavků</li>
                </ul>
                <p className="text-sm mt-4">
                  <strong>Nesbíráme žádné citlivé údaje</strong> jako je rodné číslo, údaje o zdravotním stavu, 
                  náboženském vyznání či politických názorech.
                </p>
              </div>
            </div>

            {/* Účel zpracování */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                3. Účel a právní základ zpracování
              </h2>
              <div className="space-y-4 text-text-gray">
                <div>
                  <h3 className="font-bold text-text-dark mb-2">Poskytování realitních služeb</h3>
                  <p>
                    <strong>Účel:</strong> Kontaktování, jednání o prodeji/pronájmu nemovitosti, poskytnutí odborného poradenství
                  </p>
                  <p>
                    <strong>Právní základ:</strong> Váš souhlas (čl. 6 odst. 1 písm. a) GDPR) a oprávněný zájem správce (čl. 6 odst. 1 písm. f) GDPR)
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-dark mb-2">Marketingová komunikace</h3>
                  <p>
                    <strong>Účel:</strong> Zasílání informací o nových nemovitostech, nabídkách a službách
                  </p>
                  <p>
                    <strong>Právní základ:</strong> Váš souhlas (čl. 6 odst. 1 písm. a) GDPR) - lze kdykoli odvolat
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-dark mb-2">Plnění právních povinností</h3>
                  <p>
                    <strong>Účel:</strong> Účetnictví, daňová evidence
                  </p>
                  <p>
                    <strong>Právní základ:</strong> Plnění právní povinnosti (čl. 6 odst. 1 písm. c) GDPR)
                  </p>
                </div>
              </div>
            </div>

            {/* Doba uložení */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                4. Doba uložení osobních údajů
              </h2>
              <div className="space-y-3 text-text-gray">
                <ul className="list-disc pl-8 space-y-2">
                  <li><strong>Kontaktní formuláře:</strong> 3 roky od posledního kontaktu</li>
                  <li><strong>Smluvní dokumentace:</strong> 10 let (daňové a účetní předpisy)</li>
                  <li><strong>Marketingové souhlasy:</strong> do odvolání souhlasu, max. 5 let</li>
                </ul>
                <p className="mt-4">
                  Po uplynutí doby uložení jsou osobní údaje bezpečně smazány nebo anonymizovány.
                </p>
              </div>
            </div>

            {/* Předávání údajů třetím stranám */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                5. Předávání osobních údajů třetím stranám
              </h2>
              <div className="space-y-3 text-text-gray">
                <p>
                  Vaše osobní údaje můžeme předávat pouze těmto kategoriím příjemců:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li><strong>ZFP Reality a.s.</strong> - zázemí realitní kanceláře</li>
                  <li><strong>Poskytovatelé IT služeb</strong> - hosting webových stránek, emailing (pokud používáme)</li>
                  <li><strong>Advokáti a notáři</strong> - v rámci smluvních jednání</li>
                  <li><strong>Účetní</strong> - zpracování účetnictví</li>
                </ul>
                <p className="mt-4">
                  <strong>Neprodáváme ani nesdílíme</strong> vaše údaje s marketingovými agenturami, 
                  datovými brokery ani jinými třetími stranami.
                </p>
              </div>
            </div>

            {/* Vaše práva */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                6. Vaše práva
              </h2>
              <div className="space-y-3 text-text-gray">
                <p>Podle GDPR máte následující práva:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li><strong>Právo na přístup</strong> - máte právo vědět, jaké vaše údaje zpracováváme</li>
                  <li><strong>Právo na opravu</strong> - můžete požádat o opravu nepřesných údajů</li>
                  <li><strong>Právo na výmaz</strong> ("právo být zapomenut")</li>
                  <li><strong>Právo na omezení zpracování</strong> - dočasné pozastavení zpracování</li>
                  <li><strong>Právo na přenositelnost údajů</strong> - předání údajů jinému správci</li>
                  <li><strong>Právo vznést námitku</strong> proti zpracování založenému na oprávněném zájmu</li>
                  <li><strong>Právo odvolat souhlas</strong> - kdykoli můžete odvolat udělený souhlas</li>
                </ul>
                <p className="mt-4">
                  Pro uplatnění práv nás kontaktujte na emailu{' '}
                  <a href={`mailto:${agentData.email}`} className="text-brand-orange hover:underline">
                    {agentData.email}
                  </a>{' '}
                  nebo telefonicky na{' '}
                  <a href={`tel:${agentData.phone}`} className="text-brand-orange hover:underline">
                    {agentData.phone}
                  </a>.
                </p>
              </div>
            </div>

            {/* Zabezpečení */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                7. Zabezpečení osobních údajů
              </h2>
              <div className="space-y-3 text-text-gray">
                <p>
                  Vaše osobní údaje chráníme pomocí standardních technických a organizačních opatření:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Šifrovaná komunikace (HTTPS/SSL)</li>
                  <li>Zabezpečené uložení dat</li>
                  <li>Přístup k údajům mají pouze oprávněné osoby</li>
                  <li>Pravidelné zálohy</li>
                  <li>Školení zaměstnanců v oblasti GDPR</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                8. Cookies (soubory cookies)
              </h2>
              <div className="space-y-3 text-text-gray">
                <p>
                  Tyto webové stránky používají pouze <strong>technické cookies</strong> nezbytné pro správné 
                  fungování webu (např. uložení souhlasu s cookie lištou).
                </p>
                <p>
                  <strong>Nepoužíváme:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Analytické cookies (Google Analytics apod.)</li>
                  <li>Marketingové cookies</li>
                  <li>Cookies třetích stran pro sledování</li>
                </ul>
              </div>
            </div>

            {/* Stížnosti */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                9. Právo podat stížnost
              </h2>
              <div className="space-y-3 text-text-gray">
                <p>
                  Pokud se domníváte, že zpracování vašich osobních údajů porušuje GDPR, máte právo podat 
                  stížnost u dozorového úřadu:
                </p>
                <div className="pl-4 space-y-2 mt-3">
                  <p><strong>Úřad pro ochranu osobních údajů</strong></p>
                  <p>Pplk. Sochora 27</p>
                  <p>170 00 Praha 7</p>
                  <p>Web: <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">www.uoou.cz</a></p>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="border-t-2 border-gray-200 pt-6">
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                Máte otázky?
              </h2>
              <div className="space-y-4">
                <p className="text-text-gray">
                  Pokud máte jakékoli dotazy ohledně zpracování osobních údajů, neváhejte mě kontaktovat:
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${agentData.email}`}
                    className="flex items-center gap-3 px-6 py-3 bg-brand-orange text-white rounded-lg hover:bg-brand-orange-hover transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{agentData.email}</span>
                  </a>
                  
                  <a
                    href={`tel:${agentData.phone}`}
                    className="flex items-center gap-3 px-6 py-3 border-2 border-brand-orange text-brand-orange rounded-lg hover:bg-brand-orange hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{agentData.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Platnost */}
            <div className="text-sm text-text-gray border-t border-gray-200 pt-4">
              <p>
                <strong>Platnost:</strong> Tyto zásady ochrany osobních údajů jsou platné od 1. ledna 2024.
              </p>
              <p className="mt-2">
                <strong>Poslední aktualizace:</strong> {new Date().toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-text-dark mb-6 text-center">
            Související dokumenty
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/"
              className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-brand-orange transition-colors"
            >
              <FileText className="w-8 h-8 text-brand-orange flex-shrink-0" />
              <div>
                <div className="font-bold text-text-dark mb-1">Zpět na hlavní stránku</div>
                <div className="text-sm text-text-gray">Prodat nemovitost bezpečně</div>
              </div>
            </Link>
            
            <Link
              href="/kontakt"
              className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-brand-orange transition-colors"
            >
              <Mail className="w-8 h-8 text-brand-orange flex-shrink-0" />
              <div>
                <div className="font-bold text-text-dark mb-1">Kontaktujte mě</div>
                <div className="text-sm text-text-gray">Dotazy k GDPR</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
