import Shell from '@/components/Shell'
import Hero from '@/components/Hero'
import HomeIndex from '@/components/HomeIndex'
import { Recognition } from '@/components/Contact'

export default function Home() {
  return (
    <Shell>
      <Hero />
      <HomeIndex />
      <Recognition />
    </Shell>
  )
}
