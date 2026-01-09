import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 py-20 overflow-hidden">
            {/* Background subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Side - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left space-y-8"
                >
                    {/* Main Heading */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
                        >
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Salim Islam
                            </span>
                        </motion.h1>

                        {/* Typewriter Effect with Beautiful Custom Cursor */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
                        >
                            <Typewriter
                                options={{
                                    strings: [
                                        'Full Stack Developer',
                                        'Frontend Enthusiast',
                                        'UI/UX Lover',
                                        'Problem Solver'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 80,
                                    cursor: '<span class="custom-cursor">|</span>',
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl"
                    >
                        I create stunning web experiences with modern technologies and innovative design.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-6"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-purple-500 text-white font-medium rounded-full hover:bg-purple-500/20 hover:scale-105 transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Side - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                        
                        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-purple-500/30 shadow-2xl">
                            <img
                                src="https://media.gettyimages.com/id/1362142163/photo/headshot-of-indian-businessman-in-early-30s.jpg?s=612x612&w=gi&k=20&c=7a5GlCSeIdzrBZ53rUWLmYJmyr4DD18DcTrL5SApo9U="
                                alt="Salim Islam - Full Stack Developer"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;