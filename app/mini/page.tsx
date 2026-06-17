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

const forWhom = [
  'Только зарегистрировались на WB и хотите разобраться в рекламе',
  'Уже запустили рекламу, но не понимаете, почему не работает',
  'Хотите базу перед большим обучением',
  'Боитесь слить бюджет с первого запуска',
]

export default async function MiniCoursePage() {
  const [settings, reviews, faq] = await Promise.all([
    getSiteSettings(),
    getReviews(),
    getFaq('mini'),
  ])

  const miniReviews = reviews.filter(r => r.product === 'База рекламы')

  return (
    <div className="min-h-screen bg-paper">

      {/* ── Hero ── */}
      <section className="bg-ink text-paper pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag text-paper/40 mb-6">Мини-курс</p>
          <h1 className="font-heading text-[clamp(3.5rem,10vw,9rem)] uppercase text-paper leading-none mb-10">
            База<br />рекламы
          </h1>
          <p className="font-body text-lg text-paper/60 max-w-xl leading-relaxed mb-12">
            Для новичков на Wildberries, которые хотят разобраться в рекламе и запустить первую кампанию без слива бюджета
          </p>
          <a href={settings.mini_course_payment_url} target="_blank" rel="noopener noreferrer"
            className="btn-bracket-inv">
            Купить мини-курс
          </a>
        </div>
      </section>

      {/* ── Для кого ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-tag mb-6">Аудитория</p>
              <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-ink leading-none">
                Для кого
              </h2>
            </div>
            <div className="flex flex-col pt-2 md:pt-4">
              {forWhom.map((t, i) => (
                <div key={i} className="flex items-baseline gap-4 border-b border-ink/10 py-5">
                  <span className="font-body text-xs text-ink/25 tracking-widest shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-body text-base text-ink/70">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Что получите ── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag text-paper/40 mb-6">Содержание</p>
          <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-paper leading-none mb-16">
            Что вы получите
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-paper/10 border border-paper/10">
            {skills.map((s, i) => (
              <div key={i} className="bg-ink p-8">
                <span className="font-body text-xs text-accent tracking-widest block mb-3">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-body text-base text-paper/70 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Формат ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag mb-6">Формат</p>
          <div className="grid md:grid-cols-3 gap-0 border-t border-ink/15">
            {[
              { title: 'Записанные уроки', desc: 'Смотрите в удобное время' },
              { title: 'Без дедлайнов', desc: 'Самостоятельный темп' },
              { title: 'Доступ навсегда', desc: 'Возвращайтесь когда нужно' },
            ].map((f, i) => (
              <div key={i} className="border-b md:border-b-0 md:border-r border-ink/15 last:border-0 py-8 md:pr-12">
                <h3 className="font-heading text-3xl uppercase text-ink leading-tight mb-2">{f.title}</h3>
                <p className="font-body text-sm text-ink/40">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Отзывы ── */}
      {miniReviews.length > 0 && (
        <section className="bg-ink text-paper py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-9">
            <p className="section-tag text-paper/40 mb-6">Отзывы</p>
            <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-paper leading-none mb-16">
              Говорят ученики
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {miniReviews.map((r, i) => (
                <ReviewCard key={r.id} review={r} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faq.length > 0 && (
        <section className="py-24 md:py-36 border-t border-ink/10">
          <div className="max-w-[1400px] mx-auto px-9">
            <p className="section-tag mb-6">FAQ</p>
            <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-ink leading-none mb-16">
              Частые вопросы
            </h2>
            <FaqAccordion items={faq} />
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div>
            <h2 className="font-heading text-[clamp(2.5rem,7vw,7rem)] uppercase text-paper leading-none">
              Начните<br />сегодня
            </h2>
            <p className="font-body text-base text-paper/50 mt-6">
              Разовая оплата · Доступ навсегда · Без подписки
            </p>
          </div>
          <a href={settings.mini_course_payment_url} target="_blank" rel="noopener noreferrer"
            className="btn-bracket-inv shrink-0">
            Купить мини-курс
          </a>
        </div>
      </section>
    </div>
  )
}
