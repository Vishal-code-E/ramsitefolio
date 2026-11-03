import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import DetailPage from '@/components/DetailPage'
import { github } from '@/data/pages'

export const metadata: Metadata = {
  title: 'GitHub Portfolio',
  description: 'Open source contributions and code repositories by Sri Ram.',
}

export default function Page() {
  return (
    <Shell>
      <DetailPage data={github} />
    </Shell>
  )
}
