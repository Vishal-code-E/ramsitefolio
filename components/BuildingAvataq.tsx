'use client'

import Link from 'next/link'
import { avataqStory as s, profile } from '@/data/content'
import AvataqLogo from './AvataqLogo'
import { Icon } from './ui/icons'
import { Kicker, PixelHeading, Reveal, StickyNote, Tape } from './ui/primitives'

function Diamond() {
  return <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-ink" />
}

function NoteHeading({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h3 className="flex items-baseline gap-2.5">
      <span className="font-pixel text-[22px] font-bold leading-none text-ink/30">{n}</span>
      <span className="text-[20px] font-bold leading-tight tracking-[-0.02em]">{children}</span>
    </h3>
  )
}

export default function BuildingAvataq() {
  const emailIntro = `mailto:${profile.email}?subject=${encodeURIComponent('Intro for Avataq')}`

  return (
    <section id="avataq" aria-labelledby="avataq-title" className="relative border-t border-dashed border-ink/20 px-5 pb-24 pt-16 sm:px-10">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <Kicker>what I&apos;m building right now</Kicker>
          <PixelHeading id="avataq-title" text="Avataq" className="pixel-shadow mt-1 text-[56px] font-bold sm:text-[96px]" />
        </div>

        {/* ── brand card ── */}
        <Reveal className="mx-auto mt-10 max-w-[760px]">
          <div className="relative bg-ink px-6 py-9 text-center text-white shadow-card sm:px-12 sm:py-12" style={{ transform: 'rotate(-0.8deg)' }}>
            <Tape color="mint" className="-left-4 -top-2 -rotate-[28deg]" />
            <Tape color="yellow" className="-right-4 -top-2 rotate-[30deg]" />
            <AvataqLogo className="mx-auto h-16 w-auto sm:h-24" />
            <p className="mx-auto mt-6 max-w-[460px] font-hand text-[20px] leading-snug text-white/85 sm:text-[22px]">{s.tagline}</p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Status">
              {s.status.map((t, i) => (
                <li key={t} className={`label px-2.5 py-1 !text-[9.5px] ${i === 0 ? 'bg-lime text-ink' : 'border border-white/25 text-white/80'}`}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ── problem + what it does ── */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <StickyNote color="bg-note-yellow" rotate={-1.2} tape="blue" className="h-full p-6 pt-7">
              <NoteHeading n="01">The problem</NoteHeading>
              <p className="mt-3 font-hand text-[19px] leading-[1.5]">{s.problem}</p>
            </StickyNote>
          </Reveal>
          <Reveal delay={0.08}>
            <StickyNote color="bg-note-blue" rotate={1} tape="pink" className="h-full p-6 pt-7">
              <NoteHeading n="02">What Avataq does</NoteHeading>
              <ul className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                {s.does.map((d) => (
                  <li key={d} className="flex gap-2.5 text-[14px] leading-relaxed">
                    <Diamond />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex gap-2.5 border-t border-dashed border-ink/25 pt-4 text-[14px] font-semibold leading-relaxed">
                <span aria-hidden="true">✋</span>
                {s.guardrail}
              </p>
            </StickyNote>
          </Reveal>
        </div>

        {/* ── who / different / progress ── */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <StickyNote color="bg-mint" rotate={-0.8} tape="yellow" className="h-full p-6 pt-7">
              <NoteHeading n="03">Who it&apos;s for</NoteHeading>
              <p className="mt-3 text-[14px] leading-relaxed">{s.who.text}</p>
              <p className="label mt-4 !text-[9.5px] leading-relaxed text-ink/70">{s.who.buyer}</p>
            </StickyNote>
          </Reveal>
          <Reveal delay={0.06}>
            <StickyNote color="bg-note-pink" rotate={1.2} tape="grey" className="h-full p-6 pt-7">
              <NoteHeading n="04">Where we can be different</NoteHeading>
              <p className="mt-3 text-[14px] leading-relaxed">{s.different.intro}</p>
              <ul className="mt-3 space-y-2">
                {s.different.bets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[14px] font-medium leading-relaxed">
                    <Diamond />
                    {b}
                  </li>
                ))}
              </ul>
            </StickyNote>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-2 lg:col-span-1">
            <StickyNote color="bg-note-lime" rotate={-1} tape="blue" className="h-full p-6 pt-7">
              <NoteHeading n="05">Done so far</NoteHeading>
              <ul className="mt-3 space-y-2">
                {s.done.map((d) => (
                  <li key={d} className="flex gap-2.5 text-[14px] leading-relaxed">
                    <span aria-hidden="true" className="font-bold text-leaf">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-hand text-[17px] leading-snug text-ink/75">{s.doneNote}</p>
            </StickyNote>
          </Reveal>
        </div>

        {/* ── unknowns + next ── */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="relative h-full border-[1.5px] border-dashed border-ink/40 bg-white p-6 sm:p-7">
              <span className="label absolute -top-3 left-6 bg-ink px-3 py-1 !text-[10px] text-white">06 · Still figuring out</span>
              <ul className="mt-2 space-y-2.5">
                {s.unknowns.map((u) => (
                  <li key={u} className="flex gap-2.5 text-[14px] leading-relaxed">
                    <span aria-hidden="true" className="font-pixel text-[14px] leading-[1.6] text-flame">?</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative h-full border-[1.5px] border-ink bg-white p-6 shadow-[4px_4px_0_#111] sm:p-7">
              <span className="label absolute -top-3 left-6 bg-mustard px-3 py-1 !text-[10px] ring-1 ring-ink">07 · What&apos;s next</span>
              <p className="mt-2 font-hand text-[20px] leading-[1.45]">{s.next}</p>
            </div>
          </Reveal>
        </div>

        {/* ── how you can help ── */}
        <Reveal className="mx-auto mt-16 max-w-[720px]">
          <StickyNote color="bg-note-yellow" rotate={0.8} tape="pink" className="p-6 pt-8 text-center sm:p-8 sm:pt-9">
            <p className="label !text-[10px] text-ink/70">How you could help</p>
            <p className="mx-auto mt-3 max-w-[540px] text-[17px] font-semibold leading-snug">{s.help.ask}</p>
            <p className="mx-auto mt-2 max-w-[540px] font-hand text-[18px] leading-snug text-ink/80">{s.help.feedback}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a href={emailIntro} className="btn-ink">
                {Icon.mail({ className: 'h-4 w-4' })} Make an intro
              </a>
              <Link href="/contact" className="font-hand text-[17px] underline decoration-hot decoration-2 underline-offset-4 hover:text-hot">
                or send feedback →
              </Link>
            </div>
          </StickyNote>
        </Reveal>
      </div>
    </section>
  )
}
