import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
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
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Frontend Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <img src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="Frontend Icon" className="w-12 h-12 mr-4" />
              <h3 className="text-2xl font-bold text-purple-400">Frontend Development</h3>
            </div>
            <p className="text-gray-300 mb-8">
              Building responsive and interactive user interfaces with modern frameworks.
            </p>
            <div className="flex flex-wrap gap-4">
              <img src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="React" className="h-10" />
              <img src="https://icon2.cleanpng.com/20180730/lgc/ddb6f50ece52f78e1abc03a608bb5bb7.webp" alt="Vue.js" className="h-10" />
              <img src="https://miro.medium.com/v2/resize:fit:1358/format:webp/1*DwdxTpj5OEQzUzyj4lq6_A.gif" alt="Angular" className="h-10" />
              <img src="https://www.typescriptlang.org/images/branding/logo-grouping.svg" alt="TypeScript" className="h-10" />
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <img src="https://www.shutterstock.com/image-vector/isometric-3d-illustrations-various-purple-260nw-2675416235.jpg" alt="Backend Icon" className="w-12 h-12 mr-4 rounded-lg" />
              <h3 className="text-2xl font-bold text-purple-400">Backend Development</h3>
            </div>
            <p className="text-gray-300 mb-8">
              Creating robust server-side applications and RESTful APIs.
            </p>
            <div className="flex flex-wrap gap-4">
              <img src="https://www.nicepng.com/png/detail/93-932207_js-on-light-background-node-js-logo-png.png" alt="Node.js" className="h-10" />
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.svg" alt="Express" className="h-10" />
              <img src="https://simpleisbetterthancomplex.com/media/2016/10/featured-tip17.jpg" alt="Django" className="h-10 rounded" />
              <img src="https://focuslab-cms.imgix.net/shared/1-80.jpg?ar=16%3A9&auto=format&crop=focalpoint&fit=crop&fp-debug=false&fp-x=0.5&fp-y=0.5&ixlib=php-3.1.0&q=100&width=1216&s=ecdc6af8ba1f360b2ca4feda75543e78" alt="Laravel" className="h-10 rounded" />
            </div>
          </motion.div>

          {/* Database Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <img src="https://www.shutterstock.com/image-vector/database-icon-vector-isolated-on-260nw-2634845627.jpg" alt="Database Icon" className="w-12 h-12 mr-4" />
              <h3 className="text-2xl font-bold text-purple-400">Database Management</h3>
            </div>
            <p className="text-gray-300 mb-8">
              Designing and optimizing databases for performance and scalability.
            </p>
            <div className="flex flex-wrap gap-4">
              <img src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/bltac81c4aa3529ee37/65fd965e8f4444482dc3a079/la1a2b2h67gwwqnvs-mdb-logos.svg" alt="MongoDB" className="h-10" />
              <img src="https://kinsta.com/wp-content/uploads/2022/04/postgres-logo.png" alt="PostgreSQL" className="h-10" />
              <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="MySQL" className="h-10" />
              <img src="https://1000logos.net/wp-content/uploads/2024/05/Firebase-Logo.jpg" alt="Firebase" className="h-10 rounded" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;