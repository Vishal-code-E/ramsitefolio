import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/* ───────── Washi tape ───────── */
export function Tape({ color = 'blue', className = '', style }) {
  return <span aria-hidden="true" className={`tape tape-${color} ${className}`} style={style} />
}

/* ───────── Polaroid frame ─────────
   Tilts toward straight on hover; tape on top corners. */
export function Polaroid({
  src,
  alt = '',
  caption,
  rotate = -4,
  tapes = ['blue', 'yellow'],
  className = '',
  imgClassName = 'aspect-[4/5]',
  children,
}) {
  const reduce = useReducedMotion()
  return (
    <motion.figure
      className={`relative bg-white p-2.5 pb-1 shadow-polaroid ${className}`}
      style={{ rotate }}
      whileHover={reduce ? undefined : { rotate: rotate * -0.4, scale: 1.035, y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      {tapes[0] && <Tape color={tapes[0]} className="-left-5 -top-2 -rotate-[32deg]" />}
      {tapes[1] && <Tape color={tapes[1]} className="-right-5 -top-2 rotate-[34deg]" />}
      <div className={`overflow-hidden bg-neutral-200 ${imgClassName}`}>
        {src ? (
          <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
        ) : (
          children
        )}
      </div>
      {caption && (
        <figcaption className="py-1.5 text-center font-hand text-[13px] leading-none text-neutral-600">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  )
}

/* ───────── Torn-edge sticker tag (skills etc.) ───────── */
const tagColors = {
  mustard: 'bg-mustard text-ink',
  leaf: 'bg-leaf text-white',
  hot: 'bg-hot text-white',
  royal: 'bg-royal text-white',
  mint: 'bg-mint text-ink',
}
export function TornTag({ color = 'mustard', children, className = '' }) {
  return (
    <span className={`torn inline-flex items-center px-4 py-2 text-[15px] font-semibold sm:text-[17px] ${tagColors[color]} ${className}`}>
      {children}
    </span>
  )
}

/* small square emoji sticker paired with a tag */
export function EmojiSticker({ emoji, color = 'mustard', className = '', label }) {
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`torn inline-grid h-[40px] w-[40px] place-items-center text-[18px] ${tagColors[color]} ${className}`}
    >
      {emoji}
    </span>
  )
}

/* ───────── Little label sticker (mono or hand) ───────── */
export function Sticker({ children, className = '', hand = false, style }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-[3px] px-2.5 py-1 shadow-[0_2px_0_rgba(0,0,0,.08)] ${
        hand ? 'font-hand text-[13px]' : 'label !text-[9.5px] !tracking-[0.16em]'
      } ${className}`}
      style={style}
    >
      {children}
    </span>
  )
}

/* ───────── Sticky note ───────── */
export function StickyNote({ color = 'bg-[#F6E3A6]', rotate = 0, className = '', children, tape }) {
  return (
    <div className={`note-shadow relative ${color} ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      {tape && <Tape color={tape} className="left-1/2 -top-2.5 -translate-x-1/2 -rotate-2" />}
      {children}
    </div>
  )
}

/* ───────── Hand-drawn arrows ───────── */
export function SketchArrow({ className = '', d = 'M4 40 C 18 30, 30 18, 52 6', head = 'M40 4 L53 5 L48 17', stroke = '#111' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 48" fill="none" className={className}>
      <path d={d} stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      <path d={head} stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* Little scribble underline, used under "my name is" */
export function Scribble({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 80 12" fill="none" className={className}>
      <path d="M3 4 C 22 1, 50 1, 77 4" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 9 C 28 6, 52 6, 70 9" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

/* ───────── Scroll reveal ───────── */
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Comp>
  )
}

/* ───────── Pixel heading with per-letter "pixel" reveal ───────── */
export function PixelHeading({ text, className = '', as = 'h2', delay = 0, id }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  const words = text.split(' ')
  const letter = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 420, damping: 22 } },
      }
  return (
    <Tag
      id={id}
      className={`font-pixel uppercase leading-[0.85] tracking-[-0.01em] ${className}`}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ staggerChildren: reduce ? 0 : 0.045, delayChildren: delay }}
    >
      {words.map((w, wi) => (
        <Fragment key={wi}>
          <span aria-hidden="true" className="inline-block whitespace-nowrap">
            {Array.from(w).map((ch, i) => (
              <motion.span key={i} className="inline-block" variants={letter}>
                {ch}
              </motion.span>
            ))}
          </span>
          {wi < words.length - 1 && ' '}
        </Fragment>
      ))}
    </Tag>
  )
}

/* Small handwritten section kicker, like "about me!" */
export function Kicker({ children, className = '' }) {
  return <p className={`font-hand text-[15px] text-neutral-700 ${className}`}>{children}</p>
}
