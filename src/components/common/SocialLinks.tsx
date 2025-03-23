
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className,
  iconSize = 20
}) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vedant-web3/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vedant',
      icon: Github,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/vedantweb3',
      icon: Twitter,
    },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors duration-300"
          aria-label={social.name}
        >
          <social.icon size={iconSize} className="transition-transform duration-300 hover:scale-110" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
