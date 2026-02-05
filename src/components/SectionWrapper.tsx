import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  background?: 'white' | 'gray';
  className?: string;
  style?: React.CSSProperties;
}

export function SectionWrapper({ 
  id, 
  title, 
  children, 
  background = 'white',
  className = '',
  style
}: SectionWrapperProps) {
  const bgColor = background === 'gray' ? 'bg-neutral-100' : 'bg-white';
  
  return (
    <section id={id} className={`py-24 ${bgColor} ${className}`} style={style}>
      <div className="max-w-[1440px] mx-auto px-16 relative z-10">
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
