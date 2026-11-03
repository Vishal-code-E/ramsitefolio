'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { playground, type PlaygroundItem } from '@/data/content'
import { Icon } from './ui/icons'
import { Kicker, PixelHeading, Tape } from './ui/primitives'

function Item({ item }: { item: PlaygroundItem }) {
  switch (item.kind) {
    case 'photo':
      return (
        <figure className="relative bg-white p-2 pb-1 shadow-polaroid" style={{ width: item.w }}>
          <Tape color={item.tape ?? 'blue'} className="-top-2 left-1/2 -translate-x-1/2 -rotate-3" />
          <div className="relative aspect-square w-full overflow-hidden">
            <Image src={item.src} alt={item.alt} fill sizes={`${item.w}px`} draggable={false} className="object-cover" />
          </div>
          <figcaption className="py-1 text-center font-hand text-[13px] text-neutral-600">{item.caption}</figcaption>
        </figure>
      )
    case 'note':
      return <div className={`note-shadow ${item.color} px-4 py-2.5 font-hand text-[19px]`}>{item.text}</div>
    case 'sticker':
      return (
        <div className={`torn-all grid h-16 w-16 place-items-center ${item.bg} text-[28px]`} aria-hidden="true">
          {item.emoji}
        </div>
      )
    case 'terminal':
      return (
        <div className="relative overflow-hidden rounded-lg bg-ink p-3 font-mono text-[11px] leading-relaxed text-white shadow-card" style={{ width: item.w }}>
          <Tape color="yellow" className="-top-2 right-6 rotate-6" />
          <p className="text-white/50">$ avataq run --team startup-mvp</p>
          <p className="text-lime">✓ spec drafted by planner</p>
          <p className="text-mustard">✓ 14 PRs opened by coder</p>
          <p className="text-white/80">✓ 1 human review needed :)</p>
          <p className="mt-1 text-white/40">
            done in 3.1s<span className="animate-pulse">▍</span>
          </p>
        </div>
      )
    case 'badge':
      return (
        <div className="relative border-[2px] border-ink bg-white px-4 py-3 shadow-[4px_4px_0_#F2642D]">
          <p className="text-[24px] font-extrabold leading-none tracking-[-0.03em]">{item.text}</p>
          <p className="label mt-1 !text-[9px] text-ink/60">{item.sub}</p>
        </div>
      )
    case 'brand':
      return (
        <div className="relative bg-ink p-4 shadow-card" style={{ width: item.w }}>
          <Tape color="mint" className="-top-2 left-1/2 -translate-x-1/2 rotate-2" />
          <p className="font-pixel text-[30px] font-bold leading-none text-lime">AVATAQ</p>
          <p className="mt-2 text-[11px] leading-snug text-white/75">Autonomous software teams for startups.</p>
          <div className="mt-3 flex gap-1">
            {['#B4F542', '#111', '#fff', '#2a2a2a'].map((c) => (
              <span key={c} className="h-4 flex-1 ring-1 ring-white/20" style={{ background: c }} />
            ))}
          </div>
        </div>
      )
    default:
      return null
  }
}

export default function Playground() {
  const board = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [z, setZ] = useState(() => playground.map((_, i) => i))
  const bump = (i: number) => setZ((prev) => prev.map((v, j) => (j === i ? Math.max(...prev) + 1 : v)))

  return (
    <section id="playground" aria-labelledby="pg-title" className="relative border-t border-dashed border-ink/20 px-4 pb-24 pt-16 sm:px-10">
      <div className="mx-auto max-w-[1160px]">
        <div className="text-center">
          <Kicker>moments</Kicker>
          <PixelHeading id="pg-title" text="Just for fun" className="pixel-shadow mt-1 text-[52px] font-bold sm:text-[88px]" />
          <p className="mt-3 font-hand text-[17px] text-ink/70">moments from my journey, team collabs &amp; side quests — go on, drag things around ✋</p>
        </div>

        <div ref={board} className="relative mt-10 h-[680px] overflow-hidden rounded-[6px] border-[1.5px] border-dashed border-ink/25 sm:h-[620px]">
          {playground.map((item, i) => (
            <motion.div
              key={i}
              drag={!reduce}
              dragConstraints={board}
              dragElastic={0.12}
              dragMomentum={false}
              onPointerDown={() => bump(i)}
              whileHover={reduce ? undefined : { scale: 1.04, rotate: item.rot * 0.5 }}
              whileDrag={{ scale: 1.08, rotate: 0, cursor: 'grabbing' }}
              initial={reduce ? false : { opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: reduce ? 0 : i * 0.04 }}
              className="absolute cursor-grab touch-none select-none"
              style={{ left: `${item.x}%`, top: `${item.y}%`, rotate: item.rot, zIndex: z[i] }}
            >
              <div className="origin-top-left max-sm:scale-[.68]">
                <Item item={item} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/gallery" className="btn-ink">
            {Icon.diamond({ className: 'h-3.5 w-3.5' })} View the full gallery {Icon.arrowR({ className: 'h-3.5 w-3.5' })}
          </Link>
        </div>
      </div>
    </section>
  )
}
