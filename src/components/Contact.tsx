import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { Mail, Github, Linkedin, Globe } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
  };

  return (
    <SectionWrapper id="contact" title="Kontakt">
      <div className="grid grid-cols-12 gap-12" itemScope itemType="https://schema.org/ContactPage">
        <div className="col-span-7">
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Kontaktní formulář">
            <div>
              <label htmlFor="name" className="block text-neutral-700 mb-2 tracking-wide">
                Jméno
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border-2 border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors bg-white"
                placeholder="Vaše jméno"
                required
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-neutral-700 mb-2 tracking-wide">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border-2 border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors bg-white"
                placeholder="vas.email@priklad.cz"
                required
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-neutral-700 mb-2 tracking-wide">
                Zpráva
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border-2 border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors resize-none bg-white"
                placeholder="Vaše zpráva..."
                required
                aria-required="true"
              />
            </div>
            
            <Button type="submit" variant="primary">
              Odeslat zprávu
            </Button>
          </form>
        </div>
        
        <div className="col-span-5">
          <address className="bg-neutral-100 border-2 border-neutral-300 p-8 not-italic">
            <h3 className="text-neutral-900 mb-6">Kontaktujte mě</h3>
            <p className="text-neutral-600 mb-8">
              Pokud máte zájem o spolupráci, výzkumné projekty nebo geoprostorová řešení, neváhejte mě kontaktovat.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:piter.mikeska@gmail.com"
                className="flex items-center gap-4 text-neutral-700 hover:text-neutral-900 transition-colors"
                itemProp="email"
                aria-label="Email: piter.mikeska@gmail.com"
              >
                <div className="w-10 h-10 border-2 border-neutral-300 flex items-center justify-center" aria-hidden="true">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span>piter.mikeska@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/petr-mikeska-b25669262/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-700 hover:text-neutral-900 transition-colors"
                itemProp="sameAs"
                aria-label="LinkedIn profil"
              >
                <div className="w-10 h-10 border-2 border-neutral-300 flex items-center justify-center" aria-hidden="true">
                  <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/MetrPikeska"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-700 hover:text-neutral-900 transition-colors"
                itemProp="sameAs"
                aria-label="GitHub profil"
              >
                <div className="w-10 h-10 border-2 border-neutral-300 flex items-center justify-center" aria-hidden="true">
                  <Github className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://petrmikeska.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-700 hover:text-neutral-900 transition-colors"
                itemProp="url"
                aria-label="Webová stránka petrmikeska.cz"
              >
                <div className="w-10 h-10 border-2 border-neutral-300 flex items-center justify-center" aria-hidden="true">
                  <Globe className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span>petrmikeska.cz</span>
              </a>
            </div>
          </address>
        </div>
      </div>
    </SectionWrapper>
  );
}