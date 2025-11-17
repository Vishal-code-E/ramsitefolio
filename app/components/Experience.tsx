"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import LightRaysBackground from "./LightRaysBackground";

const Experience = () => {
  const data = [
    {
      title: "2025–Present",
      content: (
        <div className="space-y-8">
          {/* E-CELL REC President */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  President
                </h3>
                <p className="text-white font-semibold mb-2">
                  E-CELL REC - Raghu Engineering College, Visakhapatnam
                </p>
                <ul className="text-white space-y-2 list-disc list-inside">
                  <li>Lead the Entrepreneurship Cell, driving organizational vision and entrepreneurial culture across campus</li>
                  <li>Managed a multidisciplinary team, coordinating events, workshops, and strategic partnerships</li>
                  <li>Spearheaded innovation challenges, hackathons, and startup education programs</li>
                </ul>
              </div>
              <div className="w-full md:w-48 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-gray-500 text-sm">Image placeholder</span>
                {/* <Image src="/experience/ecell-president.jpg" alt="E-CELL President" fill className="object-cover rounded-lg" /> */}
              </div>
            </div>
          </div>

          {/* PromptCraft */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Startup Founder
                </h3>
                <p className="text-white font-semibold mb-2">
                  PromptCraft - Remote
                </p>
                <ul className="text-white space-y-2 list-disc list-inside">
                  <li>Established PromptCraft for advanced prompt engineering and LLM integration</li>
                  <li>Designed SaaS solutions empowering users with AI-driven content and automation</li>
                  <li>Oversaw technical and business aspects from ideation to MVP deployment</li>
                </ul>
              </div>
              <div className="w-full md:w-48 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-gray-500 text-sm">Image placeholder</span>
                {/* <Image src="/experience/promptcraft.jpg" alt="PromptCraft" fill className="object-cover rounded-lg" /> */}
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
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Webtech Head
                </h3>
                <p className="text-white font-semibold mb-2">
                  E-CELL REC - Raghu Engineering College, Visakhapatnam
                </p>
                <ul className="text-white space-y-2 list-disc list-inside">
                  <li>Developed and maintained the E-Cell REC website, streamlining campus event visibility</li>
                  <li>Led technical initiatives and student developer teams for club activities</li>
                  <li>Organized events focused on emerging technologies and tech-driven startup solutions</li>
                </ul>
              </div>
              <div className="w-full md:w-48 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-gray-500 text-sm">Image placeholder</span>
                {/* <Image src="/experience/ecell-webtech.jpg" alt="E-CELL Webtech" fill className="object-cover rounded-lg" /> */}
              </div>
            </div>
          </div>

          {/* GDG Core Team */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Core Team Member & Tech Lead
                </h3>
                <p className="text-white font-semibold mb-2">
                  Google Developer Groups on Campus - Raghu Engineering College, Visakhapatnam
                </p>
                <ul className="text-white space-y-2 list-disc list-inside">
                  <li>Coordinated and executed campus tech meetups, workshops, and coding sessions</li>
                  <li>Provided technical leadership, mentorship, and support for student teams</li>
                  <li>Drove community engagement with the GDG platform and event management</li>
                </ul>
              </div>
              <div className="w-full md:w-48 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-gray-500 text-sm">Image placeholder</span>
                {/* <Image src="/experience/gdg.jpg" alt="GDG on Campus" fill className="object-cover rounded-lg" /> */}
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
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Innovation Ambassador
                </h3>
                <p className="text-white font-semibold mb-2">
                  IIC - Raghu Engineering College, Visakhapatnam
                </p>
                <ul className="text-white space-y-2 list-disc list-inside">
                  <li>Champion for startup and innovation culture, promoting campus-wide initiatives</li>
                  <li>Member of the Innovation and Incubation Cell (IIC) committee, overseeing event management and student outreach</li>
                  <li>Facilitated workshops and seminars to foster ideation and entrepreneurship</li>
                </ul>
              </div>
              <div className="w-full md:w-48 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-gray-500 text-sm">Image placeholder</span>
                {/* <Image src="/experience/iic.jpg" alt="IIC Ambassador" fill className="object-cover rounded-lg" /> */}
              </div>
            </div>
          </div>

          {/* AVATAQ.AI */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Startup Founder
                </h3>
                <p className="text-white font-semibold mb-2">
                  AVATAQ.AI - Remote
                </p>
                <ul className="text-white space-y-2 list-disc list-inside">
                  <li>Founded AVATAQ.AI, leading product vision and strategy</li>
                  <li>Built agentic AI workflows and automation systems for startup MVPs</li>
                  <li>Drove customer engagement and business development for solo founders</li>
                </ul>
              </div>
              <div className="w-full md:w-48 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-gray-500 text-sm">Image placeholder</span>
                {/* <Image src="/experience/avataq.jpg" alt="AVATAQ.AI" fill className="object-cover rounded-lg" /> */}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <LightRaysBackground>
      <section id="experience" className="w-full bg-transparent">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Experience & Leadership
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              My journey through leadership roles, entrepreneurship, and technical innovation
            </p>
            <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </div>
        </div>
        <Timeline data={data} />
      </section>
    </LightRaysBackground>
  );
};

export default Experience;
