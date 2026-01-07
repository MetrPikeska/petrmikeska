import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
    title: 'Bakalářská práce – dostupnost zelených ploch ve městech',
    description: 'Vývoj uživatelského GIS toolboxu pro hodnocení dostupnosti zelených ploch a parků pro obyvatele měst. Řešení využívá prostorové analýzy, síťovou analýzu a automatizované zpracování dat s cílem podpořit rozhodování v oblasti územního plánování a kvality života ve městech.',
    tags: ['GIS', 'Python', 'Prostorové analýzy', 'Výzkum']
    }
    ,
    {
      title: 'GEOTE Klima – webová platforma pro klimatická data',
      description: 'Webová aplikace pro analýzu a vizualizaci klimatických a environmentálních dat. Projekt propojuje prostorová data uložená v PostGIS s REST API a interaktivním webovým rozhraním, které umožňuje přehlednou práci s klimatickými indikátory, mapami a grafy.',
      tags: ['GIS', 'Klima', 'PostGIS', 'Web',]
    }
    ,
    {
      title: 'Geo Places Quiz – interaktivní geografický kvíz',
      description: 'Interaktivní webová aplikace zaměřená na procvičování geografických znalostí formou kvízu. Projekt kombinuje práci s geografickými daty, mapovou logiku a webové technologie s cílem vytvořit zábavný a edukativní nástroj.',
      tags: ['Web', 'JavaScript', 'PostGIS', 'Interaktivní aplikace']
    }
    ,
    {
      title: 'VYGEO OPALENA – interaktivní GIS pro správu lyžařského areálu',
      description: 'Webová GIS aplikace pro správu, monitoring a analýzu prostorových dat v lyžařském areálu Opálená v Beskydech. Projekt propojuje webové mapy, geoinformatiku a IoT prvky pro práci s provozními daty, počasím, výškovými informacemi a fotografickou dokumentací. Součástí jsou analytické nástroje, autentizace uživatelů a experimentální AI detekce objektů pomocí modelu YOLOv8.',
      tags: ['GIS', 'Webové mapy', 'IoT', 'AI', 'PostGIS', 'Vývoj']
    },
    {
      title: 'Znečištění ovzduší v Moravskoslezském kraji – kartografická analýza',
      description: 'Semestrální kartografická práce zaměřená na analýzu a vizualizaci znečištění ovzduší v Moravskoslezském kraji. Projekt využívá prostorová data o koncentracích vybraných znečišťujících látek a jejich kartografické zpracování formou analytických map, kartogramů a syntetických map. Součástí práce je typizace a regionalizace území na základě míry imisní zátěže s cílem přehledně interpretovat prostorové vzorce a regionální rozdíly kvality ovzduší.',
      tags: ['Kartografie', 'GIS', 'Ovzduší', 'Analytické mapy', 'Typizace']
    },
    {
      title: 'Ski Cam Analytics – AI analýza kamerových dat',
      description: 'Analytický projekt zaměřený na zpracování a vyhodnocování kamerových dat z lyžařského areálu pomocí metod počítačového vidění. Řešení využívá YOLO knihovnu pro detekci objektů a skriptové zpracování dat v Pythonu s cílem získávat provozní informace využitelné v GIS a webových aplikacích.',
      tags: ['AI', 'Computer Vision', 'YOLO', 'Python', 'Analýza dat']
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