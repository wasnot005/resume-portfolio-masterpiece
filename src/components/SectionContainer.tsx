
import React from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="w-full py-16">
      <div className="container max-w-content mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 opacity-0 animate-fade-in-up">{title}</h2>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
