
import React from 'react';
import { Shield, Activity, Clock, Heart, Zap, Waves } from 'lucide-react';
import { Service, Benefit, Location } from './types';

export const COLORS = {
  primary: '#6C569E', 
  promo: '#4AAC3D', 
  light: '#F1ECF9',
  slate: '#0f172a',
};

export const SERVICES: Service[] = [
  {
    id: 'rx',
    title: 'Radiología en General',
    description: 'Soluciones de imágenes y Rayos-X de alta calidad con procesamiento digital inmediato.',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    details: ['Torax y Abdomen', 'Huesos Largos', 'Columna']
  },
  {
    id: 'mamo',
    title: 'Mamografía',
    description: 'Detección y diagnóstico avanzado de enfermedades de la mama con tecnología de baja dosis.',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1579154235602-3c2c2992d234?auto=format&fit=crop&q=80&w=800',
    details: ['Mamografía Digital', 'Tomosíntesis', 'Evaluación de nódulos']
  },
  {
    id: 'densitometry',
    title: 'Densitometría Ósea',
    description: 'Absorciometría de energía dual (DEXA) para el estudio preciso de la densidad ósea.',
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1616012480717-fd9867059ca0?auto=format&fit=crop&q=80&w=800',
    details: ['DEXA Central', 'Estudio de Composición', 'Control Osteoporosis']
  },
  {
    id: 'ultrasound',
    title: 'Ultrasonido',
    description: 'Alta calidad de imagen en tiempo real para diagnósticos precisos en tejidos blandos y órganos.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800',
    details: ['Abdominal', 'Pélvico', 'Tiroides']
  },
  {
    id: 'doppler',
    title: 'Ultrasonido Doppler',
    description: 'Ecografía vascular especializada para el estudio del flujo sanguíneo y sistema circulatorio.',
    icon: 'Waves',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    details: ['Venoso y Arterial', 'Carótidas', 'Ecocardiograma']
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Tecnología Premium',
    description: 'Equipos de última generación para una precisión diagnóstica sin precedentes.',
    icon: <Zap className="w-8 h-8 text-[#6C569E]" />
  },
  {
    title: 'Cuidado Humano',
    description: 'Un equipo que entiende tu bienestar como prioridad número uno.',
    icon: <Heart className="w-8 h-8 text-[#6C569E]" />
  },
  {
    title: '20% Descuento',
    description: 'Regalo especial en todos nuestros servicios para tu tranquilidad.',
    icon: <Zap className="w-8 h-8 text-[#4AAC3D]" />
  },
  {
    title: 'Entrega Digital',
    description: 'Accede a tus estudios desde cualquier dispositivo al instante.',
    icon: <Clock className="w-8 h-8 text-[#6C569E]" />
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'main',
    name: 'Sede Marbella',
    address: 'Calle 54 Este, Edif. Metropolitano',
    phone: '263-5555',
    hours: 'Lun - Vie: 7:00 AM - 7:00 PM | Sáb: 7:00 AM - 1:00 PM',
    mapUrl: 'https://maps.google.com',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'este',
    name: 'Sede Brisas del Golf',
    address: 'Plaza Signature, Local 12',
    phone: '390-4444',
    hours: 'Lun - Vie: 8:00 AM - 6:00 PM | Sáb: 8:00 AM - 12:00 PM',
    mapUrl: 'https://maps.google.com',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  }
];
