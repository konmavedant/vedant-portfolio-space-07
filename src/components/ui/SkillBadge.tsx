
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  category: 'language' | 'skill';
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  name, 
  icon, 
  category,
  index 
}) => {
  return (
    <div 
      className={cn(
        "glass-card px-4 py-3 rounded-xl flex items-center gap-3 animate-fade-in",
        category === 'language' ? "border-blue-glow/20" : "border-purple-glow/20",
        index === 0 ? "animate-delay-100" : "",
        index === 1 ? "animate-delay-200" : "",
        index === 2 ? "animate-delay-300" : "",
        index === 3 ? "animate-delay-400" : "",
        index >= 4 ? "animate-delay-500" : "",
      )}
    >
      {icon && <div className="text-muted-foreground">{icon}</div>}
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;
