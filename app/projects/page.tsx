import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import Works from '@/components/Works'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Latest work in AI, full-stack development and entrepreneurship.',
}

export default function Page() {
  return (
    <Shell>
      <Works />
    </Shell>
  )
}
