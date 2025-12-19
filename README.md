# Osobní web realitního makléře - Michal Novotný

> Profesionální prezentační web pro realitního makléře se zaměřením na nábor nemovitostí v Praze.  
> Součást ZFP Reality / ZFP GROUP

---

## 🎯 O projektu

Tento web slouží jako osobní prezentace realitního makléře Michala Novotného, který působí v Praze a okolí. Web je optimalizován pro:
- **Nábor nemovitostí** (lead generation)
- **Budování důvěry** (reference, portfolio)
- **SEO optimalizaci** (lokální vyhledávání)
- **Mobilní zařízení** (responsive design)

### Technologie
- **Framework:** Next.js 15 (App Router)
- **TypeScript:** Pro type safety
- **Styling:** TailwindCSS + ZFP Design System
- **Ikony:** Lucide React
- **Formuláře:** React Hook Form

---

## 🚀 Quick Start

### Instalace

```bash
# Klonování projektu
git clone https://github.com/zfp-reality/makler-michal-novotny.git
cd makler-michal-novotny

# Instalace dependencies
npm install

# Spuštění dev serveru
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000) v prohlížeči.

### Build pro produkci

```bash
npm run build
npm run start
```

---

## 📁 Struktura projektu

```
realitni-makler-michal-novotny/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (navigace, patička)
│   ├── page.tsx                 # Homepage
│   ├── jak-pracuji/            # Stránka "Jak pracuji"
│   ├── proc-s-maklerem/        # Stránka "Proč s makléřem"
│   ├── prodane-nemovitosti/    # Portfolio (KLÍČOVÉ)
│   ├── reference/              # Reference klientů
│   └── kontakt/                # Kontaktní stránka
├── components/                   # React komponenty
│   ├── Header.tsx              # Hlavička s navigací
│   ├── Footer.tsx              # Patička
│   ├── Hero.tsx                # Hero sekce s formulářem
│   ├── LeadForm.tsx            # Multi-step lead formulář
│   ├── TrustSection.tsx        # Statistiky ZFP
│   ├── WhyMeSection.tsx        # Důvody proč prodávat se mnou
│   ├── ProcessSection.tsx      # Proces práce (timeline)
│   └── CTASection.tsx          # Call-to-action sekce
├── content/                      # Editovatelný obsah
│   └── michal-novotny.ts       # Data makléře (HLAVNÍ CONFIG)
├── lib/                          # Utility funkce
│   ├── design-system.ts        # ZFP Design System
│   └── metadata.ts             # SEO metadata helpers
├── public/                       # Statické soubory
│   ├── images/
│   │   ├── michal-novotny.jpg  # Foto makléře
│   │   └── properties/         # Fotky nemovitostí
│   └── favi.ico                # Favicon (POVINNÝ)
├── tailwind.config.ts           # Tailwind konfigurace
├── tsconfig.json                # TypeScript konfigurace
└── package.json                 # Dependencies
```

---

## ✏️ Editace obsahu

### Změna osobních údajů

**Soubor:** `content/michal-novotny.ts`

```typescript
export const agentData = {
  name: "Michal Novotný",
  phone: "+420 736 242 624",
  email: "michal.novotny@zfpa.cz",
  location: "Praha",
  // ... další údaje
}
```

### Přidání prodané nemovitosti

```typescript
soldProperties: [
  {
    id: "property-007",
    location: "Praha 2 - Vinohrady",
    type: "Byt 3+1",
    size: "85 m²",
    status: "prodáno",
    description: "Reprezentativní byt v centru",
    image: "/images/properties/property-007.jpg",
    soldDate: "2024-12"
  },
  // ... další nemovitosti
]
```

### Přidání reference

```typescript
testimonials: [
  {
    name: "Petr N.",
    location: "Praha 3",
    rating: 5,
    text: "Skvělá spolupráce...",
    date: "2024-12"
  },
  // ... další reference
]
```

---

## 🎨 Design System (ZFP)

### Barvy

```typescript
// Primární
brand-orange: #CF5400      // CTA, odkazy, tlačítka
brand-orange-hover: #E07E3C // Hover efekt

// Text
text-dark: #333333         // Nadpisy, text
text-gray: #666666         // Doplňkový text

// Pozadí
bg-light: #F7F7F7         // Sekce pozadí
white: #FFFFFF            // Hlavní pozadí
```

### Typografie

- **Nadpisy:** Bree / Verdana Bold
- **Text:** Verdana Pro Light / Verdana
- **CTA:** Bree Bold, UPPERCASE

### Komponenty

**Primární CTA:**
```tsx
<button className="bg-brand-orange text-white hover:bg-brand-orange-hover 
                   px-8 py-4 rounded-lg font-bold uppercase">
  Získat odhad zdarma
</button>
```

**Sekundární CTA:**
```tsx
<button className="bg-white text-brand-orange border-2 border-brand-orange 
                   hover:bg-brand-orange hover:text-white 
                   px-8 py-4 rounded-lg font-bold uppercase">
  Zavolat
</button>
```

---

## 🔍 SEO

### Metadata

Každá stránka má vlastní metadata:

```typescript
export const metadata = {
  title: "Michal Novotný - Realitní makléř Praha | ZFP Reality",
  description: "Pomohu vám prodat nemovitost v Praze...",
}
```

### Schema.org

Implementováno JSON-LD pro:
- `Person` (osobní údaje)
- `RealEstateAgent` (profese)
- `LocalBusiness` (ZFP Reality)

### Sitemap

Automaticky generováno v `app/sitemap.ts`

---

## 📱 Responzivita

Web je plně responzivní pro:
- **Mobil:** 375px+ (1 sloupec)
- **Tablet:** 768px+ (2 sloupce)
- **Desktop:** 1024px+ (3 sloupce)

### Testování

```bash
# V prohlížeči: DevTools → Responsive mode
# Testovat breakpointy: 375px, 768px, 1024px, 1440px
```

---

## 🚢 Deployment

### Vercel (doporučeno)

```bash
# Instalace Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy na testovací doménu
vercel

# Produkční deploy
vercel --prod
```

### Netlify

```bash
# Instalace Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
netlify deploy --prod
```

### Vlastní doména

V Vercel/Netlify dashboardu:
1. Settings → Domains
2. Přidat: `michalnovotny.zfpreality.cz`
3. Nastavit DNS CNAME record
4. SSL certifikát: automaticky

---

## 🔄 Duplikace pro dalšího makléře

### Rychlý postup (15 minut)

```bash
# 1. Zkopírovat projekt
cp -r realitni-makler-michal-novotny realitni-makler-jan-novak

# 2. Vytvořit nový content file
cp content/michal-novotny.ts content/jan-novak.ts

# 3. Upravit data v jan-novak.ts
# - Jméno, telefon, email
# - Lokalita (Praha → Brno)
# - Bio, reference, prodané nemovitosti

# 4. Změnit import v lib/getAgentData.ts
export { agentData } from '@/content/jan-novak'

# 5. Aktualizovat metadata v každém page.tsx

# 6. Nahradit obrázky

# 7. Deploy na novou doménu
```

Detaily viz: **README_DUPLIKACE.md**

---

## 📋 Checklist před spuštěním

### Design & Brand
- [ ] Barvy ZFP správně použity
- [ ] Logo ZFP GROUP v hlavičce i patičce
- [ ] Text "Součást ZFP GROUP" viditelný
- [ ] Favicon /favi.ico přítomen
- [ ] CTA tlačítka mají hover efekt

### Obsah
- [ ] Osobní údaje správné
- [ ] Bio personalizované
- [ ] Min. 2-3 skutečné reference
- [ ] Min. 3-5 prodaných nemovitostí
- [ ] FAQ odpovídá lokalitě

### Funkcionalita
- [ ] Lead formulář funguje
- [ ] Kontaktní formulář funguje
- [ ] Telefon klikací (tel: link)
- [ ] Email klikací (mailto: link)
- [ ] Navigace funguje

### SEO
- [ ] Každá stránka: unique title
- [ ] Schema.org implementováno
- [ ] Sitemap.xml generována
- [ ] Robots.txt nastaven

### Performance
- [ ] Lighthouse score >90
- [ ] Obrázky optimalizované
- [ ] No console errors

---

## 🛠️ Troubleshooting

### "npm install" selže
```bash
# Smazat node_modules a lock file
rm -rf node_modules package-lock.json
npm install
```

### Změny se nezobrazují
```bash
# Vyčistit Next.js cache
rm -rf .next
npm run dev
```

### Build error
```bash
# Type check
npm run type-check

# Lint
npm run lint
```

---

## 📞 Podpora

**ZFP Reality**  
Web: https://zfpreality.cz  
Email: info@zfpreality.cz

**Technická podpora**  
Pro technické otázky ohledně webu kontaktujte vývojový tým.

---

## 📄 Licence

© 2024 ZFP Reality / ZFP GROUP. Všechna práva vyhrazena.

Tento projekt je chráněn autorskými právy a je určen výhradně pro použití makléři ZFP Reality.
