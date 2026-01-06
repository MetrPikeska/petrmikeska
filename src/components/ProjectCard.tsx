import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="border-2 border-neutral-300 bg-white hover:border-neutral-900 transition-colors group">
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-neutral-900">{title}</h3>
          <div className="w-8 h-8 border-2 border-neutral-300 flex items-center justify-center group-hover:border-neutral-900 group-hover:bg-neutral-900 transition-colors">
            <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white" strokeWidth={2} />
          </div>
        </div>
        
        <p className="text-neutral-600 mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 border border-neutral-300 text-neutral-700 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
