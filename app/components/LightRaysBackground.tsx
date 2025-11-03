'use client';

import React from 'react';
import LightRays from './LightRays';

interface LightRaysBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const LightRaysBackground: React.FC<LightRaysBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* LightRays background - fixed and covering the viewport */}
      <div className="fixed inset-0 z-0">
        <LightRays 
          raysOrigin="top-center"
          raysColor="#5227ff"
          raysSpeed={1.5}
          lightSpread={2}
          rayLength={3}
          pulsating={true}
          fadeDistance={1.2}
          saturation={0.8}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.1}
          distortion={0.2}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LightRaysBackground;