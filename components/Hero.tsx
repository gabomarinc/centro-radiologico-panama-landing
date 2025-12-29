
import React from 'react';
import { ChevronRight, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-blue-50/50 rounded-bl-[100px] lg:rounded-bl-[200px]" />
      <div className="absolute top-20 left-10 -z-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase">
              <Award size={16} className="text-blue-600" />
              Referente médico en Panamá
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              Tecnología <br />
              de punta en <br />
              <span className="text-blue-600">Panamá.</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Líderes en diagnóstico por imagen con más de 40 años brindando certeza y tranquilidad a las familias panameñas.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contacto"
                className="w-full sm:w-auto blue-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                Agendar mi estudio
                <ChevronRight size={20} />
              </a>
              <a
                href="#servicios"
                className="w-full sm:w-auto text-slate-900 hover:text-blue-600 px-8 py-5 rounded-2xl font-bold text-lg transition-colors flex items-center justify-center gap-2 group"
              >
                Ver especialidades
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Micro Trust Stats */}
            <div className="pt-12 grid grid-cols-3 gap-8 border-t border-slate-200">
              <div>
                <div className="text-3xl font-black text-slate-900">40+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Años de Trayectoria</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">2</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Sedes Modernas</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Compromiso</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
                alt="Tecnología Radiológica" 
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
              />
            </div>
            
            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -left-6 lg:-left-12 z-20 glass-card p-6 rounded-[32px] shadow-2xl max-w-[280px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Certificación de Calidad</h4>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cumplimos con los más rigurosos estándares de salud de la República de Panamá.
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full opacity-10 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
