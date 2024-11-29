import React from 'react';
import Esp1 from '../components/esp1';
import Esp2 from '../components/esp2';
import Esp3 from '../components/esp3';
import Navbar from '../components/navbar';

const CombinedDashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tampilan Status</h2>
          <p className="text-gray-500 mb-6">Informasi keseluruhan dari sensor yang digunakan.</p>
          <Esp1 /> 
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Table Sensor</h2>
          <p className="text-gray-500 mb-6">Menampilkan data dengan table.</p>
          <Esp2 /> 
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informasi Sensor</h2>
          <p className="text-gray-500 mb-6">Keselurhan informasi dari sensor dan dapat mengunduh informasi.</p>
          <Esp3 /> 
        </div>
      </div>

    </div>
  );
};

export default CombinedDashboard;
