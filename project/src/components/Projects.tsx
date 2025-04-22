import React, { useState } from 'react';
import { ExternalLink, Github, Search } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  github: string;
  demo?: string;
  features: string[];
  tech: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Note Making App',
      description: 'A full-stack application for creating and managing notes with real-time updates and responsive design',
      images: [
        '/images/Note1.png',
        '/images/Note2.png',
        '/images/Note3.png',
        '/images/Note4.png'
      ],
      tags: ['Full Stack', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/jayanth0706/Note-making-using-MERN',
      features: ['CRUD operations', 'Real-time saving', 'Responsive UI', 'User authentication', 'Note categories', 'Dark mode'],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT Authentication']
    },
    {
      title: 'Sales Analysis Project and Reporting for a Retail Chain',
      description: 'A data analysis project focused on visualizing sales data, identifying trends, and providing actionable insights',
      images: [
        '/images/Sales1.png',
        '/images/Sales2.png',
        '/images/Sales3.png',
        '/images/Sales4.png'
      ],
      tags: ['Data Analysis', 'Python', 'SQL', 'Tableau'],
      github: 'https://github.com/jayanth0706/Sales-Analysis-FinalProject/tree/master',
      features: ['Data cleaning', 'Interactive visualizations', 'Predictive modeling', 'Trend analysis', 'Automated reporting'],
      tech: ['Python', 'Pandas', 'SQL', 'Tableau', 'Matplotlib', 'Scikit-learn']
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project has helped me develop and refine my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-1 bg-blue-600/80 text-white text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => openProjectModal(project)} 
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-blue-600 dark:text-blue-400 opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
                  aria-label="View project details"
                >
                  <Search size={18} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <button 
                    onClick={() => openProjectModal(project)} 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeProjectModal}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-2 p-4 md:p-6">
              {selectedProject.images.map((img, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`Project ${selectedProject.title} image ${idx + 1}`}
                    className="w-full h-auto object-contain max-h-[500px] mx-auto"
                  />
                </div>
              ))}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <Github size={18} />
                  View Code
                </a>
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;