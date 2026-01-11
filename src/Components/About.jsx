import React from 'react';
import { motion } from 'framer-motion';
import mdSalimImg from "../assets/mdsalim.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
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
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Who I am and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-500/30">
                <img
                  src={mdSalimImg}
                  alt="Salim Islam"
                  className="w-full h-auto max-w-md object-cover"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Salim Islam</span>
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <strong className="text-purple-300">Full Stack Developer</strong> from Bangladesh with a love for building beautiful, performant, and user-friendly web applications. I enjoy turning complex problems into simple, elegant solutions.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development started years ago, and since then I've worked with modern technologies like <span className="text-purple-300">React, Next.js, Node.js, Tailwind CSS</span>, and many more. I believe in continuous learning and always stay updated with the latest trends.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you’ll find me exploring new technologies, contributing to open-source, or enjoying a good cup of tea while planning my next big project.
            </p>

            {/* Quick Facts / Skills Highlight */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-purple-300 font-semibold text-lg mb-2">Location</h4>
                <p className="text-gray-300">Rangpur, Bangladesh</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-purple-300 font-semibold text-lg mb-2">Experience</h4>
                <p className="text-gray-300">3+ Years</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-purple-300 font-semibold text-lg mb-2">Availability</h4>
                <p className="text-gray-300">Open for Freelance</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-purple-300 font-semibold text-lg mb-2">Email</h4>
                <p className="text-gray-300">salim@example.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;