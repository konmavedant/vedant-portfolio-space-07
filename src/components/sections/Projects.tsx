
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Serbian AI",
      description: "Advanced chatbot with hybrid responses (Perplexity AI + ChatGPT), featuring Snap-to-Text, Voice-to-Text, and TTS.",
      tools: ["JavaScript", "Python"],
      projectUrl: "https://serbianai.com",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
    },
    {
      title: "Langlore",
      description: "Curated platform for efficient language learning with tailored courses.",
      tools: ["TypeScript", "CSS", "Firebase"],
      projectUrl: "https://langlore.in",
      imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop"
    },
    {
      title: "Carbon Ledger",
      description: "Blockchain-based system for transparent carbon credit tracking.",
      tools: ["JavaScript", "TypeScript", "CSS"],
      projectUrl: "https://karbon-ledger.com",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: "Live Video Streaming Deepfake Detection",
      description: "Real-time AI solution for detecting deepfakes in videos.",
      tools: ["Python", "TypeScript"],
      videoUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1675448857651-4cf9ed8e222a?q=80&w=1170&auto=format&fit=crop"
    },
    {
      title: "Intern-Connect",
      description: "Minimalistic portal for internship applications and postings (May 2022).",
      tools: ["JavaScript", "React"],
      projectUrl: "https://doi.org/10.22214/ijraset.2022.42408",
      imageUrl: "https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=1169&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 relative" id="projects">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-glow-blue" />
      
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Projects" 
          subtitle="Some of my recent work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tools={project.tools}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              videoUrl={project.videoUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
