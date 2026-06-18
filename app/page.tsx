import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getCases, getSiteSettings, getHomeContent, getAssetUrl } from '@/lib/directus'
import { CaseCard } from '@/components/CaseCard'

export const metadata: Metadata = {
  title: 'Марина Барынина — эксперт по рекламе Wildberries',
  description: 'Помогаю селлерам и менеджерам WB перестать сливать бюджет и управлять рекламой системно',
}

export default async function HomePage() {
  const [cases, settings, home] = await Promise.all([
    getCases(),
    getSiteSettings(),
    getHomeContent(),
  ])

  const heroPhotoUrl = getAssetUrl(home.hero_photo)
  const aboutPhotoUrl = getAssetUrl(home.about_photo)
  const telegramUrl = settings.telegram_url

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-ink text-paper overflow-hidden">
        {/* Фото фон */}
        {heroPhotoUrl && (
          <div className="absolute inset-0">
            <Image
              src={heroPhotoUrl}
              alt="Марина Барынина"
              fill
              className="object-cover object-center opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
          </div>
        )}
        {!heroPhotoUrl && (
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-accent/20" />
        )}

        {/* Контент — flex-col, заголовок тянется к низу */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-9 pt-20 pb-16 flex flex-col min-h-screen">

          {/* Верхний пустой спейсер — занимает всё пространство */}
          <div className="flex-1" />

          {/* Subtitle посередине, смещён вниз пропорционально */}
          <div className="mb-16 md:mb-24">
            <p className="font-body text-sm md:text-base text-paper/45 max-w-sm leading-relaxed">
              {home.hero_subtitle}
            </p>
          </div>

          {/* Заголовок прямо над цифрами */}
          <div className="mb-10">
            <h1 className="font-heading text-[clamp(1.8rem,4vw,3.5rem)] uppercase text-paper leading-tight max-w-2xl"
              dangerouslySetInnerHTML={{
                __html: home.hero_title.replace(/Wildberries/gi, '<span style="color:#6E5C92">Wildberries</span>')
              }}
            />
          </div>

          {/* Нижняя строка: статистика + кнопка */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex gap-10 md:gap-16">
              {home.stats.map((s, i) => (
                <div key={i}>
                  <p className="font-heading text-4xl md:text-5xl font-bold text-paper leading-none">{s.num}</p>
                  <p className="font-body text-xs text-paper/40 tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-bracket-inv shrink-0">
              Telegram
            </a>
          </div>
        </div>

        {/* Декор линия */}
        <div className="absolute top-0 right-[30%] bottom-0 w-px bg-paper/5 hidden lg:block" />
      </section>

      {/* ── БОЛИ ─────────────────────────────────────────────── */}
      <section className="bg-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-tag mb-6">Ситуация</p>
              <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] uppercase text-ink leading-none">
                С чем приходят чаще всего
              </h2>
            </div>
            <div className="flex flex-col gap-0 pt-2 md:pt-16">
              {home.pains.map((pain, i) => (
                <div key={i} className="flex items-baseline gap-4 border-b border-ink/10 py-5">
                  <span className="font-body text-xs text-ink/25 tracking-widest shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-body text-base text-ink/70 leading-snug">{pain.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA после болей ──────────────────────────────────── */}
      <div className="bg-paper pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-9 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <p className="font-body text-base text-ink/50 max-w-xs">
            Узнайте, как выстроить рекламу системно — без слива бюджета
          </p>
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
            className="btn-bracket text-ink shrink-0">
            Написать в Telegram
          </a>
        </div>
      </div>

      {/* ── РЕЗУЛЬТАТЫ ───────────────────────────────────────── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <p className="section-tag text-paper/40 mb-6">После работы</p>
              <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] uppercase text-paper leading-none">
                Что изменится
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-paper/10 border border-paper/10">
              {home.results.map((r, i) => (
                <div key={i} className="bg-ink p-8">
                  <span className="font-body text-xs text-accent tracking-widest block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-body text-base text-paper/70 leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ПРОДУКТЫ ─────────────────────────────────────────── */}
      <section id="products" className="bg-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag mb-4">Продукты</p>
          <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] uppercase text-ink leading-none mb-16">
            Выберите свой путь
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border-t border-ink/15">
            {[
              { label: 'Только начинаю', title: 'База рекламы', sub: 'Мини-курс', href: '/mini', num: '01' },
              { label: 'Уже продаю, хочу рост', title: 'Флагманский курс', sub: 'Полная программа', href: '/course', num: '02' },
              { label: 'Есть команда', title: 'Стратегическое управление', sub: 'Менторинг', href: '/mentoring', num: '03' },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group border-b md:border-b-0 md:border-r border-ink/15 last:border-r-0 last:border-b-0 p-8 flex flex-col gap-6 hover:bg-ink/5 transition-colors"
              >
                <span className="font-body text-xs text-ink/25 tracking-widest">{p.num}</span>
                <div>
                  <p className="font-body text-xs text-ink/40 uppercase tracking-widest mb-3">{p.label}</p>
                  <h3 className="font-heading text-3xl md:text-4xl uppercase text-ink leading-tight group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm text-ink/40 mt-2">{p.sub}</p>
                </div>
                <span className="btn-bracket-accent self-start mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── КЕЙСЫ ────────────────────────────────────────────── */}
      {cases.length > 0 && (
        <section className="bg-ink text-paper py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-9">
            <div className="flex items-end justify-between mb-16 gap-8">
              <div>
                <p className="section-tag text-paper/40 mb-4">Кейсы</p>
                <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] uppercase text-paper leading-none">
                  Результаты клиентов
                </h2>
              </div>
              <Link href="/about" className="btn-bracket-inv shrink-0 hidden md:inline-flex">
                Все кейсы
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((c, i) => (
                <CaseCard key={c.id} item={c} index={i} />
              ))}
            </div>

            {/* CTA после кейсов */}
            <div className="mt-16 pt-16 border-t border-paper/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <p className="font-heading text-2xl md:text-3xl uppercase text-paper leading-tight max-w-sm">
                Хотите такой же результат?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
                  className="btn-bracket-inv">
                  Записаться
                </a>
                <Link href="#products" className="btn-bracket-accent">
                  Выбрать продукт
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ОБО МНЕ ──────────────────────────────────────────── */}
      <section className="bg-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Фото */}
            <div className="relative order-2 md:order-1">
              {aboutPhotoUrl ? (
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={aboutPhotoUrl}
                    alt="Марина Барынина"
                    fill
                    className="object-cover object-top"
                  />
                  {/* Акцентный прямоугольник-декор */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 -z-10" />
                </div>
              ) : (
                <div className="aspect-[3/4] bg-accent/10 border border-dashed border-accent/30 flex flex-col items-center justify-center gap-3 text-ink/30">
                  <span className="font-body text-sm text-center px-6">
                    Загрузите фото в Directus<br />Home Content → about_photo
                  </span>
                </div>
              )}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-ink/5 -z-10 hidden md:block" />
            </div>

            {/* Текст */}
            <div className="order-1 md:order-2">
              <p className="section-tag mb-6">Обо мне</p>
              <h2 className="font-heading text-[clamp(3rem,6vw,6rem)] uppercase text-ink leading-none mb-8">
                Привет,<br />я Марина
              </h2>
              <p className="font-body text-base text-ink/60 leading-relaxed max-w-md mb-10">
                {home.about_short}
              </p>
              <Link href="/about" className="btn-bracket text-ink">
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-ink text-paper py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <h2 className="font-heading text-[clamp(3rem,8vw,8rem)] uppercase text-paper leading-none max-w-2xl">
            Готовы начать?
          </h2>
          <div className="flex flex-col gap-4 shrink-0">
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-bracket-inv">
              Telegram-канал
            </a>
            <Link href="#products" className="btn-bracket-accent">
              Выбрать продукт
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
