# 📧 NÁVOD: Nastavení odesílání formulářů přes EmailJS

## 🎯 Co je EmailJS?

EmailJS je služba, která umožňuje odesílat emaily z webových formulářů bez vlastního backendu. 
Emaily se odesílají přímo z prohlížeče přes EmailJS API.

**Výhody:**
- ✅ Zdarma do 200 emailů/měsíc
- ✅ Žádný backend potřeba
- ✅ Snadné nastavení
- ✅ Funguje s Gmail, Outlook, atd.

---

## 🚀 Krok za krokem setup

### 1️⃣ Registrace na EmailJS

1. Jděte na: **https://www.emailjs.com/**
2. Klikněte na **"Sign Up"** (vpravo nahoře)
3. Zaregistrujte se (email + heslo nebo přes Google)
4. Potvrzení emailem

---

### 2️⃣ Přidání Email Service

Po přihlášení:

1. V levém menu klikněte na **"Email Services"**
2. Klikněte na **"Add New Service"**
3. Vyberte **"Gmail"** (nebo Outlook/jiný podle vašeho emailu)
4. Zadejte:
   - **Service Name:** `ZFP Reality Gmail`
   - **Service ID:** (automaticky vygenerováno) - **ZKOPÍRUJTE SI!**
5. Klikněte **"Connect Account"**
6. Přihlaste se Google účtem `michal.novotny@zfpa.cz`
7. Povolte přístup
8. **HOTOVO** ✅

**Poznámka:** Service ID vypadá např. jako `service_abc123def`

---

### 3️⃣ Vytvoření Email Template

1. V levém menu klikněte na **"Email Templates"**
2. Klikněte na **"Create New Template"**
3. Zadejte název: `Kontaktní formulář - Web`

#### **Template obsah:**

**Subject (předmět):**
```
Nová zpráva z webu od {{from_name}}
```

**Content (tělo emailu):**
```
Dobrý den,

nová zpráva z kontaktního formuláře na webu:

---
ODESÍLATEL:
Jméno: {{from_name}}
Email: {{from_email}}
Telefon: {{from_phone}}

---
ZPRÁVA:
{{message}}

---
Tento email byl odeslán z formuláře na {{reply_to}}
```

4. **To Email:** `michal.novotny@zfpa.cz` (kam se budou odesílat emaily)
5. **From Name:** `{{from_name}}` (jméno z formuláře)
6. **Reply To:** `{{from_email}}` (email z formuláře)
7. Klikněte **"Save"**
8. **Template ID** se objeví nahoře - **ZKOPÍRUJTE SI!**

**Poznámka:** Template ID vypadá např. jako `template_xyz789abc`

---

### 4️⃣ Zkopírování Public Key

1. V levém menu klikněte na **"Account"**
2. V sekci **"General"** najděte **"Public Key"**
3. **ZKOPÍRUJTE SI!**

**Poznámka:** Public Key vypadá např. jako `abc123XYZ789`

---

### 5️⃣ Vytvoření .env.local souboru

V kořenové složce projektu vytvořte soubor `.env.local`:

```bash
# V terminálu VS Code:
touch .env.local
```

Otevřete `.env.local` a vložte:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123def
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789abc
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123XYZ789

# Kam se budou odesílat emaily
NEXT_PUBLIC_RECIPIENT_EMAIL=michal.novotny@zfpa.cz
```

**Nahraďte:**
- `service_abc123def` → Vaše Service ID
- `template_xyz789abc` → Vaše Template ID
- `abc123XYZ789` → Váš Public Key

**DŮLEŽITÉ:** 
- Soubor `.env.local` je v `.gitignore` → nebude commitnut do Gitu
- Při deployu na Vercel budete muset tyto proměnné zadat v nastavení

---

### 6️⃣ Aktualizace kódu

Kontaktní formulář (`/app/kontakt/page.tsx`) používá EmailJS:

```typescript
import emailjs from '@emailjs/browser'

const onSubmit = async (data: ContactFormData) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        message: data.message,
        reply_to: data.email,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    
    setIsSubmitted(true)
    alert('Děkuji za zprávu! Brzy se vám ozvu.')
  } catch (error) {
    console.error('Email error:', error)
    alert('Omlouváme se, něco se pokazilo. Zkuste to prosím znovu.')
  }
}
```

**Kód je už připravený!** Stačí jen nastavit ENV proměnné.

---

### 7️⃣ Test formuláře

1. **Restart serveru:**
   ```bash
   # Ctrl+C v terminálu
   npm run dev
   ```

2. **Otevřete:** http://localhost:3000/kontakt

3. **Vyplňte formulář:**
   - Jméno: Test Test
   - Email: test@test.cz
   - Telefon: +420123456789
   - Zpráva: Testovací zpráva

4. **Odešlete**

5. **Zkontrolujte inbox** `michal.novotny@zfpa.cz`
   - Měl by dorazit email s předmětem: "Nová zpráva z webu od Test Test"

---

## 📊 EmailJS Dashboard

V EmailJS dashboardu můžete:
- Sledovat počet odeslaných emailů
- Zobrazit historii
- Upravit template
- Přidat další email services
- Upgradovat na placený plán (pokud potřebujete >200/měsíc)

---

## 🔧 Troubleshooting

### ❌ Email se neodeslal

**Možné příčiny:**

1. **Špatné ENV proměnné**
   - Zkontrolujte `.env.local`
   - Restart serveru po změně ENV

2. **Nedostatečný kredit EmailJS**
   - Zkontrolujte dashboard → "Usage"
   - Free tier: 200 emailů/měsíc

3. **Gmail blokuje EmailJS**
   - Zkontrolujte Email Services → "Test" button
   - Možná potřeba povolit "Less secure apps" v Gmail

4. **Console errors**
   - Otevřete DevTools (F12)
   - Záložka Console
   - Zkopírujte error a google

---

### ❌ Email dorazil, ale chybí údaje

**Řešení:**
- Zkontrolujte template v EmailJS
- Ujistěte se, že placeholders odpovídají kódu:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{from_phone}}`
  - `{{message}}`

---

### ❌ Emaily končí ve spamu

**Řešení:**
1. Přidejte `michal.novotny@zfpa.cz` do kontaktů
2. V EmailJS: Email Services → Edit → "From Name" nastavte na "Web ZFP Reality"
3. Označte jeden email jako "Not Spam"

---

## 💡 Alternativy

Pokud EmailJS nefunguje nebo nechcete ho používat, můžete použít:

1. **Formspree** - https://formspree.io/ (free tier)
2. **Web3Forms** - https://web3forms.com/ (free, no registration)
3. **Netlify Forms** - pokud deployujete na Netlify
4. **Vercel Contact Form API** - pokud deployujete na Vercel

---

## 🎉 Hotovo!

Pokud vše funguje:
- ✅ Formuláře odesílají emaily na `michal.novotny@zfpa.cz`
- ✅ Leadform i kontaktní formulář používají stejný EmailJS setup
- ✅ Uživatel dostane potvrzení
- ✅ Vy dostanete všechny údaje emailem

---

**Nějaký problém?** Kontaktujte mě a pomohu!
