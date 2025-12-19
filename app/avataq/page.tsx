import React from 'react';
import Link from 'next/link';
import LightRaysBackground from '../components/LightRaysBackground';
import { ArrowLeft, Bot, Zap, Target, TrendingUp, Cpu, Brain, Layout, Server, Cloud, Github, ArrowRight, Quote, Calendar } from 'lucide-react';

export const metadata = {
  title: "Avataq.ai | Autonomous Software Teams",
  description: "Revolutionizing startup development with AI-powered autonomous teams.",
};

const AvataqPage = () => {
  const features = [
    {
      title: "Autonomous Development",
      description: "AI agents that can write, test, and deploy code independently with minimal human oversight.",
      icon: <Cpu className="w-4 h-4 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Rapid Iteration",
      description: "Continuous improvement cycles that adapt to changing requirements and user feedback.",
      icon: <Zap className="w-4 h-4 text-white" />,
      color: "bg-green-500"
    },
    {
      title: "Startup-Focused",
      description: "Designed specifically for early-stage companies with limited resources but big ambitions.",
      icon: <Target className="w-4 h-4 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "Scalable Solutions",
      description: "Architecture that grows with your startup from MVP to enterprise-level applications.",
      icon: <TrendingUp className="w-4 h-4 text-white" />,
      color: "bg-orange-500"
    }
  ];

  const techStack = [
    {
      title: "AI/ML",
      tools: "TensorFlow, PyTorch",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-500/20"
    },
    {
      title: "Frontend",
      tools: "React, Next.js",
      icon: <Layout className="w-8 h-8 text-green-400" />,
      bg: "bg-green-500/20"
    },
    {
      title: "Backend",
      tools: "Node.js, Python",
      icon: <Server className="w-8 h-8 text-purple-400" />,
      bg: "bg-purple-500/20"
    },
    {
      title: "Cloud",
      tools: "AWS, Docker",
      icon: <Cloud className="w-8 h-8 text-orange-400" />,
      bg: "bg-orange-500/20"
    }
  ];

  return (
    <LightRaysBackground>
      <main className="text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20">
          {/* Back Button */}
          <Link
            href="/#about"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to About
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-400">
              Avataq.ai
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Autonomous software teams for startups - Revolutionizing development with AI
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold">The Vision</h2>
                <div className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/20 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Founded 2024
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Avataq.ai was born from a simple yet powerful idea: What if startups could have access to
                autonomous software development teams that work 24/7, never get tired, and continuously
                learn and improve?
              </p>
              <p className="text-gray-300 mb-6">
                As a founder and CEO, I envisioned a future where early-stage companies wouldn&apos;t be
                limited by traditional hiring constraints or budget limitations when building their
                core technology products.
              </p>

              <div className="bg-linear-to-r from-purple-500/20 to-blue-600/20 p-6 rounded-xl border border-purple-500/30 relative overflow-hidden">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-purple-500/10 rotate-180" />
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  Mission Statement
                </h3>
                <p className="text-gray-300 text-sm relative z-10 italic">
                  &quot;To democratize software development by providing startups with AI-powered autonomous teams
                  that can build, iterate, and scale products faster than traditional development approaches.&quot;
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <span className={`w-8 h-8 ${feature.color} rounded-lg flex items-center justify-center mr-3`}>
                        {feature.icon}
                      </span>
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-16 h-16 ${tech.bg} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{tech.title}</h3>
                  <p className="text-gray-400 text-sm">{tech.tools}</p>
                </div>
              ))}
            </div>
          </div>




          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-linear-to-r from-purple-500/10 to-blue-600/10 p-8 rounded-2xl border border-purple-500/20">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Startup?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join the future of software development with autonomous AI teams that work around
                the clock to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://github.com/Vishal-code-E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </main >
    </LightRaysBackground >
  );
};

export default AvataqPage;