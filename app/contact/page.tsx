import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Have a project in mind or want to collaborate? Get in touch.',
}

export default function Page() {
  return (
    <Shell>
      <Contact />
    </Shell>
  )
}
