// backend/GetUser.ts
import { NextApiRequest, NextApiResponse } from 'next';
import supabase from './Client';

const getUserHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Verifikasi email dan password
  const { data: user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ message: error.message });
  }

  // Ambil data dari tabel profiles
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.user.id)
    .single();

  if (profileError) {
    return res.status(401).json({ message: profileError.message });
  }

  // Mengembalikan data pengguna dan profil
  return res.status(200).json({
    message: 'Login successful',
    user: {
      id: profile.id,
      username: profile.username,
      full_name: profile.full_name,
      avatar_url: profile.avatar_url,
      email: profile.email,
      is_admin: profile.is_admin,
    },
  });
};

export default getUserHandler;
