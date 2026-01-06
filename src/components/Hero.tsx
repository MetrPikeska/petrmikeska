import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="pt-24 min-h-screen flex items-center bg-neutral-100">
      <div className="max-w-[1440px] mx-auto px-16 py-32 w-full">
        <div className="max-w-4xl">
          <div className="border-l-4 border-neutral-900 pl-8 mb-12">
            <h1 className="text-neutral-900 mb-6">
              Petr Mikeska
            </h1>
            <h2 className="text-neutral-700 mb-6">
              Geoinformatika & GIS analytik
            </h2>
            <p className="text-neutral-600 max-w-2xl">
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