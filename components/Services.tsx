
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="group relative bg-white p-10 rounded-[50px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-50 flex flex-col h-full"
          >
            <div className="w-20 h-20 rounded-[30px] bg-[#F1ECF9] text-[#6C569E] flex items-center justify-center mb-10 group-hover:bg-[#6C569E] group-hover:text-white transition-all duration-500">
               <div className="font-bold text-2xl">0{SERVICES.indexOf(service) + 1}</div>
            </div>

            <h3 className="text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#6C569E] transition-colors">
              {service.title}
            </h3>
            
            <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10 flex-grow">
              {service.description}
            </p>

            <ul className="space-y-3 mb-12">
              {service.details?.map((d, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6C569E]/30" />
                  {d}
                </li>
              ))}
            </ul>

            <a 
              href="#contacto" 
              className="inline-flex items-center gap-2 text-[#6C569E] font-black text-lg hover:gap-4 transition-all"
            >
              Cita con 20% dcto.
              <ArrowRight size={20} />
            </a>
          </div>
        ))}

        {/* Especial Promo Card */}
        <div className="lg:col-span-1 bg-[#4AAC3D] p-10 rounded-[50px] shadow-xl text-white flex flex-col justify-center items-center text-center space-y-6 transform hover:scale-[1.02] transition-transform">
           <h3 className="text-4xl font-black leading-tight">¿Dudas sobre un estudio?</h3>
           <p className="text-green-100 font-medium text-lg">Escríbenos y mantén tu descuento de bienvenida activado.</p>
           <a 
             href="https://wa.me/50766778899" 
             className="w-full bg-white text-[#4AAC3D] py-5 rounded-3xl font-black text-xl shadow-lg hover:shadow-2xl transition-all"
           >
             WhatsApp Directo
           </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
