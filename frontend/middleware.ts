import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Protect all /admin routes with simple HTTP Basic Auth
  if (pathname.startsWith('/admin')) {
    const auth = req.headers.get('authorization')
    const user = process.env.ADMIN_USER || 'admin'
    const pass = process.env.ADMIN_PASS || 'changeme'

    if (!auth || !auth.startsWith('Basic ')) {
      return new Response('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Admin"' },
      })
    }

    try {
      const b64 = auth.split(' ')[1] || ''
      const [u, p] = Buffer.from(b64, 'base64').toString('utf8').split(':')
      if (u !== user || p !== pass) {
        return new Response('Unauthorized', {
          status: 401,
          headers: { 'WWW-Authenticate': 'Basic realm="Admin"' },
        })
      }
    } catch {
      return new Response('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Admin"' },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}


