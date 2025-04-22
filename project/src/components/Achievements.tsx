import React from 'react';
import { Trophy, Calendar, MapPin } from 'lucide-react';

interface Achievement {
  title: string;
  organization: string;
  date: string;
  location?: string;
  description: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: 'Coding Interview Preparation',
      organization: 'LeetCode & HackerRank',
      date: 'November 2024',
      description: 'Successfully completed over 200 coding challenges and participated in weekly contests, strengthening problem-solving abilities and algorithmic thinking.'
    },
    {
      title: 'I Hub DivyaSampark',
      organization: 'IIT Roorkee',
      date: 'July 2023',
      location: 'Virtual',
      description: 'Gained practical experience in machine learning through an intensive program focusing on real-world applications of ML algorithms and data analysis techniques.'
    },
    {
      title: 'Soft Skills Training',
      organization: 'TCS iON',
      date: 'March 2023',
      location: 'Online',
      description: 'Completed comprehensive training on professional communication, team collaboration, problem-solving, and leadership skills, earning a certificate of excellence.'
    }
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Achievements</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Notable milestones and accomplishments throughout my academic and professional journey.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/4 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10`}>
                  <Trophy size={16} className="text-white" />
                </div>
                
                {/* Content */}
                <div className={`relative ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-16' : 'md:ml-[50%] md:pl-16'}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{achievement.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{achievement.organization}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{achievement.date}</span>
                      </div>
                      {achievement.location && (
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{achievement.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="mt-4 text-gray-600 dark:text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;