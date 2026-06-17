import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, telegram, email, company, message, type } = body

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  const typeLabels: Record<string, string> = {
    waitlist: '📋 Предзапись на курс',
    mentoring: '🏢 Заявка на курирование',
    consultation: '💬 Заявка на консультацию',
  }

  const text = [
    `${typeLabels[type] || '📩 Новая заявка'}`,
    `👤 Имя: ${name}`,
    `📱 Telegram: ${telegram}`,
    email ? `📧 Email: ${email}` : null,
    company ? `🏪 Магазин: ${company}` : null,
    message ? `💬 Сообщение: ${message}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  if (botToken && chatId) {
    const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    })
    if (!tgRes.ok) {
      return NextResponse.json({ error: 'Telegram error' }, { status: 500 })
    }
  }

  return NextResponse.json({ ok: true })
}
