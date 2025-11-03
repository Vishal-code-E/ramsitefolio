'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const originalText = useRef<string>('');

  useEffect(() => {
    if (!rootRef.current) return;

    const textContent = typeof children === 'string' ? children : '';
    originalText.current = textContent;

    // Split text into individual characters
    const charElements: HTMLSpanElement[] = [];
    const paragraph = rootRef.current.querySelector('p');
    
    if (paragraph) {
      paragraph.innerHTML = '';
      
      textContent.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'inline-block will-change-transform';
        span.style.display = char === ' ' ? 'inline' : 'inline-block';
        span.dataset.original = char;
        span.dataset.index = index.toString();
        paragraph.appendChild(span);
        charElements.push(span);
      });
    }

    const scrambleChar = (element: HTMLSpanElement, targetChar: string) => {
      if (targetChar === ' ') return;
      
      const scrambleCount = Math.floor(Math.random() * 5) + 3;
      let currentCount = 0;
      
      const scrambleInterval = setInterval(() => {
        if (currentCount < scrambleCount - 1) {
          const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          element.textContent = randomChar;
          currentCount++;
        } else {
          element.textContent = targetChar;
          clearInterval(scrambleInterval);
        }
      }, 50);
    };

    const handleMove = (e: PointerEvent) => {
      charElements.forEach((el) => {
        const { left, top, width, height } = el.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          const originalChar = el.dataset.original || '';
          scrambleChar(el, originalChar);
          
          // Add some visual feedback
          gsap.to(el, {
            scale: 1.1,
            duration: 0.1,
            ease: 'power2.easeOut',
            yoyo: true,
            repeat: 1
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);

    return () => {
      el.removeEventListener('pointermove', handleMove);
    };
  }, [radius, duration, speed, scrambleChars, children]);

  return (
    <div
      ref={rootRef}
      className={`mx-auto max-w-4xl px-8 font-mono text-lg md:text-xl leading-relaxed text-white ${className}`}
      style={style}
    >
      <p className="cursor-crosshair">{children}</p>
    </div>
  );
};

export default ScrambledText;
