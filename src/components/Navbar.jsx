import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../assets/copious.png';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="w-full z-[100] flex flex-col fixed top-0 shadow-sm transition-colors bg-[#1A1A1A] md:bg-white">
      {/* Top Black Bar */}
      <div className="bg-[#1A1A1A] w-full py-1.5 flex justify-center items-center">
        <span className="text-white text-[11px] md:text-xs tracking-wider font-medium">Welcome to Copious Info</span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-20">
          
          {/* Navigation Links (Left on Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[14px] lg:text-[15px] font-bold transition-colors hover:text-[#da251d] ${
                  location.pathname === link.path ? 'text-[#da251d]' : 'text-[#4b5563]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo (Center) */}
          <div className="flex justify-start md:justify-center">
            <Link to="/" className="flex items-center">
              <img src={logoImg} alt="Copious Logo" className="h-8 md:h-12" />
            </Link>
          </div>

          {/* CTA & Toggle (Right) */}
          <div className="flex items-center justify-end gap-4">
            <button className="hidden sm:block bg-[#da251d] text-white px-6 py-2.5 rounded-md font-bold hover:bg-[#c02019] transition-colors text-[14px] whitespace-nowrap">
              Free Live Demo
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 transition-colors text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#2f2f2f] py-4 px-4 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-[16px] font-bold py-2 ${
                location.pathname === link.path ? 'text-[#da251d]' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="sm:hidden bg-[#da251d] text-white px-5 py-3 rounded-md font-bold text-center mt-2">
            Free Live Demo
          </button>
        </div>
      )}
    </header>
  )
}
