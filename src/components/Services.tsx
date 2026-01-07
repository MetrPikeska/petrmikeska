import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      title: 'Geoinformatika & GIS analýzy',
      description: 'Prostorové analýzy vektorových i rastrových dat, práce s gridy, typizace a regionalizace území. Automatizace GIS workflow, modelování a analytické výstupy pro rozhodování.'
    },
    {
      title: 'Webová kartografie & mapové aplikace',
      description: 'Tvorba interaktivních mapových prohlížečů a webových GIS aplikací (Leaflet). Vizualizace prostorových dat, analytické dashboardy a publikace GIS výstupů na webu.'
    },
    {
      title: 'Databáze & správa dat',
      description: 'Návrh a správa prostorových i neprostorových databází (PostGIS, SQL). Práce s datovými modely, importy, aktualizace dat a napojení databází na GIS a webové aplikace.'
    },
    {
      title: 'Computer Vision & analýza obrazu',
      description: 'Zpracování obrazových a videozáznamů, detekce objektů pomocí AI modelů (např. YOLO). Propojování computer vision výstupů s GIS a prostorovou interpretací dat.'
    },
    {
      title: '3D data, terén & modelování',
      description: '3D modelování terénu a objektů, práce s DEM/DSM. Analýzy sklonu, orientace, objemu a vizualizace 3D dat pro prostorové analýzy i prezentaci.'
    },
    {
      title: 'Webový vývoj & správa webů',
      description: 'Tvorba a správa webových stránek a aplikací. Webové technologie (HTML, CSS, JavaScript), správa obsahu, technická údržba a napojení webu na mapové a datové služby.'
    }
  ];

  return (
    <SectionWrapper id="services" title="Specializace" background="gray">
      <section itemScope itemType="https://schema.org/Service" aria-label="Nabízené služby a specializace">
        <div className="grid grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}