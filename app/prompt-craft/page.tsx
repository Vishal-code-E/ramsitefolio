import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import DetailPage from '@/components/DetailPage'
import { promptCraft } from '@/data/pages'

export const metadata: Metadata = {
  title: 'Prompt Craft',
  description: 'Cutting-edge generative AI solutions platform for modern businesses.',
}

export default function Page() {
  return (
    <Shell home={false}>
      <DetailPage data={promptCraft} />
    </Shell>
  )
}
