
import React from 'react';
import SectionContainer from './SectionContainer';

interface WorkExperience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      role: "Software Engineer Intern",
      company: "Tech Solutions Inc.",
      period: "Jun 2024 - Aug 2024",
      description: [
        "Developed and maintained features for a React-based web application with 10k+ daily users",
        "Collaborated with design team to implement responsive UI components using Tailwind CSS",
        "Optimized database queries resulting in 40% improved load time for critical pages"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Creative Digital Agency",
      period: "May 2023 - Aug 2023",
      description: [
        "Built interactive UI components using React and TypeScript for client websites",
        "Implemented responsive designs ensuring cross-browser compatibility",
        "Participated in code reviews and contributed to team documentation"
      ]
    },
    {
      role: "Research Assistant",
      company: "University Computer Science Department",
      period: "Sep 2022 - May 2023",
      description: [
        "Assisted in developing machine learning algorithms for natural language processing",
        "Collected and analyzed data for research publications",
        "Presented findings at departmental research symposium"
      ]
    }
  ];

  return (
    <SectionContainer id="experience" title="Work Experience">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-soft">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-portfolio-medium">{exp.company}</p>
              </div>
              <span className="text-sm font-medium bg-portfolio-light px-3 py-1 rounded-full mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.description.map((item, itemIndex) => (
                <li key={itemIndex} className="flex">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
