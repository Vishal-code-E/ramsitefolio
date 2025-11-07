'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  animation?: 'fadeUp' | 'slideIn' | 'scale' | 'rotate';
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
  animation = 'fadeUp'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const chars = container.querySelectorAll('.char');

    // Set initial state based on animation type
    const getInitialState = () => {
      switch (animation) {
        case 'fadeUp':
          return { opacity: 0, y: 50, rotationX: 45 };
        case 'slideIn':
          return { opacity: 0, x: -30, rotationY: 45 };
        case 'scale':
          return { opacity: 0, scale: 0, rotation: 180 };
        case 'rotate':
          return { opacity: 0, rotation: 90, scale: 0.5 };
        default:
          return { opacity: 0, y: 50 };
      }
    };

    const getFinalState = () => {
      switch (animation) {
        case 'fadeUp':
          return { opacity: 1, y: 0, rotationX: 0 };
        case 'slideIn':
          return { opacity: 1, x: 0, rotationY: 0 };
        case 'scale':
          return { opacity: 1, scale: 1, rotation: 0 };
        case 'rotate':
          return { opacity: 1, rotation: 0, scale: 1 };
        default:
          return { opacity: 1, y: 0 };
      }
    };

    // Set initial state
    gsap.set(chars, getInitialState());

    // Create animation timeline for better control
    const tl = gsap.timeline({ delay: delay });
    
    // Animate in with enhanced effects
    tl.to(chars, {
      ...getFinalState(),
      duration: 1.5,
      stagger: stagger,
      ease: 'back.out(1.7)',
    })
    // Add a subtle bounce effect after main animation
    .to(chars, {
      scale: 1.05,
      duration: 0.2,
      stagger: stagger * 0.5,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    }, '-=0.2');

    // Add hover effect for interactivity
    const handleMouseEnter = () => {
      gsap.to(chars, {
        y: -5,
        duration: 0.3,
        stagger: 0.02,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
      });
    };

    container.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      tl.kill();
    };

  }, [text, delay, stagger, animation]);

  const renderText = () => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="char inline-block will-change-transform transform-gpu perspective-1000"
        style={{ 
          display: char === ' ' ? 'inline' : 'inline-block',
          transformStyle: 'preserve-3d'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className={className}>
      {renderText()}
    </div>
  );
};

export default SplitText;