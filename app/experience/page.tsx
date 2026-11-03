import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import Experience from '@/components/Experience'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Leadership roles, entrepreneurship and technical innovation.',
}

export default function Page() {
  return (
    <Shell>
      <Experience />
    </Shell>
  )
}
