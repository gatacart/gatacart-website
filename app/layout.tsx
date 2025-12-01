import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GataCart - Le Grenier Organisé de vos Courses',
  description: 'Planifiez sans stress, analysez finement, maîtrisez votre budget',
  keywords: ['courses', 'budget', 'shopping', 'gestion'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
