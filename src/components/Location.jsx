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
                  <p className="text-gray-400">St. L Norte QNL 11 Conjunto F Lote 15 - Taguatinga Norte<br/>Posto Quality (Shell) - Brasília, DF, 72151-106</p>
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
                href="https://www.google.com/maps/dir/?api=1&destination=St.+L+Norte+QNL+11+Conjunto+F+Lote+15+-+Taguatinga+Norte,+Brasília+-+DF" 
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
              <iframe 
                src="https://maps.google.com/maps?q=St.%20L%20Norte%20QNL%2011%20Conjunto%20F%20lote%2015%20-%20Taguatinga%20norte,%20Bras%C3%ADlia%20-%20DF&t=&z=18&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
