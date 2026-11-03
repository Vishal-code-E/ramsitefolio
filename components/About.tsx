'use client'

import { about, profile } from '@/data/content'
import { Icon } from './ui/icons'
import { EmojiSticker, Kicker, Polaroid, Reveal, TornTag } from './ui/primitives'

const stickerTints = ['bg-note-yellow', 'bg-note-blue', 'bg-note-pink', 'bg-mint', 'bg-note-peach', 'bg-note-lime']

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative px-5 pb-24 pt-14 sm:px-10 lg:pt-20">
      <Kicker className="mb-6 sm:mb-0 sm:ml-10">about me!</Kicker>

      <div className="relative mx-auto grid max-w-[1100px] items-start gap-10 lg:grid-cols-[220px_1fr_220px] lg:gap-8">
        {/* left polaroid */}
        <Reveal className="order-2 mx-auto w-[200px] lg:order-1 lg:mt-16" y={30}>
          <Polaroid src="/me-polaroid.jpg" alt="Sri Ram in a black suit, standing on a tree-lined campus road" caption="IIT Bombay · 2025" rotate={-5} tapes={['blue', 'yellow']} />
        </Reveal>

        {/* centre copy */}
        <div className="order-1 text-center lg:order-2">
          <Reveal>
            <h2 id="about-title" className="mx-auto mb-4 inline-block rounded-[4px] border-[1.5px] border-ink bg-white px-4 py-1 text-[22px] font-medium tracking-tight shadow-[2px_2px_0_#111]">
              what&apos;s up
            </h2>
            <p className="label mx-auto mb-7 max-w-[520px] !text-[9.5px] leading-relaxed text-ink/70">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto max-w-[620px] space-y-3 font-hand text-[19px] leading-[1.6] text-ink sm:text-[22px]">
              {about.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mx-auto mt-10 flex max-w-[640px] flex-wrap items-center justify-center gap-x-2.5 gap-y-3" aria-label="Skills">
              {about.skills.map((s, i) => (
                <li key={s.label} className="flex items-center gap-1.5" style={{ transform: `rotate(${i % 2 ? 1.5 : -1.2}deg)` }}>
                  <TornTag color={s.color}>{s.label}</TornTag>
                  <EmojiSticker emoji={s.emoji} color={(['mustard', 'leaf', 'hot', 'royal'] as const)[(i + 1) % 4]} />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mx-auto mt-10 grid max-w-[640px] gap-x-6 gap-y-2 text-left sm:grid-cols-2">
              {about.roles.map((r) => (
                <div key={r.k} className="flex gap-3 border-b border-dashed border-ink/20 py-2">
                  <dt className="label w-[74px] shrink-0 pt-0.5 !text-[9px] text-ink/60">{r.k}</dt>
                  <dd className="text-[14px] leading-snug">{r.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ink">
                {Icon.github({ className: 'h-4 w-4' })} View GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="label inline-flex min-h-[44px] items-center gap-2 border-[1.5px] border-ink bg-white px-4 !text-[11px] shadow-[3px_3px_0_#2F54D6] transition-transform hover:-translate-y-0.5"
              >
                {Icon.linkedin({ className: 'h-4 w-4' })} Connect on LinkedIn
              </a>
              <a href="#contact" className="font-hand text-[17px] underline decoration-hot decoration-2 underline-offset-4 hover:text-hot">
                or get in touch →
              </a>
            </div>
          </Reveal>
        </div>

        {/* right polaroid */}
        <Reveal className="order-3 mx-auto w-[200px] lg:-mt-2" y={30} delay={0.1}>
          <Polaroid src="/Suit2.png" alt="Sri Ram in a dark suit with a lanyard on campus" caption="suited up, on campus" rotate={4} tapes={['pink', 'mint']} imgClassName="aspect-[5/6]" />
        </Reveal>
      </div>

      {/* ── toolbox (technology stack) ── */}
      <Reveal className="mx-auto mt-20 max-w-[980px]">
        <div className="relative rounded-[4px] border-[1.5px] border-dashed border-ink/30 bg-white/60 px-5 pb-7 pt-9 sm:px-8">
          <span className="label absolute -top-3 left-6 bg-ink px-3 py-1 !text-[10px] text-white">My toolbox ⚒</span>
          <p className="mb-5 font-hand text-[17px] text-ink/70">technologies &amp; tools I use to build things</p>
          <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
            {about.toolbox.map((t, i) => (
              <li
                key={t}
                className={`note-shadow px-3 py-1.5 font-mono text-[12px] font-bold ${stickerTints[i % stickerTints.length]} transition-transform hover:-translate-y-0.5 hover:rotate-0`}
                style={{ transform: `rotate(${[-2, 1.5, -1, 2, 0.5, -1.5][i % 6]}deg)` }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
