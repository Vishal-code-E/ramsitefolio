'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightRaysBackground from './components/LightRaysBackground';
import PillNav from './components/PillNav';
import LoadingAnimation from './components/LoadingAnimation';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'BLOG', href: '#blog' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {!showContent && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {showContent && (
        <>
          <PillNav
            logo=""
            items={navItems}
            initialLoadAnimation={true}
            baseColor="#1a1a1a"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#1a1a1a"
          />
          
          <LightRaysBackground>
            <Hero />
            <About />
          </LightRaysBackground>
          
          <Experience />
          
          <LightRaysBackground>
            <Projects />
            <BlogSection />
            <Contact />
          </LightRaysBackground>
          <Footer />
        </>
      )}
    </main>
  );
}
