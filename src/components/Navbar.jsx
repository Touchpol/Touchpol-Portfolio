import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 font-sans ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3.5' : 'bg-transparent py-6'
    }`}>
      {/* 
        แชร์ฟอนต์ Plus Jakarta Sans พิมพ์นิยมแต่ดูเป็นธรรมชาติ คุมธีมให้เป็นเอกลักษณ์เดียวกันทั่วทั้งพอร์ตโฟลิโอ 
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5 font-extrabold text-lg md:text-xl tracking-tight text-slate-900">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shadow-inner">
            <Code2 size={20} />
          </div>
          <span>TOUCHPOL.L</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
          {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden">
          {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="font-bold text-slate-800 hover:text-blue-600 transition-colors text-base py-1"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;