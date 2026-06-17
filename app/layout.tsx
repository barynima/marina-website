import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SITE_CONFIG } from '@/config/site'
import { getSiteSettings } from '@/lib/directus'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

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
    <html lang="ru">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Header telegramUrl={settings.telegram_url} />
        <main className="pt-16">{children}</main>
        <Footer telegramUrl={settings.telegram_url} />
      </body>
    </html>
  )
}
