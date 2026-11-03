'use client'

import { testimonials } from '@/data/content'
import { Kicker, PixelHeading, Reveal, StickyNote } from './ui/primitives'

const tilts = [-2, 1.5, -1, 2, -1.5]
const tapes = ['blue', 'pink', 'yellow', 'mint', 'grey']
const avatarBg = ['bg-royal text-white', 'bg-hot text-white', 'bg-leaf text-white', 'bg-mustard text-ink', 'bg-ink text-white']

const initials = (n: string) =>
  n
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="t-title" className="relative border-t border-dashed border-ink/20 px-5 pb-24 pt-16 sm:px-10">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <Kicker>kind words ♡</Kicker>
          <PixelHeading id="t-title" text="What people say" className="pixel-shadow mt-1 text-[44px] font-bold sm:text-[76px]" />
          <p className="mt-3 font-hand text-[17px] text-ink/70">testimonials from clients and collaborators I&apos;ve worked with</p>
        </div>

        <ul className="mt-12 grid items-start gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={(i % 3) * 0.08} className={i >= 3 ? `lg:relative lg:left-1/2 ${i === 3 ? "lg:col-start-1" : ""}` : ""}>
              <StickyNote color={t.color} rotate={tilts[i % tilts.length]} tape={tapes[i % tapes.length]} className="p-6 pt-7">
                <figure>
                  <span aria-hidden="true" className="block font-scrawl text-[64px] font-medium leading-[0.5] text-ink/30">&ldquo;</span>
                  <blockquote className="mt-1 font-hand text-[19px] leading-[1.45]">{t.quote}</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span aria-hidden="true" className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-mono text-[12px] font-bold ring-2 ring-ink ${avatarBg[i % avatarBg.length]}`}>
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block text-[14px] font-bold leading-tight">{t.name}</span>
                      <span className="label block !text-[9px] text-ink/60">{t.designation}</span>
                    </span>
                  </figcaption>
                </figure>
              </StickyNote>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
