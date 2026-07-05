import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const rateLimitMap = new Map<string, { count: number, resetTime: number }>()
const WINDOW_SIZE_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS = 200 

export function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1'
  const limit = MAX_REQUESTS

  const now = Date.now()
  const key = `${ip}-api`
  
  const record = rateLimitMap.get(key)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + WINDOW_SIZE_MS })
    const response = NextResponse.next()
    response.headers.set('X-RateLimit-Limit', limit.toString())
    response.headers.set('X-RateLimit-Remaining', (limit - 1).toString())
    return response
  }

  if (record.count >= limit) {
    // Removed console.warn to prevent log spamming
    return NextResponse.json(
      { error: "Too Many Requests" },
      { 
        status: 429,
        headers: {
          'Retry-After': Math.ceil((record.resetTime - now) / 1000).toString(),
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': '0',
        }
      }
    )
  }

  record.count++
  rateLimitMap.set(key, record)
  
  const response = NextResponse.next()
  response.headers.set('X-RateLimit-Limit', limit.toString())
  response.headers.set('X-RateLimit-Remaining', (limit - record.count).toString())
  return response
}

export const config = {
  matcher: '/api/:path*',
}
