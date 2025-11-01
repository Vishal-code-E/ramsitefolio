import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies and a love for creating innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-4">
              I am a dedicated full-stack developer with a passion for creating efficient, scalable, and user-friendly applications. 
              My journey in software development started with curiosity and has evolved into a professional career focused on 
              delivering high-quality solutions.
            </p>
            <p className="text-gray-600 mb-6">
              I enjoy working with cutting-edge technologies and am always eager to learn new skills and tackle challenging problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>React/Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Database Design</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">JavaScript/TypeScript</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">React/Next.js</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Backend Development</span>
                  <span className="text-sm text-gray-500">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
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