
import React from 'react';
import SectionContainer from './SectionContainer';

const AboutSection: React.FC = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="max-w-3xl">
        <p className="text-lg mb-6">
          I'm a passionate software engineer with a strong foundation in computer science and a 
          love for creating efficient, user-friendly applications. Currently pursuing my Computer 
          Science degree at Stanford University, I blend academic knowledge with practical experience 
          from internships at tech companies.
        </p>
        <p className="text-lg">
          My focus areas include full-stack development, machine learning, and mobile applications. 
          I enjoy solving complex problems and collaborating with teams to build innovative solutions.
          When I'm not coding, you'll find me hiking, reading about new technologies, or contributing 
          to open-source projects.
        </p>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
