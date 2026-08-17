import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.SESSION_SECRET || 'hmti-secret-key');

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('admin_session')?.value;
  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/login';

  let payload = null;
  if (token) {
    try {
      const { payload: p } = await jwtVerify(token, secret);
      payload = p;
    } catch {
      payload = null;
    }
  }

  // Belum login → redirect ke /login
  if (isAdminRoute && !payload) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Sudah login → tidak perlu ke /login lagi
  if (isLoginPage && payload) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Editor tidak boleh akses /admin/users
  if (payload?.role === 'editor' && pathname.startsWith('/admin/users')) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
