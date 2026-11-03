import Shell from '@/components/Shell'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Works from '@/components/Works'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import Playground from '@/components/Playground'
import Contact, { Recognition } from '@/components/Contact'

export default function Home() {
  return (
    <Shell>
      <Hero />
      <About />
      <Experience />
      <Works />
      <Testimonials />
      <Blog />
      <Playground />
      <Recognition />
      <Contact />
    </Shell>
  )
}
