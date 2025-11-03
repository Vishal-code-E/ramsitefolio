import React from 'react';
import ScrambledText from './ScrambledText';
import InteractiveMenu from './InteractiveMenu';

const menuItems = [
  {
    image: '/img1.jpg',
    link: 'https://github.com/Vishal-code-E',
    title: 'GitHub',
    description: 'Check out my code repositories and open source contributions'
  },
  {
    image: '/img2.jpg',
    link: 'https://linkedin.com/in/vishal-e',
    title: 'LinkedIn',
    description: 'Connect with me professionally and see my career journey'
  },
  {
    image: '/img3.jpg',
    title: 'Avataq.ai',
    link: 'https://avataq.ai',
    description: 'Autonomous software teams for startups - my AI venture'
  },
  {
    image: '/img4.jpg',
    title: 'Prompt Craft',
    link: '#projects',
    description: 'Cutting-edge generative AI solutions platform'
  },
  {
    image: '/img5.jpg',
    title: 'E-Cell',
    link: '#contact',
    description: 'Leading entrepreneurship initiatives at Raghu Engineering College'
  }
];

const About = () => {
  return (
        <section id="about" className="py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Me
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - ScrambledText */}
          <div className="order-2 lg:order-1">
            <ScrambledText
              radius={120}
              duration={1.5}
              speed={0.6}
              scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
              className="text-left"
            >
              President, E-Cell at Raghu Engineering College | Ex-Google Developer Groups Core Team

            I&apos;m a full-stack developer and entrepreneur driven by the power of code and community. With deep expertise in Agentic AI, Machine Learning, and autonomous systems, I transform tech visions into reality. As founder of Avataq.ai (autonomous software teams for startups) and Prompt Craft (cutting-edge generative AI solutions), I build platforms that empower founders and creators. Leading innovation, inspiring teams, and turning bold ideas into validated products is what I do best.
            </ScrambledText>
          </div>

          {/* Right side - Interactive Menu with info below */}
          <div className="order-1 lg:order-2">
            <InteractiveMenu items={menuItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;