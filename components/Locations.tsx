
import React from 'react';
import { LOCATIONS } from '../constants';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Nuestras Sedes</h2>
        <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Ubicaciones estratégicas y modernas para brindarte la mejor atención en Panamá.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {LOCATIONS.map((loc) => (
          <div key={loc.id} className="bg-white rounded-[48px] overflow-hidden shadow-sm border border-slate-100 flex flex-col group">
            <div className="h-80 relative overflow-hidden">
                <img 
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-[#6C569E] font-bold text-sm tracking-widest uppercase shadow-sm">
                    {loc.id === 'main' ? 'Marbella' : 'Brisas del Golf'}
                </div>
            </div>
            <div className="p-10 space-y-8">
              <h3 className="text-3xl font-extrabold text-slate-900">{loc.name}</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#F1ECF9] flex items-center justify-center text-[#6C569E] shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{loc.address}</p>
                    <p className="text-slate-500 font-medium">Ciudad de Panamá</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#F1ECF9] flex items-center justify-center text-[#6C569E] shrink-0">
                    <Phone size={24} />
                  </div>
                  <p className="font-bold text-slate-900 text-lg">{loc.phone}</p>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#F1ECF9] flex items-center justify-center text-[#6C569E] shrink-0">
                    <Clock size={24} />
                  </div>
                  <p className="font-medium text-slate-700">{loc.hours}</p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#6C569E] font-bold hover:underline group/link"
                >
                  Ver en Google Maps
                  <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
