import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import DetailPage from '@/components/DetailPage'
import { avataq } from '@/data/pages'

export const metadata: Metadata = {
  title: 'Avataq.ai — AI-Native Compliance Infrastructure',
  description: 'Building AI-native infrastructure for compliance teams at SMBs and NBFCs.',
}

export default function Page() {
  return (
    <Shell>
      <DetailPage data={avataq} />
    </Shell>
  )
}
