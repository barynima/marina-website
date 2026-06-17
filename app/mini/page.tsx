import { Metadata } from 'next'
import { getSiteSettings, getReviews, getFaq } from '@/lib/directus'
import { ReviewCard } from '@/components/ReviewCard'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'База рекламы — мини-курс для новичков WB',
  description: 'Мини-курс по рекламе Wildberries для новичков. Разберитесь в основах и запустите первую кампанию без слива бюджета',
}

const skills = [
  'Как устроена реклама на WB и зачем она нужна',
  'Типы рекламных кампаний и когда использовать каждый',
  'Как настроить первую кампанию без ошибок',
  'Базовые ставки и управление бюджетом',
  'На что смотреть в аналитике и как читать отчёты',
  'Типичные ошибки новичков и как их избежать',
]

export default async function MiniCoursePage() {
  const [settings, reviews, faq] = await Promise.all([
    getSiteSettings(),
    getReviews(),
    getFaq('mini'),
  ])

  const miniReviews = reviews.filter(r => r.product === 'База рекламы')

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 py-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-purple-200 text-sm font-semibold uppercase tracking-widest mb-4">Мини-курс</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">База рекламы</h1>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl">
            Для новичков на Wildberries, которые хотят разобраться в рекламе и запустить первую кампанию без слива бюджета
          </p>
          <a href={settings.mini_course_payment_url} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-purple-700 font-semibold px-10 py-4 rounded-xl hover:bg-purple-50 transition text-lg">
            Купить мини-курс
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">Для кого</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Только зарегистрировались на WB и хотите разобраться в рекламе','Уже запустили рекламу, но не понимаете, почему не работает','Хотите базу перед большим обучением','Боитесь слить бюджет с первого запуска'].map((t, i) => (
              <div key={i} className="flex gap-3 bg-purple-50 rounded-xl p-4">
                <span className="text-purple-500">→</span>
                <p className="text-purple-900">{t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Что вы получите</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((s, i) => (
              <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <span className="text-green-500 font-bold">✓</span>
                <p className="text-gray-800">{s}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-6">Формат</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[{icon:'🎥',title:'Записанные уроки',desc:'Смотрите в удобное время'},{icon:'⏱',title:'Без дедлайнов',desc:'Самостоятельный темп'},{icon:'♾',title:'Доступ навсегда',desc:'Возвращайтесь когда нужно'}].map((f, i) => (
              <div key={i} className="text-center bg-gray-50 rounded-2xl p-6">
                <div className="text-4xl mb-3">{f.icon}</div>
                <p className="font-bold text-lg">{f.title}</p>
                <p className="text-gray-500 text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Начните сегодня</h2>
            <p className="text-purple-100 mb-8">Разовая оплата · Доступ навсегда · Без подписки</p>
            <a href={settings.mini_course_payment_url} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-purple-700 font-semibold px-10 py-4 rounded-xl hover:bg-purple-50 transition text-lg">
              Купить мини-курс
            </a>
          </div>
        </section>

        {miniReviews.length > 0 && (
          <section className="py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Отзывы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {miniReviews.map((r) => <ReviewCard key={r.id} review={r} />)}
            </div>
          </section>
        )}

        {faq.length > 0 && (
          <section className="py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Частые вопросы</h2>
            <FaqAccordion items={faq} />
          </section>
        )}
      </div>
    </div>
  )
}
