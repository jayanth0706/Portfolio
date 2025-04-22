import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
  skills: string[];
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: 'Meta Android Developer',
      issuer: 'Coursera',
      date: 'August 2024',
      image: '/images/AndriodDevelopment12Courses_jpgimage.jpeg',
      link: 'https://coursera.org/share/09301da141007aa162d627e3905972fa',
      skills: ['Android', 'Kotlin', 'Mobile Development', 'Material Design', 'Firebase']
    },
    {
      title: 'Web Development',
      issuer: 'Coding Blocks',
      date: 'August 2024',
      image: '/images/Full_Stack_Intership_CodingBlocks_page-0001.jpg',
      link: 'https://online.codingblocks.com/app/certificates/CBOL-302100-979524da',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Hardware & OS',
      issuer: 'Coursera',
      date: 'February 2024',
      image: '/images/OperatingSystems_page-0001.jpg',
      link: 'https://coursera.org/share/87d3f1147d1d9051bf151e741c74b7b6',
      skills: ['Computer Architecture', 'Operating Systems', 'Computer Networks', 'System Security']
    },
    {
      title: 'Front-End Career Path',
      issuer: 'LinkedIn Learning',
      date: 'October 2022',
      image: '/images/FrontEnd_Web_Development_LinkedIn_page-0001.jpg',
      link: 'https://www.linkedin.com/posts/jayanth0706_explore-a-career-in-front-end-web-development-activity-7297987607500660737-8_rx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5CO-oBKqXjdv5w4LD6ytcFmG6wpfwhdOg',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'UX/UI Principles']
    }
  ];

  return (
    <section id="certificates" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Certificates</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've completed several courses and earned certifications to enhance my skills and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full bg-white relative flex items-center justify-center p-4" style={{ maxHeight: '300px' }}>
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="max-h-full w-auto object-contain"
                />
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-blue-600/90 text-white rounded-full">
                    <Award size={20} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{certificate.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{certificate.issuer}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{certificate.date}</span>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 mt-4 text-blue-600 dark:text-blue-400 text-sm hover:underline"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
