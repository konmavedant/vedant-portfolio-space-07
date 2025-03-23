
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SkillBadge from '../ui/SkillBadge';
import { Code, Cpu, FileJson, Braces, Languages, Brain, Database, MessageSquare, PenTool, Users, LineChart, MoveHorizontal } from 'lucide-react';

const Skills: React.FC = () => {
  const languages = [
    { name: "Python", icon: <Code size={20} /> },
    { name: "Solidity", icon: <FileJson size={20} /> },
    { name: "JavaScript", icon: <Braces size={20} /> },
    { name: "TypeScript", icon: <Braces size={20} /> },
    { name: "React", icon: <Code size={20} /> },
    { name: "React Native", icon: <MoveHorizontal size={20} /> }
  ];
  
  const skills = [
    { name: "Blockchain & Web3", icon: <Database size={20} /> },
    { name: "Business Automation", icon: <Cpu size={20} /> },
    { name: "Project Consulting", icon: <LineChart size={20} /> },
    { name: "Project Management", icon: <LineChart size={20} /> },
    { name: "Frontend & App Development", icon: <Code size={20} /> },
    { name: "Chatbot Development", icon: <MessageSquare size={20} /> },
    { name: "UI Designing", icon: <PenTool size={20} /> },
    { name: "Public Speaking", icon: <Users size={20} /> }
  ];

  return (
    <section className="py-20 relative" id="skills">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-glow-blue" />
      
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Skills & Technologies" 
          subtitle="Tools and technologies I work with"
        />
        
        <div className="grid gap-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-8 text-center">
              <Languages className="inline-block mr-2" size={20} />
              Languages & Frameworks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {languages.map((language, index) => (
                <SkillBadge 
                  key={index}
                  name={language.name}
                  icon={language.icon}
                  category="language"
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-primary mb-8 text-center">
              <Brain className="inline-block mr-2" size={20} />
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <SkillBadge 
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  category="skill"
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
