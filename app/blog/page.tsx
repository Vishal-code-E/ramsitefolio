import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import Blog from '@/components/Blog'
import { fetchHashnodePosts } from '@/lib/hashnode'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes on agentic AI, building startups and shipping things.',
}

// re-fetch posts from Hashnode at most once an hour
export const revalidate = 3600

export default async function Page() {
  // fetched on the server, so the browser never has to reach Hashnode's API itself;
  // if this fails, the section falls back to fetching in the browser
  const posts = await fetchHashnodePosts({ first: 6 }).catch(() => null)
  return (
    <Shell>
      <Blog initialPosts={posts} />
    </Shell>
  )
}
