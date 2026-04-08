import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-arena-black border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              {/* Fake Logo icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-arena-red to-arena-yellow rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-6 h-6 text-arena-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.1l6.4 12.8H5.6L12 6.1z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-heading text-white leading-none tracking-wide uppercase">Arena<span className="text-arena-yellow">Motos</span></span>
                <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest leading-none mt-1">Oficina Especializada</span>
              </div>
            </a>
          </div>

          {/* Nav Links Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors">História</a>
            <a href="#servicos" className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors">Serviços</a>
            <a href="#localizacao" className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors">Localização</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="https://wa.me/5561981784409" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-arena-red text-arena-white hover:bg-arena-red hover:text-white px-5 py-2 rounded font-bold uppercase text-sm tracking-wide transition-all duration-300">
              Agendar
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}
