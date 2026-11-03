import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'About',
  description: 'Who Sri Ram is, what he builds, and the tools he uses.',
}

export default function Page() {
  return (
    <Shell>
      <About />
      <Testimonials />
    </Shell>
  )
}
