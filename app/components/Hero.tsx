'use client';

import React from 'react';
import Image from 'next/image';
import TextPressure from './TextPressure';
import SplitText from './SplitText';
import { HoverBorderGradient } from '../../components/ui/hover-border-gradient';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Greeting and TextPressure Component */}
          <div className="relative order-1 lg:order-1">
            <div className="relative w-full min-h-[500px]">
              
              {/* TextPressure Container - Main centered element */}
              <div className="absolute inset-0 flex items-center justify-center p-8 mt-16">
                <TextPressure
                  text="SRI RAM"
                  textColor="#ffffff"
                  strokeColor="#5227ff"
                  stroke={true}
                  strokeWidth={2}
                  width={true}
                  weight={true}
                  italic={true}
                  alpha={false}
                  flex={true}
                  scale={true}
                  minFontSize={32}
                  className="w-full h-full"
                />
              </div>
              
              {/* Explore Me Button - Positioned to the left below SRI RAM */}
              <div className="absolute inset-0 flex items-center justify-start pl-16 p-8 mt-32">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                  onClick={scrollToAbout}
                >
                  <span>Explore Me</span>
                </HoverBorderGradient>
              </div>
              
              {/* Greeting with SplitText - Positioned to align H with S */}
              <div className="absolute top-8 left-8 text-left">
                <SplitText
                  text="Hello , I'am"
                  className="text-3xl md:text-4xl text-gray-300 font-bold mb-2 tracking-wider"
                  delay={0.1}
                  stagger={0.2}
                  animation="fadeUp"
                />
                <SplitText
                  text="Sri Ram"
                  className="text-4xl md:text-5xl font-black bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide"
                  delay={1.2}
                  stagger={0.08}
                  animation="scale"
                />
              </div>
              
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative order-2 lg:order-2">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Image with clean base */}
              <div className="relative">
                {/* Simple base/platform for the image */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-linear-to-r from-transparent via-white/20 to-transparent rounded-full blur-sm"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3/5 h-2 bg-linear-to-r from-transparent via-white/10 to-transparent rounded-full blur-sm"></div>
                
                {/* Image without background card */}
                <Image
                  src="/bghero.png"
                  alt="Vishal - Portfolio Photo"
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-105 relative z-10"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;