import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import DetailPage from '@/components/DetailPage'
import { ecell } from '@/data/pages'

export const metadata: Metadata = {
  title: 'E-Cell REC',
  description: 'Leading entrepreneurship initiatives at Raghu Engineering College.',
}

export default function Page() {
  return (
    <Shell home={false}>
      <DetailPage data={ecell} />
    </Shell>
  )
}
