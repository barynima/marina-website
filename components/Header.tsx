'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/course', label: 'Курс' },
  { href: '/mini', label: 'База рекламы' },
  { href: '/about', label: 'Обо мне' },
  { href: '/mentoring', label: 'Курирование' },
]

export function Header({ telegramUrl }: { telegramUrl: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-normal">
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-xl font-bold tracking-widest uppercase text-ink hover:text-accent transition-colors">
          Марина
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-xs tracking-[0.15em] uppercase text-ink/60 hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bracket text-ink"
          >
            Telegram
          </a>
        </nav>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className={`block w-6 h-px bg-ink transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-paper border-t border-ink/10 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-heading text-3xl uppercase text-ink hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bracket text-ink self-start mt-4"
          >
            Telegram
          </a>
        </div>
      )}
    </header>
  )
}
