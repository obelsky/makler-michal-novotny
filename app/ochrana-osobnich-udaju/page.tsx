import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů | Michal Novotný',
  description: 'Informace o zpracování osobních údajů.',
}

export default function GDPRPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1>Ochrana osobních údajů</h1>
          
          <h2>1. Správce osobních údajů</h2>
          <p>
            Správcem osobních údajů je Michal Novotný, realitní makléř, 
            e-mail: michal.novotny@zfpa.cz, telefon: +420 736 242 624.
          </p>

          <h2>2. Jaké údaje zpracováváme</h2>
          <ul>
            <li>Identifikační údaje (jméno, příjmení)</li>
            <li>Kontaktní údaje (e-mail, telefon)</li>
            <li>Údaje o nemovitosti (lokalita, typ)</li>
            <li>Obsah komunikace</li>
          </ul>

          <h2>3. Účel zpracování</h2>
          <p>
            Vaše údaje zpracováváme za účelem poskytování realitních služeb, 
            komunikace s vámi a plnění právních povinností.
          </p>

          <h2>4. Doba uložení</h2>
          <ul>
            <li>Kontaktní údaje: 3 roky od posledního kontaktu</li>
            <li>Smluvní dokumentace: 10 let</li>
          </ul>

          <h2>5. Vaše práva</h2>
          <p>
            Máte právo na přístup k údajům, jejich opravu, výmaz, omezení zpracování, 
            přenositelnost a právo vznést námitku.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Tento web používá pouze technické cookies nezbytné pro jeho fungování. 
            Nepoužíváme žádné analytické ani marketingové cookies.
          </p>

          <h2>7. Kontakt</h2>
          <p>
            V případě dotazů ohledně zpracování osobních údajů mě kontaktujte 
            na e-mailu michal.novotny@zfpa.cz.
          </p>
        </div>
      </div>
    </section>
  )
}
