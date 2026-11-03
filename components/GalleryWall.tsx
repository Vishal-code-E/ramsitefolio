'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { gallery } from '@/data/content'
import { Icon } from './ui/icons'
import { Kicker, PixelHeading, Reveal, Tape } from './ui/primitives'

const tapes = ['blue', 'pink', 'yellow', 'mint', 'grey']
const tilt = (i: number) => [-3, 2.2, -1.4, 2.8, -2.2, 1.2][i % 6]

export default function GalleryWall() {
  const [open, setOpen] = useState<number | null>(null)
  const close = useCallback(() => setOpen(null), [])
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + gallery.length) % gallery.length)), [])

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close, step])

  return (
    <div className="px-5 pb-20 pt-8 sm:px-10">
      <div className="mx-auto max-w-[1160px]">
        <Link href="/#playground" className="label inline-flex min-h-[44px] items-center gap-1.5 !text-[10px] text-ink/70 hover:text-ink">
          {Icon.arrowL({ className: 'h-3.5 w-3.5' })} Back to portfolio
        </Link>
        <div className="mt-6 text-center">
          <Kicker>moments ✦</Kicker>
          <PixelHeading as="h1" text="Gallery" className="pixel-shadow mt-1 text-[64px] font-bold sm:text-[120px]" />
          <p className="mx-auto mt-3 max-w-[520px] font-hand text-[18px] text-ink/70">
            moments captured through my professional journey, team collaborations, and memorable experiences — tap any photo to open it
          </p>
        </div>

        <ul className="mt-14 columns-2 gap-5 sm:columns-3 lg:columns-4">
          {gallery.map((img, i) => (
            <Reveal as="li" key={img.src} delay={(i % 4) * 0.05} className="mb-7 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full bg-white p-2 pb-6 text-left shadow-polaroid transition-transform duration-300 hover:z-10 hover:-translate-y-1 hover:!rotate-0 hover:scale-[1.03]"
                style={{ transform: `rotate(${tilt(i)}deg)` }}
                aria-label={`Open photo: ${img.alt}`}
              >
                <Tape color={tapes[i % tapes.length]} className="-top-2 left-1/2 -translate-x-1/2 -rotate-3" />
                <Image src={img.src} alt={img.alt} width={600} height={600} sizes="(min-width: 1024px) 270px, (min-width: 640px) 33vw, 50vw" className="h-auto w-full" />
                <span className="absolute inset-x-2 bottom-1 truncate text-center font-hand text-[13px] text-neutral-600">{img.alt}</span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={gallery[open].alt}
            className="fixed inset-0 z-[90] grid place-items-center bg-ink/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.figure
              key={open}
              className="relative max-h-[88vh] w-full max-w-[900px] bg-white p-3 pb-10 shadow-card"
              initial={{ scale: 0.92, rotate: -2, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Tape color="yellow" className="-left-4 -top-2 -rotate-[28deg]" />
              <Tape color="pink" className="-right-4 -top-2 rotate-[30deg]" />
              <div className="relative h-[70vh] w-full bg-neutral-100">
                <Image src={gallery[open].src} alt={gallery[open].alt} fill sizes="900px" className="object-contain" />
              </div>
              <figcaption className="absolute inset-x-3 bottom-2 text-center font-hand text-[17px] text-neutral-700">
                {gallery[open].alt} · {open + 1}/{gallery.length}
              </figcaption>
              <button type="button" onClick={close} aria-label="Close" className="absolute -right-3 -top-3 grid h-11 w-11 place-items-center rounded-full bg-mustard ring-2 ring-ink">
                {Icon.close({ className: 'h-5 w-5' })}
              </button>
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-0 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white ring-2 ring-ink">
                {Icon.arrowL({ className: 'h-5 w-5' })}
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-0 top-1/2 grid h-11 w-11 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-white ring-2 ring-ink">
                {Icon.arrowR({ className: 'h-5 w-5' })}
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
