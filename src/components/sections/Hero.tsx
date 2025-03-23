
import React, { useEffect } from 'react';
import Button from '../ui/Button';
import SocialLinks from '../common/SocialLinks';
import { ChevronRight, Eye, Download } from 'lucide-react';

const Hero: React.FC = () => {
  // Animation setup
  useEffect(() => {
    const elements = document.querySelectorAll('.init-invisible');
    elements.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.classList.add('animate-fade-in');
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Gradient background elements */}
      <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[70%] bg-gradient-radial from-blue-glow/20 to-transparent opacity-20 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-gradient-radial from-purple-glow/20 to-transparent opacity-20 blur-3xl" />
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-6">
              <p className="text-primary font-medium text-lg init-invisible animate-delay-100">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight init-invisible animate-delay-200">
                Vedant Jha
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient init-invisible animate-delay-300">
                Project Manager | Web3 Enthusiast | AI Innovator
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl init-invisible animate-delay-400">
                Building the future with blockchain, AI, and community-driven solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-5 pt-4 init-invisible animate-delay-500">
              <Button 
                size="lg" 
                icon={<Eye size={18} />}
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
              >
                View Projects <ChevronRight size={16} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                icon={<Download size={18} />}
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download CV
              </Button>
            </div>
            
            <div className="pt-4 init-invisible animate-delay-500">
              <SocialLinks iconSize={24} />
            </div>
          </div>
          
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative init-invisible animate-delay-400">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-white/10 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-blue-glow/10 to-purple-glow/10 glass-card rounded-full flex items-center justify-center">
                  {/* Placeholder for profile image - replace with actual image later */}
                  <div className="text-6xl font-bold text-gradient">VJ</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-glow to-purple-glow rounded-full blur-xl opacity-30" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-glow to-blue-glow rounded-full blur-xl opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
