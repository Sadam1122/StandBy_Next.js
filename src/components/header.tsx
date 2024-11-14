import React from 'react';
import logo from '../assets/standby.png'; 

const Header: React.FC = () => {
  return (
    <div className=" p-4 flex items-center">
      <div className="flex items-center justify-center w-1/4 border-r border-gray-300">
      <img 
          src={logo.src} 
          alt="StandBy Logo" 
          className="w-20 h-20 mx-auto" 
        />
        <p className="text-center text-sm font-semibold mt-2">
          TESTING TECHNOLOGY<br />
          LABORATORY<br />
          PRTPS - BRIN
        </p>
      </div>

     
      <div className="flex-1 pl-4 text-center">
        <h1 className="text-lg font-bold">TESTING TECHNOLOGY LABORATORY</h1>
        <p className="text-sm font-semibold">
          RESEARCH CENTER FOR TESTING TECHNOLOGY AND STANDARD – NATIONAL RESEARCH AND INNOVATION AGENCY
        </p>
      </div>
    </div>
  );
};

export default Header;
