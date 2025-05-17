
import React from 'react';
import SectionContainer from './SectionContainer';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-stack online shopping platform with user authentication, product catalog, and payment processing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      link: "#",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application using geolocation and weather APIs to display current conditions and forecasts.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      link: "#",
      tags: ["JavaScript", "API Integration", "CSS3"]
    },
    {
      title: "Task Management App",
      description: "A productivity application for organizing tasks with drag-and-drop functionality and notification system.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      link: "#",
      tags: ["React", "Firebase", "Material UI"]
    },
    {
      title: "Machine Learning Model",
      description: "Sentiment analysis model for customer reviews using natural language processing techniques.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      link: "#",
      tags: ["Python", "TensorFlow", "NLP", "Pandas"]
    }
  ];

  return (
    <SectionContainer id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-soft transition-transform hover:translate-y-[-4px]"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-portfolio-medium mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium bg-portfolio-light text-portfolio-medium px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-portfolio-accent font-medium hover:underline"
              >
                View Project <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
