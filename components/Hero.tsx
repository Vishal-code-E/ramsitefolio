'use client'

import { useRef, type CSSProperties, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { profile } from '@/data/content'
import { Icon } from './ui/icons'
import { Scribble, SketchArrow, Sticker } from './ui/primitives'

/* Hand-drawn orange box around the name (two slightly-off strokes) */
function HandBox() {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 120" preserveAspectRatio="none" className="pointer-events-none absolute -inset-x-[5%] -inset-y-[14%] h-[128%] w-[110%] overflow-visible">
      <path className="draw" d="M8 9 C 120 4, 280 6, 393 8 C 396 40, 395 80, 392 113 C 270 116, 130 115, 6 112 C 4 80, 5 40, 9 6" stroke="#F2642D" strokeWidth="2.4" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <path className="draw" style={{ animationDelay: '.8s' }} d="M14 5 C 140 8, 300 3, 389 12" stroke="#F2642D" strokeWidth="1.4" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity=".7" />
    </svg>
  )
}

/* Inline sticker glyphs used inside the headline (in place of emoji) */
const Target = () => (
  <span aria-hidden="true" className="mx-1 inline-grid h-[0.9em] w-[0.9em] translate-y-[0.08em] place-items-center rounded-full bg-leaf ring-2 ring-ink">
    <span className="h-[0.42em] w-[0.42em] rounded-full border-[3px] border-white bg-ink" />
  </span>
)
const Flower = () => (
  <svg aria-hidden="true" viewBox="0 0 40 40" className="float ml-1 inline-block h-[0.85em] w-[0.85em] translate-y-[0.06em]" style={{ '--r': '0deg' } as CSSProperties}>
    {[0, 60, 120, 180, 240, 300].map((r) => (
      <ellipse key={r} cx="20" cy="9" rx="6.5" ry="9" fill="#F2468C" transform={`rotate(${r} 20 20)`} />
    ))}
    <circle cx="20" cy="20" r="5.5" fill="#F2C240" stroke="#111" strokeWidth="1.5" />
  </svg>
)

function AvatarBadge({ className = '', children, label }: { className?: string; children: ReactNode; label: string }) {
  return (
    <div className={`float grid h-14 w-14 place-items-center overflow-hidden rounded-full border-[3px] border-flame bg-white shadow-polaroid ${className}`} role="img" aria-label={label}>
      {children}
    </div>
  )
}

const r = (deg: string) => ({ '--r': deg }) as CSSProperties

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])
  const nameY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40])

  const pop = (d: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, scale: 0.6 },
          animate: { opacity: 1, scale: 1 },
          transition: { type: 'spring' as const, stiffness: 380, damping: 16, delay: d },
        }

  return (
    <section id="home" ref={ref} aria-label="Intro" className="relative overflow-hidden xl:min-h-[860px] 2xl:min-h-[900px]">
      {/* ── NAME BLOCK ───────────────────────── */}
      <motion.div style={{ y: nameY }} className="relative z-10 flex flex-col items-center px-4 pt-12 sm:pt-16 xl:pt-[72px]">
        <div className="mb-7 flex flex-col items-center sm:mb-9">
          <span className="font-hand text-[15px] leading-none text-neutral-700">hello, I&apos;m</span>
          <Scribble className="mt-0.5 h-2.5 w-14" />
        </div>

        <div className="relative">
          {/* stickers around the name */}
          <motion.div {...pop(0.9)} className="absolute -left-4 -top-9 z-30 sm:-left-14 sm:-top-10">
            <Sticker className="float bg-mint ring-1 ring-ink/10" style={r('-4deg')}>Code + community</Sticker>
          </motion.div>
          <motion.div {...pop(1.0)} className="absolute -right-4 -top-9 z-30 sm:-right-16 sm:-top-10">
            <Sticker className="float float-delay bg-note-yellow ring-1 ring-ink/10" style={r('3deg')}>Agentic AI</Sticker>
          </motion.div>

          <h1 className="relative px-3 sm:px-6">
            <span className="sr-only">
              {profile.fullName} — {profile.role}
            </span>
            <HandBox />
            <motion.span
              aria-hidden="true"
              className="pixel-shadow block select-none font-pixel text-[64px] font-bold uppercase leading-[0.9] tracking-[0.01em] sm:text-[112px] lg:text-[150px] xl:text-[188px]"
              initial={reduce ? false : 'hidden'}
              animate="show"
              transition={{ staggerChildren: 0.07, delayChildren: 0.15 }}
            >
              {Array.from(profile.firstName).map((c, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0, y: -18, scaleY: 0.2 },
                    show: { opacity: 1, y: 0, scaleY: 1, transition: { type: 'spring', stiffness: 500, damping: 20 } },
                  }}
                >
                  {c === ' ' ? ' ' : c}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* bottom-left role tag + arrow */}
          <motion.div {...pop(1.15)} className="absolute -bottom-12 -left-2 z-30 flex items-start sm:-bottom-12 sm:-left-24 xl:-left-40">
            <Sticker hand className="float bg-mustard !text-[14px] text-ink" style={r('-3deg')}>
              {profile.role}
            </Sticker>
            <SketchArrow className="-ml-1 -mt-6 hidden h-9 w-11 sm:block" />
          </motion.div>
          {/* bottom-right location tag + arrow */}
          <motion.div {...pop(1.25)} className="absolute -bottom-12 -right-2 z-30 flex items-start sm:-bottom-12 sm:-right-24 xl:-right-36">
            <SketchArrow className="-mr-1 -mt-6 hidden h-9 w-11 -scale-x-100 sm:block" />
            <Sticker hand className="float float-delay bg-mint !text-[14px] text-ink" style={r('4deg')}>
              {profile.location}
            </Sticker>
          </motion.div>
        </div>
      </motion.div>

      {/* ── LEFT COLUMN: headline + CTA ─────────────── */}
      <div className="relative z-30 mx-auto mt-20 max-w-[560px] px-5 text-center xl:absolute xl:bottom-[96px] xl:left-12 xl:mt-0 xl:max-w-[360px] xl:px-0 xl:text-left 2xl:max-w-[410px]">
        <p className="label mb-4 inline-flex items-center gap-2 !text-[9.5px] text-ink/80">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-royal opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-royal" />
          </span>
          {profile.status}
        </p>
        <p className="text-[30px] font-bold leading-[1.08] tracking-[-0.025em] sm:text-[38px] xl:text-[33px] 2xl:text-[38px]">
          I turn bold ideas <Target /> into validated products.
          <Flower />
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 xl:justify-start">
          <a href="#about" className="btn-ink">
            <span className="grid h-5 w-5 place-items-center bg-royal">{Icon.arrowUR({ className: 'h-3 w-3' })}</span>
            Explore me
          </a>
          <a href="#works" className="font-hand text-[16px] underline decoration-flame decoration-2 underline-offset-4 hover:text-flame">
            or peek at the work ↓
          </a>
        </div>
      </div>

      {/* ── RIGHT COLUMN: now-building note ─────────── */}
      <div className="relative z-30 mx-auto mt-10 hidden w-[250px] xl:absolute xl:bottom-[150px] xl:right-14 xl:mt-0 xl:block">
        <div className="note-shadow relative rotate-[3deg] bg-note-yellow p-4 pt-5">
          <span aria-hidden="true" className="tape tape-blue -top-2.5 left-1/2 -translate-x-1/2 -rotate-3" />
          <p className="label !text-[9px] text-ink/70">Currently building</p>
          <p className="mt-1.5 font-hand text-[20px] leading-[1.15]">Avataq.ai — autonomous software teams for startups.</p>
          <Link href="/avataq" className="label mt-2 inline-flex min-h-[32px] items-center gap-1 !text-[9px] underline underline-offset-4">
            see it {Icon.arrowUR({ className: 'h-3 w-3' })}
          </Link>
        </div>
      </div>

      {/* floating avatar badges near the headline */}
      <AvatarBadge className="absolute left-[6%] top-[300px] z-30 hidden lg:grid xl:left-[7%] xl:top-[478px]" label="Sri Ram avatar">
        <Image src="/avatar.jpg" alt="" width={56} height={56} className="h-full w-full object-cover" />
      </AvatarBadge>
      <AvatarBadge className="float-delay absolute right-[6%] top-[300px] z-30 hidden lg:grid xl:right-[11%] xl:top-[478px]" label="Avataq badge">
        <span className="grid h-full w-full place-items-center bg-ink font-pixel text-[18px] font-bold text-lime">AQ</span>
      </AvatarBadge>

      {/* ── CUTOUT PHOTO (bottom-anchored, sits in front of the name) ── */}
      <div className="relative z-20 mx-auto mt-8 w-[72%] max-w-[420px] sm:max-w-[460px] xl:absolute xl:bottom-0 xl:left-1/2 xl:mt-0 xl:h-[640px] xl:w-auto xl:max-w-none xl:-translate-x-[40%] 2xl:h-[720px]">
        <motion.div style={{ y: photoY }} className="relative h-full">
          <motion.div
            className="relative h-full"
            initial={reduce ? false : { opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Image
              src="/hero-cutout.webp"
              alt="Sri Ram, seen from behind in a navy embroidered kurta, looking over his shoulder"
              width={1100}
              height={1457}
              priority
              sizes="(min-width: 1536px) 545px, (min-width: 1280px) 485px, 460px"
              className="block h-auto w-full select-none xl:h-full xl:w-auto"
              style={{
                filter: 'drop-shadow(0 18px 24px rgba(17,17,17,.18)) drop-shadow(0 2px 2px rgba(17,17,17,.12))',
                WebkitMaskImage: 'linear-gradient(to bottom, #000 93%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, #000 93%, transparent 100%)',
              }}
            />

            {/* scribble circle around the hand + note */}
            <svg aria-hidden="true" viewBox="0 0 120 80" className="pointer-events-none absolute bottom-[2.5%] left-[47%] w-[22%] overflow-visible">
              <path className="draw" style={{ animationDelay: '1.6s' }} d="M18 40 C 16 14, 70 6, 102 22 C 122 34, 110 66, 70 72 C 34 76, 6 62, 12 40 C 16 26, 40 14, 66 14" stroke="#F2642D" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
            <div className="pointer-events-none absolute bottom-[12%] right-[-6%] hidden items-end gap-1 sm:flex xl:right-[-22%]">
              <SketchArrow className="h-8 w-10 rotate-[200deg]" stroke="#F2642D" />
              <span className="font-hand text-[15px] leading-tight text-ink">
                hand-coded,
                <br />
                mostly
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* thin hand-drawn horizon line at the bottom edge */}
      <svg aria-hidden="true" viewBox="0 0 1200 40" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 w-full">
        <path d="M0 34 C 300 12, 900 12, 1200 34" stroke="#111" strokeOpacity=".25" strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>
    </section>
  )
}
