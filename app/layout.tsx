import type { Metadata } from 'next'
import { Oswald, Jost } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SITE_CONFIG } from '@/config/site'
import { getSiteSettings } from '@/lib/directus'

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
})

const jost = Jost({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jost',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: '%s | Марина WB',
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: 'Марина WB',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings()

  return (
    <html lang="ru" className={`${oswald.variable} ${jost.variable}`}>
      <body>
        <Header telegramUrl={settings.telegram_url} />
        <main>{children}</main>
        <Footer telegramUrl={settings.telegram_url} />
      </body>
    </html>
  )
}
