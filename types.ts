
// Fix: Added React import to provide the React namespace required for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  details?: string[];
}

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}
