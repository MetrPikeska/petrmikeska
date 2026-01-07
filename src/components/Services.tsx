import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      title: 'Geoinformatika & prostorové analýzy',
      description: 'Analýza prostorových dat (vektor, raster), práce s gridy, typizace a regionalizace území, GIS automatizace a modelování.'
    },
    {
      title: 'Webové mapy & aplikace',
      description: 'Interaktivní mapové prohlížeče, mapové webové aplikace (Leaflet), vizualizace dat a analytické dashboardy.'
    },
    {
      title: 'Computer Vision & analýza obrazu',
      description: 'Zpracování záznamů z kamer, detekce objektů pomocí YOLO a AI modelů, prostorová interpretace obrazových dat v kontextu GIS.'
    },
    {
      title: '3D data & terén',
      description: '3D modely terénu, práce s výškopisem (DEM/DSM), analýza sklonu, orientace a objemu.'
    }
  ];

  return (
    <SectionWrapper id="services" title="Specializace" background="gray">
      <div className="grid grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}