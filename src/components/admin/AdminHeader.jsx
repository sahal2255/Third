import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/dryvitalslogo.jpeg';
import { FaRegUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";  // Import Menu Icon

const AdminHeader = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div className="bg-black w-full h-24 flex justify-between items-center px-5">
      <button className="text-white text-2xl lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <FiMenu />
      </button>

      <Image src={Logo} priority className="w-20 h-20 rounded-full p-1" />

      <div className="pr-10">
        <FaRegUser className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default AdminHeader;
