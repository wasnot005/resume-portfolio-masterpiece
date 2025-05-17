
import React from 'react';
import SectionContainer from './SectionContainer';
import { Award } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

const EducationSection: React.FC = () => {
  const education: Education[] = [
    {
      degree: "B.S. in Computer Science",
      institution: "Stanford University",
      period: "2021 - 2025 (Expected)",
      gpa: "3.85/4.0",
      achievements: [
        "Dean's List (3 semesters)",
        "Computer Science Student Association - Treasurer",
        "Hackathon Winner: Best Use of AI (2023)"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Lincoln High School",
      period: "2017 - 2021",
      gpa: "4.0/4.0",
      achievements: [
        "Valedictorian",
        "National Merit Scholar",
        "President of Computer Club"
      ]
    }
  ];

  const certifications: Certification[] = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "June 2023",
      link: "#"
    },
    {
      name: "Google Associate Android Developer",
      issuer: "Google",
      date: "December 2022",
      link: "#"
    },
    {
      name: "Meta Frontend Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      date: "August 2022",
      link: "#"
    }
  ];

  return (
    <SectionContainer id="education" title="Education & Certifications">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Award className="w-5 h-5 mr-2 text-portfolio-accent" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft">
                <h4 className="text-lg font-medium">{item.degree}</h4>
                <p className="text-portfolio-medium mb-1">{item.institution}</p>
                <div className="flex items-center mb-3">
                  <span className="text-sm bg-portfolio-light px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                  {item.gpa && (
                    <span className="text-sm ml-2">GPA: {item.gpa}</span>
                  )}
                </div>
                {item.achievements && (
                  <div>
                    <p className="text-sm font-medium mb-1">Achievements:</p>
                    <ul className="text-sm text-portfolio-medium space-y-1">
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Award className="w-5 h-5 mr-2 text-portfolio-accent" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-soft flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-portfolio-medium">{cert.issuer} • {cert.date}</p>
                </div>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    className="text-portfolio-accent text-sm hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Verify
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default EducationSection;
