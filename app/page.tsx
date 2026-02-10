'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import GalleryLink from './components/GalleryLink';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PillNav from './components/PillNav';
import LoadingAnimation from './components/LoadingAnimation';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <main className="bg-[#0a0e27] text-white min-h-screen relative overflow-hidden">
      {/* Global Background Glow Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-950/20 via-transparent to-black/30"></div>
      </div>
      
      {!showContent && <LoadingAnimation onComplete={handleLoadingComplete} />}

      {showContent && (
        <>
          <PillNav
            items={navItems}
            initialLoadAnimation={true}
            baseColor="#1a1a1a"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#1a1a1a"
          />

          <Hero />
          <About />

          <Experience />

          <Projects />
          <Testimonials />
          <BlogSection />
          <GalleryLink />
          <Contact />

          <Footer />
        </>
      )}
    </main>
  );
}
