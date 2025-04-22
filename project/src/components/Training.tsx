import React from "react";

interface TrainingItem {
  title: string;
  institution: string;
  duration: string;
  logo: string;
  certificateImage: string;
  certificateLink: string;
  overview: string;
  keyTopics: string[];
  highlights: string[];
}

const trainings: TrainingItem[] = [
  {
    title: "Data Analyst Training",
    institution: "Internship Studio",
    duration: "August 2024 – December 2024",
    logo: "/images/InternshipStudio.jpeg",
    certificateImage: "/images/Data Analytics Internship Image.jpg", 
    certificateLink: "https://www.linkedin.com/posts/jayanth0706_data-analytics-internship-internship-activity-7282341109018542080-t3Ah?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5CO-oBKqXjdv5w4LD6ytcFmG6wpfwhdOg",
    overview:
      "This program focused on developing analytical skills and turning raw data into actionable insights through data processing, visualization, and basic machine learning applications.",
    keyTopics: [
      "Data Analysis using Python, SQL, and Excel",
      "Visualizing insights with Tableau, Matplotlib, and Seaborn",
      "Statistical Analysis & Trend Detection",
      "Predictive Modeling using NumPy and Pandas",
    ],
    highlights: [
      "Led a Sales Analysis Project to interpret complex datasets and enhance business decision-making accuracy.",
      "Achieved 97% trend prediction accuracy using statistical techniques and visualization tools.",
    ],
  },
  {
    title: "Full Stack Web Development",
    institution: "Coding Blocks",
    duration: "June 2024 – August 2024",
    logo: "/public/images/coding blocks.jpeg",
    certificateImage: "/images/Full_Stack_Intership_CodingBlocks_page-0001.jpg", 
    certificateLink: "https://online.codingblocks.com/app/certificates/CBOL-302100-979524da",
    overview:
      "An intensive, hands-on training program that provided in-depth knowledge of full stack web development. It covered both front-end and back-end technologies with real-world projects that demonstrated strong understanding of user interaction, server communication, and data management.",
    keyTopics: [
      "Responsive Web Design with HTML and CSS",
      "Front-End Interactivity with JavaScript and React.js",
      "Back-End Development using Node.js and Express.js",
      "Database integration with MongoDB and MySQL",
      "Building RESTful APIs",
      "Real-time deployment and performance optimization",
      "Version Control with Git and GitHub",
      "Testing and Debugging",
      "Responsive Design Principles and Frameworks",
    ],
    highlights: [
      "Built a fully functional Note-Making App with seamless data storage and retrieval.",
      "Gained expertise in creating scalable full-stack applications.",
    ],
  },

];

const Training = () => {
  return (
    <section id="training" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Training & <span className="text-blue-600 dark:text-blue-400">Learning</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These programs enhanced my technical and analytical capabilities with immersive hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <img src={training.logo} alt="Logo" className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{training.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{training.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{training.duration}</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300">{training.overview}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Topics Covered</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {training.keyTopics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Highlights</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {training.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Certificate</h4>
                  <a href={training.certificateLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={training.certificateImage}
                      alt="Certificate"
                      className="rounded-lg shadow-md w-full max-w-md"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
