import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      title: 'GIS a prostorové analýzy',
      description: 'Vektorová a rastrová analýza, prostorové modelování, PostGIS pracovní postupy a analytické vyhodnocování prostorových datových sad.'
    },
    {
      title: 'Webové mapové aplikace',
      description: 'Návrh a vývoj interaktivních webových map a geoprostorových rozhraní založených na moderních webových technologiích.'
    },
    {
      title: 'Dálkový průzkum a klimatická data',
      description: 'Zpracování a analýza satelitních a klimatických datových sad, časových řad a environmentálních ukazatelů.'
    },
    {
      title: 'Python a automatizace',
      description: 'Python skripty pro zpracování dat, automatizaci GIS a backend logiku pro geoprostorové aplikace.'
    }
  ];

  return (
    <SectionWrapper id="services" title="Co dělám" background="gray">
      <div className="grid grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}