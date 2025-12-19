import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import agentData from '@/content/michal-novotny'

export const metadata: Metadata = {
  title: 'Jak pracuji | Michal Novotný - Realitní makléř Praha',
  description: 'Detailní popis mého přístupu k prodeji nemovitostí. Osobní konzultace, reálné ocenění, marketing a kompletní právní servis.',
}

export default function JakPracujiPage() {
  return (
    <>
      {/* Header sekce */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-6">
            Jak přistupuji k prodeji vaší nemovitosti
          </h1>
          <p className="text-xl text-text-gray max-w-3xl">
            Věcně, transparentně a bez zbytečných marketingových frází. Tady je přesný popis toho, jak pracuji.
          </p>
        </div>
      </section>

      {/* Detailní kroky procesu */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom max-w-4xl">
          {agentData.process.map((step, index) => (
            <div
              key={step.step}
              className="mb-16 last:mb-0"
            >
              {/* Nadpis kroku */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-heading font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h2 className="text-3xl font-heading font-bold text-text-dark">
                  {step.title}
                </h2>
              </div>

              {/* Rozšířený obsah */}
              <div className="pl-20 space-y-4 text-lg text-text-gray leading-relaxed">
                <p>{step.description}</p>
                
                {/* Specifické detaily pro každý krok */}
                {step.step === 1 && (
                  <>
                    <p>
                      Při první schůzce si společně projdeme nemovitost a vyposlechnu si, co od prodeje očekáváte. 
                      Je důležité, abych pochopil vaši situaci - jestli spěcháte, jestli chcete dosáhnout konkrétní ceny, 
                      nebo jestli máte jiné priority.
                    </p>
                    <p>
                      Ptám se na historii nemovitosti, případné rekonstrukce, technický stav a právní čistotu. 
                      Všechny tyto informace mi pomohou nastavit správnou strategii prodeje.
                    </p>
                  </>
                )}

                {step.step === 2 && (
                  <>
                    <p>
                      Cenu nestanovuji podle toho, kolik byste si přáli dostat, ale podle reálných tržních dat. 
                      Používám databázi skutečně prodaných nemovitostí (ne jen inzertních cen), srovnávám podobné 
                      nemovitosti v okolí a zohledňuji aktuální poptávku.
                    </p>
                    <p>
                      Vysvětlím vám, jak jsem k ceně došel a co ji ovlivňuje. Pokud nesouhlasíte, řekneme si proč 
                      a najdeme kompromis. Mým cílem není přesvědčit vás o nejnižší ceně, ale o ceně, za kterou 
                      nemovitost skutečně prodáme v rozumném čase.
                    </p>
                  </>
                )}

                {step.step === 3 && (
                  <>
                    <p>
                      Poradím vám, co vylepšit před prodejem a co už ne má smysl. Někdy stačí jen uklidit a 
                      vynést starý nábytek, jindy může drobná kosmetická úprava zvýšit cenu o desítky tisíc.
                    </p>
                    <p>
                      Zajistím profesionální fotografie - to je jeden z nejdůležitějších kroků. Špatné fotky 
                      můžou zničit i tu nejlepší nemovitost. Vypracuji také detailní popis, který osloví správné kupce.
                    </p>
                  </>
                )}

                {step.step === 4 && (
                  <>
                    <p>
                      Inzerci zveřejním na všech relevantních portálech (Sreality, Bezrealitky, atd.) a v naší 
                      síti ZFP Reality. Marketing není jen o vyvěšení inzerátu - je to o tom, dostat inzerát 
                      před správné lidi ve správný čas.
                    </p>
                    <p>
                      Zájemce prověřuji ještě před prohlídkou. Ptám se na financování, motivaci a časový horizont. 
                      Díky tomu na prohlídky pouštím jen skutečné kupce, ne zvědavce nebo lidi, kteří stejně 
                      nemají na koupi peníze.
                    </p>
                    <p>
                      Na prohlídkách jsem s vámi - ukážu nemovitost, odpovím na otázky a budu sledovat reakce zájemců.
                    </p>
                  </>
                )}

                {step.step === 5 && (
                  <>
                    <p>
                      Když přijde nabídka, společně zvážíme všechny aspekty - nejen cenu, ale i spolehlivost kupce, 
                      způsob financování a časový harmonogram. Někdy je lepší přijmout o něco nižší nabídku od 
                      kupce s hypotékou již schválenou, než vyšší od někoho, kdo ještě nemá finance vyřešené.
                    </p>
                    <p>
                      Vyjednávání vedu profesionálně a bez emocí. Vím, kdy ustoupit a kdy trvat na svém. 
                      Můj cíl je dojednat ty nejlepší podmínky, ale férově vůči oběma stranám.
                    </p>
                  </>
                )}

                {step.step === 6 && (
                  <>
                    <p>
                      Po dohodě zajistím kompletní právní servis. To zahrnuje přípravu smlouvy o smlouvě budoucí, 
                      kontrolu katastru nemovitostí, ověření všech dokumentů a koordinaci s advokátem.
                    </p>
                    <p>
                      Používáme advokátní úschovu - kupující složí peníze advokátovi, který je uvolní až po 
                      úspěšném převodu vlastnictví. Díky tomu máte jistotu, že dostanete peníze, a kupující má 
                      jistotu, že dostane nemovitost.
                    </p>
                    <p>
                      Jsem s vámi až do konce - při podpisu kupní smlouvy u notáře, při předání nemovitosti a 
                      dokonce i pár týdnů po prodeji, pokud by se objevil jakýkoli problém.
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Moje specializace */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-8">
            Moje specializace
          </h2>
          <div className="space-y-6 text-lg text-text-gray leading-relaxed">
            <p>
              Jsem dvorním realitním makléřem společnosti ZFP Reality a specializuji se na <strong>developerské projekty</strong>. 
              Mám zkušenosti s výstavbou a prodejem kompletních rezidenčních projektů:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-brand-orange mr-3 mt-1">→</span>
                <span><strong>Apartmánové domy Pod Zlatým návrším</strong> ve Špindlerově Mlýně - luxusní apartmány v srdci Krkonoš</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-3 mt-1">→</span>
                <span><strong>Rezidence Meruňkova</strong> v Hradci Králové - moderní bytové domy s nadstandardním vybavením</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-3 mt-1">→</span>
                <span><strong>Připravované projekty v České Kanadě</strong> - nové rezidenční developmenty</span>
              </li>
            </ul>
            <p>
              Díky těmto zkušenostem rozumím nejen prodeji jednotlivých bytů, ale celému procesu od projektu 
              přes výstavbu až po marketing a prodej všech jednotek. Umím koordinovat developery, projektanty, 
              dodavatele i kupující.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
