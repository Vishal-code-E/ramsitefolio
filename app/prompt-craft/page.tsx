import React from 'react';
import Link from 'next/link';

const PromptCraftPage = () => {
  return (
      <main className="bg-[#0a0e27] text-white min-h-screen py-10 relative overflow-hidden">
      {/* Dark Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/40 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 py-20 relative z-10">
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
          <div className="w-20 h-20 bg-linear-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Prompt Craft
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cutting-edge generative AI solutions platform for modern businesses
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Revolutionizing AI Integration</h2>
            <p className="text-gray-300 mb-6">
              Prompt Craft represents the next evolution in generative AI solutions. Born from the need to 
              make advanced AI capabilities accessible to businesses of all sizes, this platform bridges 
              the gap between complex AI technology and practical business applications.
            </p>
            <p className="text-gray-300 mb-6">
              As the founder, I&apos;ve focused on creating an intuitive platform that allows businesses to 
              harness the power of ChatGPT, Gemini, and Perplexity APIs without requiring deep technical 
              expertise.
            </p>
            
            <div className="bg-linear-to-r from-yellow-500/20 to-orange-600/20 p-6 rounded-xl border border-yellow-500/30">
              <h3 className="font-bold text-lg mb-3">✨ Core Philosophy</h3>
              <p className="text-gray-300 text-sm">
                &quot;AI should enhance human creativity and productivity, not replace it. Prompt Craft makes 
                advanced AI accessible to everyone, regardless of technical background.&quot;
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Platform Capabilities</h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 text-sm">🎨</span>
                  Content Generation
                </h3>
                <p className="text-gray-300 text-sm">
                  Create high-quality content, copy, and creative materials with AI-powered tools.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3 text-sm">🔍</span>
                  Smart Analysis
                </h3>
                <p className="text-gray-300 text-sm">
                  Analyze data, documents, and trends with intelligent AI-driven insights.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3 text-sm">⚙️</span>
                  Workflow Automation
                </h3>
                <p className="text-gray-300 text-sm">
                  Streamline business processes with intelligent automation and AI integration.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-sm">🔌</span>
                  API Integration
                </h3>
                <p className="text-gray-300 text-sm">
                  Seamless integration with ChatGPT, Gemini, and Perplexity APIs for maximum flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Models Integration */}
        <div className="mt-20 pt-8">
          <h2 className="text-3xl font-bold text-center mb-12">Integrated AI Models</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">ChatGPT</h3>
              <p className="text-gray-300 text-sm">
                Advanced conversational AI for content creation, problem-solving, and creative tasks.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Gemini</h3>
              <p className="text-gray-300 text-sm">
                Google&apos;s powerful multimodal AI for complex reasoning and analysis tasks.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5 16.5l-2-2L6 16l4 4L20 10l-1.5-1.5L9.5 16.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Perplexity</h3>
              <p className="text-gray-300 text-sm">
                Real-time search and research capabilities for up-to-date information and insights.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-20 pt-8">
          <h2 className="text-3xl font-bold text-center mb-12">Real-World Applications</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="font-bold text-lg mb-2">📝 Content Marketing</h3>
                <p className="text-gray-300 text-sm">
                  Generate blog posts, social media content, and marketing copy that resonates with your audience.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-lg mb-2">📊 Business Intelligence</h3>
                <p className="text-gray-300 text-sm">
                  Transform raw data into actionable insights with AI-powered analysis and reporting.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-bold text-lg mb-2">🎯 Customer Support</h3>
                <p className="text-gray-300 text-sm">
                  Enhance customer experience with intelligent chatbots and automated response systems.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-bold text-lg mb-2">🔍 Research & Development</h3>
                <p className="text-gray-300 text-sm">
                  Accelerate innovation with AI-assisted research, trend analysis, and competitive intelligence.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="font-bold text-lg mb-2">⚡ Process Automation</h3>
                <p className="text-gray-300 text-sm">
                  Streamline workflows and reduce manual tasks with intelligent automation solutions.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-bold text-lg mb-2">💡 Creative Projects</h3>
                <p className="text-gray-300 text-sm">
                  Unlock creative potential with AI-assisted brainstorming, design, and content creation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-linear-to-r from-yellow-500/10 to-orange-600/10 p-8 rounded-2xl border border-yellow-500/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Experience the Future of AI</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Transform your business processes with cutting-edge generative AI. Prompt Craft makes 
              advanced AI accessible, practical, and powerful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your AI Journey
              </a>
              <a
                href="#projects"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PromptCraftPage;