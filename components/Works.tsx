'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { projects, type Project } from '@/data/content'
import { mockups } from './mockups/Mockups'
import { Icon } from './ui/icons'
import { Kicker, PixelHeading, Tape } from './ui/primitives'

const themes = [
  { body: 'bg-ink text-white', tab: 'bg-royal text-white', sub: 'text-white/70', chip: 'border-white/25', dot: 'bg-lime' },
  { body: 'bg-mustard text-ink', tab: 'bg-ink text-white', sub: 'text-ink/75', chip: 'border-ink/30', dot: 'bg-ink' },
]
const tabOffsets = ['0%', '16%', '38%', '58%', '74%']

function ProjectLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return href.startsWith('http') ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const reduce = useReducedMotion()
  const t = themes[i % 2]
  const Mock = mockups[p.mock]
  const num = String(i + 1).padStart(2, '0')

  return (
    <motion.article
      aria-labelledby={`proj-${p.id}`}
      className="sticky"
      style={{ top: `calc(72px + ${i * 26}px)` }}
      initial={reduce ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <motion.div whileHover={reduce ? undefined : { y: -10 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="group relative">
        {/* folder tab */}
        <div className="relative h-[34px]">
          <div
            className={`label absolute bottom-0 flex h-[34px] items-center gap-2 pl-4 pr-9 !text-[10px] ${i === 0 ? 'folder-tab' : 'folder-tab-c pl-7'} ${t.tab} max-sm:!left-0`}
            style={{ left: tabOffsets[i % tabOffsets.length] }}
          >
            <span aria-hidden="true">✦</span> Project {num}
          </div>
        </div>

        <div className={`chamfer relative grid min-h-[380px] gap-6 p-6 shadow-card sm:p-9 md:grid-cols-[1fr_1.05fr] md:p-10 ${t.body}`}>
          <div className="flex flex-col justify-center">
            <p className={`label mb-4 flex items-center gap-2 !text-[9.5px] ${t.sub}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} /> {p.label}
            </p>
            <h3 id={`proj-${p.id}`} className="text-[36px] font-bold leading-none tracking-[-0.03em] sm:text-[50px]">
              {p.title}
            </h3>
            <p className={`mt-3 max-w-[440px] text-[15px] leading-relaxed ${t.sub}`}>{p.description}</p>
            <ul className="mt-5 grid gap-x-4 gap-y-1.5 sm:grid-cols-2" aria-label="Key features">
              {p.details.map((d) => (
                <li key={d} className={`flex gap-2 text-[12.5px] leading-snug ${t.sub}`}>
                  <span aria-hidden="true" className="mt-[5px] h-1.5 w-1.5 shrink-0 rotate-45 bg-current" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <ProjectLink href={p.href} className="label inline-flex min-h-[44px] w-fit items-center gap-1.5 border-b-[1.5px] border-current !text-[10px]">
                View project {Icon.arrowUR({ className: 'h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' })}
                <span className="sr-only">: {p.title}</span>
              </ProjectLink>
              {p.source && p.source !== p.href && (
                <a href={p.source} target="_blank" rel="noreferrer" className={`label inline-flex min-h-[44px] items-center gap-1.5 !text-[10px] ${t.sub} hover:opacity-100`}>
                  {Icon.github({ className: 'h-3.5 w-3.5' })} Source
                  <span className="sr-only">code for {p.title}</span>
                </a>
              )}
            </div>
          </div>

          {/* taped mockup */}
          <div className="relative self-center">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-[480px] rotate-[1.5deg] bg-white p-2 shadow-polaroid transition-transform duration-300 group-hover:rotate-0">
              <Tape color="grey" className="-left-4 -top-2 -rotate-[28deg]" />
              <Tape color="grey" className="-right-4 -top-2 rotate-[30deg]" />
              {p.image ? (
                <div className="relative h-full w-full">
                  <Image src={p.image} alt={`${p.title} screenshot`} fill sizes="480px" className="object-cover" />
                </div>
              ) : (
                <Mock />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

export default function Works() {
  return (
    <section id="works" aria-labelledby="works-title" className="relative border-t border-dashed border-ink/20 px-4 pb-24 pt-14 sm:px-10">
      <div className="mx-auto max-w-[1120px]">
        <Kicker>explore my work</Kicker>
        <PixelHeading as="h2" id="works-title" text="Featured projects" className="pixel-shadow mb-3 mt-1 text-[46px] font-bold sm:text-[80px] lg:text-[104px]" />
        <p className="mb-12 max-w-[520px] font-hand text-[18px] text-ink/70">my latest work in AI, full-stack development, and entrepreneurship</p>
        <div className="space-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
