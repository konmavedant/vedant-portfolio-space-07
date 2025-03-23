
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';

const Experience: React.FC = () => {
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

  return (
    <section className="py-20 relative" id="experience">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-glow-purple" />
      
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey so far"
        />
        
        <div className="max-w-3xl mx-auto mt-16">
          <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-glow before:to-purple-glow before:via-muted/70">
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <TimelineItem 
                  key={index}
                  title={exp.title}
                  organization={exp.organization}
                  period={exp.period}
                  description={exp.description}
                  index={index}
                />
              ))}
              
              {/* Timeline end */}
              <div className="relative flex justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-glow to-purple-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
