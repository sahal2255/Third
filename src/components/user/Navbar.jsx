import React, { useState } from 'react';
import Image from 'next/image'; 
import Logo from '../../../public/dryvitalslogo.jpeg';
import Link from 'next/link';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-24 bg-black flex items-center justify-between px-4 md:px-10 relative'>
      <Link href='/'>
      <Image src={Logo} alt="Dry Vital Logo" priority className='w-20 h-20 rounded-full' />
      </Link>
      <div className='hidden md:flex space-x-6'>
        <Link href="/about" className='text-white'>About</Link>
        <Link href="/products" className='text-white'>Products</Link>
        <Link href="/profile" className='text-white'>Profile</Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button onClick={toggleMenu} className='md:hidden text-white'>
        {isOpen ? <IoMdClose size={24} /> : <MdOutlineMenu size={24} />}
      </button>

      {/* Offcanvas Menu for Mobile */}
      <div 
        className={`fixed top-10 right-0 h-full w-64 bg-black text-white flex flex-col items-center  p-4 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-50 shadow-lg`}
      >
        <button onClick={toggleMenu} className='absolute top-4 right-4 text-white'>
          <IoMdClose size={24} />
        </button>
        <nav className="flex flex-col space-y-6 text-center w-full">
          <Link href="/about" className='py-2 w-full' onClick={toggleMenu}>About</Link>
          <Link href="/products" className='py-2 w-full' onClick={toggleMenu}>Products</Link>
          <Link href="/profile" className='py-2 w-full' onClick={toggleMenu}>Profile</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
