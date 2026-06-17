export const COURSE_MODE: 'waitlist' | 'open' = 'waitlist'

export const COURSE_CONFIG = {
  mode: COURSE_MODE,
  startDate: '2025-09-01',
  price: 15000,
  paymentUrl: 'https://',
}

export const MINI_COURSE_PAYMENT_URL = 'https://'

export const TELEGRAM_URL = 'https://t.me/'

export const SITE_CONFIG = {
  name: 'Марина — эксперт по рекламе Wildberries',
  description: 'Помогаю селлерам и менеджерам WB перестать сливать бюджет и управлять рекламой системно',
  url: 'https://marina-wb.ru',
  directusUrl: process.env.DIRECTUS_URL || '',
  directusToken: process.env.DIRECTUS_API_TOKEN || '',
}
