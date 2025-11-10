import React from 'react';
import Link from 'next/link';

const LinkedInPage = () => {
  return (
    <main className="bg-black text-white min-h-screen">
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
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Network
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and career achievements
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Professional Background</h2>
            <p className="text-gray-300 mb-6">
              As President of E-Cell at Raghu Engineering College and former Google Developer Groups Core Team member, 
              I&apos;ve built a career at the intersection of technology and entrepreneurship.
            </p>
            <p className="text-gray-300 mb-6">
              My LinkedIn profile showcases my journey from student leader to AI entrepreneur, 
              highlighting key projects, professional relationships, and industry contributions.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">🎓 Education & Leadership</h3>
                <p className="text-gray-300 text-sm">
                  Raghu Engineering College - E-Cell President
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">💼 Professional Experience</h3>
                <p className="text-gray-300 text-sm">
                  Google Developer Groups Core Team, AI Startup Founder
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">🌟 Achievements</h3>
                <p className="text-gray-300 text-sm">
                  Founded Avataq.ai & Prompt Craft, Multiple AI/ML Projects
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Career Highlights</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-lg mb-2">🚀 Founder & CEO - Avataq.ai</h3>
                <p className="text-gray-300 text-sm mb-2">2024 - Present</p>
                <p className="text-gray-300 text-sm">
                  Building autonomous software teams for startups, revolutionizing how early-stage companies 
                  approach development with AI-driven solutions.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-lg mb-2">⚡ Founder - Prompt Craft</h3>
                <p className="text-gray-300 text-sm mb-2">2024 - Present</p>
                <p className="text-gray-300 text-sm">
                  Developed cutting-edge generative AI solutions platform, helping businesses 
                  integrate advanced AI capabilities into their workflows.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg mb-2">🎯 President - E-Cell REC</h3>
                <p className="text-gray-300 text-sm mb-2">2023 - Present</p>
                <p className="text-gray-300 text-sm">
                  Leading entrepreneurship initiatives, mentoring students, and fostering 
                  innovation culture at Raghu Engineering College.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-lg mb-2">🔧 Core Team - Google Developer Groups</h3>
                <p className="text-gray-300 text-sm mb-2">2023 - 2024</p>
                <p className="text-gray-300 text-sm">
                  Contributed to developer community initiatives, organized tech events, 
                  and promoted Google technologies among fellow developers.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/vishal-epu-646822222/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LinkedInPage;