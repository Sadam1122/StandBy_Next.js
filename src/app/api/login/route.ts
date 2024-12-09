import { NextResponse } from 'next/server'
import supabase from '../../../components/SupabaseClient' 

export async function POST(request: Request) {
  const { email, password } = await request.json() as { email: string; password: string }

  const { data: { session }, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set('token', session?.access_token ?? '', { path: '/home' })
  return response
}
