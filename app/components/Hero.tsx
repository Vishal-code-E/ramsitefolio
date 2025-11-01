import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I&apos;m <span className="text-blue-600">Ram</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Full Stack Developer & Creative Problem Solver
        </p>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          I build exceptional digital experiences with modern technologies and clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;