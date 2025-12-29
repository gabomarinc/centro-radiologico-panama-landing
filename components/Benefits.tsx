
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
         <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">¿Por qué elegirnos?</span>
         <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-slate-900">Pasión por la precisión.</h2>
         <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Metropolitano Panamá nació con una visión clara: elevar los estándares de salud en el país a través de la mejor tecnología de imagen del mundo.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {BENEFITS.map((benefit, index) => (
          <div 
            key={index} 
            className="group p-8 bg-white rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
              <div className="group-hover:text-white transition-colors duration-500">
                {benefit.icon}
              </div>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{benefit.title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
