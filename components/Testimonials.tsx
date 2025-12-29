
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "La atención en Brisas del Golf fue excelente. Instalaciones impecables y el personal muy atento. Mi estudio fue rápido y preciso.",
      author: "Maria Alejandra Ruiz",
      role: "Sede Brisas",
      image: "https://i.pravatar.cc/150?u=maria"
    },
    {
      text: "Equipos de última generación. El descuento del 20% fue un gran incentivo para realizar mi chequeo anual. Muy profesionales.",
      author: "Carlos Rodriguez",
      role: "Sede Marbella",
      image: "https://i.pravatar.cc/150?u=carlos"
    },
    {
      text: "El trato humano marca la diferencia. Me sentí cómoda en todo momento. Los resultados digitales son super prácticos.",
      author: "Elena Castillo",
      role: "Consulta General",
      image: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-[#6C569E] font-bold tracking-widest uppercase text-sm">Experiencias</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-slate-900 leading-tight">Cuidando de ti <br />con excelencia.</h2>
        </div>
        <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-3xl border border-purple-100 shadow-sm">
          <div className="flex">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-amber-400 fill-amber-400" />)}
          </div>
          <span className="font-black text-slate-900 text-lg">4.9/5</span>
          <span className="text-slate-500 font-bold">Reseñas Reales</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[48px] relative group hover:bg-[#6C569E] transition-all duration-500 border border-purple-50">
            <Quote size={48} className="text-purple-50 absolute top-8 right-8 group-hover:text-purple-400/30 transition-colors" />
            
            <p className="text-slate-700 text-lg leading-relaxed mb-10 relative z-10 font-medium group-hover:text-white transition-colors">
              "{item.text}"
            </p>

            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.author} className="w-14 h-14 rounded-2xl object-cover border-2 border-[#F1ECF9]" />
              <div>
                <h4 className="font-black text-slate-900 group-hover:text-white transition-colors">{item.author}</h4>
                <p className="text-[#6C569E] text-sm font-bold group-hover:text-purple-200 transition-colors uppercase tracking-widest">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
