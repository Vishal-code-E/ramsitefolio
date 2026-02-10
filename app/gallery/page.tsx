'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  src: string;
  alt: string;
}

export default function GalleryPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images from public folder
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
    { src: '/img4.jpg', alt: 'Gallery image 4' },
    { src: '/COGNIZANT%20HYD%20SET%203%20-29.jpg', alt: 'Cognizant moments' },
    { src: '/COGNIZANT%20HYD%20SET%206%20-6.jpg', alt: 'Workplace moments' },
    { src: '/COGNIZANT%20HYD%20SET%204%20-5.jpg', alt: 'Team collaboration' },
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
    <main className="bg-[#0a0e27] text-white min-h-screen relative overflow-hidden">
      {/* Dark Blue Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-black/50 rounded-full blur-3xl"></div>
      </div>
      
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#gallery"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <section
        ref={sectionRef}
        className="py-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16 gallery-heading pt-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/60 mb-4">
              Gallery
            </h1>
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
    </main>
  );
}
