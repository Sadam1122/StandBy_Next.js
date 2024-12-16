import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Sao from '../../assets/SAO.jpg';
import Kru from '../../assets/KRU.jpg'
import Sadam from '../../assets/SADAM.jpg';
import Rey from '../../assets/REY.jpg';
import Fakhri from '../../assets/FAKHRI.jpg';
import Caca from '../../assets/CACA.jpg';


const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-center mb-10">
        StandBy adalah sebuah sistem untuk mem-permudah proses standarisasi inkubator bayi. Aplikasi website ini merupakan salah satu bagian dari sistem StandBy
          </p>
       

        <h2 className="font-bold text-4xl text-center mb-6">Meet Our Supervisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
            <img src={Sao.src} alt="Team Member 1" className="size-40 object-cover" />
            <div className="p-6">
              <h3 className="text-red-500 text-xl font-semibold">Suryo Adhi Wibowo, S.T., M.T., Ph.D</h3>
              <p className="text-gray-600">1st Supervisor</p>
              <p className="font-bold text-black-600">SAO</p>
            </div>
          </div>
   
          <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
            <img src={Kru.src} alt="Team Member 1" className="size-40 object-cover" />
            <div className="p-6">
              <h3 className="text-red-500 text-xl font-semibold">Dr. Koredianto Usman S.T., M.Sc.</h3>
              <p className="text-gray-600">2nd Supervisor</p>
              <p className="font-bold text-black-600">KRU</p>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-4xl text-center mb-6 mt-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">


          <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
            <img src={Sadam.src} alt="Team Member 1" className="size-40 object-cover" />
            <div className="p-6">
              <h3 className="text-red-500 text-xl font-semibold">Sadam Al Rasyid</h3>
              <p className="font-bold text-black-600 text-sm">IoT Engineer</p>
              <p className="text-black-600 text-sm"> IoT Hardware Development, Backend Developer (Realtime Database)</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
            <img src={Fakhri.src} alt="Team Member 1" className="size-40 object-cover" />
            <div className="p-6">
              <h3 className="text-red-500 text-xl font-semibold">Fakhriadi Rasyaad</h3>
              <p className="font-bold text-black-600 text-sm">Full Stack Web Developer</p>
              <p className="text-black-600 text-sm">Website Development, Backend Developer (Storage Management)</p>
            </div>
          </div>


          <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
           <img src={Caca.src} alt="Team Member 1" className="size-40 object-cover" />
            <div className="p-6">
              <h3 className="text-red-500 text-xl font-semibold">Marshaniswah Syamsul </h3>
              <p className="font-bold text-black-600 text-sm">AI & Cloud Engineer</p>
              <p className="text-black-600 text-sm">Artificial Intelligence Development, Cloud System Management</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
            <img src={Rey.src} alt="Team Member 1" className="size-40 object-cover" />
            <div className="p-6">
              <h3 className="text-red-500 text-xl font-semibold">Reynaldhi Tryana Graha</h3>
              <p className="font-bold text-black-600 text-sm">Mobile Developer</p>
              <p className="text-black-600 text-sm">Mobile Application Development, Backend Developer (Authentication & Authorization)</p>
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
