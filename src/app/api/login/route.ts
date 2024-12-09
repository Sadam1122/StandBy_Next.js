import { NextResponse } from 'next/server';
import supabase from '../../../components/SupabaseClient'; // pastikan path ini sesuai dengan konfigurasi Supabase kamu

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validasi input
    if (!email || !password) {
      return NextResponse.json({ error: "Email dan password tidak boleh kosong" }, { status: 400 });
    }

    // Melakukan login dengan Supabase
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    // Set token ke cookies (opsional)
    const session = data?.session;
    if (session) {
      document.cookie = `token=${session.access_token}; path=/;`;
    }

    return NextResponse.json({ message: 'Login berhasil', session: data?.session }, { status: 200 });

  } catch (error) {
    console.error('Login failed:', error);
    return NextResponse.json({ error: "Terjadi kesalahan. Coba lagi." }, { status: 500 });
  }
}
