
import React from 'react';
import SectionContainer from './SectionContainer';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    },
    {
      category: "Frontend Development",
      skills: ["React", "Angular", "HTML5", "CSS3/SASS", "Redux", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express", "Django", "Spring Boot", "GraphQL", "RESTful APIs"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Firebase", "Heroku"]
    }
  ];

  return (
    <SectionContainer id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.category} className="bg-white p-6 rounded-lg shadow-soft">
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <div className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></div>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
