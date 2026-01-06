import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-white border-2 border-neutral-300 p-8 hover:border-neutral-900 transition-colors">
      <div className="mb-4">
        <div className="w-12 h-1 bg-neutral-900"></div>
      </div>
      <h3 className="text-neutral-900 mb-4">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
}
