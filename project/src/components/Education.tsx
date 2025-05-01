import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
  description?: string;
  logoUrl?: string;
}

const Education: React.FC = () => {
  const educationHistory: Education[] = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Lovely Professional University',
      period: 'Since 2022',
      location: 'Punjab, India',
      score: '7.5',
      scoreLabel: 'CGPA',
      logoUrl: '/images/lpulogo.jpg',
      description:
        'Specializing in AI and Machine Learning with coursework in Data Structures, Algorithms, Database Management, Web Development, and Software Engineering.',
    },
    {
      degree: 'Intermediate Education',
      institution: 'Narayana Junior College',
      period: '2021 - 2022',
      location: 'Telangana, India',
      score: '98.5',
      scoreLabel: 'Percentage',
      logoUrl: '/images/narayana.png',
      description:
        'Focused on Mathematics, Physics, and Computer Science with advanced coursework in programming fundamentals.',
    },
    {
      degree: 'Matriculation',
      institution: 'Vijaya Ratna High School',
      period: '2019 - 2020',
      location: 'Telangana, India',
      score: '100',
      scoreLabel: 'Percentage',
      logoUrl: '/images/vrhs.jpg',
      description:
        'Achieved perfect score with distinction in Mathematics and Science, demonstrating strong analytical and problem-solving skills.',
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey that has equipped me with the knowledge and skills for a career in technology.
          </p>
        </div>

        <div className="space-y-12">
          {educationHistory.map((education, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-transparent"
            >
              {/* Score + Logo Column (no shadow) */}
              <div className="md:w-1/4 bg-white text-gray-900 p-6 flex flex-col items-center justify-center space-y-6 border-r border-gray-200 dark:border-gray-700">
                <div className="bg-white rounded-lg p-4 text-center w-24">
                  <GraduationCap size={24} className="mx-auto mb-2 text-blue-600" />
                  <div className="text-xl font-semibold">{education.score}</div>
                  <div className="text-sm text-gray-500">{education.scoreLabel}</div>
                </div>
                {education.logoUrl && (
                  <img
                    src={education.logoUrl}
                    alt={`${education.institution} Logo`}
                    className="w-16 h-16 object-contain rounded bg-white p-2"
                  />
                )}
              </div>

              {/* Main Content with shadow */}
              <div className="md:w-3/4 p-6 md:p-8 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {education.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-lg mb-4">
                  {education.institution}
                </p>

                <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={18} />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={18} />
                    <span>{education.location}</span>
                  </div>
                </div>

                {education.description && (
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {education.description}
                  </p>
                )}

                {index === 0 && (
                  <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 text-gray-900 dark:text-white mb-2">
                      <Award size={18} className="text-blue-600 dark:text-blue-400" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Data Structures',
                        'Algorithms',
                        'Database Systems',
                        'Web Development',
                        'AI & ML',
                        'Computer Networks',
                        'Software Engineering',
                        'Operating Systems',
                      ].map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-sm rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
