
import React from 'react';
import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AchievementCardProps {
  title: string;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ 
  title,
  index
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-4 rounded-xl flex items-center gap-4 group animate-fade-in",
        index === 0 ? "animate-delay-100" : "",
        index === 1 ? "animate-delay-200" : "",
        index === 2 ? "animate-delay-300" : "",
        index === 3 ? "animate-delay-400" : "",
        index >= 4 ? "animate-delay-500" : "",
      )}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-glow to-purple-glow text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Award />
      </div>
      <p className="font-medium text-foreground">{title}</p>
    </div>
  );
};

export default AchievementCard;
