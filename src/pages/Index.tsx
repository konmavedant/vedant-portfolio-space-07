
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Achievements from '../components/sections/Achievements';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

const Index: React.FC = () => {
  // Set theme when the component mounts based on localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      // If theme is not set, default to light mode
      if (!savedTheme) {
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  // Add scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section:not(#home)').forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    // Add fade-in animations to various elements
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.8) {
          el.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', animateElements);
    animateElements(); // Run once at the beginning

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', animateElements);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Background gradient elements */}
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-blue-glow/10 to-transparent opacity-30 blur-3xl z-0" />
      <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-purple-glow/10 to-transparent opacity-30 blur-3xl z-0" />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-6 px-6 text-center text-muted-foreground border-t border-muted/30">
        <div className="max-w-7xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Vedant Jha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
