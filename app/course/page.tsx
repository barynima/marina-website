import Image from 'next/image'
import { Metadata } from 'next'
import { getSiteSettings, getReviews, getFaq, getCourseContent, getAssetUrl } from '@/lib/directus'
import { WaitlistForm } from '@/components/WaitlistForm'
import { ReviewCard } from '@/components/ReviewCard'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Флагманский курс по рекламе WB',
  description: 'Системный курс по внутренней рекламе Wildberries — выстройте управление рекламой и перестаньте сливать бюджет',
}

export default async function CoursePage() {
  const [settings, reviews, faq, content] = await Promise.all([
    getSiteSettings(),
    getReviews(),
    getFaq('course'),
    getCourseContent(),
  ])

  const isOpen = settings.course_mode === 'open'
  const courseReviews = reviews.filter(r => r.product !== 'Курирование отдела')
  const heroPhotoUrl = getAssetUrl(content.hero_photo)

  return (
    <div className="min-h-screen bg-paper">

      {/* ── Hero ── */}
      <section className="relative bg-ink text-paper pt-32 pb-20 overflow-hidden">
        {heroPhotoUrl && (
          <div className="absolute inset-0">
            <Image src={heroPhotoUrl} alt="" fill className="object-cover object-center opacity-30" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" />
          </div>
        )}
        <div className="relative z-10 max-w-[1400px] mx-auto px-9">
          <p className="section-tag text-paper/40 mb-6">Флагманский курс</p>
          <h1 className="font-heading uppercase leading-none mb-4">
            <span className="text-[clamp(3rem,9vw,8rem)] text-paper">
              <span className="text-accent">WB</span> {content.hero_title.replace(/^WB\s*/i, '')}
            </span>
          </h1>
          <p className="font-heading text-[clamp(1.2rem,3vw,2.2rem)] uppercase text-paper/35 leading-none mb-10">
            {content.hero_subtitle.split(/к системе/i).map((part, i, arr) =>
              i < arr.length - 1
                ? <span key={i}>{part}<span className="text-accent">→</span> к системе</span>
                : <span key={i}>{part}</span>
            )}
          </p>
          <p className="font-body text-lg text-paper/60 max-w-xl leading-relaxed mb-12 whitespace-pre-line">
            {content.description}
          </p>

          {isOpen ? (
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <div className="border-t border-paper/20 pt-5 pr-12">
                <p className="section-tag text-paper/30 mb-2">Старт</p>
                <p className="font-heading text-2xl uppercase text-paper">
                  {new Date(settings.course_start_date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </div>
              <div className="border-t border-paper/20 pt-5 pr-12">
                <p className="section-tag text-paper/30 mb-2">Стоимость</p>
                <p className="font-heading text-2xl uppercase text-paper">
                  {settings.course_price.toLocaleString('ru-RU')} ₽
                </p>
              </div>
              <div className="border-t border-accent pt-5 mt-auto">
                <a href={settings.course_payment_url} target="_blank" rel="noopener noreferrer" className="btn-bracket-inv">
                  Записаться на курс
                </a>
              </div>
            </div>
          ) : (
            <div className="border-t border-paper/20 pt-5">
              <p className="font-heading text-xl uppercase text-paper/60">Сейчас — предзапись</p>
              <p className="font-body text-sm text-paper/40 mt-2">Оставьте заявку — сообщим о старте первыми</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Для кого ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-tag mb-6">Аудитория</p>
              <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-ink leading-none">
                Для кого этот курс
              </h2>
            </div>
            <div className="flex flex-col pt-2 md:pt-4">
              {content.for_whom.map((t, i) => (
                <div key={i} className="flex items-baseline gap-4 border-b border-ink/10 py-5">
                  <span className="font-body text-xs text-ink/25 tracking-widest shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-body text-base text-ink/70">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA после "для кого" */}
        <div className="max-w-[1400px] mx-auto px-9 pt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <p className="font-body text-base text-ink/50 max-w-xs">Это про вас? Разберём вашу ситуацию на старте</p>
          {isOpen
            ? <a href={settings.course_payment_url} target="_blank" rel="noopener noreferrer" className="btn-bracket text-ink shrink-0">Записаться на курс</a>
            : <a href={settings.telegram_url} target="_blank" rel="noopener noreferrer" className="btn-bracket text-ink shrink-0">Написать в Telegram</a>
          }
        </div>
      </section>

      {/* ── Результат ── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag text-paper/40 mb-6">После курса</p>
          <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-paper leading-none mb-16">
            Что изменится
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-paper/10 border border-paper/10">
            {content.results.map((r, i) => (
              <div key={i} className="bg-ink p-8">
                <span className="font-body text-xs text-accent tracking-widest block mb-3">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-body text-base text-paper/70 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>

          {/* CTA после результатов */}
          <div className="mt-16 pt-12 border-t border-paper/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <p className="font-heading text-2xl md:text-3xl uppercase text-paper leading-tight max-w-sm">
              Хотите такой же результат?
            </p>
            {isOpen
              ? <a href={settings.course_payment_url} target="_blank" rel="noopener noreferrer" className="btn-bracket-inv shrink-0">Записаться</a>
              : <a href={settings.telegram_url} target="_blank" rel="noopener noreferrer" className="btn-bracket-inv shrink-0">В предзапись</a>
            }
          </div>
        </div>
      </section>

      {/* ── Программа ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag mb-6">Программа</p>
          <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-ink leading-none mb-16">
            {content.modules.length} модулей
          </h2>
          <div className="grid md:grid-cols-2 gap-0 border-t border-ink/15">
            {content.modules.map((m, i) => (
              <div key={i} className="border-b border-r-0 md:odd:border-r border-ink/15 py-8 px-6 md:px-10">
                <span className="font-body text-xs text-ink/25 tracking-widest block mb-3">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-heading text-2xl uppercase text-ink leading-tight mb-2">{m.title}</h3>
                <p className="font-body text-sm text-ink/50 whitespace-pre-line">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Формат ── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag text-paper/40 mb-6">Формат</p>
          <div className="grid md:grid-cols-3 gap-0 border-t border-paper/10">
            {content.format.map((f, i) => (
              <div key={i} className="border-b md:border-b-0 md:border-r border-paper/10 last:border-0 py-8 px-6 md:px-10">
                <h3 className="font-heading text-3xl uppercase text-paper leading-tight mb-2">{f.title}</h3>
                <p className="font-body text-sm text-paper/40">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Отзывы ── */}
      {courseReviews.length > 0 && (
        <section className="py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-9">
            <p className="section-tag mb-6">Отзывы</p>
            <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-ink leading-none mb-16">
              Говорят ученики
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {courseReviews.map((r, i) => <ReviewCard key={r.id} review={r} index={i} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faq.length > 0 && (
        <section className="bg-paper border-t border-ink/10 py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-9">
            <p className="section-tag mb-6">FAQ</p>
            <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-ink leading-none mb-16">
              Частые вопросы
            </h2>
            <FaqAccordion items={faq} />
          </div>
        </section>
      )}

      {/* ── CTA запись ── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          {isOpen ? (
            <>
              <div>
                <h2 className="font-heading text-[clamp(2.5rem,7vw,7rem)] uppercase text-paper leading-none">
                  Записаться<br />на курс
                </h2>
                <p className="font-body text-base text-paper/50 mt-6">
                  Старт {new Date(settings.course_start_date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                  &nbsp;·&nbsp;{settings.course_price.toLocaleString('ru-RU')} ₽
                </p>
              </div>
              <a href={settings.course_payment_url} target="_blank" rel="noopener noreferrer" className="btn-bracket-inv shrink-0">
                Записаться
              </a>
            </>
          ) : (
            <>
              <div>
                <h2 className="font-heading text-[clamp(2.5rem,7vw,7rem)] uppercase text-paper leading-none">
                  Предзапись
                </h2>
                <p className="font-body text-base text-paper/50 mt-6">
                  Оставьте контакты — напишем, когда откроется набор
                </p>
              </div>
              <div className="w-full max-w-md"><WaitlistForm /></div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
