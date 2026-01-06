import React from 'react';
import { Button } from './Button';
import backgroundImage from '../assets/background.jpg';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section 
      id="home" 
      className="pt-24 min-h-screen overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Background Image */}
      <img 
        src={backgroundImage} 
        alt="Background" 
        className="w-full h-full object-cover pointer-events-none"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />
      
      {/* Dark Overlay */}
      <div className="bg-black/40 pointer-events-none" style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
      
      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-16 py-32 w-full flex items-center min-h-screen" style={{ position: 'relative', zIndex: 20 }}>
        <div className="max-w-4xl">
          <div className="pl-8 mb-12" style={{ borderLeft: '4px solid white', position: 'relative', zIndex: 30 }}>
            <h1 className="text-white mb-6 text-5xl font-bold">
              Petr Mikeska
            </h1>
            <h2 className="text-neutral-100 mb-6 text-2xl">
              Geoinformatik, GIS analytik a vývojář webových mapových aplikací 
            </h2>
            <p className="text-neutral-100 max-w-2xl text-lg">
              Student geoinformatiky a kartografie se zaměřením na programování a webové technologie. Propojuji GIS, databáze a webové nástroje do praktických mapových řešení.
            </p>
          </div>
          
          <div className="flex gap-6">
            <Button variant="primary" onClick={() => onNavigate('projects')}>
              Zobrazit projekty
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('contact')}>
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    

    </section>
  );
}