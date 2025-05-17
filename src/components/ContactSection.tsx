
import React from 'react';
import SectionContainer from './SectionContainer';
import { Button } from '../components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <SectionContainer id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-4 mb-8">
            <a 
              href="mailto:johndoe@example.com" 
              className="flex items-center text-portfolio-medium hover:text-portfolio-accent transition-colors"
            >
              <Mail className="w-5 h-5 mr-3" />
              johndoe@example.com
            </a>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-soft hover:shadow-md transition-shadow"
            >
              <Linkedin className="w-5 h-5 text-portfolio-accent" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-soft hover:shadow-md transition-shadow"
            >
              <Github className="w-5 h-5 text-portfolio-accent" />
            </a>
          </div>
        </div>
        
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <Button className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 py-6">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
