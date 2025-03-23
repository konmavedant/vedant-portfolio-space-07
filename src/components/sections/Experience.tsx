
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
      description: "Led multiple Web3 projects from concept to delivery, coordinating cross-functional teams. Managed a thriving community of over 10,000 members, increasing engagement by 45%. Implemented strategic initiatives resulting in 30% growth in community participation."
    },
    {
      title: "Community Consultant",
      organization: "TGPS Global",
      period: "Aug 2024 - Nov 2024",
      description: "Provided strategic community-building expertise for Web3 projects. Redesigned community onboarding processes, resulting in a 35% increase in member retention. Developed and executed community growth strategies that expanded user base by 28%."
    },
    {
      title: "Lead Community Manager",
      organization: "Open Games Builders",
      period: "May 2023 - July 2024",
      description: "Established and managed a Discord community for Web3 gaming projects with over 5,000 members. Created engagement strategies that increased daily active users by 40%. Developed moderation systems and trained a team of 15 moderators."
    },
    {
      title: "Product Manager",
      organization: "Langlore",
      period: "May 2024 - July 2024",
      description: "Directed the development of an AI-powered language learning platform from concept to launch. Managed the product roadmap and coordinated with design, development, and marketing teams. Conducted user research and implemented feedback loops that improved user satisfaction by 25%."
    },
    {
      title: "Mobile Application Developer & UI/UX Designer",
      organization: "PenguinApps",
      period: "May 2024 - Feb 2025",
      description: "Developed iOS and Android applications for Medals of America, improving user experience and driving a 22% increase in mobile conversions. Created intuitive UI/UX designs that reduced user drop-off rates by 18%. Implemented responsive design principles for optimal cross-device experience."
    },
    {
      title: "Educational Content Creator",
      organization: "EDUCBA",
      period: "Oct 2023 - Dec 2023",
      description: "Authored a comprehensive Coursera course on Ethereum security and smart contract auditing. Developed hands-on exercises and real-world examples to enhance learning outcomes. The course was rated 4.8/5 by over 500 students and became one of the platform's most popular blockchain security courses."
    },
    {
      title: "Community Manager & Discord Server Moderator",
      organization: "NAUTZ",
      period: "Sept 2022 - April 2023",
      description: "Managed a Discord community of 8,000+ members for an NFT project. Created and executed community engagement strategies that increased daily active users by 35%. Organized virtual events and AMA sessions with project developers and industry experts."
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
        
        <div className="max-w-4xl mx-auto mt-16">
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
              
              {/* Removed the last dot here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
