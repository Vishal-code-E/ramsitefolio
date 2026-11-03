'use client'

import Link from 'next/link'
import { experience } from '@/data/content'
import { Icon } from './ui/icons'
import { Kicker, PixelHeading, Reveal, StickyNote } from './ui/primitives'

const tapes = ['blue', 'pink', 'yellow', 'mint', 'grey', 'pink']
const tilts = [-1.5, 1.2, -0.8, 1.6, -1.2, 0.9]

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="relative border-t border-dashed border-ink/20 px-5 pb-24 pt-16 sm:px-10">
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center">
          <Kicker>where I&apos;ve been ✎</Kicker>
          <PixelHeading id="exp-title" text="Experience" className="pixel-shadow mt-1 text-[52px] font-bold sm:text-[88px] lg:text-[104px]" />
          <p className="mx-auto mt-3 max-w-[520px] font-hand text-[18px] text-ink/70">
            my journey through leadership roles, entrepreneurship, and technical innovation
          </p>
        </div>

        <ol className="relative mt-14">
          {/* hand-drawn spine */}
          <span aria-hidden="true" className="absolute bottom-0 left-[11px] top-0 w-0 border-l-2 border-dashed border-ink/30 md:left-1/2" />

          {experience.map((e, i) => {
            const right = i % 2 === 1
            return (
              <li key={`${e.role}-${e.org}`} className={`relative mb-12 pl-10 last:mb-0 md:mb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0 ${i > 0 ? 'md:-mt-20' : ''}`}>
                {/* pin on the spine */}
                <span aria-hidden="true" className="absolute left-0 top-1 z-10 grid h-6 w-6 place-items-center rounded-full bg-flame ring-2 ring-ink md:left-1/2 md:-translate-x-1/2">
                  <span className="h-2 w-2 rounded-full bg-paper" />
                </span>

                <div className={right ? 'md:col-start-2' : 'md:text-right'}>
                  {/* period sticker */}
                  <span
                    className="label mb-5 inline-block border-[1.5px] border-ink bg-white px-2.5 py-1 !text-[10px] shadow-[2px_2px_0_#111]"
                    style={{ transform: `rotate(${right ? -2 : 2}deg)` }}
                  >
                    {e.period}
                  </span>
                  <Reveal y={30} className="text-left">
                    <StickyNote color={e.color} rotate={tilts[i % tilts.length]} tape={tapes[i % tapes.length]} className="p-5 pt-6 sm:p-6 sm:pt-7">
                      <h3 className="text-[22px] font-bold leading-tight tracking-[-0.02em] sm:text-[26px]">{e.role}</h3>
                      <p className="label mt-1.5 !text-[9.5px] leading-relaxed text-ink/70">{e.org}</p>
                      <ul className="mt-4 space-y-2">
                        {e.points.map((p) => (
                          <li key={p} className="flex gap-2.5 text-[14px] leading-relaxed">
                            <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-ink" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      {e.href && (
                        <Link href={e.href} className="label mt-4 inline-flex min-h-[36px] items-center gap-1 border-b-[1.5px] border-ink !text-[10px]">
                          Read more {Icon.arrowUR({ className: 'h-3 w-3' })}
                          <span className="sr-only">about {e.org}</span>
                        </Link>
                      )}
                    </StickyNote>
                  </Reveal>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
