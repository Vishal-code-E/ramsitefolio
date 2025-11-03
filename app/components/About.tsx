import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies and a love for creating innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 mb-4">
              Started as a curious individual fascinated by the possibilities of code, 
              I&apos;ve evolved into a full-stack developer with 5+ years of experience in 
              creating digital experiences that matter.
            </p>
            <p className="text-gray-300 mb-6">
              I specialize in React, Node.js, and modern web technologies, 
              always staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-white mb-2">Frontend</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Backend</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Node.js & Express</li>
                  <li>Python & Django</li>
                  <li>PostgreSQL & MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-white">JavaScript/TypeScript</span>
                  <span className="text-sm text-gray-400">90%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-white">React/Next.js</span>
                  <span className="text-sm text-gray-400">85%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-white">Backend Development</span>
                  <span className="text-sm text-gray-400">80%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;