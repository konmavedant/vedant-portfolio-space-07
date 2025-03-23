
import React, { useEffect, useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCalendlyOpen = () => {
    window.open('https://calendly.com/vedantjha/30min', '_blank');
  };
  
  return (
    <nav 
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 py-3 px-6 md:px-8 rounded-full max-w-5xl w-[95%]",
        isScrolled ? "glass backdrop-blur-lg shadow-lg" : ""
      )}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gradient">Vedant Jha</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="default" 
              size="sm"
              className="bg-gradient-to-r from-blue-glow to-purple-glow hover:opacity-90 animate-pulse"
              onClick={handleCalendlyOpen}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Connect Now
            </Button>
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="flex items-center gap-4 md:hidden">
          <Button 
            variant="default" 
            size="sm"
            className="bg-gradient-to-r from-blue-glow to-purple-glow hover:opacity-90 mr-2"
            onClick={handleCalendlyOpen}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Connect
          </Button>
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full mt-3 left-0 w-full animate-slide-in-right rounded-xl">
          <ul className="flex flex-col gap-3 p-4">
            {links.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="block py-2 px-4 hover:bg-muted/30 rounded-lg text-foreground transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
