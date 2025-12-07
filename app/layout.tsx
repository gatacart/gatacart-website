import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GataCart - Vos achats dans les règles de l\'art',
  description: 'Planifiez sans stress, analysez finement, maîtrisez votre budget. GataCart optimise vos courses et votre budget avec intelligence.',
  keywords: ['courses', 'budget', 'shopping', 'gestion', 'liste de courses', 'économies', 'GataCart'],
  authors: [{ name: 'GataCart' }],
  openGraph: {
    title: 'GataCart - Vos achats dans les règles de l\'art',
    description: 'Planifiez sans stress, analysez finement, maîtrisez votre budget',
    type: 'website',
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
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
