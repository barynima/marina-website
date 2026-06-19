import { Metadata } from 'next'
import Link from 'next/link'
import { getAbout, getSiteSettings } from '@/lib/directus'

export const metadata: Metadata = {
  title: 'Обо мне — Марина Барынина, эксперт по рекламе WB',
  description: 'Эксперт по внутренней рекламе Wildberries. 200+ учеников, 10 лет в e-com.',
}

export default async function AboutPage() {
  const [about, settings] = await Promise.all([getAbout(), getSiteSettings()])

  return (
    <div className="min-h-screen bg-paper">

      {/* ── Hero ── */}
      <section className="bg-ink text-paper pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag text-paper/40 mb-6">Обо мне</p>
          <h1 className="font-heading text-[clamp(3.5rem,10vw,9rem)] uppercase text-paper leading-none mb-10">
            Марина<br />Барынина
          </h1>
          <p className="font-body text-lg md:text-xl text-paper/60 max-w-2xl leading-relaxed whitespace-pre-line">
            {about.headline}
          </p>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <p className="section-tag mb-6">История</p>
              <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] uppercase text-ink leading-none">
                Как я здесь оказалась
              </h2>
            </div>
            <div className="flex flex-col gap-6 pt-2 md:pt-4">
              {about.bio.map((p, i) => (
                <p key={i} className="font-body text-base md:text-lg text-ink/65 leading-relaxed border-b border-ink/8 pb-6 last:border-0 last:pb-0 whitespace-pre-line">
                  {p.paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag text-paper/40 mb-6">Метод</p>
          <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] uppercase text-paper leading-none mb-16">
            Подход к работе
          </h2>
          <div className="grid md:grid-cols-2 gap-0 border-t border-paper/10">
            {about.approach.map((a, i) => (
              <div key={i} className="border-b border-r-0 md:odd:border-r border-paper/10 py-8 px-6 md:px-10">
                <span className="font-body text-xs text-accent tracking-widest block mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-body text-base text-paper/70 leading-relaxed">{a.item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <p className="section-tag mb-6">Регалии</p>
              <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] uppercase text-ink leading-none">
                Факты
              </h2>
            </div>
            <div className="flex flex-col">
              {about.credentials.map((c, i) => (
                <div key={i} className="flex items-baseline gap-6 border-b border-ink/10 py-5">
                  <span className="font-body text-xs text-ink/25 tracking-widest shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-body text-base text-ink/70">{c.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <h2 className="font-heading text-[clamp(2.5rem,7vw,7rem)] uppercase text-paper leading-none">
            Работаем<br />вместе?
          </h2>
          <div className="flex flex-col gap-4 shrink-0">
            <a href={settings.telegram_url} target="_blank" rel="noopener noreferrer"
              className="btn-bracket-inv">
              Telegram-канал
            </a>
            <Link href="/#products" className="btn-bracket-accent">
              Выбрать продукт
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
