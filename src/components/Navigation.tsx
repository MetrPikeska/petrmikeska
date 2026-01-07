import React from 'react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Domů' },
    { id: 'about', label: 'O mně' },
    { id: 'skills', label: 'Specializace' },
    { id: 'projects', label: 'Projekty' },
    { id: 'services', label: 'Služby' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-2 border-neutral-300 z-50">
      <div className="max-w-[1440px] mx-auto px-16 py-6">
        <div className="flex items-center justify-between">
          <div className="text-neutral-900 tracking-wider">
            PETR MIKESKA
          </div>
          
          <ul className="flex gap-12">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`tracking-wide transition-colors ${
                    activeSection === item.id 
                      ? 'text-neutral-900 border-b-2 border-neutral-900 pb-1' 
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
