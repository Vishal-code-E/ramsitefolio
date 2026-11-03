'use client'

import Link from 'next/link'
import { experience, projects, testimonials, gallery } from '@/data/content'
import { Icon, type IconName } from './ui/icons'
import { Kicker, PixelHeading, Reveal, Tape } from './ui/primitives'

const pages: { href: string; n: string; title: string; blurb: string; meta: string; color: string; icon: IconName; tape: string }[] = [
  { href: '/about', n: '01', title: 'About', blurb: "Who I am, what I care about, and the tools I build with.", meta: `${testimonials.length} kind words`, color: 'bg-note-yellow', icon: 'user', tape: 'blue' },
  { href: '/experience', n: '02', title: 'Experience', blurb: 'Leadership roles, startups and the E-Cell journey.', meta: `${experience.length} roles`, color: 'bg-note-blue', icon: 'file', tape: 'pink' },
  { href: '/projects', n: '03', title: 'Projects', blurb: 'Avataq.ai, PromptCraft, EventHub and more.', meta: `${projects.length} projects`, color: 'bg-note-pink', icon: 'grid', tape: 'yellow' },
  { href: '/blog', n: '04', title: 'Blog', blurb: 'Notes on agentic AI and building startups, from Hashnode.', meta: 'latest posts', color: 'bg-mint', icon: 'pen', tape: 'grey' },
  { href: '/gallery', n: '05', title: 'Gallery', blurb: 'Moments from events, teams and side quests.', meta: `${gallery.length} photos`, color: 'bg-note-peach', icon: 'diamond', tape: 'mint' },
  { href: '/contact', n: '06', title: 'Contact', blurb: 'Got a project or an idea? Drop me a note.', meta: 'say hi', color: 'bg-note-lime', icon: 'heart', tape: 'blue' },
]

export default function HomeIndex() {
  return (
    <section aria-labelledby="index-title" className="relative border-t border-dashed border-ink/20 px-5 pb-20 pt-16 sm:px-10">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <Kicker>flip through the notebook</Kicker>
          <PixelHeading id="index-title" text="Contents" className="pixel-shadow mt-1 text-[52px] font-bold sm:text-[88px]" />
        </div>
        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p, i) => (
            <Reveal as="li" key={p.href} delay={(i % 3) * 0.06}>
              <Link
                href={p.href}
                className={`note-shadow group relative block h-full ${p.color} p-6 pt-7 transition-transform duration-300 hover:-translate-y-1 hover:!rotate-0`}
                style={{ transform: `rotate(${[-1.2, 1, -0.6, 1.3, -1, 0.7][i]}deg)` }}
              >
                <Tape color={p.tape} className="-top-2.5 left-1/2 -translate-x-1/2 -rotate-2" />
                <div className="flex items-start justify-between">
                  <span className="font-pixel text-[40px] font-bold leading-none text-ink/25">{p.n}</span>
                  <span className="grid h-10 w-10 place-items-center bg-ink text-white transition-transform group-hover:rotate-12">
                    {Icon[p.icon]({ className: 'h-4 w-4' })}
                  </span>
                </div>
                <h3 className="mt-4 text-[26px] font-bold tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-1.5 font-hand text-[18px] leading-snug text-ink/80">{p.blurb}</p>
                <p className="label mt-5 flex items-center justify-between !text-[9.5px] text-ink/60">
                  <span>{p.meta}</span>
                  <span className="inline-flex items-center gap-1 text-ink">
                    open {Icon.arrowUR({ className: 'h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' })}
                  </span>
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
