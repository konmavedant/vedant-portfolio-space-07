
import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import SocialLinks from '../common/SocialLinks';
import { MapPin, Mail, Phone, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-20 relative" id="contact">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-glow-purple" />
      
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to collaborate? Let's talk!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card rounded-xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-glow to-purple-glow flex items-center justify-center text-white shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-glow to-purple-glow flex items-center justify-center text-white shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:vedantsj99@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    vedantsj99@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-glow to-purple-glow flex items-center justify-center text-white shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:+919370174262" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9370174262
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <SocialLinks iconSize={24} />
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-8 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted/20 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted/20 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted/20 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full"
                isLoading={isSubmitting}
                icon={isSubmitted ? <Check size={20} /> : <Send size={20} />}
                variant={isSubmitted ? "secondary" : "primary"}
              >
                {isSubmitted ? "Message Sent" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
