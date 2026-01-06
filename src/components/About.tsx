import React from 'react';
import { SectionWrapper } from './SectionWrapper';

export function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8">
          <div className="space-y-6 text-neutral-700 leading-relaxed">
            <p>
              Jmenuji se Petr Mikeska a jsem student geoinformatiky a kartografie se zaměřením na programování a webové technologie. Věnuji se propojování GIS, databází a webových nástrojů do přehledných a prakticky využitelných mapových řešení.
            </p>
            <p>
              Můj technický základ vychází ze studia na{' '}
              <a 
                href="https://www.ssinfotech.cz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-900 hover:underline"
              >
                Střední škole informačních technologií
              </a>
              , kde jsem absolvoval obor Počítačové systémy a správa sítí zakončený maturitní zkouškou. Studium bylo zaměřeno na informační technologie, správu systémů, počítačové sítě a základy programování.
            </p>
            <p>
              Bakalářské studium Geoinformatiky a kartografie jsem absolvoval na{' '}
              <a 
                href="https://geoinformatics.upol.cz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-900 hover:underline"
              >
                Katedře geoinformatiky Univerzity Palackého v Olomouci
              </a>
              . V rámci bakalářské práce jsem vytvořil uživatelský GIS toolbox pro hodnocení dostupnosti zelených ploch a parků pro obyvatele měst. Práce je dostupná{' '}
              <a 
                href="https://geoinformatics.upol.cz/dprace/bakalarske/mikeska25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-900 hover:underline"
              >
                zde
              </a>
              .
            </p>
            <p>
              V současnosti pokračuji v navazujícím magisterském studiu Geoinformatiky a kartografie na Univerzitě Palackého v Olomouci se zaměřením na pokročilou práci s prostorovými daty a webovou kartografii.
            </p>
          </div>
        </div>
        
        <div className="col-span-4">
          <div className="bg-neutral-200 border-2 border-neutral-300 aspect-square flex items-center justify-center">
            <span className="text-neutral-400">[Portrait placeholder]</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}