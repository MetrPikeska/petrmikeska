import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="grid grid-cols-12 gap-12 pb-8 border-b-2 border-neutral-700">
          <div className="col-span-6">
            <h3 className="mb-4 tracking-wider">PETR MIKESKA</h3>
            <p className="text-neutral-400">
              Geoinformatika a GIS analytik
            </p>
          </div>
          
          <div className="col-span-6 flex justify-end items-start gap-4">
            <a 
              href="https://github.com/MetrPikeska" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-neutral-700 flex items-center justify-center hover:border-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.linkedin.com/in/petr-mikeska-b25669262/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-neutral-700 flex items-center justify-center hover:border-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a 
              href="mailto:piter.mikeska@gmail.com" 
              className="w-12 h-12 border-2 border-neutral-700 flex items-center justify-center hover:border-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
        
        <div className="pt-8 flex justify-between items-center text-neutral-400 text-sm">
          <p>© 2025 petrmikeska.cz</p>
          <p>Petr Mikeska — Geoinformatika a GIS analytik</p>
        </div>
      </div>
    </footer>
  );
}