const agentData = {
  name: "Michal Novotný",
  phone: "+420 736 242 624",
  email: "michal.novotny@zfpa.cz",
  location: "Praha",
  company: "ZFP Reality / ZFP GROUP",
  
  hero: {
    headline: "Prodám vaši nemovitost v Praze bezpečně, s rozmyslem a bez stresu.",
    subheadline: "Jmenuji se Michal Novotný a pomáhám majitelům nemovitostí v Praze dosáhnout nejlepšího možného výsledku při prodeji."
  },
  
  trustStats: {
    soldProperties: "570+",
    rentedProperties: "270+",
    agents: "126",
    tagline: "Pracuji samostatně, ale s plným zázemím silné realitní sítě ZFP Reality."
  },
  
  whyMe: [
    {
      title: "Správné nacenění",
      description: "Stanovím cenu podle reálných tržních dat, ne podle přání. Díky tomu vaše nemovitost nevisí v inzerci měsíce, ale prodává se rychle a za férovou cenu.",
      icon: "TrendingUp"
    },
    {
      title: "Ochrana vašich peněz",
      description: "Advokátní úschova, prověření kupujících, kontrola financování. Prodej probíhá bezpečně a vy máte jistotu, že vše proběhne v pořádku.",
      icon: "Shield"
    },
    {
      title: "Vyjednávání ve váš prospěch",
      description: "Mám zkušenosti s vyjednáváním a znám trh. Získám pro vás nejlepší možné podmínky a nedovolím, aby vás někdo tlačil do nevýhodného obchodu.",
      icon: "Handshake"
    },
    {
      title: "Filtrace zájemců",
      description: "Netrápím vás zvědavci a nereálnými zájemci. Na prohlídky pouštím jen skutečné kupce, kteří mají vážný zájem a finance.",
      icon: "Filter"
    },
    {
      title: "Kompletní právní servis",
      description: "Smlouvy, kontrola katastru, daně, převod vlastnictví. Vše zajistím včetně advokáta, takže se nemusíte o nic starat.",
      icon: "FileCheck"
    }
  ],
  
  process: [
    {
      step: 1,
      title: "Osobní konzultace",
      description: "Setkám se s vámi osobně, projdeme společně vaši nemovitost a probereme vaše očekávání a cíle. Rád si poslechnu, co od prodeje čekáte a co je pro vás důležité."
    },
    {
      step: 2,
      title: "Reálný odhad ceny",
      description: "Cenu stanovím na základě aktuálních tržních dat, srovnatelných prodejů v okolí a stavu nemovitosti. Nejde o odhad od stolu, ale o reálnou analýzu trhu."
    },
    {
      step: 3,
      title: "Příprava nemovitosti",
      description: "Poradím, jak nemovitost správně připravit na prodej - co vylepšit, co uklidit, jak ji prezentovat. Zajistím profesionální fotografie a vypracuji kompletní popis."
    },
    {
      step: 4,
      title: "Marketing a prohlídky",
      description: "Inzerci zveřejním na všech relevantních portálech a v naší síti. Zájemce prověřím a domlouvám pouze kvalitní prohlídky s lidmi, kteří mají skutečný zájem."
    },
    {
      step: 5,
      title: "Vyjednávání",
      description: "Vedu vyjednávání s kupujícími tak, abyste dosáhli co nejlepší ceny a podmínek. Zajišťuji, aby vše probíhalo férově a v souladu s vašimi zájmy."
    },
    {
      step: 6,
      title: "Bezpečný převod",
      description: "Kompletní právní servis včetně advokátní úschovy peněz a asistence při podpisu kupní smlouvy. Budu s vámi až do konce a vše proběhne bezpečně."
    }
  ],
  
  soldProperties: [
    {
      id: "pod-zlatym-navrsim",
      location: "Špindlerův Mlýn",
      type: "Apartmánové domy",
      size: "Developerský projekt",
      status: "prodáno" as const,
      description: "Luxusní apartmánové domy v srdci Krkonoš s výhledem na sjezdovky. Kompletní developerský projekt od výstavby po prodej všech jednotek. Moderní apartmány s dřevěnými prvky a výhledem do hor.",
      images: [
        "/images/properties/pod-zlaty-navrsim-apartmanove-domy.png",
        "/images/properties/pod-zlatym-navrsim-interier.png"
      ],
      website: "www.podzlatymnavrsim.cz"
    },
    {
      id: "rezidence-merunkova",
      location: "Hradec Králové",
      type: "Rezidenční projekt",
      size: "Bytové domy",
      status: "prodáno" as const,
      description: "Moderní rezidenční projekt v Hradci Králové. Energeticky úsporné bytové domy s nadstandardním vybavením a parkováním. Vzorové byty se světlým moderním interiérem.",
      images: [
        "/images/properties/rezidence-merunkova.png",
        "/images/properties/merunova-interier.png"
      ],
      website: "www.rezidencemerunkova.cz"
    }
  ],
  
  testimonials: [
    {
      name: "Pavel K.",
      location: "Praha 5 - Smíchov",
      rating: 5,
      text: "Michal mi pomohl prodat byt rychle a za výbornou cenu. Jeho profesionalita a osobní přístup byl nad očekávání.",
      date: "2024-11"
    },
    {
      name: "Jana M.",
      location: "Praha 6 - Dejvice",
      rating: 5,
      text: "Výborná komunikace, vše proběhlo hladce a bez starostí. Michal se postaral o všechny náležitosti.",
      date: "2024-10"
    },
    {
      name: "Tomáš S.",
      location: "Praha 10 - Vršovice",
      rating: 5,
      text: "Profesionální přístup, férové jednání. Prodej bytu proběhl rychleji, než jsem čekal.",
      date: "2024-09"
    }
  ]
}

export default agentData
