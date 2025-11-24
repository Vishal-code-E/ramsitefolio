'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images from public folder
  const images: GalleryImage[] = [
    { src: '/hero.jpg', alt: 'Professional portrait' },
    { src: '/SUIT.png', alt: 'Professional attire' },
    { src: '/Suit2.png', alt: 'Professional look' },
    { src: '/COGNIZANT%20HYD%20-20.jpg', alt: 'Cognizant Hyderabad' },
    { src: '/COGNIZANT%20HYD%20SET%203%20-29.jpg', alt: 'Cognizant moments' },
    { src: '/COGNIZANT%20HYD%20SET%204%20-5.jpg', alt: 'Team collaboration' },
    { src: '/COGNIZANT%20HYD%20SET%204%20-6.jpg', alt: 'Work culture' },
    { src: '/COGNIZANT%20HYD%20SET%205%20-14.jpg', alt: 'Office environment' },
    { src: '/COGNIZANT%20HYD%20SET%205%20-36.jpg', alt: 'Professional setting' },
    { src: '/COGNIZANT%20HYD%20SET%206%20-2.jpg', alt: 'Corporate life' },
    { src: '/COGNIZANT%20HYD%20SET%206%20-6.jpg', alt: 'Workplace moments' },
    { src: '/img1.jpg', alt: 'Gallery image 1' },
    { src: '/img2.jpg', alt: 'Gallery image 2' },
    { src: '/img3.jpg', alt: 'Gallery image 3' },
    { src: '/img4.jpg', alt: 'Gallery image 4' },
    { src: '/img5.jpg', alt: 'Gallery image 5' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Animate gallery items on scroll
      gsap.fromTo(
        '.gallery-item',
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate heading
      gsap.fromTo(
        '.gallery-heading',
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 gallery-heading">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/60 mb-4">
            Gallery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Moments captured through my professional journey
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item relative aspect-square overflow-hidden rounded-2xl bg-gray-900 cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-9999 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-purple-400 transition-colors z-10000"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
