import React from 'react';

export default function Location() {
  return (
    <section id="localizacao" className="py-32 bg-gradient-to-b from-arena-black to-arena-lead relative animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-arena-red tracking-widest uppercase mb-4 drop-shadow-sm">Localização</h2>
            <h3 className="text-5xl md:text-6xl font-black font-heading text-white mb-6 drop-shadow-md">
              ONDE A <span className="text-gradient">MÁGICA</span> ACONTECE
            </h3>
            
            <p className="text-gray-300 text-xl font-medium leading-relaxed mb-10">
              Venha tomar um café com o Bahia e conhecer nossa estrutura. Estamos localizados no coração de Taguatinga, com fácil acesso e estacionamento amplo no Posto Quality.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-arena-lead flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg className="w-6 h-6 text-arena-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Endereço</h4>
                  <p className="text-gray-400">Taguatinga Norte / QNL 11<br/>Posto Quality - Brasília, DF</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-arena-lead flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg className="w-6 h-6 text-arena-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Horário de Funcionamento</h4>
                  <p className="text-gray-400">Segunda a Sexta: 08:00 às 18:00<br/>Sábado: 08:00 às 12:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="https://goo.gl/maps/placeholder" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-arena-yellow hover:text-white font-bold uppercase tracking-wide transition-colors"
              >
                Como Chegar <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl relative group">
              {/* Map Placeholder */}
              <div className="w-full h-full bg-arena-lead rounded-xl relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/images/map-placeholder.jpg')] bg-cover bg-center mix-blend-overlay opacity-50" />
                
                {/* Custom Marker */}
                <div className="relative z-10 flex flex-col items-center animate-bounce">
                  <div className="bg-arena-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg mb-2">
                    Arena Motos
                  </div>
                  <svg className="w-10 h-10 text-arena-red drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-arena-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
