
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  className
}) => {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-3 animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-gradient-to-r from-blue-glow to-purple-glow mx-auto mt-6 rounded-full animate-fade-in animate-delay-300"></div>
    </div>
  );
};

export default SectionTitle;
