import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Bapak from '../../assets/BAPAK.png';
import Sadam from '../../assets/SADAM.png';
import Rey from '../../assets/REY.png';
import Fakhri from '../../assets/FAKHRI.png';
import Caca from '../../assets/CACA.png';


const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-center mb-10">
        StandBy adalah sebuah sistem untuk mem-permudah proses standarisasi inkubator bayi. Aplikasi website ini merupakan salah satu bagian dari sistem StandBy
          </p>
       

        <h2 className="text-3xl font-semibold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={Bapak.src} alt="Team Member 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Suryo Adhi Wibowo</h3>
              <p className="text-gray-600">Supervising Lecturer</p>
              <p className="text-black-600">SAO</p>
            </div>
          </div>
   
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={Sadam.src} alt="Team Member 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Sadam Al Rasyid</h3>
              <p className="text-black-600">IoT Engineer</p>
              <p className="text-black-600"> IoT Hardware Development, Backend Developer (Realtime Database)</p>
              <p className="text-black-600">1101210112</p>
            </div>
          </div>

      
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={Rey.src} alt="Team Member 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Reynaldhi Tryana Graha</h3>
              <p className="text-black-600">Mobile Developer</p>
              <p className="text-black-600">Mobile Application Development, Backend Developer (Authentication & Authorization)</p>
              <p className="text-black-600">1101213117</p>
            </div>
          </div>

       
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={Fakhri.src} alt="Team Member 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Fakhriadi Rasyaad</h3>
              <p className="text-black-600">Full Stack Web Developer</p>
              <p className="text-black-600">Website Development, Backend Developer (Storage Management)</p>
              <p className="text-black-600">1101213117</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
           <img src={Caca.src} alt="Team Member 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Marshaniswah Syamsul </h3>
              <p className="text-black-600">AI & Cloud Engineer</p>
              <p className="text-black-600">Artificial Intelligence Development, Cloud System Management</p>
              <p className="text-black-600">1101213117</p>
            </div>
          </div>
        </div>
        <div className="mt-20"> 
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
