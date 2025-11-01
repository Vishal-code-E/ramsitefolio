import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SilkBackground from './components/SilkBackground';

export default function Home() {
  return (
    <main>
      <SilkBackground>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <BlogSection />
        <Contact />
      </SilkBackground>
      <Footer />
    </main>
  );
}
