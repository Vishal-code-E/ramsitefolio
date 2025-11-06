import React from 'react';
import MagicBento from '../../components/MagicBento';

const Projects = () => {
  return (
    <section id="projects" className="py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest work in AI, full-stack development, and entrepreneurship
          </p>
        </div>
        
        <div className="w-full flex justify-center">
          <MagicBento
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            disableAnimations={false}
            spotlightRadius={400}
            particleCount={10}
            enableTilt={true}
            glowColor="132, 0, 255"
            clickEffect={true}
            enableMagnetism={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;