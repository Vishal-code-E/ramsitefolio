import React from 'react';
import Link from 'next/link';
import LightRaysBackground from '../components/LightRaysBackground';

const AvataqPage = () => {
  return (
    <LightRaysBackground>
      <main className="text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
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
          <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Avataq.ai
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Autonomous software teams for startups - Revolutionizing development with AI
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">The Vision</h2>
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
            
            <div className="bg-linear-to-r from-purple-500/20 to-blue-600/20 p-6 rounded-xl border border-purple-500/30">
              <h3 className="font-bold text-lg mb-3">🎯 Mission Statement</h3>
              <p className="text-gray-300 text-sm">
                &quot;To democratize software development by providing startups with AI-powered autonomous teams 
                that can build, iterate, and scale products faster than traditional development approaches.&quot;
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 text-sm">🤖</span>
                  Autonomous Development
                </h3>
                <p className="text-gray-300 text-sm">
                  AI agents that can write, test, and deploy code independently with minimal human oversight.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3 text-sm">⚡</span>
                  Rapid Iteration
                </h3>
                <p className="text-gray-300 text-sm">
                  Continuous improvement cycles that adapt to changing requirements and user feedback.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3 text-sm">🎯</span>
                  Startup-Focused
                </h3>
                <p className="text-gray-300 text-sm">
                  Designed specifically for early-stage companies with limited resources but big ambitions.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-sm">📈</span>
                  Scalable Solutions
                </h3>
                <p className="text-gray-300 text-sm">
                  Architecture that grows with your startup from MVP to enterprise-level applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-semibold mb-1">AI/ML</h3>
              <p className="text-gray-400 text-sm">TensorFlow, PyTorch</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="font-semibold mb-1">Frontend</h3>
              <p className="text-gray-400 text-sm">React, Next.js</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🗄️</span>
              </div>
              <h3 className="font-semibold mb-1">Backend</h3>
              <p className="text-gray-400 text-sm">Node.js, Python</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="font-semibold mb-1">Cloud</h3>
              <p className="text-gray-400 text-sm">AWS, Docker</p>
            </div>
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
              <a
                href="#contact"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="https://github.com/Vishal-code-E"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    </LightRaysBackground>
  );
};

export default AvataqPage;