import React from 'react';
import { ArrowDown, FileDown, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-950"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-blue-100/20 dark:bg-blue-900/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-1/4 h-1/4 bg-teal-100/20 dark:bg-teal-900/10 rounded-full filter blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-3/5">
            <div className="mb-6 md:mb-8">
              <span className="text-blue-600 dark:text-blue-400 text-lg md:text-xl font-medium">Hello, I'm</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-gray-900 dark:text-white leading-tight">
                Pavanagundla <span className="text-blue-600 dark:text-blue-400">Jayanth</span>
              </h1>
              <div className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                <span className="font-medium">Full Stack Developer & Aspiring Data Analyst</span>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
              I craft responsive web applications and transform complex data into valuable insights. Currently pursuing B.Tech in Computer Science at Lovely Professional University.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="/images/Jayanth-GCV.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <FileDown size={18} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 transition-all duration-200"
              >
                <Layers size={18} />
                View Projects
              </a>
            </div>
          </div>
          
          <div className="hidden md:block md:w-2/5 relative mt-12 md:mt-0">
            <div className="relative w-full aspect-square rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/10 p-2">
              <img
                src="images/Profile.jpg"
                alt="Professional portrait of Pavanagundla Jayanth"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <ArrowDown size={20} className="text-blue-600 dark:text-blue-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;