import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Michal Novotný - Realitní makléř Praha | ZFP Reality',
  description: 'Dvorní realitní makléř ZFP Reality. Specializace na developerské projekty v Praze a okolí. 570+ prodaných nemovitostí, 15+ let zkušeností. Kompletní servis od ocenění po předání klíčů.',
  keywords: [
    'realitní makléř Praha',
    'prodej nemovitosti Praha',
    'ZFP Reality',
    'odhad nemovitosti',
    'developerské projekty',
    'Michal Novotný',
    'realitní služby Praha',
    'prodej bytu Praha',
    'realitní poradenství'
  ],
  authors: [{ name: 'Michal Novotný', url: 'https://michalnovotny.cz' }],
  creator: 'Michal Novotný',
  publisher: 'ZFP Reality',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Michal Novotný - Realitní makléř Praha | ZFP Reality',
    description: 'Dvorní realitní makléř ZFP Reality se specializací na developerské projekty. 570+ prodaných nemovitostí, osobní přístup, kompletní servis.',
    url: 'https://michalnovotny.cz',
    siteName: 'Michal Novotný - Realitní makléř',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: '/images/michal-novotny.png',
        width: 800,
        height: 800,
        alt: 'Michal Novotný - Realitní makléř Praha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michal Novotný - Realitní makléř Praha',
    description: 'Dvorní realitní makléř ZFP Reality. 570+ prodaných nemovitostí.',
    images: ['/images/michal-novotny.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Přidejte po vytvoření Google Search Console
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://michalnovotny.cz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="font-body antialiased bg-white text-text-dark">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
