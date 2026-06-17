'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/course', label: 'Курс' },
  { href: '/mini', label: 'База рекламы' },
  { href: '/about', label: 'Обо мне' },
  { href: '/mentoring', label: 'Управление' },
]

function IconTelegram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.16 13.947l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.993.612z"/>
    </svg>
  )
}

function IconVK() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z"/>
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

export function Header({ telegramUrl }: { telegramUrl: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-ink/8">
      <div className="max-w-[1400px] mx-auto px-9 h-14 flex items-center justify-between">
        {/* Social icons вместо логотипа */}
        <div className="flex items-center gap-4">
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
            className="text-ink/50 hover:text-accent transition-colors">
            <IconTelegram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="text-ink/50 hover:text-accent transition-colors">
            <IconVK />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="text-ink/50 hover:text-accent transition-colors">
            <IconYouTube />
          </a>
        </div>

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
        <div className="md:hidden bg-paper border-t border-ink/10 px-9 py-8 flex flex-col gap-6">
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
