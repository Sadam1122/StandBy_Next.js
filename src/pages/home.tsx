import Navbar from '../components/navbar';
import Botpress from '../components/botpress';
import DisplayPDFs from '../components/displaypdf';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const dokumen = () => {
    router.push('/home/dokumen');
  };

  const handleAdminButtonClicks = () => {
    router.push('/home/dokument');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <Botpress />
      <DisplayPDFs />
      <div className="flex space-x-4 justify-center items-center mb-10">
        <button
          onClick={dokumen}
          className="px-3 py-1 bg-red-500 hover:bg-red-800 text-white font-semibold rounded">
          Pergi Ke Halaman Dokument Test Report
        </button>
        <button
          onClick={handleAdminButtonClicks}
          className="px-3 py-1 bg-red-500 hover:bg-red-800 text-white font-semibold rounded">
          <span className="text-sm font-semibold">Semua Dokumen</span>
        </button>
      </div>



    </div>
  );
};

export default HomePage;
