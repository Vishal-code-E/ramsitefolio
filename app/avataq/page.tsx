import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import DetailPage from '@/components/DetailPage'
import { avataq } from '@/data/pages'

export const metadata: Metadata = {
  title: 'Avataq.ai — Autonomous Software Teams',
  description: 'Revolutionizing startup development with AI-powered autonomous teams.',
}

export default function Page() {
  return (
    <Shell home={false}>
      <DetailPage data={avataq} />
    </Shell>
  )
}
