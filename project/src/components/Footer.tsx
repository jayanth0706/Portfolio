import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-blue-400">J</span>ayanth
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Full Stack Developer & Aspiring Data Analyst specializing in creating responsive and user-friendly web applications.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a 
                href="#about" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Pavanagundla Jayanth. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;