import React, { useReducer } from 'react';
import Image from 'next/image';
import Logo from '../../../public/dryvitalslogo.jpeg';
import { FiMenu } from "react-icons/fi";  // Import Menu Icon
import { adminLogout } from '@/pages/api/adminService';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const AdminHeader = ({ setSidebarOpen, sidebarOpen }) => {

    const router=useRouter()
  const handleLogout=async()=>{
    try {
      const res=await adminLogout()
      if(res?.success){
        toast.success('Admin Logout Successfully')
        router.push('/admin/login')
      }
    } catch (error) {
      console.log('error in adminlogout service',error)
    }
  }
  return (
    <div className="bg-black w-full h-24 flex justify-between items-center px-5">
      <button className="text-white text-2xl lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <FiMenu />
      </button>

      <Image src={Logo} alt='Dryvitals Logo' priority className="w-20 h-20 rounded-full p-1" />

      {/* <div className="pr-10">
        <FaRegUser className="text-white text-2xl" />
      </div> */}
      <div className='pr-10'>
        <button className='text-black font-bold w-20 h-10 rounded-lg bg-white hover:bg-gray-500'
          onClick={handleLogout}
        >Logout</button>
      </div>
    </div>
  );
};

export default AdminHeader;
