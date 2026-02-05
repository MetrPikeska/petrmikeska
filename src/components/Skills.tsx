import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Database, Map, Code, Globe, Server, Brain, Box } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'GIS & Spatial stack',
      skills: [
        { icon: Map, label: 'QGIS/ArcGIS Pro', description: 'GIS software' },
        { icon: Database, label: 'PostGIS', description: 'Prostorové rozšíření' },
        { icon: Server, label: 'GDAL', description: 'Geoprostorová knihovna' },
        { icon: Database, label: 'Spatial SQL', description: 'Prostorové dotazy' }
      ]
    },
    {
      category: 'Programování & automatizace',
      skills: [
        { icon: Code, label: 'Python', description: 'Analýzy, GIS, data processing' },
        { icon: Code, label: 'C#', description: 'Základy, desktop / logika' },
        { icon: Code, label: 'JavaScript', description: 'Webový vývoj' },
        { icon: Code, label: 'Git', description: 'Verzování kódu' }
      ]
    },
    {
      category: 'Web & mapové aplikace',
      skills: [
        { icon: Code, label: 'HTML/CSS', description: 'Frontend technologie' },
        { icon: Globe, label: 'Leaflet', description: 'Interaktivní mapy' },
        { icon: Server, label: 'REST API', description: 'API integrace' },
        { icon: Map, label: 'GeoJSON, WMS, WFS', description: 'Geo formáty' }
      ]
    },
    {
      category: 'Databáze',
      skills: [
        { icon: Database, label: 'PostgreSQL', description: 'Relační databáze' },
        { icon: Database, label: 'PostGIS', description: 'Prostorová data' },
        { icon: Database, label: 'Návrh schémat', description: 'Databázový design' },
        { icon: Database, label: 'SQL optimalizace', description: 'Indexy a výkon' }
      ]
    },
    {
      category: 'Computer Vision & AI',
      skills: [
        { icon: Brain, label: 'YOLO', description: 'Objektová detekce' },
        { icon: Brain, label: 'Video processing', description: 'Zpracování videozáznamů' },
        { icon: Box, label: 'Inference', description: 'Kamerová data' },
        { icon: Brain, label: 'OpenCV', description: 'Zpracování obrazu' }
      ]
    }
  ];

  return (
    <SectionWrapper id="skills" title="Zkušenosti & dovednosti" background="gray">
      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-neutral-900 text-xl font-semibold mb-6">{category.category}</h3>
            <div className="grid grid-cols-5 gap-6">
              {category.skills.map((skill, index) => {
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
                    <h4 className="text-neutral-900 mb-1 font-semibold">{skill.label}</h4>
                    <p className="text-neutral-600 text-sm">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}