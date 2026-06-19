import { Metadata } from 'next'
import { getMentoringContent } from '@/lib/directus'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Стратегическое управление рекламой WB',
  description: 'Помогу выстроить прозрачную систему управления рекламой на Wildberries для вашей команды',
}

export default async function MentoringPage() {
  const content = await getMentoringContent()

  return (
    <div className="min-h-screen bg-paper">

      {/* ── Hero ── */}
      <section className="bg-ink text-paper pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag text-paper/40 mb-6">Для владельцев бизнеса</p>
          <h1 className="font-heading text-[clamp(3rem,8vw,8rem)] uppercase text-paper leading-none mb-10">
            {content.hero_title}
          </h1>
          <p className="font-body text-lg text-paper/60 max-w-2xl leading-relaxed whitespace-pre-line">
            {content.description}
          </p>
        </div>
      </section>

      {/* ── Боли ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-tag mb-6">Ситуация</p>
              <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-ink leading-none">
                Узнаёте себя?
              </h2>
            </div>
            <div className="flex flex-col pt-2 md:pt-4">
              {content.pains.map((p, i) => (
                <div key={i} className="flex items-baseline gap-4 border-b border-ink/10 py-5">
                  <span className="font-body text-xs text-ink/25 tracking-widest shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-body text-base text-ink/70">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Процесс ── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag text-paper/40 mb-6">Процесс</p>
          <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-paper leading-none mb-16">
            Как мы работаем
          </h2>
          <div className="grid md:grid-cols-2 gap-0 border-t border-paper/10">
            {content.process.map((f, i) => (
              <div key={i} className="border-b border-r-0 md:odd:border-r border-paper/10 py-8 md:pr-12">
                <span className="font-body text-xs text-accent tracking-widest block mb-4">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-heading text-2xl uppercase text-paper leading-tight mb-3">{f.title}</h3>
                <p className="font-body text-sm text-paper/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Результат ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <p className="section-tag mb-6">Итог</p>
              <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase text-ink leading-none">
                Результат для бизнеса
              </h2>
            </div>
            <div className="flex flex-col">
              {content.results.map((r, i) => (
                <div key={i} className="flex items-baseline gap-6 border-b border-ink/10 py-5">
                  <span className="font-body text-xs text-ink/25 tracking-widest shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-body text-base text-ink/70">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Мест мало ── */}
      {content.spots_note && (
        <section className="py-10 bg-accent/8 border-y border-accent/20">
          <div className="max-w-[1400px] mx-auto px-9 flex items-center gap-6">
            <div className="w-1 h-10 bg-accent shrink-0" />
            <div>
              <p className="font-heading text-xl uppercase text-ink">Ограниченное количество мест</p>
              <p className="font-body text-sm text-ink/60 mt-1 whitespace-pre-line">{content.spots_note}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── Форма ── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-heading text-[clamp(2.5rem,7vw,6rem)] uppercase text-paper leading-none">
              Оставьте<br />заявку
            </h2>
            <p className="font-body text-base text-paper/50 mt-6 max-w-sm leading-relaxed">
              Расскажите о ситуации — разберём, подходит ли вам этот формат
            </p>
          </div>
          <div className="pt-2">
            <ContactForm type="mentoring" />
          </div>
        </div>
      </section>
    </div>
  )
}
