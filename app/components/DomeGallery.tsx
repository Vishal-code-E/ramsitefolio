'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface GalleryImage {
  src: string;
  alt: string;
}

export default function DomeGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const images: GalleryImage[] = [
    { src: '/img3.jpg', alt: 'Gallery image 3' },
    { src: '/SUIT.png', alt: 'Professional attire' },
    { src: '/COGNIZANT%20HYD%20SET%205%20-36.jpg', alt: 'Professional setting' },
    { src: '/img1.jpg', alt: 'Gallery image 1' },
    { src: '/COGNIZANT%20HYD%20SET%204%20-6.jpg', alt: 'Work culture' },
    { src: '/hero.jpg', alt: 'Professional portrait' },
    { src: '/img5.jpg', alt: 'Gallery image 5' },
    { src: '/COGNIZANT%20HYD%20SET%206%20-2.jpg', alt: 'Corporate life' },
    { src: '/Suit2.png', alt: 'Professional look' },
    { src: '/img2.jpg', alt: 'Gallery image 2' },
    { src: '/COGNIZANT%20HYD%20-20.jpg', alt: 'Cognizant Hyderabad' },
    { src: '/COGNIZANT%20HYD%20SET%205%20-14.jpg', alt: 'Office environment' },
  ];

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setRotation((prev) => ({
          x: prev.x,
          y: (prev.y + 0.5) % 360,
        }));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 30;

    setRotation({ x, y });
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/60 mb-4">
            Explore My Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Moments captured through my professional journey, team collaborations, and memorable experiences
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative h-[600px] w-full max-w-5xl mx-auto"
          style={{ perspective: '1200px' }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: isHovering ? 'none' : 'transform 0.1s linear',
            }}
          >
            {images.map((image, index) => {
              const totalImages = images.length;
              const phi = Math.acos(-1 + (2 * index) / totalImages);
              const theta = Math.sqrt(totalImages * Math.PI) * phi;

              const radius = 400;
              const x = radius * Math.cos(theta) * Math.sin(phi);
              const y = radius * Math.sin(theta) * Math.sin(phi);
              const z = radius * Math.cos(phi);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="absolute group cursor-pointer"
                  style={{
                    width: '180px',
                    height: '180px',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) rotateY(${-rotation.y}deg) rotateX(${-rotation.x}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:scale-110">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            {isHovering ? 'Move your mouse to explore' : 'Hover to interact or watch it rotate'}
          </p>
        </motion.div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
