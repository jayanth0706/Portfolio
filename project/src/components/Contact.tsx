import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: 'Your message has been sent successfully!' });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone size={22} />,
      label: 'Phone',
      value: '+91-7981976192',
      link: 'tel:+917981976192'
    },
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'jayanthchary779933@gmail.com',
      link: 'mailto:jayanthchary779933@gmail.com'
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Punjab, India',
      link: '#'
    },
    {
      icon: <Linkedin size={22} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jayanth0706',
      link: 'https://linkedin.com/in/jayanth0706'
    },
    {
      icon: <Github size={22} />,
      label: 'GitHub',
      value: 'github.com/jayanth0706',
      link: 'https://github.com/jayanth0706'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out to me through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Send size={18} />
                  Send Message
                </button>
                
                {formStatus && (
                  <div className={`mt-4 p-3 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.label}</h4>
                      <a 
                        href={info.link} 
                        target={info.label === 'Location' ? '' : '_blank'} 
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/jayanth0706" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/jayanth0706" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;