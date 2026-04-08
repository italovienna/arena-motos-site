import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Location from '../components/Location';
import WhatsAppCTA from '../components/WhatsAppCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-20"> {/* Offset for sticky navbar */}
        <Hero />
        <About />
        <Services />
        <Location />
      </div>
      
      {/* Footer minimal */}
      <footer className="bg-arena-lead py-8 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Arena Motos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
      
      <WhatsAppCTA />
    </main>
  );
}
