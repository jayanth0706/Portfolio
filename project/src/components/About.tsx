import React from 'react';
import { Code, Database, BarChart3, Laptop } from 'lucide-react';

const About: React.FC = () => {
  const focusAreas = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'Building responsive and interactive web applications using modern frameworks and libraries.'
    },
    {
      icon: <Database size={24} />,
      title: 'Backend Engineering',
      description: 'Developing robust server-side applications with secure APIs and efficient database management.'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Data Analysis',
      description: 'Transforming raw data into meaningful insights through visualization and statistical analysis.'
    },
    {
      icon: <Laptop size={24} />,
      title: 'Full-Stack Solutions',
      description: 'Creating end-to-end applications with seamless integration between frontend and backend systems.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Jayanth working on code"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Passionate Developer & Data Enthusiast
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am a Computer Science and Engineering student at Lovely Professional University with a strong passion for creating innovative technological solutions. My journey in tech has equipped me with a diverse skill set spanning web development, data analysis, and software engineering.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I believe in continuous learning and applying my skills to solve real-world problems. Whether it's building responsive web applications or deriving insights from complex datasets, I approach each project with enthusiasm and dedication to excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">Quick Learner</span>
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">Team Player</span>
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">Detail Oriented</span>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;