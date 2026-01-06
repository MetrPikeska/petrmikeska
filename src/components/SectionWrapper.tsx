import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  background?: 'white' | 'gray';
}

export function SectionWrapper({ id, title, children, background = 'white' }: SectionWrapperProps) {
  const bgColor = background === 'gray' ? 'bg-neutral-100' : 'bg-white';
  
  return (
    <section id={id} className={`py-24 ${bgColor}`}>
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="mb-16">
          <h2 className="text-neutral-900 mb-4 border-b-2 border-neutral-300 pb-4 inline-block pr-12">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
