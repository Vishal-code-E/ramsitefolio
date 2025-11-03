'use client';

import React from 'react';
import Image from 'next/image';
import TextPressure from './TextPressure';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - TextPressure Component */}
          <div className="relative order-1 lg:order-1">
            <div className="relative w-full min-h-[400px] flex items-center justify-center">
              {/* TextPressure Container - Clean without background card */}
              <div className="relative w-full h-[400px] flex items-center justify-center p-8">
                <TextPressure
                  text="VISHAL"
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