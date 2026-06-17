'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/course', label: 'Курс' },
  { href: '/mini', label: 'База рекламы' },
  { href: '/about', label: 'Обо мне' },
  { href: '/mentoring', label: 'Курирование' },
]

export function Header({ telegramUrl }: { telegramUrl: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-purple-700 hover:text-purple-800 transition">
          Марина WB
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-purple-700 transition font-medium">
              {l.label}
            </Link>
          ))}
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
            className="ml-2 bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-purple-700 transition">
            Telegram
          </a>
        </nav>

        <button className="md:hidden p-2 text-gray-600" onClick={() => setOpen(!open)} aria-label="Меню">
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-purple-700 transition py-1">
              {l.label}
            </Link>
          ))}
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
            className="bg-purple-600 text-white text-sm font-semibold px-4 py-3 rounded-xl text-center hover:bg-purple-700 transition">
            Telegram
          </a>
        </div>
      )}
    </header>
  )
}
