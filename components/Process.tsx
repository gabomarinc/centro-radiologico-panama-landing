
import React from 'react';
import { Search, Calendar, FileText } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Elige tu estudio',
      description: 'Selecciona el servicio que necesitas entre nuestras especialidades.',
      icon: <Search className="w-10 h-10 text-[#4AAC3D]" />
    },
    {
      id: 2,
      title: 'Agenda Rápido',
      description: 'Llámanos o escríbenos para coordinar tu cita en minutos.',
      icon: <Calendar className="w-10 h-10 text-[#4AAC3D]" />
    },
    {
      id: 3,
      title: 'Recibe Resultados',
      description: 'Consulta tus imágenes y reportes vía web de forma segura.',
      icon: <FileText className="w-10 h-10 text-[#4AAC3D]" />
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <span className="text-[#4AAC3D] font-black tracking-widest uppercase text-xs">Simplicidad Digital</span>
        <h2 className="text-5xl font-black mt-4">Atención en 3 pasos.</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
        {steps.map((step) => (
          <div key={step.id} className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-slate-800/50 rounded-[40px] flex items-center justify-center mb-8 border border-slate-700 transition-all group-hover:bg-[#4AAC3D] group-hover:scale-110">
              <div className="group-hover:text-white transition-colors">
                {step.icon}
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xs">
              {step.description}
            </p>
            {step.id < 3 && (
              <div className="hidden lg:block absolute top-12 left-[70%] w-1/2 h-0.5 border-t-2 border-dashed border-slate-700" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
