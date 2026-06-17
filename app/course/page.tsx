import { Metadata } from 'next'
import { getSiteSettings, getReviews, getFaq } from '@/lib/directus'
import { WaitlistForm } from '@/components/WaitlistForm'
import { ReviewCard } from '@/components/ReviewCard'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Флагманский курс по рекламе WB',
  description: 'Системный курс по внутренней рекламе Wildberries — выстройте управление рекламой и перестаньте сливать бюджет',
}

const modules = [
  'Модуль 1. Как устроены алгоритмы WB Ads — логика, которую нужно понять',
  'Модуль 2. Аудит кабинета — находим дыры и точки роста',
  'Модуль 3. Структура кампаний и типы рекламы',
  'Модуль 4. Ставки, ДРР и управление бюджетом',
  'Модуль 5. Минус-слова, таргетинг и аналитика',
  'Модуль 6. Система контроля и масштабирование',
]

export default async function CoursePage() {
  const [settings, reviews, faq] = await Promise.all([
    getSiteSettings(),
    getReviews(),
    getFaq('course'),
  ])

  const isOpen = settings.course_mode === 'open'

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-700 to-indigo-600 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-purple-200 text-sm font-semibold uppercase tracking-widest mb-4">Флагманский курс</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Реклама на WB: от хаоса к системе
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            6-недельный курс для тех, кто хочет управлять рекламой самостоятельно и получать измеримый результат
          </p>
          {isOpen ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 rounded-xl px-6 py-3 text-white">
                <p className="text-sm text-purple-200">Старт</p>
                <p className="font-bold">{new Date(settings.course_start_date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
              <div className="bg-white/10 rounded-xl px-6 py-3 text-white">
                <p className="text-sm text-purple-200">Стоимость</p>
                <p className="font-bold">{settings.course_price.toLocaleString('ru-RU')} ₽</p>
              </div>
            </div>
          ) : (
            <div className="bg-white/10 rounded-xl px-6 py-4 text-white inline-block">
              <p className="font-semibold">Сейчас идёт набор в предзапись</p>
              <p className="text-purple-200 text-sm mt-1">Оставьте заявку — сообщим о старте первыми</p>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">Для кого этот курс</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Тратите бюджет на рекламу, но не понимаете, почему не окупается','Работаете с менеджером, но не можете оценить его работу','Хотите масштабироваться, но не знаете с чего начать','Хаос в кабинете — непонятно, что работает, а что нет'].map((t, i) => (
              <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-red-400">✗</span>
                <p className="text-gray-700">{t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Результат после курса</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Поймёте логику алгоритмов WB Ads','Выстроите структуру кампаний с нуля','Научитесь управлять ставками и ДРР','Сможете самостоятельно оценивать работу подрядчика','Внедрите систему аналитики и контроля','Получите предсказуемый результат'].map((r, i) => (
              <div key={i} className="flex gap-3 bg-purple-50 rounded-xl p-4">
                <span className="text-purple-500">✓</span>
                <p className="text-purple-900 font-medium">{r}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Программа курса</h2>
          <div className="flex flex-col gap-3">
            {modules.map((m, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <span className="text-purple-600 font-bold text-lg w-8 shrink-0">{i + 1}</span>
                <p className="text-gray-800">{m}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-6">Формат и длительность</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[{icon:'🎥',title:'Видеоуроки',desc:'Доступ навсегда'},{icon:'💬',title:'Закрытый чат',desc:'Обратная связь'},{icon:'📋',title:'6 недель',desc:'Основная программа'}].map((f, i) => (
              <div key={i} className="text-center bg-gray-50 rounded-2xl p-6">
                <div className="text-4xl mb-3">{f.icon}</div>
                <p className="font-bold text-lg">{f.title}</p>
                <p className="text-gray-500 text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {reviews.filter(r => r.product !== 'Курирование отдела').length > 0 && (
          <section className="py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Отзывы учеников</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.filter(r => r.product !== 'Курирование отдела').map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          </section>
        )}

        {faq.length > 0 && (
          <section className="py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Частые вопросы</h2>
            <FaqAccordion items={faq} />
          </section>
        )}

        <section className="py-16 border-t">
          {isOpen ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Записаться на курс</h2>
              <p className="text-gray-500 mb-8">
                Старт {new Date(settings.course_start_date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })} · {settings.course_price.toLocaleString('ru-RU')} ₽
              </p>
              <a href={settings.course_payment_url} target="_blank" rel="noopener noreferrer"
                className="bg-purple-600 text-white font-semibold px-10 py-4 rounded-xl hover:bg-purple-700 transition text-lg">
                Записаться
              </a>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold mb-3">Записаться в предзапись</h2>
              <p className="text-gray-500 mb-8">Оставьте контакты — напишем, когда откроется набор</p>
              <div className="max-w-md"><WaitlistForm /></div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
