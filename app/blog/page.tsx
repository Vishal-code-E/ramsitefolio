import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import Blog from '@/components/Blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes on agentic AI, building startups and shipping things.',
}

export default function Page() {
  return (
    <Shell>
      <Blog />
    </Shell>
  )
}
