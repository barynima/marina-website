import { Metadata } from 'next'
import Link from 'next/link'
import { getAbout, getSiteSettings } from '@/lib/directus'

export const metadata: Metadata = {
  title: 'Обо мне — Марина, эксперт по рекламе WB',
  description: 'Эксперт по внутренней рекламе Wildberries с 2021 года. 200+ учеников, лучший наставник клуба Терра.',
}

export default async function AboutPage() {
  const [about, settings] = await Promise.all([getAbout(), getSiteSettings()])

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-700 to-indigo-600 py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Марина</h1>
          <p className="text-xl text-purple-100">{about.headline}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">Моя история</h2>
          <div className="flex flex-col gap-5">
            {about.bio.map((p, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed">{p.paragraph}</p>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Подход к работе</h2>
          <div className="flex flex-col gap-4">
            {about.approach.map((a, i) => (
              <div key={i} className="flex gap-4 bg-purple-50 rounded-xl p-5">
                <span className="text-purple-500 font-bold text-lg shrink-0">{i + 1}</span>
                <p className="text-purple-900 font-medium">{a.item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Регалии</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {about.credentials.map((c, i) => (
              <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <span className="text-purple-500 text-xl">★</span>
                <p className="text-gray-800 font-medium">{c.item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Работаем вместе?</h2>
            <p className="text-purple-100 mb-8">Подпишитесь на канал или выберите формат работы</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={settings.telegram_url} target="_blank" rel="noopener noreferrer"
                className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-xl hover:bg-purple-50 transition">
                Telegram-канал
              </a>
              <Link href="/#products"
                className="border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition">
                Выбрать продукт
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
