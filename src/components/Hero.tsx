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
      className="pt-24 min-h-screen"
      style={{ 
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-16 py-32 w-full flex items-center min-h-screen" style={{ position: 'relative', zIndex: 20 }}>
        <div className="max-w-4xl p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.82)', borderRadius: '8px' }}>
          <div className="pl-8 mb-12" style={{ borderLeft: '4px solid white', position: 'relative' }}>
            <h1 className="text-black mb-6 font-black" style={{ fontSize: '2rem', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              Bc. Petr Mikeska 
            </h1>
            <h2 className="text-neutral-800 mb-6 text-2xl font-semibold">
              Geoinformatika, GIS analýzy a vývoj webových mapových aplikací 
            </h2>
            <p className="text-neutral-700 max-w-2xl text-lg">
              Student geoinformatiky a kartografie se zaměřením na programování, webové technologie a computer vision. Propojuji GIS, databáze a webové nástroje do praktických mapových řešení.
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