import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import GalleryWall from '@/components/GalleryWall'
import Playground from '@/components/Playground'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Moments captured through my professional journey, team collaborations, and memorable experiences.',
}

export default function Page() {
  return (
    <Shell>
      <GalleryWall />
      <Playground galleryLink={false} />
    </Shell>
  )
}
