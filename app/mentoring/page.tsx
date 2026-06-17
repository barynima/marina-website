import { Metadata } from 'next'
import { getSiteSettings } from '@/lib/directus'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Курирование отдела рекламы WB',
  description: 'Помогу выстроить прозрачную систему управления рекламой на Wildberries для вашей команды',
}

const pains = [
  'Подрядчик ничего не объясняет — платите и надеетесь',
  'Непонятно, за что именно вы платите',
  'Показатели стагнируют, роста нет',
  'Реклама — чёрный ящик для руководителя',
]

const format = [
  { title: 'Аудит текущей ситуации', desc: 'Разбираем рекламный кабинет, структуру кампаний, аналитику и работу команды' },
  { title: 'Система отчётности', desc: 'Выстраиваем понятные метрики и дашборды, чтобы вы видели реальную картину' },
  { title: 'Сопровождение команды', desc: 'Регулярные созвоны, обратная связь по кампаниям, разбор ошибок менеджера' },
  { title: 'Передача знаний', desc: 'Команда учится работать самостоятельно — вы перестаёте зависеть от подрядчика' },
]

const results = [
  'Прозрачность — понимаете, что происходит с рекламой',
  'Система — менеджер работает по понятным правилам',
  'Контроль — умеете оценивать результаты работы',
  'Рост — показатели улучшаются на протяжении всей работы',
]

export default async function MentoringPage() {
  const settings = await getSiteSettings()

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-purple-900 py-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-purple-300 text-sm font-semibold uppercase tracking-widest mb-4">Для владельцев бизнеса</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Курирование отдела рекламы</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            У вас есть команда или менеджер по WB, но реклама — чёрный ящик. Я помогу выстроить прозрачную систему, где каждый рубль работает на результат.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">Узнаёте себя?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {pains.map((p, i) => (
              <div key={i} className="flex gap-3 bg-red-50 border border-red-100 rounded-xl p-5">
                <span className="text-red-400 shrink-0">✗</span>
                <p className="text-red-900">{p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Что происходит в рамках курирования</h2>
          <div className="flex flex-col gap-4">
            {format.map((f, i) => (
              <div key={i} className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="bg-purple-600 text-white font-bold rounded-xl w-10 h-10 flex items-center justify-center shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{f.title}</h3>
                  <p className="text-gray-600 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Результат для вашего бизнеса</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <div key={i} className="flex gap-3 bg-purple-50 rounded-xl p-5">
                <span className="text-purple-500">✓</span>
                <p className="text-purple-900 font-medium">{r}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-bold text-amber-900">Ограниченное количество мест</p>
              <p className="text-amber-800 mt-1">{settings.mentoring_spots_text}</p>
            </div>
          </div>
        </section>

        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-3">Оставьте заявку</h2>
          <p className="text-gray-500 mb-8">Расскажите о ситуации — разберём, подходит ли вам этот формат</p>
          <div className="max-w-lg"><ContactForm type="mentoring" /></div>
        </section>
      </div>
    </div>
  )
}
