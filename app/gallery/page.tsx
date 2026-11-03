import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import GalleryWall from '@/components/GalleryWall'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Moments captured through my professional journey, team collaborations, and memorable experiences.',
}

export default function GalleryPage() {
  return (
    <Shell home={false}>
      <GalleryWall />
    </Shell>
  )
}
