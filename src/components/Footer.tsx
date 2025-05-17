
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-portfolio-dark text-white py-8">
      <div className="container max-w-content mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <p>Made with ♥ by John Doe</p>
            <button
              onClick={scrollToTop}
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
