import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-gradient-to-b from-arena-black to-arena-lead relative overflow-hidden animate-fade-in-up">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-arena-red/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-arena-yellow/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Column */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-panel relative z-10">
              <div className="absolute inset-0 bg-[url('/assets/images/bahia.jpeg')] bg-cover bg-center bg-arena-gray items-center justify-center flex transition-transform duration-700 hover:scale-105">
              </div>
            </div>
            {/* Accents */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-arena-red rounded-lg z-0 opacity-20" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-arena-yellow rounded-lg z-0 opacity-50" />
            
            <div className="absolute bottom-10 -left-10 bg-arena-lead border-l-4 border-arena-yellow p-6 rounded-lg shadow-2xl z-20 hidden md:block">
              <p className="text-4xl font-bold font-heading text-white">20+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Anos de<br/>Experiência</p>
            </div>
          </div>
          
          {/* Text Column */}
          <div>
            <h2 className="text-sm font-bold text-arena-red tracking-widest uppercase mb-4">A História</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              A EXPERIÊNCIA DE UM <span className="text-arena-yellow">BICAMPEÃO</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-sans">
              <p>
                A <strong>Arena Motos</strong> não é apenas uma oficina. É o resultado de mais de duas décadas de paixão e dedicação ao mundo das duas rodas. Fundada e liderada pelo <strong>Bahia</strong>, um nome de peso no motocross nacional.
              </p>
              <p>
                Como bicampeão baiano de motocross, Bahia conhece cada detalhe, cada ruído e cada necessidade de uma moto de alta performance e uso diário. Sua exigência nas pistas se traduz na qualidade do serviço entregue na oficina.
              </p>
              
              <div className="glass-panel p-6 rounded-xl mt-8 border-l-2 border-l-arena-red relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-arena-red/5 rounded-full blur-2xl" />
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                  <svg className="w-6 h-6 text-arena-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  Parceira Oficial Fox Motos
                </h4>
                <p className="text-sm text-gray-400">
                  Em parceria com a renomada Fox Motos, oferecemos um padrão de excelência incomparável em Brasília, garantindo peças de procedência e mão de obra de elite.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
