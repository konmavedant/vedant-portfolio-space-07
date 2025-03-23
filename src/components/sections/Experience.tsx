
import React, { useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const experiences = [
    {
      title: "Project Manager & Lead Community Manager",
      organization: "KONMA ORG",
      period: "Nov 2021 - Present",
      description: "Managed multiple projects and led community engagement for KONMA DAO."
    },
    {
      title: "Community Consultant",
      organization: "TGPS Global",
      period: "Aug 2024 - Nov 2024",
      description: "Boosted engagement and network growth for collaborative projects."
    },
    {
      title: "Lead Community Manager",
      organization: "Open Games Builders",
      period: "May 2023 - July 2024",
      description: "Built and managed a Web3 Discord community for gaming projects."
    },
    {
      title: "Product Manager",
      organization: "Langlore",
      period: "May 2024 - July 2024",
      description: "Led LangLore from concept to launch with cross-functional teams."
    },
    {
      title: "Mobile Application Developer & UI/UX Designer",
      organization: "PenguinApps",
      period: "May 2024 - Feb 2025",
      description: "Developed mobile apps and designed UI/UX for Medals of America."
    },
    {
      title: "Educational Content Creator",
      organization: "EDUCBA",
      period: "Oct 2023 - Dec 2023",
      description: "Created a Coursera course on Ethereum security and auditing."
    },
    {
      title: "Community Manager & Discord Server Moderator",
      organization: "NAUTZ",
      period: "Sept 2022 - April 2023",
      description: "Grew engagement for an NFT project's Discord community."
    }
  ];

  // Add scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="py-20 relative" id="experience" ref={sectionRef}>
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-glow-purple" />
      
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey so far"
        />
        
        <div className="max-w-3xl mx-auto mt-16">
          <div className="relative">
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <div className="timeline-item opacity-0" key={index}>
                  <TimelineItem 
                    title={exp.title}
                    organization={exp.organization}
                    period={exp.period}
                    description={exp.description}
                    index={index}
                  />
                </div>
              ))}
              
              {/* Timeline end */}
              <div className="relative flex justify-start ml-1.5 timeline-item opacity-0">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-glow to-purple-glow animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
