
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-[48px] shadow-2xl border border-purple-50 text-center space-y-6">
        <div className="w-24 h-24 bg-green-100 text-[#4AAC3D] rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-3xl font-extrabold text-slate-900">¡Solicitud Enviada!</h3>
        <p className="text-slate-600 text-lg leading-relaxed">
          Tu descuento ha sido reservado. Un asesor te llamará en breve para confirmar tu cita.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-[#6C569E] font-bold hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 md:p-12 rounded-[48px] shadow-2xl border border-purple-50 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">Nombre Completo</label>
          <input 
            required
            type="text" 
            placeholder="Ej. Juan Pérez"
            className="w-full bg-[#F1ECF9]/30 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#6C569E]/10 transition-all outline-none text-slate-900"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">Teléfono</label>
          <input 
            required
            type="tel" 
            placeholder="Ej. 6677-8899"
            className="w-full bg-[#F1ECF9]/30 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#6C569E]/10 transition-all outline-none text-slate-900"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">Estudio de interés</label>
        <select className="w-full bg-[#F1ECF9]/30 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#6C569E]/10 transition-all outline-none text-slate-900 cursor-pointer">
          <option>Radiología Digital</option>
          <option>Mamografía 3D</option>
          <option>Ultrasonido / Doppler</option>
          <option>Densitometría Ósea</option>
          <option>Otro servicio</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">Mensaje (opcional)</label>
        <textarea 
          rows={3}
          placeholder="¿Alguna duda o indicación especial?"
          className="w-full bg-[#F1ECF9]/30 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#6C569E]/10 transition-all outline-none text-slate-900 resize-none"
        ></textarea>
      </div>

      <button 
        type="submit"
        className="w-full bg-[#4AAC3D] text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-green-100 flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all"
      >
        RESERVAR MI 20% DCTO.
        <Send size={20} />
      </button>

      <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
        Atención inmediata garantizada
      </p>
    </form>
  );
};

export default ContactForm;
