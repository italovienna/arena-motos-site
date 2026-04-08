'use client';
import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    plate: '',
    model: '',
    date: '',
    time: '',
    service: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/scheduling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', whatsapp: '', plate: '', model: '', date: '', time: '', service: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="agendamento" className="py-24 bg-gradient-to-b from-arena-black to-arena-lead relative animate-fade-in-up border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-arena-red tracking-widest uppercase mb-4 drop-shadow-sm">Agendamento Online</h2>
          <h3 className="text-4xl md:text-5xl font-black font-heading text-white mb-6 drop-shadow-md">
            MARQUE SUA <span className="text-gradient">REVISÃO</span>
          </h3>
          <p className="text-gray-400 text-lg font-medium">
            Preencha os dados abaixo e reserve seu horário com a nossa equipe especializada.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 border-t-4 border-t-arena-yellow">
          {status === 'success' && (
            <div className="bg-green-500/10 border border-green-500 text-green-400 px-6 py-4 rounded-lg font-bold text-center animate-pulse">
              Agendamento recebido com sucesso! Nossa equipe confirmará via WhatsApp em breve.
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 px-6 py-4 rounded-lg font-bold text-center">
              Ocorreu um erro ao enviar seu agendamento. Tente novamente mais tarde.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome e WhatsApp */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Nome Completo</label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-arena-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-arena-yellow transition-colors" placeholder="João Silva" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">WhatsApp</label>
              <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full bg-arena-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-arena-yellow transition-colors" placeholder="(61) 99999-9999" />
            </div>

            {/* Modelo e Placa */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Modelo da Moto</label>
              <input required type="text" name="model" value={formData.model} onChange={handleChange} className="w-full bg-arena-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-arena-yellow transition-colors" placeholder="Honda CRF 250R" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Placa</label>
              <input required type="text" name="plate" value={formData.plate} onChange={handleChange} className="w-full bg-arena-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-arena-yellow transition-colors uppercase" placeholder="ABC-1234" />
            </div>

            {/* Data e Hora */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Data Desejada</label>
              <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-arena-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-arena-yellow transition-colors [color-scheme:dark]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Horário Predileto</label>
              <select required name="time" value={formData.time} onChange={handleChange} className="w-full bg-arena-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-arena-yellow transition-colors appearance-none">
                <option value="" disabled>Selecione um horário</option>
                <option value="08:00">08:00 - 10:00 (Manhã)</option>
                <option value="10:00">10:00 - 12:00 (Manhã)</option>
                <option value="14:00">14:00 - 16:00 (Tarde)</option>
                <option value="16:00">16:00 - 18:00 (Tarde)</option>
              </select>
            </div>
            
            {/* Tipo de serviço */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Tipo de Serviço</label>
              <select required name="service" value={formData.service} onChange={handleChange} className="w-full bg-arena-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-arena-yellow transition-colors appearance-none">
                <option value="" disabled>O que sua máquina precisa?</option>
                <option value="Preparação">Preparação para Motocross</option>
                <option value="Preventiva">Manutenção Preventiva Geral</option>
                <option value="Motor">Revisão/Retífica de Motor</option>
                <option value="Suspensão">Suspensão e Ciclística</option>
                <option value="Outros">Outros / Avaliação</option>
              </select>
            </div>
          </div>

          <div className="mt-8">
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full py-4 bg-gradient-to-r from-arena-yellow to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-black uppercase tracking-widest rounded-lg glow-button-yellow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Acelerando seu pedido...' : 'Agendar Avaliação'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
