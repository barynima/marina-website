const DIRECTUS_URL = process.env.DIRECTUS_URL || 'http://194.87.83.234:8055'
const DIRECTUS_TOKEN = process.env.DIRECTUS_API_TOKEN || 'marina_directus_api_token_2024'

async function fetchDirectus<T>(path: string): Promise<T> {
  const res = await fetch(`${DIRECTUS_URL}${path}`, {
    headers: { Authorization: `Bearer ${DIRECTUS_TOKEN}` },
    next: { revalidate: 60 },
  })
  if (!res.ok) throw new Error(`Directus error: ${res.status} ${path}`)
  const json = await res.json()
  return json.data as T
}

export interface Case {
  id: number
  before: string
  action: string
  result: string
}

export interface Review {
  id: number
  name: string
  text: string
  product: string
}

export interface FaqItem {
  id: number
  section: 'course' | 'mini'
  question: string
  answer: string
}

export interface About {
  headline: string
  photo: string | null
  bio: { paragraph: string }[]
  approach: { item: string }[]
  credentials: { item: string }[]
}

export interface SiteSettings {
  telegram_url: string
  course_mode: 'waitlist' | 'open'
  course_start_date: string
  course_price: number
  course_payment_url: string
  mini_course_payment_url: string
  mentoring_spots_text: string
}

export const getCases = () =>
  fetchDirectus<Case[]>('/items/cases?filter[status][_eq]=published&sort=sort')

export const getReviews = () =>
  fetchDirectus<Review[]>('/items/reviews?filter[status][_eq]=published&sort=sort')

export const getFaq = (section: 'course' | 'mini') =>
  fetchDirectus<FaqItem[]>(`/items/faq?filter[status][_eq]=published&filter[section][_eq]=${section}&sort=sort`)

export const getAbout = () =>
  fetchDirectus<About>('/items/about/1')

export const getSiteSettings = () =>
  fetchDirectus<SiteSettings>('/items/site_settings/1')

export interface HomeContent {
  hero_title: string
  hero_subtitle: string
  hero_photo: string | null
  about_photo: string | null
  pains: { text: string }[]
  results: { text: string }[]
  stats: { num: string; label: string }[]
  about_short: string
}

export const getHomeContent = () =>
  fetchDirectus<HomeContent>('/items/home_content/1')

export interface CourseContent {
  hero_title: string
  hero_subtitle: string
  hero_photo: string | null
  description: string
  for_whom: { text: string }[]
  results: { text: string }[]
  modules: { title: string; desc: string }[]
  format: { title: string; desc: string }[]
}

export interface MiniContent {
  hero_title: string
  hero_photo: string | null
  description: string
  for_whom: { text: string }[]
  skills: { text: string }[]
  format: { title: string; desc: string }[]
}

export interface MentoringContent {
  hero_title: string
  hero_photo: string | null
  description: string
  pains: { text: string }[]
  process: { title: string; desc: string }[]
  results: { text: string }[]
  spots_note: string
}

export const getCourseContent = () =>
  fetchDirectus<CourseContent>('/items/course_content/1')

export const getMiniContent = () =>
  fetchDirectus<MiniContent>('/items/mini_content/1')

export const getMentoringContent = () =>
  fetchDirectus<MentoringContent>('/items/mentoring_content/1')

export const getAssetUrl = (fileId: string | null) =>
  fileId ? `/api/asset/${fileId}` : null
