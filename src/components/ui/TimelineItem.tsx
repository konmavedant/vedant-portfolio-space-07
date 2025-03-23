
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  organization, 
  period, 
  description,
  index 
}) => {
  return (
    <div className={cn(
      "flex group",
      "animate-fade-in",
      index === 0 ? "animate-delay-100" : "",
      index === 1 ? "animate-delay-200" : "",
      index === 2 ? "animate-delay-300" : "",
      index === 3 ? "animate-delay-400" : "",
      index >= 4 ? "animate-delay-500" : "",
    )}>
      {/* Timeline stem */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-3 h-3 bg-primary rounded-full z-10 transition-all duration-300 group-hover:scale-150 group-hover:bg-gradient-to-r group-hover:from-blue-glow group-hover:to-purple-glow" />
        {index !== 6 && <div className="w-0.5 bg-muted/70 h-full mt-1" />}
      </div>
      
      {/* Content */}
      <div className="pb-12 flex-1">
        <div className="glass-card p-5 rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-4 gap-2">
            <p className="text-primary font-medium">{organization}</p>
            <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-muted/30 w-fit">
              {period}
            </span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
