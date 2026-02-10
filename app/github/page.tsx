import React from 'react';
import Link from 'next/link';

const GitHubPage = () => {
  return (
      <main className="bg-[#0a0e27] text-white min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Back Button */}
        <Link 
          href="/#about" 
          className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to About
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            GitHub Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my open source contributions and code repositories
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">My Coding Journey</h2>
            <p className="text-gray-300 mb-6">
              My GitHub profile showcases my journey as a full-stack developer and AI enthusiast. 
              From building autonomous software teams at Avataq.ai to crafting generative AI solutions 
              with Prompt Craft, my repositories reflect a passion for innovation and clean code.
            </p>
            <p className="text-gray-300 mb-6">
              You&apos;ll find projects spanning machine learning, web development, AI automation, 
              and entrepreneurship tools. Each repository tells a story of problem-solving 
              and technological exploration.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">📊 Languages & Frameworks</h3>
                <p className="text-gray-300 text-sm">
                  TypeScript, Python, React, Next.js, TensorFlow, PyTorch, Node.js
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">🎯 Specialization</h3>
                <p className="text-gray-300 text-sm">
                  Agentic AI, Machine Learning, Full-Stack Development, Autonomous Systems
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Featured Repositories</h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="font-bold mb-2">🤖 Avataq.ai Platform</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Autonomous software development teams for startups
                </p>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="bg-blue-500/20 px-2 py-1 rounded mr-2">TypeScript</span>
                  <span className="bg-green-500/20 px-2 py-1 rounded">AI/ML</span>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="font-bold mb-2">⚡ Prompt Craft</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Cutting-edge generative AI solutions platform
                </p>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="bg-purple-500/20 px-2 py-1 rounded mr-2">Python</span>
                  <span className="bg-yellow-500/20 px-2 py-1 rounded">GenAI</span>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="font-bold mb-2">🏎️ F1 ML Analytics</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Aston Martin Formula One machine learning analytics
                </p>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="bg-red-500/20 px-2 py-1 rounded mr-2">Python</span>
                  <span className="bg-orange-500/20 px-2 py-1 rounded">Data Science</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="https://github.com/Vishal-code-E"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GitHubPage;