"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "2025–Present",
      content: (
        <div className="space-y-8">
          {/* E-CELL REC President */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/40">
                <span className="text-white font-black text-lg tracking-tight">EC</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  President
                </h3>
                <p className="text-blue-300 font-semibold mb-3 text-sm">
                  E-CELL REC · Raghu Engineering College, Visakhapatnam
                </p>
                <ul className="text-gray-300 space-y-1.5 list-disc list-inside text-sm leading-relaxed">
                  <li>Lead the Entrepreneurship Cell, driving organizational vision and entrepreneurial culture across campus</li>
                  <li>Managed a multidisciplinary team, coordinating events, workshops, and strategic partnerships</li>
                  <li>Spearheaded innovation challenges, hackathons, and startup education programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PromptCraft */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-900/40">
                <span className="text-white font-black text-lg tracking-tight">PC</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Startup Founder
                </h3>
                <p className="text-orange-300 font-semibold mb-3 text-sm">
                  PromptCraft · Remote
                </p>
                <ul className="text-gray-300 space-y-1.5 list-disc list-inside text-sm leading-relaxed">
                  <li>Established PromptCraft for advanced prompt engineering and LLM integration</li>
                  <li>Designed SaaS solutions empowering users with AI-driven content and automation</li>
                  <li>Oversaw technical and business aspects from ideation to MVP deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024–2025",
      content: (
        <div className="space-y-8">
          {/* E-CELL Webtech Head */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-900/40">
                <span className="text-white font-black text-lg tracking-tight">WT</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Webtech Head
                </h3>
                <p className="text-cyan-300 font-semibold mb-3 text-sm">
                  E-CELL REC · Raghu Engineering College, Visakhapatnam
                </p>
                <ul className="text-gray-300 space-y-1.5 list-disc list-inside text-sm leading-relaxed">
                  <li>Developed and maintained the E-Cell REC website, streamlining campus event visibility</li>
                  <li>Led technical initiatives and student developer teams for club activities</li>
                  <li>Organized events focused on emerging technologies and tech-driven startup solutions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GDG Core Team */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-900/40">
                <span className="text-white font-black text-lg tracking-tight">GDG</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Core Team Member & Tech Lead
                </h3>
                <p className="text-green-300 font-semibold mb-3 text-sm">
                  Google Developer Groups on Campus · Raghu Engineering College, Visakhapatnam
                </p>
                <ul className="text-gray-300 space-y-1.5 list-disc list-inside text-sm leading-relaxed">
                  <li>Coordinated and executed campus tech meetups, workshops, and coding sessions</li>
                  <li>Provided technical leadership, mentorship, and support for student teams</li>
                  <li>Drove community engagement with the GDG platform and event management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023–Present",
      content: (
        <div className="space-y-8">
          {/* IIC Innovation Ambassador */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-900/40">
                <span className="text-white font-black text-lg tracking-tight">IIC</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Innovation Ambassador
                </h3>
                <p className="text-purple-300 font-semibold mb-3 text-sm">
                  IIC · Raghu Engineering College, Visakhapatnam
                </p>
                <ul className="text-gray-300 space-y-1.5 list-disc list-inside text-sm leading-relaxed">
                  <li>Champion for startup and innovation culture, promoting campus-wide initiatives</li>
                  <li>Member of the Innovation and Incubation Cell (IIC) committee, overseeing event management and student outreach</li>
                  <li>Facilitated workshops and seminars to foster ideation and entrepreneurship</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AVATAQ.AI */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-900/40">
                <span className="text-white font-black text-sm tracking-tight">AQ.AI</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Startup Founder
                </h3>
                <p className="text-teal-300 font-semibold mb-3 text-sm">
                  AVATAQ.AI · Remote
                </p>
                <ul className="text-gray-300 space-y-1.5 list-disc list-inside text-sm leading-relaxed">
                  <li>Founded AVATAQ.AI, leading product vision and strategy</li>
                  <li>Built agentic AI workflows and automation systems for startup MVPs</li>
                  <li>Drove customer engagement and business development for solo founders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
      <section id="experience" className="py-20 w-full bg-transparent relative overflow-hidden">
        {/* Dark Blue Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-800/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Experience & Leadership
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              My journey through leadership roles, entrepreneurship, and technical innovation
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </div>
        </div>
        <Timeline data={data} />
      </section>
  );
};

export default Experience;
