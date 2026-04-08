import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-arena-black via-arena-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/assets/images/fundo-site.jpeg')] bg-cover bg-center opacity-40 bg-arena-lead" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full animate-fade-in-up">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arena-black/50 border border-arena-yellow/20 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,204,0,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-arena-red animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-arena-red absolute" />
            <span className="text-sm font-bold text-arena-yellow tracking-widest uppercase ml-2">Alta Performance em Motocross</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black font-heading text-arena-white mb-6 leading-none tracking-tighter drop-shadow-2xl">
            POTÊNCIA E<br />
            <span className="text-gradient">CONFIANÇA</span> NA<br />
            SUA MÁQUINA
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-sans mb-12 max-w-2xl font-medium leading-relaxed drop-shadow-lg">
            A oficina especializada líder em Brasília. Traga sua moto para quem tem 20 anos de experiência e é bicampeão de motocross.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="https://wa.me/5561981784409?text=Ol%C3%A1%2C%20Bahia!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20para%20minha%20moto." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-10 py-5 bg-gradient-to-r from-arena-red to-arena-red-dark text-white font-black rounded-lg uppercase tracking-widest gap-3 glow-button text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Agendar Avaliação
            </a>
            
            <a 
              href="#servicos" 
              className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-arena-white/30 hover:border-arena-yellow hover:text-arena-yellow text-white font-bold rounded-lg transition-all duration-300 uppercase tracking-wide"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#sobre" className="text-white/50 hover:text-arena-yellow transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </section>
  );
}
