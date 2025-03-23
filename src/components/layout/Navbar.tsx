
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import SocialLinks from '../common/SocialLinks';
import { cn } from '@/lib/utils';

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
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8",
        isScrolled ? "glass backdrop-blur-lg shadow-lg py-3" : ""
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
            <SocialLinks />
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="flex items-center gap-4 md:hidden">
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
        <div className="md:hidden glass absolute top-full left-0 w-full animate-slide-in-right">
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
            <li className="mt-4 pt-4 border-t border-muted/30">
              <div className="px-4">
                <SocialLinks className="justify-start" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
