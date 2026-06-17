import Link from 'next/link'

export function Footer({ telegramUrl }: { telegramUrl: string }) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-semibold">Марина WB</p>
          <p className="text-sm mt-1">Эксперт по внутренней рекламе Wildberries</p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="hover:text-white transition">Главная</Link>
          <Link href="/course" className="hover:text-white transition">Курс</Link>
          <Link href="/mini" className="hover:text-white transition">База рекламы</Link>
          <Link href="/about" className="hover:text-white transition">Обо мне</Link>
          <Link href="/mentoring" className="hover:text-white transition">Курирование</Link>
          <Link href="/privacy" className="hover:text-white transition">Политика конфиденциальности</Link>
        </nav>

        <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 font-semibold transition">
          Telegram-канал
        </a>
      </div>
    </footer>
  )
}
