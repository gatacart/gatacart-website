import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GataCart - Vos achats dans les règles de l\'art',
  description: 'GataCart - L\'application de gestion de vos courses et de votre budget. Optimisez votre parcours en magasin, suivez vos dépenses en temps réel et analysez votre budget.',
  keywords: ['GataCart', 'application courses', 'gestion budget', 'liste de courses', 'économies', 'shopping intelligent', 'suivi dépenses'],
  authors: [{ name: 'GataCart' }],
  applicationName: 'GataCart',
  openGraph: {
    title: 'GataCart - Vos achats dans les règles de l\'art',
    description: 'L\'application de gestion de vos courses et de votre budget',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'GataCart',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GataCart - Vos achats dans les règles de l\'art',
    description: 'L\'application de gestion de vos courses et de votre budget',
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
  verification: {
    google: 'votre-code-verification-google-search-console',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href="https://www.gatacart.com" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
