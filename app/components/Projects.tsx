import React from 'react';
import MagicBento from '../../components/MagicBento';
import { IconCloud } from '../../components/ui/icon-cloud';

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

        {/* Technology Stack - Icon Cloud */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Technology Stack
          </h3>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to build amazing projects
          </p>
          
          <div className="flex justify-center">
            <div className="relative">
              <IconCloud 
                width={500}
                height={500}
                images={[
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
                  "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
                  "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
                  "https://docs.perplexity.ai/img/favicon.ico"
                ]}
              />
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            Click and drag to explore • Interactive 3D technology sphere
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;