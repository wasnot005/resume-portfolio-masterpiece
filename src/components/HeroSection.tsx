
import React from 'react';
import { Button } from '../components/ui/button';
import { Mail } from 'lucide-react';
import DownloadButton from './DownloadButton';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-24 md:pt-32 pb-16 w-full">
      <div className="container max-w-content mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-dark opacity-0 animate-fade-in-up">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-portfolio-medium opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Software Engineer
          </h2>
          <p className="text-lg mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Creating elegant solutions to complex problems
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <DownloadButton label="Download Résumé" />
            <Button variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10">
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
              alt="Profile Photo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
