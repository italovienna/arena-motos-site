'use client';
import React, { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch('/api/scheduling');
        const data = await res.json();
        setAppointments(data.appointments || []);
      } catch (err) {
        console.error('Falha ao carregar agendamentos:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAppointments();
    
    // Auto-refresh a cada 30 segundos
    const interval = setInterval(fetchAppointments, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-arena-black text-white p-6 md:p-12 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-10">
          <div>
            <h1 className="text-3xl font-black font-heading tracking-widest text-arena-yellow mb-2 uppercase">Centro de Comando</h1>
            <p className="text-gray-400 font-medium">Gestão de Agendamentos Arena Motos</p>
          </div>
          <div className="hidden sm:block">
            <span className="px-4 py-2 bg-arena-red/10 text-arena-red border border-arena-red/20 font-bold rounded-full text-sm">
              SISTEMA ONLINE (MVP)
            </span>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-4 border-arena-yellow border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400 font-bold tracking-widest uppercase">Carregando dados do motor...</p>
          </div>
        ) : appointments.length === 0 ? (
          <div className="glass-panel p-16 text-center rounded-2xl border border-white/5">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <h3 className="text-xl font-bold text-white mb-2">Oficina Vazia</h3>
            <p className="text-gray-500">Nenhum agendamento registrado até o momento.</p>
          </div>
        ) : (
          <div className="bg-arena-lead/50 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/50 border-b border-white/10">
                    <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Data / Hora</th>
                    <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Cliente</th>
                    <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Moto / Placa</th>
                    <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Serviço</th>
                    <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {appointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-white/5 transition-colors group">
                      <td className="p-5 whitespace-nowrap">
                        <div className="font-bold text-arena-yellow">{new Date(apt.date).toLocaleDateString('pt-BR')}</div>
                        <div className="text-sm text-gray-400 font-medium">{apt.time}</div>
                      </td>
                      <td className="p-5">
                        <div className="font-bold text-white capitalize">{apt.name}</div>
                        <div className="text-sm text-gray-400 font-medium">{apt.whatsapp}</div>
                      </td>
                      <td className="p-5">
                        <div className="font-bold text-white uppercase">{apt.model}</div>
                        <div className="text-sm text-gray-500 font-bold tracking-widest uppercase bg-black/50 inline-block px-2 py-1 rounded mt-1 border border-white/10">
                          {apt.plate}
                        </div>
                      </td>
                      <td className="p-5">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-arena-red/10 text-arena-red border border-arena-red/20">
                          {apt.service}
                        </span>
                      </td>
                      <td className="p-5 text-right">
                        <a 
                          href={`https://wa.me/55${apt.whatsapp.replace(/\D/g, '')}?text=Ol%C3%A1%20${apt.name},%20aqui%20%C3%A9%20da%20Arena%20Motos!%20Estamos%20confirmando%20seu%20agendamento.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500 hover:text-white transition-colors rounded-lg text-sm font-bold uppercase tracking-widest"
                        >
                          Chamar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
