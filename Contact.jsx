import { motion, useReducedMotion } from 'framer-motion'
import { profile, recognition } from '../data/content'
import { SocialDots } from './Nav'
import { Icon } from './ui/icons'
import { Kicker, PixelHeading, Polaroid, Reveal, Tape } from './ui/primitives'
import { WorkspaceArt } from './About'

export function Recognition() {
  return (
    <section id="recognition" aria-labelledby="rec-title" className="relative border-t border-dashed border-ink/20 px-4 pb-10 pt-16 sm:px-10">
      <h2 id="rec-title" className="text-center font-hand text-[18px]">
        recognised by &amp; part of
      </h2>
      <Reveal>
        <ul className="mx-auto mt-6 flex max-w-[980px] flex-wrap items-center justify-center gap-x-3 gap-y-4">
          {recognition.map((r, i) => (
            <li key={r.label} style={{ transform: `rotate(${[-2, 1.5, -1, 2, -1.5, 1][i % 6]}deg)` }}>
              <span className={`torn inline-flex min-h-[40px] items-center gap-2 px-5 py-2 text-[14px] font-semibold ${r.color}`}>
                <span aria-hidden="true">{r.icon}</span>
                {r.label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

function Smiley() {
  const reduce = useReducedMotion()
  return (
    <motion.svg
      viewBox="0 0 120 120"
      className="mx-auto h-24 w-24 sm:h-28 sm:w-28"
      role="img"
      aria-label="Smiley sticker"
      animate={reduce ? undefined : { rotate: [-6, 6, -6] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <circle cx="60" cy="62" r="54" fill="#111" opacity=".12" />
      <circle cx="60" cy="58" r="54" fill="#F2C240" stroke="#111" strokeWidth="3" />
      <ellipse cx="42" cy="48" rx="6" ry="9" fill="#111" />
      <ellipse cx="78" cy="48" rx="6" ry="9" fill="#111" />
      <path d="M32 70 C 44 92, 76 92, 88 70" stroke="#111" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M26 30 C 30 22, 38 18, 44 18" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".7" />
    </motion.svg>
  )
}

export default function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent('Hey Sri Ram — a good problem')}`
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-10">
      <div className="relative mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[220px_1fr_220px]">
        <Reveal className="order-2 mx-auto hidden w-[190px] sm:block lg:order-1">
          <Polaroid src="/me-polaroid.jpg" alt="Sri Ram" caption="say hi, I don't bite" rotate={-7} tapes={['yellow', null]} imgClassName="aspect-square" />
        </Reveal>

        <div className="order-1 text-center lg:order-2">
          <Smiley />
          <Kicker className="mt-4">ok, so…</Kicker>
          <PixelHeading id="contact-title" text="Let's talk" className="pixel-shadow mt-1 text-[64px] font-bold sm:text-[110px]" />

          <Reveal className="mx-auto mt-8 max-w-[440px]">
            <div className="note-shadow relative -rotate-1 bg-[#F6E3A6] p-6 text-left">
              <Tape color="blue" className="-top-2.5 left-1/2 -translate-x-1/2 rotate-2" />
              <p className="label !text-[10px] leading-relaxed">
                Got a workflow that eats your week, an agent idea, or a good problem? I read every message.
              </p>
              <p className="mt-3 font-hand text-[19px] leading-snug">
                Tell me what's slow, manual or annoying — I'll tell you honestly if AI should touch it.
              </p>
              <a href={mailto} className="btn-ink mt-5">
                {Icon.mail({ className: 'h-4 w-4' })} Email me {Icon.arrowR({ className: 'h-3.5 w-3.5' })}
              </a>
            </div>
          </Reveal>

          <p className="mt-6 flex items-center justify-center gap-2 font-hand text-[15px] text-ink/75">
            <span className="h-2 w-2 rounded-full bg-leaf" /> open to new work, collabs &amp; good problems
          </p>
          <div className="mt-5 flex justify-center">
            <SocialDots size="h-11 w-11" />
          </div>
          <p className="mt-3 font-mono text-[11px] text-ink/60">
            <a className="underline-offset-4 hover:underline" href={profile.github} target="_blank" rel="noreferrer">
              github.com/Vishal-code-E
            </a>
          </p>
        </div>

        <Reveal className="order-3 mx-auto hidden w-[190px] sm:block" delay={0.1}>
          <Polaroid caption="where the agents live" rotate={6} tapes={[null, 'pink']} imgClassName="aspect-square">
            <WorkspaceArt />
          </Polaroid>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-2 border-t border-ink/10 px-5 py-6 sm:flex-row sm:px-10">
      <p className="label !text-[9px] text-ink/60">© {new Date().getFullYear()} {profile.fullName}</p>
      <p className="font-hand text-[14px] text-ink/60">made with too much chai in Vizag ☕</p>
      <a href="#home" className="label min-h-[44px] content-center !text-[9px] text-ink/70 hover:text-ink">
        Back to top ↑
      </a>
    </footer>
  )
}
