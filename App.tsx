
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PromoHero from './components/PromoHero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header scrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="inicio">
          <PromoHero />
        </section>

        <section id="nosotros" className="py-24 bg-[#F1ECF9]/30">
          <Benefits />
        </section>

        <section id="servicios" className="py-32">
          <div className="container mx-auto px-4 mb-20 text-center">
            <span className="text-[#4AAC3D] font-black tracking-[0.2em] uppercase text-xs mb-4 block">Excelencia Médica</span>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-none">
              Nuestros <br /><span className="text-[#6C569E]">Servicios.</span>
            </h2>
            <p className="text-slate-500 mt-8 max-w-2xl mx-auto text-xl font-medium">
              Especialistas en brindarte claridad diagnóstica con la mejor tecnología de Panamá.
            </p>
          </div>
          <Services />
        </section>

        <section className="py-32 purple-gradient text-white rounded-[100px] mx-4 my-8 overflow-hidden">
          <Process />
        </section>

        <section id="sedes" className="py-32">
          <Locations />
        </section>

        <section className="py-32 bg-[#F1ECF9]/30">
          <Testimonials />
        </section>

        <section id="contacto" className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-[80px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-purple-50">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-12 lg:p-20 purple-gradient text-white flex flex-col justify-center space-y-8">
                  <h2 className="text-5xl font-black leading-none uppercase tracking-tighter">Bienvenido a la Precisión.</h2>
                  <p className="text-purple-100 text-xl font-medium leading-relaxed">
                    Aprovecha el 20% de descuento en tu primer estudio en nuestra nueva sede de Brisas del Golf o Marbella.
                  </p>
                  <div className="space-y-4 pt-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                         <svg className="w-6 h-6 text-[#4AAC3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                       </div>
                       <span className="font-bold text-2xl">263-5555</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
