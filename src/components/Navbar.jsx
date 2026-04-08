import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-arena-black/90 backdrop-blur-lg border-b border-white/5 transition-all duration-300 animate-fade-in py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo with Motocross Icon */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-arena-red to-arena-yellow rounded-xl flex items-center justify-center transform group-hover:-rotate-12 transition-all duration-500 shadow-[0_0_15px_rgba(234,0,0,0.3)] group-hover:shadow-[0_0_25px_rgba(255,204,0,0.6)]">
                {/* SVG Moto Icon */}
                <svg className="w-8 h-8 text-arena-black" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 13.5A3.5 3.5 0 0 0 15.5 17a3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 0 0-3.5-3.5zm0 5a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5zM4.5 13.5A3.5 3.5 0 0 0 1 17a3.5 3.5 0 0 0 3.5 3.5A3.5 3.5 0 0 0 8 17a3.5 3.5 0 0 0-3.5-3.5zm0 5A1.5 1.5 0 0 1 3 17a1.5 1.5 0 0 1 1.5-1.5A1.5 1.5 0 0 1 6 17a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="M14.88 5.42L11 8.8 8.84 6.64 7.42 8.06l3.58 3.58A1 1 0 0 0 11.7 11.5L16.3 7.5l-1.42-2.08zM14 11H8v2h6v-2zm-3-9L9 5h4V2h-2z"/>
                  <path d="M15.5 14h-1l-3-6h-3L7 11H4v2h4.5l1.5-3h3l2 4h.5A4.47 4.47 0 0 1 19 12V6h-2v6a2.5 2.5 0 0 0-1.5 2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-heading text-white leading-none tracking-tight uppercase group-hover:text-arena-yellow transition-colors">
                  Arena<span className="text-arena-red">Motos</span>
                </span>
                <span className="text-[11px] text-gray-400 font-medium uppercase tracking-widest leading-none mt-1">Oficina Especializada</span>
              </div>
            </a>
          </div>

          {/* Nav Links Desktop */}
          <nav className="hidden md:flex space-x-12">
            <a href="#sobre" className="text-gray-300 hover:text-white text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-1">História</a>
            <a href="#servicos" className="text-gray-300 hover:text-white text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-1">Serviços</a>
            <a href="#localizacao" className="text-gray-300 hover:text-white text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-1">Localização</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="https://wa.me/5561981784409" target="_blank" rel="noopener noreferrer" className="border-2 border-arena-red text-arena-white hover:bg-arena-red hover:text-white px-6 py-3 rounded-md font-bold uppercase text-sm tracking-widest glow-button">
              Agendar
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}
