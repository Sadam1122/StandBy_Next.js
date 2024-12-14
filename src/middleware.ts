import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Fungsi hashing menggunakan Web Crypto API (SHA-256)
async function hashURL(path: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(path);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token'); // Ambil token dari cookies

  const publicPaths = ['/'];
  const protectedPaths = [
    '/home',
    '/monitor',
    '/dokumen',
    '/user',
    '/logout',
    '/home/dokumen',
    '/home/dokument',
    '/profil/about',
    '/profil/setting',
    '/user/useradmin',
  ];

  const pathname = request.nextUrl.pathname;

  // Cek jika path adalah public
  if (!token && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Hash URL yang sedang diakses
  const hashedPaths = await Promise.all(protectedPaths.map(path => hashURL(path)));
  const currentPathHash = await hashURL(pathname);

  // Validasi apakah URL yang diakses cocok dengan hash dari path yang dilindungi
  if (!hashedPaths.includes(currentPathHash)) {
    return NextResponse.redirect(new URL('/404', request.url)); // Redirect ke 404 jika tidak cocok
  }

  return NextResponse.next(); // Izinkan akses jika hash cocok
}

export const config = {
  matcher: ['/home', '/monitor', '/dokumen', '/user', '/logout', '/home/dokumen', '/home/dokument', '/profil/about', '/profil/setting', '/user/useradmin'], // Route yang dilindungi
};
