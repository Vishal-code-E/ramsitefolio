import Image from 'next/image'

/**
 * Avataq brand logo. The source art is white on transparent, so:
 *  - tone="dark"  → for dark surfaces (bg-ink): shown as-is, white
 *  - tone="light" → for paper/light surfaces: inverted to ink black
 * variant="lockup" is mark + wordmark; variant="mark" is the wireframe A only.
 */
const art = {
  lockup: { src: '/brand/avataq-logo.png', w: 1352, h: 453 },
  mark: { src: '/brand/avataq-mark.png', w: 529, h: 453 },
} as const

export default function AvataqLogo({
  variant = 'lockup',
  tone = 'dark',
  className = 'h-10 w-auto',
  priority = false,
}: {
  variant?: keyof typeof art
  tone?: 'dark' | 'light'
  className?: string
  priority?: boolean
}) {
  const a = art[variant]
  return (
    <Image
      src={a.src}
      alt={variant === 'lockup' ? 'Avataq' : ''}
      aria-hidden={variant === 'mark' ? true : undefined}
      width={a.w}
      height={a.h}
      priority={priority}
      sizes="(min-width: 768px) 360px, 60vw"
      className={`select-none ${tone === 'light' ? 'invert' : ''} ${className}`}
    />
  )
}
