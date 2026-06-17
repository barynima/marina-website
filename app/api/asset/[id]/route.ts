import { NextRequest, NextResponse } from 'next/server'

const DIRECTUS_URL = process.env.DIRECTUS_URL || 'http://194.87.83.234:8055'
const DIRECTUS_TOKEN = process.env.DIRECTUS_API_TOKEN || 'marina_directus_api_token_2024'

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`${DIRECTUS_URL}/assets/${params.id}`, {
    headers: { Authorization: `Bearer ${DIRECTUS_TOKEN}` },
  })

  if (!res.ok) return new NextResponse(null, { status: res.status })

  const contentType = res.headers.get('content-type') || 'image/jpeg'
  const body = await res.arrayBuffer()

  return new NextResponse(body, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
