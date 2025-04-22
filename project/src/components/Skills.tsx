import React from 'react';

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg`}
              alt={skill}
              className="w-16 h-16 mb-3"
            />
            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const programmingSkills = ['JavaScript', 'Python', 'Java', 'C'];
  const databaseSkills = ['MongoDB', 'MySQL'];
  const frameworkSkills = ['React', 'Nodejs', 'Express'];
  const toolsSkills = ['Git', 'VSCode'];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've acquired a diverse range of skills throughout my academic and professional journey. Here's a glimpse of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
            <SkillCategory title="Programming Languages" skills={programmingSkills} />
            <SkillCategory title="Frameworks & Libraries" skills={frameworkSkills} />
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
            <SkillCategory title="Databases" skills={databaseSkills} />
            <SkillCategory title="Tools" skills={toolsSkills} />
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Additional Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['REST API', 'GraphQL', 'Redux', 'TypeScript', 'Docker', 'AWS', 'UI/UX', 'Agile', 'CI/CD', 'Testing'].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;