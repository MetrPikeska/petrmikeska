import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Database, Map, Code, Globe, Satellite, Server } from 'lucide-react';

export function Skills() {
  const skills = [
    { icon: Map, label: 'QGIS', description: 'GIS software' },
    { icon: Map, label: 'ArcGIS', description: 'GIS platforma' },
    { icon: Code, label: 'Python', description: 'Skriptování a automatizace' },
    { icon: Database, label: 'PostgreSQL', description: 'Databázový systém' },
    { icon: Database, label: 'PostGIS', description: 'Prostorové rozšíření' },
    { icon: Server, label: 'GDAL', description: 'Geoprostorová knihovna' },
    { icon: Globe, label: 'Leaflet', description: 'Webové mapy' },
    { icon: Code, label: 'JavaScript', description: 'Webový vývoj' },
    { icon: Code, label: 'HTML', description: 'Značkovací jazyk' },
    { icon: Code, label: 'CSS', description: 'Stylování' }
  ];

  return (
    <SectionWrapper id="skills" title="Technologie a nástroje" background="gray">
      <div className="grid grid-cols-5 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div 
              key={index}
              className="bg-white border-2 border-neutral-300 p-6 hover:border-neutral-900 transition-colors"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-neutral-200 border-2 border-neutral-300 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-neutral-600" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-neutral-900 mb-1">{skill.label}</h3>
              <p className="text-neutral-600 text-sm">{skill.description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}