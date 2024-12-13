import { NextResponse } from 'next/server'
import supabase from '../../../components/SupabaseClient' 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  const { data: session, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.setHeader('Set-Cookie', `token=${session?.access_token}; Path=/; HttpOnly;`);
  return res.status(200).json({ message: 'Login successful' });
}
