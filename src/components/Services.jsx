import React from 'react';

const servicesList = [
  {
    id: 1,
    title: 'Preparação para Motocross',
    description: 'Ajuste fino de suspensão, motor e chassi para máxima performance nas pistas.',
    icon: (
      <svg className="w-8 h-8 text-arena-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    ),
    image: 'bg-[url("/assets/images/service-mx.jpg")]',
  },
  {
    id: 2,
    title: 'Manutenção Preventiva',
    description: 'Revisão completa, troca de fluidos, filtros e verificação de segurança para o dia a dia.',
    icon: (
      <svg className="w-8 h-8 text-arena-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
    ),
    image: 'bg-[url("/assets/images/service-preventive.jpg")]',
  },
  {
    id: 3,
    title: 'Manutenção de Motor',
    description: 'Diagnóstico preciso e retífica completa com peças de alta qualidade e garantia.',
    icon: (
      <svg className="w-8 h-8 text-arena-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    ),
    image: 'bg-[url("/assets/images/service-engine.jpg")]',
  },
  {
    id: 4,
    title: 'Suspensão e Ciclística',
    description: 'Revisão, troca de óleo e retentores das bengalas, calibração de amortecedores.',
    icon: (
      <svg className="w-8 h-8 text-arena-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
    ),
    image: 'bg-[url("/assets/images/service-suspension.jpg")]',
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 bg-gradient-to-b from-arena-lead to-arena-black relative border-y border-white/5 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-arena-yellow tracking-widest uppercase mb-4 drop-shadow-md">Especialidades</h2>
          <h3 className="text-5xl md:text-6xl font-black font-heading text-white mb-6 drop-shadow-lg">
            O QUE FAZEMOS DE <span className="text-gradient">MELHOR</span>
          </h3>
          <p className="text-gray-400 text-xl font-medium">
            Da pista para a rua. Trazemos o rigor técnico das competições para o cuidado diário com a sua motocicleta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-2xl glass-panel hover:bg-arena-gray/80 transition-all duration-500 flex flex-col h-full border-t border-white/5 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,204,0,0.15)]">
              
              <div className={`h-48 w-full ${service.image} bg-arena-black bg-cover bg-center flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-arena-black/60 group-hover:bg-arena-black/30 transition-all duration-500" />
                <span className="text-white/20 font-medium relative z-10 z-0 opacity-0 group-hover:opacity-100 transition-opacity">Imagem</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative -mt-6">
                <div className="w-12 h-12 rounded-xl bg-arena-lead border border-white/10 flex items-center justify-center shadow-lg mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-heading">{service.title}</h4>
                <p className="text-gray-400 text-sm flex-grow">
                  {service.description}
                </p>
              </div>
              
              {/* Highlight bar on hover */}
              <div className="h-1 w-full bg-gradient-to-r from-arena-red to-arena-yellow transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
