'use client';

import React from 'react';
import Silk from './Silk';

interface SilkBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const SilkBackground: React.FC<SilkBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Silk background - fixed and covering the viewport */}
      <div className="fixed inset-0 z-0">
        <Silk 
          speed={2}
          scale={1.5}
          color="#e0f2fe"
          noiseIntensity={0.6}
          rotation={0.05}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SilkBackground;