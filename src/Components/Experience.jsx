import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      description:
        "Leading frontend development for enterprise clients, implementing modern frameworks, optimizing performance, and mentoring junior developers. Working with React, TypeScript, and Tailwind CSS on large-scale applications.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2020",
      description:
        "Developed responsive web applications using React and Vue.js. Collaborated with designers and backend teams to deliver pixel-perfect, high-performance user interfaces.",
    },
    {
      title: "Web Developer",
      company: "StartUp Studio",
      period: "2018 - 2019",
      description:
        "Built full-stack web applications from scratch using JavaScript, HTML, CSS, and PHP. Focused on creating clean, maintainable code and improving user experience.",
    },
    {
      title: "Junior Web Developer",
      company: "Freelance",
      period: "2017 - 2018",
      description:
        "Started my professional journey as a freelancer, building websites for small businesses and learning modern web technologies hands-on.",
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400">
            My professional journey so far
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 opacity-50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 z-10 shadow-lg" />

              {/* Empty spacer for alignment on mobile */}
              <div className="w-8 md:w-1/2" />

              {/* Experience Card */}
              <div className="w-full md:w-1/2 px-6 md:px-12 pr-6 md:pr-0">
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <span className="mt-2 sm:mt-0 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-purple-300 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;