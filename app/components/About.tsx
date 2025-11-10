import React from 'react';
import ScrambledText from './ScrambledText';
import InfiniteMenu from './InfiniteMenu';

const menuItems = [
  {
    image: '/img1.jpg',
    link: '',
    title: 'GitHub',
    description: 'Check out my code repositories and open source contributions'
  },
  {
    image: '/img2.jpg',
    link: '',
    title: 'LinkedIn',
    description: 'Connect with me professionally and see my career journey'
  },
  {
    image: '/img3.jpg',
    title: 'Avataq.ai',
    link: '',
    description: 'Autonomous software teams for startups - my AI venture'
  },
  {
    image: '/img4.jpg',
    title: 'Prompt Craft',
    link: '',
    description: 'Cutting-edge generative AI solutions platform'
  },
  {
    image: '/img5.jpg',
    title: 'E-Cell',
    link: '',
    description: 'Leading entrepreneurship initiatives at Raghu Engineering College'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen">
      <div className="w-full">
        {/* About Text Section */}
        <div className="text-center mb-20 px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
          
          <div className="w-full max-w-none">
            <ScrambledText
              radius={120}
              duration={1.5}
              speed={0.6}
              scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
              className="text text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl leading-normal text-white px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
            >
              President, E-Cell at Raghu Engineering College | Ex-Google Developer Groups Core Team

              I&apos;m a full-stack developer and entrepreneur driven by the power of code and community. With deep expertise in Agentic AI, Machine Learning, and autonomous systems, I transform tech visions into reality. As founder of Avataq.ai (autonomous software teams for startups) and Prompt Craft (cutting-edge generative AI solutions), I build platforms that empower founders and creators. Leading innovation, inspiring teams, and turning bold ideas into validated products is what I do best.
            </ScrambledText>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12 sm:mt-16">
              <a
                href="https://github.com/Vishal-code-E"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-base"
              >
                View GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-epu-646822222/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-white px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-base"
              >
                Connect on LinkedIn
              </a>
              <a
                href="#contact"
                className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-white px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-base"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Infinite Menu Section */}
        <div className="w-screen h-screen relative -mx-4 sm:-mx-6 md:-mx-8">
          <div className="absolute top-4 left-0 right-0 z-10 text-center px-4 sm:px-6 md:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore My Journey
            </h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-xl">
              Drag to rotate and explore my projects, achievements, and ventures
            </p>
          </div>
          
          <div className="w-full h-full">
            <InfiniteMenu items={menuItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;