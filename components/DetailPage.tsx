'use client'

import Link from 'next/link'
import type { DetailPage as Data } from '@/data/pages'
import { Icon } from './ui/icons'
import { Kicker, PixelHeading, Polaroid, Reveal, StickyNote, Tape } from './ui/primitives'

const notes = ['bg-note-yellow', 'bg-note-blue', 'bg-note-pink', 'bg-mint', 'bg-note-peach', 'bg-note-lime']
const tapes = ['blue', 'pink', 'yellow', 'mint', 'grey', 'pink']
const tilt = (i: number) => [-1.5, 1.2, -0.8, 1.6, -1.2, 0.9][i % 6]

function SmartLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
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

export default function DetailPage({ data }: { data: Data }) {
  return (
    <article className="px-5 pb-20 pt-8 sm:px-10">
      <div className="mx-auto max-w-[1080px]">
        <Link href="/#works" className="label inline-flex min-h-[44px] items-center gap-1.5 !text-[10px] text-ink/70 hover:text-ink">
          {Icon.arrowL({ className: 'h-3.5 w-3.5' })} Back to portfolio
        </Link>

        {/* ── header ── */}
        <header className="mt-6 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-full border-[3px] border-flame bg-ink font-pixel text-[18px] font-bold text-lime shadow-polaroid">
                {data.badge}
              </span>
              {data.chip && (
                <span className="label border-[1.5px] border-ink bg-note-yellow px-2.5 py-1 !text-[9.5px]" style={{ transform: 'rotate(-2deg)' }}>
                  {data.chip}
                </span>
              )}
            </div>
            <Kicker>{data.kicker}</Kicker>
            <PixelHeading as="h1" text={data.title} className="pixel-shadow mt-1 text-[52px] font-bold sm:text-[92px] lg:text-[112px]" />
            <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-ink/75">{data.subtitle}</p>
          </div>
          {data.photo && (
            <Reveal className="mx-auto w-[220px]">
              <Polaroid src={data.photo.src} alt={data.photo.alt} caption={data.photo.caption} rotate={4} tapes={['blue', 'pink']} sizes="220px" priority />
            </Reveal>
          )}
        </header>

        {/* ── intro + quote ── */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <h2 className="label mb-3 !text-[10px] text-ink/60">{data.intro.heading}</h2>
            <div className="space-y-4 font-hand text-[20px] leading-[1.55]">
              {data.intro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 lg:pt-6">
            {data.quote && (
              <StickyNote color="bg-note-yellow" rotate={2} tape="blue" className="p-6 pt-7">
                <p className="label !text-[9.5px] text-ink/70">{data.quote.label}</p>
                <p className="mt-2 font-hand text-[19px] leading-snug">&ldquo;{data.quote.text}&rdquo;</p>
              </StickyNote>
            )}
            {data.sidebar?.map((s, i) => (
              <StickyNote key={s.label} color={notes[(i + 1) % notes.length]} rotate={tilt(i + 1)} tape={tapes[i + 1]} className="p-5 pt-6">
                <p className="label !text-[9.5px] text-ink/70">{s.label}</p>
                <p className="mt-2 text-[15px] leading-relaxed">{s.text}</p>
              </StickyNote>
            ))}
          </Reveal>
        </div>

        {/* ── card sections ── */}
        {data.sections.map((sec) => (
          <section key={sec.title} className="mt-20" aria-label={sec.title}>
            {sec.kicker && <Kicker>{sec.kicker}</Kicker>}
            <h2 className="mt-1 font-pixel text-[36px] font-bold uppercase leading-[0.9] sm:text-[52px]">{sec.title}</h2>
            {sec.layout === 'tools' ? (
              <ul className="mt-8 flex flex-wrap gap-4">
                {sec.cards.map((c, i) => (
                  <Reveal as="li" key={c.title} delay={i * 0.06} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] lg:min-w-[220px] lg:flex-1">
                    <div className="relative h-full border-[1.5px] border-ink bg-white p-5 shadow-[4px_4px_0_#111]" style={{ transform: `rotate(${tilt(i) * 0.6}deg)` }}>
                      <span aria-hidden="true" className="grid h-11 w-11 place-items-center bg-mustard text-[22px] ring-1 ring-ink">
                        {c.emoji}
                      </span>
                      <h3 className="mt-3 text-[18px] font-bold">{c.title}</h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-ink/70">{c.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            ) : (
              <ul className="mt-10 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
                {sec.cards.map((c, i) => (
                  <Reveal as="li" key={c.title} delay={(i % 3) * 0.06}>
                    <StickyNote color={notes[i % notes.length]} rotate={tilt(i)} tape={tapes[i % tapes.length]} className="h-full p-5 pt-6">
                      <h3 className="flex items-start gap-2 text-[18px] font-bold leading-snug">
                        {c.emoji && <span aria-hidden="true">{c.emoji}</span>}
                        {c.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-ink/75">{c.text}</p>
                      {c.tags && (
                        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                          {c.tags.map((t) => (
                            <li key={t} className="rounded-full border border-ink/30 bg-white/50 px-2 py-0.5 font-mono text-[10px]">
                              {t}
                            </li>
                          ))}
                        </ul>
                      )}
                    </StickyNote>
                  </Reveal>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* ── timeline ── */}
        {data.timeline && (
          <section className="mt-20" aria-label={data.timeline.title}>
            <Kicker>{data.timeline.kicker}</Kicker>
            <h2 className="mt-1 font-pixel text-[36px] font-bold uppercase leading-[0.9] sm:text-[52px]">{data.timeline.title}</h2>
            <ol className="relative mt-10 border-l-2 border-dashed border-ink/30 pl-8 sm:ml-4">
              {data.timeline.items.map((t) => (
                <Reveal as="li" key={t.year + t.title} className="relative mb-10 last:mb-0">
                  <span aria-hidden="true" className="absolute -left-[45px] top-1 grid h-6 w-6 place-items-center rounded-full bg-flame ring-2 ring-ink">
                    <span className="h-2 w-2 rounded-full bg-paper" />
                  </span>
                  <span className="label inline-block border-[1.5px] border-ink bg-white px-2.5 py-1 !text-[10px] shadow-[2px_2px_0_#111]">{t.year}</span>
                  <h3 className="mt-3 text-[22px] font-bold">{t.title}</h3>
                  <p className="mt-2 max-w-[680px] font-hand text-[19px] leading-[1.5]">{t.text}</p>
                </Reveal>
              ))}
            </ol>
          </section>
        )}

        {/* ── CTA ── */}
        <Reveal className="mx-auto mt-24 max-w-[640px]">
          <div className="relative bg-ink p-8 text-center text-white shadow-card sm:p-10">
            <Tape color="yellow" className="-left-4 -top-2 -rotate-[28deg]" />
            <Tape color="pink" className="-right-4 -top-2 rotate-[30deg]" />
            <h2 className="font-pixel text-[32px] font-bold uppercase leading-[0.95] sm:text-[44px]">{data.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-white/75">{data.cta.text}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              {data.cta.links.map((l) => (
                <SmartLink
                  key={l.label}
                  href={l.href}
                  className={
                    l.primary
                      ? 'label inline-flex min-h-[44px] items-center gap-2 bg-mustard px-4 !text-[11px] text-ink shadow-[3px_3px_0_#fff] transition-transform hover:-translate-y-0.5'
                      : 'label inline-flex min-h-[44px] items-center gap-2 border-b-[1.5px] border-white !text-[11px]'
                  }
                >
                  {l.label} {Icon.arrowUR({ className: 'h-3.5 w-3.5' })}
                </SmartLink>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
