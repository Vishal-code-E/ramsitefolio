import React from 'react';
import CardSwap, { Card } from '../../components/CardSwap';
import { IconCloud } from '../../components/ui/icon-cloud';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Ram's Portfolio",
      description: "Modern portfolio website showcasing cutting-edge web development with Next.js 16, GSAP animations, and Aceternity UI.",
      label: "Portfolio",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "EventHub",
      description: "Comprehensive event management platform with seamless booking, real-time notifications, and organization tools.",
      label: "Event Platform",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Avataq.ai",
      description: "Autonomous software teams for startups. Building the future of AI-driven development with agentic workflows.",
      label: "AI Venture",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "PromptCraft",
      description: "Cutting-edge generative AI solutions platform empowering businesses with advanced LLM integration and automation.",
      label: "GenAI Platform",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Aston Martin F1 Analytics",
      description: "Advanced machine learning analytics for Formula One racing performance optimization using TensorFlow and PyTorch.",
      label: "ML Analytics",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest work in AI, full-stack development, and entrepreneurship
          </p>
        </div>
        
        <div className="w-full flex justify-center relative h-[600px] mb-20">
          <CardSwap
            width={500}
            height={400}
            cardDistance={60}
            verticalDistance={70}
            delay={4000}
            pauseOnHover={true}
            skewAmount={6}
            easing="elastic"
          >
            {projects.map((project, idx) => (
              <Card key={idx} customClass="p-8 backdrop-blur-lg bg-black/50">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-linear-to-r ${project.color} text-white`}>
                      {project.label}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-sm">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-sm">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
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