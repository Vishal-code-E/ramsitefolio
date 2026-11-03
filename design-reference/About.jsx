import { about } from '../data/content'
import { EmojiSticker, Kicker, Polaroid, Reveal, TornTag } from './ui/primitives'

export function WorkspaceArt() {
  // stand-in for a workspace photo — swap for <img src="/workspace.jpg" />
  return (
    <div className="relative h-full w-full bg-[#1b1d22] p-3" role="img" aria-label="Illustration of a desk setup with code on screen">
      <div className="mb-2 flex gap-1.5">
        {['#F2468C', '#F2C240', '#2F54D6'].map((c) => (
          <span key={c} className="h-7 w-5 rounded-sm" style={{ background: c, opacity: 0.85 }} />
        ))}
      </div>
      <div className="rounded-md bg-[#0d0f12] p-2 ring-1 ring-white/10">
        {[
          ['#B4F542', '62%'],
          ['#ffffff55', '80%'],
          ['#F2C240', '45%'],
          ['#ffffff55', '70%'],
          ['#F2468C', '38%'],
          ['#ffffff55', '55%'],
        ].map(([c, w], i) => (
          <div key={i} className="mb-1 h-1 rounded-full" style={{ width: w, background: c, marginLeft: i % 3 === 1 ? 8 : 0 }} />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[26%] bg-[#6b4a32]" />
      <div className="absolute bottom-[18%] right-4 h-6 w-5 rounded-b-md bg-white/90" />
    </div>
  )
}

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
            <h2 id="about-title" className="mx-auto mb-7 inline-block rounded-[4px] border-[1.5px] border-ink bg-white px-4 py-1 text-[22px] font-medium tracking-tight shadow-[2px_2px_0_#111]">
              what&apos;s up
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto max-w-[620px] space-y-3 font-hand text-[19px] leading-[1.6] text-ink sm:text-[22px]">
              {about.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mx-auto mt-10 flex max-w-[600px] flex-wrap items-center justify-center gap-x-2.5 gap-y-3" aria-label="Skills">
              {about.skills.map((s, i) => (
                <li key={s.label} className="flex items-center gap-1.5" style={{ transform: `rotate(${i % 2 ? 1.5 : -1.2}deg)` }}>
                  <TornTag color={s.color}>{s.label}</TornTag>
                  <EmojiSticker emoji={s.emoji} color={['mustard', 'leaf', 'hot', 'royal'][(i + 1) % 4]} />
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
        </div>

        {/* right polaroid */}
        <Reveal className="order-3 mx-auto w-[200px] lg:-mt-2" y={30} delay={0.1}>
          <Polaroid caption="my workspace" rotate={4} tapes={['pink', 'mint']} imgClassName="aspect-[5/6]">
            <WorkspaceArt />
          </Polaroid>
        </Reveal>
      </div>
    </section>
  )
}
