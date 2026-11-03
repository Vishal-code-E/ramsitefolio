import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import CaseStudy from './components/CaseStudy'
import Playground from './components/Playground'
import Contact, { Footer, Recognition } from './components/Contact'

export default function App() {
  return (
    <div className="px-2 py-2 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-mustard focus:px-4 focus:py-2 focus:font-mono focus:text-xs">
        Skip to content
      </a>
      {/* the notebook page card — overflow-clip (not hidden) keeps the nav sticky */}
      <div className="paper relative mx-auto max-w-[1320px] overflow-clip rounded-[4px] shadow-[0_30px_80px_-30px_rgba(0,0,0,.55)] ring-1 ring-black/10">
        <Nav />
        <main id="main">
          <Hero />
          <About />
          <Works />
          <CaseStudy />
          <Playground />
          <Recognition />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
