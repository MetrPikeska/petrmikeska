import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'Platforma pro analýzu a vizualizaci klimatických dat',
      description: 'Zpracování a analýza satelitních a klimatických datových sad s interaktivní webovou vizualizací.',
      tags: ['Klima', 'Dálkový průzkum', 'Web']
    },
    {
      title: 'GIS databáze a PostGIS procesní pipeline',
      description: 'Návrh a implementace pracovních postupů prostorové databáze pro efektivní správu geoprostorových dat.',
      tags: ['PostGIS', 'Databáze', 'GIS']
    },
    {
      title: 'Interaktivní webová mapová aplikace',
      description: 'Moderní webové mapové rozhraní s vizualizací geoprostorových dat a analytickými funkcemi.',
      tags: ['Webové mapy', 'JavaScript', 'GIS']
    },
    {
      title: 'Bakalářská práce',
      description: 'Zpracování a analýza prostorových dat s důrazem na automatizaci, reprodukovatelnost a přehlednou vizualizaci.',
      tags: ['Python', 'GIS', 'Výzkum']
    }
  ];

  return (
    <SectionWrapper id="projects" title="Vybrané projekty">
      <p className="text-neutral-700 mb-12 max-w-3xl">
        Příklady projektů zaměřených na GIS, analýzu prostorových dat, webové mapy a dálkový průzkum Země.
      </p>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}