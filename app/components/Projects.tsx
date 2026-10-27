'use client';

import React, { useState, useCallback } from 'react';
import CardSwap, { Card } from '../../components/CardSwap';
import { IconCloud } from '../../components/ui/icon-cloud';
import { ExternalLink, Zap, Users, Rocket, Lightbulb, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GITHUB = 'https://github.com/Vishal-code-E';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Ram's Portfolio",
      description: "Modern portfolio website showcasing cutting-edge web development with Next.js 15, GSAP animations, and custom UI components.",
      label: "Portfolio",
      color: "from-purple-500 to-pink-500",
      icon: Rocket,
      liveUrl: 'https://sri-ram-micro.vercel.app',
      sourceUrl: GITHUB,
      details: [
        "Built with Next.js 15 and React 19",
        "Advanced GSAP animations and transitions",
        "Fully responsive and performant design",
        "Custom interactive UI components"
      ]
    },
    {
      title: "EventHub",
      description: "Comprehensive event management platform with seamless booking, real-time notifications, and organization tools.",
      label: "Event Platform",
      color: "from-blue-500 to-cyan-500",
      icon: Users,
      liveUrl: GITHUB,
      sourceUrl: GITHUB,
      details: [
        "Real-time event booking system",
        "Push notifications for updates",
        "Multi-user collaboration tools",
        "Analytics dashboard for organizers"
      ]
    },
    {
      title: "Avataq.ai",
      description: "Autonomous software teams for startups. Building the future of AI-driven development with agentic workflows.",
      label: "AI Venture",
      color: "from-green-500 to-emerald-500",
      icon: Zap,
      liveUrl: '/avataq',
      sourceUrl: GITHUB,
      details: [
        "AI-powered autonomous development teams",
        "Agentic workflow automation",
        "Startup-focused rapid prototyping",
        "Intelligent code generation and review"
      ]
    },
    {
      title: "PromptCraft",
      description: "Cutting-edge generative AI solutions platform empowering businesses with advanced LLM integration and automation.",
      label: "GenAI Platform",
      color: "from-orange-500 to-red-500",
      icon: Lightbulb,
      liveUrl: '/prompt-craft',
      sourceUrl: GITHUB,
      details: [
        "Advanced LLM integration framework",
        "Custom prompt engineering tools",
        "Business process automation",
        "Multi-model AI orchestration"
      ]
    },
    {
      title: "Aston Martin F1 Analytics",
      description: "Advanced machine learning analytics for Formula One racing performance optimization using TensorFlow and PyTorch.",
      label: "ML Analytics",
      color: "from-indigo-500 to-purple-500",
      icon: Trophy,
      liveUrl: GITHUB,
      sourceUrl: GITHUB,
      details: [
        "Real-time telemetry data analysis",
        "Predictive performance modeling",
        "TensorFlow & PyTorch implementations",
        "Race strategy optimization algorithms"
      ]
    }
  ];

  const handleCardSwap = useCallback((cardIndex: number) => {
    setActiveProject(cardIndex);
  }, []);

  return (
    <section id="projects" className="py-20 w-full relative overflow-hidden">
      {/* Dark Blue Glow Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest work in AI, full-stack development, and entrepreneurship
          </p>
        </div>
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Project Details Section - LEFT SIDE */}
          <div className="relative min-h-[500px] lg:h-[650px] flex items-center px-4 sm:px-8 lg:px-12 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${projects[activeProject].color} p-3 flex items-center justify-center shrink-0`}>
                    {React.createElement(projects[activeProject].icon, { className: 'w-8 h-8 text-white' })}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                      {projects[activeProject].label}
                    </p>
                    <h3 className="text-4xl font-bold text-white">
                      {projects[activeProject].title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-300 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                {/* Key Features */}
                <div className="space-y-3 pt-4">
                  <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                    Key Features
                  </h4>
                  {projects[activeProject].details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${projects[activeProject].color} mt-2`} />
                      <p className="text-gray-400 leading-relaxed">{detail}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="flex gap-2 pt-6">
                  {projects.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === activeProject 
                          ? `w-12 bg-gradient-to-r ${projects[activeProject].color}` 
                          : 'w-8 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Swap Section - RIGHT SIDE */}
          <div className="flex justify-center lg:justify-start relative min-h-[500px] lg:h-[650px] order-1 lg:order-2">
            <CardSwap
              width={600}
              height={500}
              cardDistance={70}
              verticalDistance={80}
              delay={5000}
              pauseOnHover={true}
              skewAmount={5}
              easing="linear"
              onCardSwap={handleCardSwap}
              onCardClick={(idx) => setActiveProject(idx)}
            >
              {projects.map((project, idx) => (
                <Card 
                  key={idx} 
                  customClass="p-10 backdrop-blur-xl bg-gradient-to-br from-black/95 via-blue-950/30 to-black/95 border-2 border-blue-900/30 shadow-2xl shadow-blue-950/50"
                  onClick={() => setActiveProject(idx)}
                >
                  <div className="h-full flex flex-col justify-between relative">
                    {/* Multiple Decorative gradient orbs for depth */}
                    <div className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-30`} />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-900/40 rounded-full blur-2xl" />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        {project.label}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-4 mt-8 relative z-10">
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Project
                      </a>
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 text-white font-semibold border border-white/20 hover:border-white/40"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>

        {/* Technology Stack - Icon Cloud */}
        <div className="mt-32 pt-12 border-t border-blue-900/30 relative">
          {/* Glow Effect for Tech Stack */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Technology Stack
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to build amazing projects
            </p>
          </div>
          
          <div className="flex justify-center items-center">
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
          
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Click and drag to explore • Interactive 3D technology sphere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;