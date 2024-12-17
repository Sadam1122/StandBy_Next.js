// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token'); // Mengambil token dari cookies


  const publicPaths = ['/'];

  if (!token && !publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/home', '/monitor', '/dokumen', '/user', '/logout', '/home/dokumen', '/home/dokument', '/profil/about', '/profil/setting', '/user/useradmin'], // Route yang ingin dilindungi
};
