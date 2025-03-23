
import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  imageUrl?: string;
  projectUrl?: string;
  videoUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tools,
  imageUrl,
  projectUrl,
  videoUrl,
  index
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden group animate-fade-in",
        index === 0 ? "animate-delay-100" : "",
        index === 1 ? "animate-delay-200" : "",
        index === 2 ? "animate-delay-300" : "",
        index === 3 ? "animate-delay-400" : "",
        index >= 4 ? "animate-delay-500" : "",
      )}
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tools.map((tool, i) => (
            <span 
              key={i} 
              className="text-xs px-3 py-1 rounded-full bg-muted/30 text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          {projectUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => window.open(projectUrl, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit
            </Button>
          )}
          
          {videoUrl && (
            <Button 
              variant="default" 
              size="sm" 
              onClick={() => window.open(videoUrl, '_blank')}
            >
              <Play className="mr-2 h-4 w-4" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
