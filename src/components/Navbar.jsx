import React, { useState } from 'react';
import logo from '../assets/logo-trade.png';
import { navItems } from '../constants/Content';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0e525f] pt-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img className="h-14 w-auto mr-2" src={logo} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-white hover:text-[#2befb4]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <a href="#" className='bg-gradient-to-r from-[#b0ff84] to-[#51ffab] py-3 px-6 rounded-md hover:bg-gradient-to-r hover:from-[#51ffab] hover:to-[#b0ff84]'>
              Contact us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <Menu size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-[#0e3b43] z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex justify-between p-4'>
      <div>
            <img className='h-8' src={logo} alt="" />
          </div>
          <div>
          <button onClick={toggleMenu} className="text-black rounded-md p-1 mb-4 bg-[#51ffab]">
            <X size={24} />
          </button>
          </div>
          </div>
        <div className="p-4">
          
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white hover:text-[#2befb4] block">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;