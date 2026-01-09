import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
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
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="Salim Islam"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="hello@salim.dev"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400">Location</h4>
                  <p className="text-white font-medium">Rangpur, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400">Email</h4>
                  <a href="mailto:hello@salim.dev" className="text-white font-medium hover:text-purple-300 transition-colors">
                    hello@salim.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400">Phone</h4>
                  <p className="text-white font-medium">+880 17xx-xxxxxx</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-6">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-800/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 group"
                >
                  <Github className="text-gray-300 group-hover:text-white" size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-800/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 group"
                >
                  <Linkedin className="text-gray-300 group-hover:text-white" size={24} />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-800/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 group"
                >
                  <Twitter className="text-gray-300 group-hover:text-white" size={24} />
                </a>
                {/* Add more social icons if needed */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;