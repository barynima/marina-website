import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getCases, getSiteSettings, getHomeContent, getAssetUrl } from '@/lib/directus'
import { CaseCard } from '@/components/CaseCard'

export const metadata: Metadata = {
  title: 'Марина — эксперт по рекламе Wildberries',
  description: 'Помогаю селлерам и менеджерам WB перестать сливать бюджет и управлять рекламой системно',
}

const products = [
  { label: 'Только начинаю', sub: 'База рекламы (мини-курс)', href: '/mini', icon: '🚀' },
  { label: 'Уже продаю, хочу рост', sub: 'Флагманский курс', href: '/course', icon: '📈' },
  { label: 'Есть команда, нужен результат', sub: 'Курирование отдела', href: '/mentoring', icon: '🏢' },
]

export default async function HomePage() {
  const [cases, settings, home] = await Promise.all([
    getCases(),
    getSiteSettings(),
    getHomeContent(),
  ])

  const telegramUrl = settings.telegram_url
  const heroPhotoUrl = getAssetUrl(home.hero_photo)

  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 flex items-center">
        <div className="max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Текст */}
            <div className="flex-1">
              <p className="text-purple-200 text-sm font-semibold uppercase tracking-widest mb-4">
                Эксперт по рекламе Wildberries
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {home.hero_title}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-purple-100 max-w-2xl leading-relaxed">
                {home.hero_subtitle}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-xl hover:bg-purple-50 transition text-center"
                >
                  Подписаться на Telegram
                </a>
                <a
                  href="#products"
                  className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition text-center"
                >
                  Посмотреть продукты
                </a>
              </div>
            </div>

            {/* Фото */}
            {heroPhotoUrl ? (
              <div className="shrink-0">
                <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src={heroPhotoUrl}
                    alt="Марина — эксперт по рекламе WB"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="shrink-0">
                <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl bg-white/10 border-2 border-dashed border-white/30 flex flex-col items-center justify-center text-white/60 gap-3">
                  <span className="text-5xl">📸</span>
                  <p className="text-sm text-center px-4">Загрузите фото в Directus<br/>Home Content → hero_photo</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products nav */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Выберите свой путь</h2>
          <p className="text-gray-500 text-center mb-12">Найдите продукт под вашу ситуацию</p>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:border-purple-300 hover:shadow-md transition group"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <p className="text-gray-500 text-sm mb-2">{p.label}</p>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition">{p.sub}</h3>
                <p className="mt-4 text-purple-600 font-semibold text-sm">Перейти →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">С чем приходят чаще всего</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {home.pains.map((pain, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
                <span className="text-red-400 mt-0.5 text-lg">✗</span>
                <p className="text-gray-700">{pain.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Что изменится после работы</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {home.results.map((r, i) => (
              <div key={i} className="flex items-start gap-3 bg-purple-50 rounded-xl p-5">
                <span className="text-purple-500 mt-0.5 text-lg">✓</span>
                <p className="text-purple-900 font-medium">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-purple-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {home.stats.map((s, i) => (
              <div key={i}>
                <p className="text-5xl font-bold text-white">{s.num}</p>
                <p className="text-purple-200 mt-2 text-lg">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Кейсы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <CaseCard key={c.id} item={c} />
            ))}
          </div>
        </div>
      </section>

      {/* About short */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Привет, я Марина</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">{home.about_short}</p>
          <Link
            href="/about"
            className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Подробнее обо мне
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-700 to-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Готовы начать?</h2>
          <p className="text-purple-100 mb-10 text-lg">Подпишитесь на канал или выберите подходящий продукт</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-xl hover:bg-purple-50 transition"
            >
              Подписаться на Telegram
            </a>
            <a
              href="#products"
              className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition"
            >
              Выбрать продукт
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
