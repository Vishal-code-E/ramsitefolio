import React from 'react';
import Link from 'next/link';

const ECellPage = () => {
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
          <div className="w-20 h-20 bg-linear-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 15.74L12 22L10.91 15.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            E-Cell REC
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leading entrepreneurship initiatives at Raghu Engineering College
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Presidential Leadership</h2>
            <p className="text-gray-300 mb-6">
              As President of the Entrepreneurship Cell at Raghu Engineering College, I lead a 
              vibrant community of aspiring entrepreneurs, innovators, and change-makers. Our mission 
              is to foster entrepreneurial thinking and create a thriving startup ecosystem within 
              our college community.
            </p>
            <p className="text-gray-300 mb-6">
              Under my leadership, E-Cell REC has become a catalyst for innovation, providing students 
              with the resources, mentorship, and opportunities they need to transform their ideas into 
              successful ventures. We&apos;ve created a platform where creativity meets opportunity.
            </p>
            
            <div className="bg-linear-to-r from-red-500/20 to-pink-600/20 p-6 rounded-xl border border-red-500/30">
              <h3 className="font-bold text-lg mb-3">🎯 Our Mission</h3>
              <p className="text-gray-300 text-sm">
                &quot;To inspire, educate, and empower the next generation of entrepreneurs by providing 
                them with the tools, knowledge, and network necessary to turn innovative ideas into 
                impactful businesses.&quot;
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Key Initiatives</h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 text-sm">💡</span>
                  Startup Incubation
                </h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive support for student startups from ideation to execution and funding.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3 text-sm">🎓</span>
                  Workshops & Training
                </h3>
                <p className="text-gray-300 text-sm">
                  Regular workshops on business development, pitch creation, and entrepreneurial skills.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3 text-sm">🏆</span>
                  Competitions & Events
                </h3>
                <p className="text-gray-300 text-sm">
                  Organizing pitch competitions, hackathons, and entrepreneurship challenges.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-sm">🤝</span>
                  Industry Mentorship
                </h3>
                <p className="text-gray-300 text-sm">
                  Connecting students with successful entrepreneurs and industry experts for guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-lg mb-2">🚀 50+ Startup Ideas Incubated</h3>
                <p className="text-gray-300 text-sm">
                  Successfully guided over 50 student teams through the ideation and validation process.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-bold text-lg mb-2">💰 ₹5+ Lakhs in Funding Facilitated</h3>
                <p className="text-gray-300 text-sm">
                  Helped student startups secure funding through pitch competitions and investor connections.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-bold text-lg mb-2">🎯 100+ Events Organized</h3>
                <p className="text-gray-300 text-sm">
                  Successfully conducted workshops, seminars, and competitions to foster entrepreneurial spirit.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="font-bold text-lg mb-2">🌟 500+ Students Impacted</h3>
                <p className="text-gray-300 text-sm">
                  Directly influenced and mentored over 500 students in entrepreneurial thinking and skills.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-bold text-lg mb-2">🏆 National Recognition</h3>
                <p className="text-gray-300 text-sm">
                  E-Cell REC received recognition at various national-level entrepreneurship forums.
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="font-bold text-lg mb-2">🤝 Industry Partnerships</h3>
                <p className="text-gray-300 text-sm">
                  Established partnerships with leading startups and corporations for mentorship and internships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Signature Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Startup Bootcamp</h3>
              <p className="text-gray-300 text-sm">
                Intensive 30-day program covering all aspects of startup development from ideation to pitch.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation Challenge</h3>
              <p className="text-gray-300 text-sm">
                Annual competition where students solve real-world problems with innovative technological solutions.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Mentor Connect</h3>
              <p className="text-gray-300 text-sm">
                Ongoing mentorship program connecting students with successful entrepreneurs and industry leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Visit E-Cell */}
        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-red-500/10 to-pink-600/10 p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-2xl font-bold mb-4">Join the Entrepreneurial Revolution</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be part of a community that&apos;s shaping the future of entrepreneurship. Connect with like-minded 
              innovators and turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ecellrec.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Visit E-Cell Website
              </a>
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ECellPage;