import { caseStudy as cs } from '../data/content'
import { VlmMock } from './mockups/Mockups'
import { Kicker, PixelHeading, Reveal, StickyNote, Tape } from './ui/primitives'

export default function CaseStudy() {
  return (
    <section id="case-study" aria-labelledby="cs-title" className="relative border-t border-dashed border-ink/20 px-5 pb-24 pt-16 sm:px-10">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Kicker className="mb-2">case study ✎</Kicker>
            <p className="mb-3 flex items-center gap-2 label !text-[9.5px] text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-ink" /> {cs.date}
            </p>
            <PixelHeading id="cs-title" text={cs.title} className="pixel-shadow text-[46px] font-bold sm:text-[76px] lg:text-[84px]" />
            <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-ink/75">{cs.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {cs.chips.map((c) => (
                <li key={c} className="border-[1.5px] border-ink bg-[#F6E3A6] px-2.5 py-1 label !text-[9px]">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <Reveal>
            <dl className="grid grid-cols-2 gap-3 sm:gap-4">
              {cs.meta.map((m, i) => (
                <StickyNote key={m.k} color={m.color} rotate={[-2, 1.5, 1, -1.5][i]} className="p-3.5">
                  <dt className="label !text-[9px] text-ink/65">{m.k}</dt>
                  <dd className="mt-1 font-hand text-[16px] leading-tight sm:text-[18px]">{m.v}</dd>
                </StickyNote>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* big hero image */}
        <Reveal className="relative mt-14">
          <div className="relative bg-white p-2.5 shadow-polaroid sm:p-3">
            <Tape color="yellow" className="-left-3 -top-2.5 -rotate-[24deg]" />
            <Tape color="blue" className="-right-3 -top-2.5 rotate-[22deg]" />
            <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
              <VlmMock />
            </div>
          </div>
          <p className="mt-2 text-right font-hand text-[15px] text-ink/70">↑ four models, one image, answers side by side</p>
        </Reveal>

        {/* problem / approach */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <h3 className="label mb-3 !text-[10px] text-ink/60">The problem</h3>
            <p className="font-hand text-[21px] leading-[1.5]">{cs.problem}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="label mb-3 !text-[10px] text-ink/60">What I built</h3>
            <ol className="space-y-3">
              {cs.approach.map((a, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="grid h-7 w-7 shrink-0 place-items-center bg-ink font-pixel text-[14px] text-mustard">{i + 1}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* results */}
        <div className="mt-16">
          <p className="mb-5 font-hand text-[18px]">the results</p>
          <ul className="grid gap-4 sm:grid-cols-3">
            {cs.results.map((r, i) => (
              <Reveal as="li" key={i} delay={i * 0.08}>
                <StickyNote color={r.color} rotate={[-1.5, 1, -0.5][i]} tape={['blue', 'pink', 'yellow'][i]} className="p-5">
                  <p className="text-[46px] font-bold leading-none tracking-[-0.04em]">{r.n}</p>
                  <p className="mt-2 text-[13px] leading-snug text-ink/75">{r.l}</p>
                </StickyNote>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
