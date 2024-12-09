"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../assets/standbyputih.png';
import koran from '../assets/koran.png';
import show from '../assets/show.png';
import hide from '../assets/hide.png';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async () => {
    console.log('Login button clicked'); // Debug log
    setError(''); 
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      if (!res.ok) {
        const result = await res.json() as { error?: string };
        setError(result.error ?? 'Login failed');
        return; 
      }
  
      router.push('/home');
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan, coba lagi.');
    }
  };
  

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex min-h-screen bg-[#991b1b] relative z-20">
      <div className="w-1/2 bg-[#991b1b] flex items-center justify-center flex-col p-8">
        <Image src={logo} alt="Logo" className="mb-4 w-32 h-32" />
        <h1 className="text-white text-2xl font-bold">Selamat Datang di StandBy</h1>
        <p className="text-white mt-2">Mendata hasil inkubator sesuai standarisasi & dokumentasi</p>
        <Image src={koran} alt="Document" className="mt-6 w-32 h-32" />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-[#F7F7F7]">
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-black text-lg font-semibold mb-4">Masuk Akun</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <input
            type="text"
            placeholder="Masukkan nama Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 text-black"
          />
          <div className="relative mb-4">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Masukkan kata sandi Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 text-blacky"
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-500 focus:outline-none"
              type="button"
            >
              {isPasswordVisible ? (
                <Image src={show} alt="Show password" className="h-5 w-5" />
              ) : (
                <Image src={hide} alt="Hide password" className="h-5 w-5" />
              )}
            </button>
          </div>
          <button
            onClick={handleLogin}
            className="bg-[#991b1b] text-white rounded-lg p-3 w-full hover:bg-red-700 transition duration-300"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
