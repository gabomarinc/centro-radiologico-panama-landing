
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight leading-none">METROPOLITANO</span>
                <span className="text-[8px] font-bold text-blue-500 tracking-widest uppercase">Panamá | Radiología</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Transformando el diagnóstico por imagen en Panamá con tecnología, precisión y calidez humana desde 1980. Aprovecha nuestro 20% de descuento.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Services Quick View */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold uppercase tracking-widest text-blue-500 text-sm">Especialidades</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 font-medium">Radiología Digital</li>
              <li className="text-slate-400 font-medium">Mamografía de Alta Resolución</li>
              <li className="text-slate-400 font-medium">Ultrasonido & Doppler</li>
              <li className="text-slate-400 font-medium">Densitometría DEXA</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold uppercase tracking-widest text-blue-500 text-sm">Contacto Directo</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <p className="text-slate-400 text-sm leading-relaxed">Calle 54 Este, Edif. Metropolitano, Planta Baja, Ciudad de Panamá</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <p className="text-slate-400 font-bold">+507 263-5555</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <p className="text-slate-400 font-medium">citas@metropolitano.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Metropolitano Panamá. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
