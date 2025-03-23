
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Download, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 relative" id="about">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-glow-blue" />
      
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know who I am and what drives me"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 animate-fade-in">
            <div className="glass-card rounded-xl p-6 h-full">
              <div className="aspect-square w-full rounded-lg overflow-hidden mb-6">
                {/* Placeholder for about image - replace with actual image later */}
                <div className="w-full h-full bg-gradient-to-br from-blue-glow/30 to-purple-glow/30 flex items-center justify-center">
                  <span className="text-5xl font-bold text-gradient">VJ</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">Vedant Jha</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Education:</span>
                  <span className="font-medium">BE in IT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Expected Graduation:</span>
                  <span className="font-medium">May 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">CGPA:</span>
                  <span className="font-medium">8.7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Email:</span>
                  <a 
                    href="mailto:vedantsj99@gmail.com"
                    className="font-medium text-primary hover:underline"
                  >
                    vedantsj99@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <Button 
                  variant="primary" 
                  className="flex-1"
                  icon={<Download size={18} />}
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  icon={<Mail size={18} />}
                  onClick={() => window.location.href = 'mailto:vedantsj99@gmail.com'}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 space-y-6 animate-fade-in animate-delay-200">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I am a passionate and dedicated professional with expertise in project management, AI-driven automation, and blockchain technology. I thrive on leading innovative projects, managing vibrant communities, and creating solutions that bridge Web3 and AI.
              </p>
              <p className="text-muted-foreground">
                Currently pursuing BE in Information Technology at Thakur College of Engineering and Technology, I'm set to graduate in May 2025 with a strong academic record of 8.7 CGPA.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-glow/20 flex items-center justify-center text-blue-glow mr-3 shrink-0 mt-0.5">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </span>
                  <span>Lead high-impact Web3 and AI projects from conception to completion</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-glow/20 flex items-center justify-center text-blue-glow mr-3 shrink-0 mt-0.5">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </span>
                  <span>Develop and manage vibrant communities in the Web3 and AI space</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-glow/20 flex items-center justify-center text-blue-glow mr-3 shrink-0 mt-0.5">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </span>
                  <span>Create innovative AI-driven automation solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-glow/20 flex items-center justify-center text-blue-glow mr-3 shrink-0 mt-0.5">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </span>
                  <span>Design and develop applications with a focus on UI/UX</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-glow/20 flex items-center justify-center text-blue-glow mr-3 shrink-0 mt-0.5">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </span>
                  <span>Speak and educate others about blockchain and Web3 technologies</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">My Interests</h3>
              <p className="text-muted-foreground">
                When I'm not coding or managing projects, you'll find me trading crypto, drawing, playing chess, beatboxing, or singing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
