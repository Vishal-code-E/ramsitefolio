'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { profile } from '@/data/content'
import { fetchHashnodePosts, formatPublishedDate, getReadTimeText, truncateText } from '@/lib/hashnode'
import type { HashnodePost } from '@/types/hashnode'
import { Icon } from './ui/icons'
import { Kicker, PixelHeading, Reveal, Tape } from './ui/primitives'

const tilts = [-1.2, 1, -0.6, 1.4, -1, 0.8]
const tapes = ['yellow', 'blue', 'pink', 'mint', 'grey', 'yellow']
const fallbackTints = ['bg-note-blue', 'bg-note-pink', 'bg-note-yellow', 'bg-mint', 'bg-note-peach', 'bg-note-lime']

function PostCard({ post, i }: { post: HashnodePost; i: number }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="group relative block bg-white p-2.5 pb-4 shadow-polaroid transition-transform duration-300 hover:-translate-y-1 hover:!rotate-0"
      style={{ transform: `rotate(${tilts[i % tilts.length]}deg)` }}
    >
      <Tape color={tapes[i % tapes.length]} className="-top-2.5 left-1/2 -translate-x-1/2 -rotate-2" />
      <div className={`relative aspect-[16/9] overflow-hidden ${fallbackTints[i % fallbackTints.length]}`}>
        {post.coverImage?.url ? (
          <Image src={post.coverImage.url} alt="" fill sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <span aria-hidden="true" className="absolute inset-0 grid place-items-center font-pixel text-[40px] text-ink/20">✎</span>
        )}
      </div>
      <div className="px-1.5 pt-3">
        <p className="label flex items-center justify-between !text-[9px] text-ink/55">
          <span>{formatPublishedDate(post.publishedAt)}</span>
          <span>{getReadTimeText(post.readTimeInMinutes)}</span>
        </p>
        <h3 className="mt-2 line-clamp-2 text-[18px] font-bold leading-snug tracking-[-0.01em] group-hover:underline group-hover:decoration-flame group-hover:decoration-2 group-hover:underline-offset-4">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[13.5px] leading-relaxed text-ink/70">{truncateText(post.brief)}</p>
        {post.tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
            {post.tags.slice(0, 3).map((tag) => (
              <li key={tag.id} className="rounded-full border border-ink/25 px-2 py-0.5 font-mono text-[10px]">
                #{tag.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </a>
  )
}

function Skeleton() {
  return (
    <div className="animate-pulse bg-white p-2.5 pb-4 shadow-polaroid" aria-hidden="true">
      <div className="aspect-[16/9] bg-ink/10" />
      <div className="mt-4 h-2 w-1/3 bg-ink/10" />
      <div className="mt-3 h-4 w-4/5 bg-ink/15" />
      <div className="mt-2 h-3 w-full bg-ink/10" />
      <div className="mt-1.5 h-3 w-2/3 bg-ink/10" />
    </div>
  )
}

export default function Blog() {
  // bump `attempt` to (re)fetch; state only changes inside the promise callbacks
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState<{ attempt: number; posts?: HashnodePost[]; error?: string } | null>(null)

  useEffect(() => {
    let live = true
    fetchHashnodePosts({ first: 6 }).then(
      (p) => live && setResult({ attempt, posts: p }),
      (e) => live && setResult({ attempt, error: e instanceof Error ? e.message : 'Failed to load posts' }),
    )
    return () => {
      live = false
    }
  }, [attempt])

  const current = result?.attempt === attempt ? result : null
  const posts = current?.posts ?? null
  const error = current?.error ?? null
  const load = () => setAttempt((a) => a + 1)

  return (
    <section id="blog" aria-labelledby="blog-title" className="relative px-5 pb-24 pt-16 sm:px-10">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Kicker>from my notebook</Kicker>
            <PixelHeading id="blog-title" text="Latest writing" className="pixel-shadow mt-1 text-[46px] font-bold sm:text-[80px]" />
            <p className="mt-3 max-w-[480px] font-hand text-[18px] text-ink/70">notes on agentic AI, building startups, and shipping things — straight from Hashnode.</p>
          </div>
          {/* newsletter sticky note (was "Stay Updated") */}
          <Reveal className="w-full max-w-[340px] self-center lg:self-end">
            <div className="note-shadow relative rotate-[2deg] bg-note-yellow p-5 pt-6">
              <Tape color="blue" className="-top-2.5 left-1/2 -translate-x-1/2 -rotate-3" />
              <p className="label !text-[9.5px] text-ink/70">Stay updated</p>
              <p className="mt-1.5 font-hand text-[18px] leading-snug">
                Get the latest articles, tutorials, and updates delivered to your inbox.
              </p>
              <a href={profile.newsletter} target="_blank" rel="noreferrer" className="btn-ink mt-4">
                {Icon.send({ className: 'h-4 w-4' })} Subscribe on Hashnode
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          {error ? (
            <div className="mx-auto max-w-[440px] border-[1.5px] border-dashed border-ink/40 bg-white p-6 text-center">
              <p className="font-hand text-[19px]">couldn&apos;t fetch the posts right now 😅</p>
              <p className="mt-1 font-mono text-[11px] text-ink/55">{error}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                <button type="button" onClick={load} className="btn-ink">
                  Try again
                </button>
                <a href={profile.blog} target="_blank" rel="noreferrer" className="font-hand text-[16px] underline underline-offset-4">
                  read on Hashnode →
                </a>
              </div>
            </div>
          ) : (
            <ul className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" aria-busy={posts === null}>
              {posts === null
                ? Array.from({ length: 3 }, (_, i) => (
                    <li key={i}>
                      <Skeleton />
                    </li>
                  ))
                : posts.map((p, i) => (
                    <Reveal as="li" key={p.id} delay={(i % 3) * 0.08}>
                      <PostCard post={p} i={i} />
                    </Reveal>
                  ))}
            </ul>
          )}
          {posts && posts.length === 0 && <p className="text-center font-hand text-[18px] text-ink/70">no posts yet — check back soon!</p>}
        </div>

        <p className="mt-12 text-center">
          <a href={profile.blog} target="_blank" rel="noreferrer" className="label inline-flex min-h-[44px] items-center gap-1.5 border-b-[1.5px] border-ink !text-[10px]">
            View all posts {Icon.arrowUR({ className: 'h-3.5 w-3.5' })}
          </a>
        </p>
      </div>
    </section>
  )
}
