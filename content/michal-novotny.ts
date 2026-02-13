/**
 * Content Configuration - Michal Novotný
 * Realitní makléř Praha | ZFP Reality
 * 
 * Tento soubor obsahuje všechny editovatelné údaje pro osobní web makléře.
 * Pro vytvoření webu pro dalšího makléře stačí zkopírovat a upravit tento soubor.
 */

export interface AgentData {
  // Osobní údaje
  name: string;
  phone: string;
  email: string;
  location: string;
  region: string;
  company: string;
  photo?: string;
  
  // Hero sekce
  hero: {
    headline: string;
    subheadline: string;
  };
  
  // Statistiky důvěry
  trustStats: {
    soldProperties: string;
    rentedProperties: string;
    agents: string;
    tagline: string;
  };
  
  // Důvody proč prodávat s makléřem
  whyMe: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  
  // Proces práce
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  
  // Prodané nemovitosti
  soldProperties: Array<{
    id: string;
    location: string;
    type: string;
    size: string;
    status: 'prodáno' | 'pronajato';
    description: string;
    images: string[]; // Array fotek
    soldDate: string;
    website?: string;
  }>;
  
  // Reference
  testimonials: Array<{
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
  }>;
  
  // FAQ
  faq: Array<{
    question: string;
    answer: string;
  }>;
  
  // Social media (volitelné)
  social?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

export const agentData: AgentData = {
  // ========================================
  // OSOBNÍ ÚDAJE
  // ========================================
  name: "Michal Novotný",
  phone: "+420 736 242 624",
  email: "michal.novotny@zfpa.cz",
  location: "Praha",
  region: "Praha a okolí",
  company: "ZFP Reality / ZFP GROUP",
  photo: "/images/michal-novotny.jpg", // Přidat skutečné foto
  
  // ========================================
  // HERO SEKCE
  // ========================================
  hero: {
    headline: "Prodám vaši nemovitost v Praze bezpečně, s rozmyslem a bez stresu.",
    subheadline: "Jmenuji se Michal Novotný a pomáhám majitelům nemovitostí v Praze dosáhnout nejlepšího možného výsledku při prodeji."
  },
  
  // ========================================
  // STATISTIKY DŮVĚRY (ZFP REALITY)
  // ========================================
  trustStats: {
    soldProperties: "570+",
    rentedProperties: "270+",
    agents: "126",
    tagline: "Pracuji samostatně, ale s plným zázemím silné realitní sítě ZFP Reality."
  },
  
  // ========================================
  // PROČ PRODÁVAT SE MNOU
  // ========================================
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
      title: "Vyjednávání v váš prospěch",
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
  
  // ========================================
  // JAK PRACUJI (PROCES)
  // ========================================
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
  
  // ========================================
  // PRODANÉ NEMOVITOSTI (PORTFOLIO)
  // ========================================
  soldProperties: [
    {
      id: "pod-zlatym-navrsim",
      location: "Špindlerův Mlýn",
      type: "Apartmánové domy",
      size: "Developerský projekt",
      status: "prodáno",
      description: "Luxusní apartmánové domy v srdci Krkonoš s výhledem na sjezdovky. Kompletní developerský projekt od výstavby po prodej všech jednotek. Moderní apartmány s dřevěnými prvky a výhledem do hor.",
      images: [
        "/images/properties/pod-zlaty-navrsim-apartmanove-domy.png",
        "/images/properties/pod-zlatym-navrsim-interier.png"
      ],
      soldDate: "2024",
      website: "www.podzlatymnavrsim.cz"
    },
    {
      id: "rezidence-merunkova",
      location: "Hradec Králové",
      type: "Rezidenční projekt",
      size: "Bytové domy",
      status: "prodáno",
      description: "Moderní rezidenční projekt v Hradci Králové. Energeticky úsporné bytové domy s nadstandardním vybavením a parkováním. Vzorové byty se světlým moderním interiérem.",
      images: [
        "/images/properties/rezidence-merunkova.png",
        "/images/properties/merunova-interier.png"
      ],
      soldDate: "2024",
      website: "www.rezidencemerunkova.cz"
    }
  ],
  
  // ========================================
  // REFERENCE KLIENTŮ
  // ========================================
  testimonials: [
    {
      name: "Pavel K.",
      location: "Praha 5 - Smíchov",
      rating: 5,
      text: "Michal mi pomohl prodat byt rychle a za výbornou cenu. Jeho profesionalita a osobní přístup byl nad očekávání. Ocenil jsem zejména pravidelné informace o průběhu prodeje.",
      date: "2024-11"
    },
    {
      name: "Jana M.",
      location: "Praha 6 - Dejvice",
      rating: 5,
      text: "Výborná komunikace, vše proběhlo hladce a bez starostí. Michal se postaral o všechny náležitosti a my jsme se o nic nemuseli starat. Mohu jen doporučit.",
      date: "2024-10"
    },
    {
      name: "Tomáš S.",
      location: "Praha 10 - Vršovice",
      rating: 5,
      text: "Profesionální přístup, férové jednání. Prodej bytu proběhl rychleji, než jsem čekal. Michal má opravdu zkušenosti a ví, co dělá.",
      date: "2024-09"
    },
    {
      name: "Eva P.",
      location: "Praha 7 - Holešovice",
      rating: 5,
      text: "Jsem ráda, že jsem si vybrala Michala jako makléře. Pomohl mi s prodejem bytu po rozvodu a vše zvládl s maximální diskrétností a profesionalitou.",
      date: "2024-08"
    },
    {
      name: "Martin H.",
      location: "Praha 4 - Nusle",
      rating: 5,
      text: "Skvělý makléř. Pomohl nám nejen s pronájmem, ale i s výběrem kvalitního nájemce. Velmi spolehlivý a vstřícný.",
      date: "2024-09"
    },
    {
      name: "Lenka Š.",
      location: "Praha 8 - Libeň",
      rating: 5,
      text: "Michal nám poradil, jak nemovitost nejlépe připravit na prodej. Díky jeho radám jsme ji prodali za vyšší cenu, než jsme původně čekali.",
      date: "2024-10"
    }
  ],
  
  // ========================================
  // FAQ (ČASTO KLADENÉ DOTAZY)
  // ========================================
  faq: [
    {
      question: "Působíte pouze v Praze?",
      answer: "Primárně působím v Praze a blízkém okolí (do 20 km), kde mám nejlepší znalost trhu a mohu vám poskytnout tu nejlepší službu. Pro vzdálenější lokality se můžeme domluvit individuálně."
    },
    {
      question: "Kdy dává smysl použít makléře?",
      answer: "Makléř má smysl vždy, kdy chcete prodat nemovitost rychle, za správnou cenu a bez starostí. Zejména pokud nemáte čas na prohlídky, nejste si jistí cenou, nebo chcete právní jistotu."
    },
    {
      question: "Jak vysoká je vaše provize?",
      answer: "Provize se stanovuje individuálně podle typu a hodnoty nemovitosti. V ceně je zahrnut kompletní právní servis včetně advokátní úschovy. Rád vám ji upřesním po osobní konzultaci."
    },
    {
      question: "Jak dlouho trvá prodej nemovitosti?",
      answer: "Při správném ocenění a přípravě trvá prodej obvykle 1-3 měsíce. Záleží na typu nemovitosti, lokalitě a aktuální poptávce. Mým cílem je prodat rychle, ale za nejlepší cenu."
    },
    {
      question: "Co je součástí vašich služeb?",
      answer: "Kompletní servis: ocenění, příprava dokumentace, profesionální fotografie, marketing na všech portálech, screening zájemců, vyjednávání, právní servis včetně advokátní úschovy a asistence při převodu vlastnictví."
    },
    {
      question: "Mohu si s vámi domluvit osobní schůzku?",
      answer: "Samozřejmě! První konzultace je vždy zdarma a nezávazná. Můžete mi zavolat na +420 736 242 624 nebo napsat email a domluvíme se na termínu, který vám bude vyhovovat."
    }
  ],
  
  // ========================================
  // SOCIAL MEDIA (VOLITELNÉ)
  // ========================================
  social: {
    linkedin: "https://www.linkedin.com/in/michal-novotny-zfp",
    // facebook: "https://www.facebook.com/michal.novotny.zfp",
    // instagram: "https://www.instagram.com/zfp_michal_novotny_praha"
  }
};

// ========================================
// HELPER FUNKCE
// ========================================

/**
 * Vrátí iniciály jména pro avatar
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
};

/**
 * Formátuje telefonní číslo pro zobrazení
 */
export const formatPhone = (phone: string): string => {
  return phone.replace(/(\+420)(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
};

/**
 * Vrátí prodané nemovitosti podle filtru
 */
export const getFilteredProperties = (
  filter: 'all' | 'prodáno' | 'pronajato'
): typeof agentData.soldProperties => {
  if (filter === 'all') return agentData.soldProperties;
  return agentData.soldProperties.filter(p => p.status === filter);
};

/**
 * Vrátí počet prodaných/pronajatých nemovitostí
 */
export const getPropertyStats = () => {
  const sold = agentData.soldProperties.filter(p => p.status === 'prodáno').length;
  const rented = agentData.soldProperties.filter(p => p.status === 'pronajato').length;
  return { sold, rented, total: sold + rented };
};

// Default export
export default agentData;
