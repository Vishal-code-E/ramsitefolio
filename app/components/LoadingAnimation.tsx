'use client';

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingAnimationProps {
  onComplete?: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete?.();
      }
    });

    // Initial state
    gsap.set('.loading-text', { opacity: 0, y: 30 });
    gsap.set('.loading-bar', { scaleX: 0 });
    gsap.set('.loading-dots span', { opacity: 0, y: 10 });

    // Animation sequence
    tl.to('.loading-text', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.easeOut'
    })
    .to('.loading-bar', {
      scaleX: 1,
      duration: 1.5,
      ease: 'power2.easeInOut'
    }, '-=0.3')
    .to('.loading-dots span', {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power2.easeOut'
    }, '-=1')
    .to('.loading-dots span', {
      opacity: 0.3,
      duration: 0.3,
      repeat: 3,
      yoyo: true,
      stagger: 0.1,
      ease: 'power2.easeInOut'
    })
    .to('.loading-container', {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: 'power3.easeIn'
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-container fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="loading-text text-white text-2xl md:text-4xl font-light mb-8 tracking-wider">
          PORTFOLIO
        </div>
        
        <div className="loading-bar-container w-64 h-0.5 bg-white/20 rounded-full mx-auto mb-8 overflow-hidden">
          <div className="loading-bar h-full bg-white rounded-full origin-left"></div>
        </div>
        
        <div className="loading-dots flex justify-center space-x-2">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-2 h-2 bg-white rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;