import Navbar from '../components/navbar';
import Botpress from '../components/botpress';
import DisplayPDFs from '../components/displaypdf';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter(); 

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
          <span className="text-sm font-semibold">Dokumen Laporan</span>
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
