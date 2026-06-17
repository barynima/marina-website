import Link from 'next/link'

export function Footer({ telegramUrl }: { telegramUrl: string }) {
  return (
    <footer className="bg-ink text-paper/50">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-heading text-4xl font-bold uppercase text-paper tracking-tight leading-none">
            Марина
          </p>
          <p className="font-body text-xs tracking-[0.2em] uppercase mt-3 text-paper/40">
            Эксперт по рекламе WB
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-3">
          <p className="section-tag text-paper/30 mb-2">Навигация</p>
          {[
            { href: '/course', label: 'Курс' },
            { href: '/mini', label: 'База рекламы' },
            { href: '/about', label: 'Обо мне' },
            { href: '/mentoring', label: 'Курирование' },
            { href: '/privacy', label: 'Политика конфиденциальности' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm text-paper/50 hover:text-paper transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex flex-col gap-4">
          <p className="section-tag text-paper/30 mb-2">Контакт</p>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bracket-inv self-start"
          >
            Telegram
          </a>
        </div>
      </div>

      <div className="border-t border-paper/10 px-6 py-4 max-w-[1400px] mx-auto">
        <p className="font-body text-xs text-paper/20">© {new Date().getFullYear()} Марина. Все права защищены.</p>
      </div>
    </footer>
  )
}
