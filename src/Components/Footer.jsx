import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Name + Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Salim Islam
              </span>
            </h3>
            <p className="text-gray-400 max-w-sm">
              Full Stack Developer passionate about creating stunning web experiences with modern technologies.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={18} />
              <span>Rangpur, Bangladesh</span>
            </div>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 group"
                >
                  <Github className="text-gray-300 group-hover:text-white" size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 group"
                >
                  <Linkedin className="text-gray-300 group-hover:text-white" size={22} />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 group"
                >
                  <Twitter className="text-gray-300 group-hover:text-white" size={22} />
                </a>
                <a
                  href="mailto:hello@salim.dev"
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 group"
                >
                  <Mail className="text-gray-300 group-hover:text-white" size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500">
            © {currentYear} Salim Islam. All rights reserved. 
            <span className="text-purple-400 ml-2">
              Crafted with ❤️ and code
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;