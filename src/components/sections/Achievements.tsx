
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import AchievementCard from '../ui/AchievementCard';

const Achievements: React.FC = () => {
  const achievements = [
    "Mindicator Hackathon Runner Up",
    "I love Hackathon Pune Web3 Edition: Winner",
    "Hackanova 3.0: Deepfake Track Winner",
    "Softlink Logithon: Top 4 Finalist",
    "NFT Speaker at SATH, the Metaverse Space",
    "Speaker at Web 3.0 TV News Channel",
    "Judge for 24-hour MegaHack Hackathon",
    "Conducted blockchain/Web3 development programs at colleges"
  ];

  return (
    <section className="py-20 relative" id="achievements">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-glow-purple" />
      
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Achievements" 
          subtitle="Awards and recognition I've received"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index}
              title={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
