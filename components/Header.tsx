
import React from 'react';
import { ChevronRight, Phone } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/img/logo.webp"
            alt="Metropolitano Logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="tel:2635555"
            className="hidden md:flex items-center gap-2 text-slate-700 hover:text-[#6C569E] font-bold transition-colors"
          >
            <Phone size={18} className="text-[#6C569E]" />
            <span>263-5555</span>
          </a>
          <a
            href="#contacto"
            className="bg-[#4AAC3D] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold text-xs md:text-sm shadow-xl shadow-green-100 hover:scale-105 transition-transform flex items-center gap-2"
          >
            Agendar Ahora
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
