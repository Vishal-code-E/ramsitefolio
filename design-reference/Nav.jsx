import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, profile } from '../data/content'
import { Icon } from './ui/icons'

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

const socials = [
  { href: profile.linkedin, label: 'LinkedIn', icon: 'linkedin', bg: 'bg-mustard' },
  { href: profile.github, label: 'GitHub', icon: 'github', bg: 'bg-hot' },
  { href: profile.instagram, label: 'Instagram', icon: 'instagram', bg: 'bg-leaf' },
]

export function SocialDots({ className = '', size = 'h-8 w-8' }) {
  return (
    <ul className={`flex items-center gap-1.5 ${className}`}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className={`grid ${size} place-items-center rounded-full ${s.bg} text-ink ring-1 ring-ink/10 transition-transform hover:-translate-y-0.5 hover:rotate-6`}
          >
            {Icon[s.icon]({ className: 'h-[15px] w-[15px]' })}
          </a>
        </li>
      ))}
    </ul>
  )
}

const ids = [...nav.map((n) => n.id), 'contact']

export default function Nav() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-[56px] items-center gap-2 px-3 sm:px-5">
        <a href="#home" aria-label="Sri Ram — home" className="mr-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-hot ring-2 ring-ink">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
            <circle cx="11.5" cy="13" r="2" fill="#111" />
            <circle cx="20.5" cy="13" r="2" fill="#111" />
            <path d="M10 19c2.8 3.4 9.2 3.4 12 0" stroke="#111" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </svg>
        </a>

        <ul className="hidden items-stretch md:flex">
          {nav.map((n) => {
            const on = active === n.id
            return (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={on ? 'true' : undefined}
                  className={`relative flex h-[56px] items-center gap-1.5 px-3.5 label !text-[10px] transition-colors ${on ? 'text-ink' : 'text-ink/70 hover:text-ink'}`}
                >
                  {on && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 bg-mustard" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                  {Icon[n.icon]({ className: 'h-3 w-3' })}
                  {n.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="ml-auto flex items-center gap-2.5">
          <SocialDots className="hidden sm:flex" />
          <a href="#contact" className="flex min-h-[36px] items-center gap-1.5 border-[1.5px] border-ink bg-white px-3 label !text-[10px] shadow-[2px_2px_0_#111] transition-transform hover:-translate-y-0.5">
            {Icon.heart({ className: 'h-3 w-3' })} Contact
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? Icon.close({ className: 'h-5 w-5' }) : Icon.menu({ className: 'h-5 w-5' })}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-ink/10 md:hidden"
          >
            <ul className="grid gap-1 p-3">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-[44px] items-center gap-2 px-3 label ${active === n.id ? 'bg-mustard' : ''}`}
                  >
                    {Icon[n.icon]({ className: 'h-3.5 w-3.5' })}
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="px-3 pt-2">
                <SocialDots size="h-10 w-10" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
