
import React from 'react';
import { ChevronRight, QrCode, ArrowDown } from 'lucide-react';

const PromoHero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F1ECF9]/50 rounded-l-[120px] -z-10 hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F1ECF9] rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Promo Text Section */}
          <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-[#4AAC3D] rounded-full text-sm font-bold tracking-widest uppercase">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4AAC3D]"></span>
              </span>
              Promoción Exclusiva de Bienvenida
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-medium text-slate-800 tracking-tight">
                Te regalamos el
              </h2>
              <h1 className="text-8xl lg:text-[140px] font-black text-[#4AAC3D] leading-none tracking-tighter">
                20%
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                de descuento <span className="text-[#6C569E]">en todos nuestros servicios.</span>
              </h2>
            </div>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Porque tu salud es lo primero. Obtén diagnóstico de precisión con tecnología de punta a un precio preferencial.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contacto" 
                className="bg-[#4AAC3D] hover:bg-[#3d8b32] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-green-200 transition-all hover:scale-105 flex items-center gap-3"
              >
                Cajear Descuento Ahora
                <ChevronRight size={24} />
              </a>
              <a 
                href="#servicios" 
                className="bg-[#6C569E] hover:bg-[#5a4885] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center gap-2 shadow-xl shadow-purple-100"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Visual QR & Image Section */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* QR Box simulation */}
              <div className="absolute -top-10 -right-10 z-20 bg-white p-8 rounded-[40px] shadow-2xl border border-purple-50 hidden md:block animate-bounce-slow">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-lavender rounded-2xl">
                    <QrCode size={100} className="text-[#6C569E]" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Escanea para Cita</span>
                </div>
              </div>

              {/* Main Image */}
              <div className="rounded-[60px] overflow-hidden border-[12px] border-white shadow-2xl transform rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                  alt="Radiología Avanzada" 
                  className="w-full h-auto object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6C569E]/40 to-transparent" />
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-10 left-10 z-20 glass-card px-8 py-6 rounded-[32px] shadow-xl border border-white/40">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#4AAC3D]" />
                  <span className="font-bold text-slate-900">Agenda Abierta en Brisas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-400">
        <span className="text-[10px] font-bold uppercase tracking-widest">Descubre más</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </div>
  );
};

export default PromoHero;
