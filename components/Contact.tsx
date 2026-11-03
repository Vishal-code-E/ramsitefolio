'use client'

import { useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { profile, recognition } from '@/data/content'
import { SocialDots } from './Nav'
import { Icon } from './ui/icons'
import { Kicker, PixelHeading, Polaroid, Reveal, Tape } from './ui/primitives'

// Web3Forms public access key (safe to ship client-side) — see CONTACT_FORM_SETUP.md
const WEB3FORMS_KEY = 'ca4277c3-7830-4c08-9a97-9440493780ae'

export function Recognition() {
  return (
    <section id="recognition" aria-labelledby="rec-title" className="relative border-t border-dashed border-ink/20 px-4 pb-10 pt-16 sm:px-10">
      <h2 id="rec-title" className="text-center font-hand text-[18px]">
        part of &amp; recognised by
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

function Field({ id, label, ...rest }: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={id} className="block">
      <span className="label mb-1 block !text-[9.5px] text-ink/70">{label} *</span>
      <input id={id} name={id} required className="field" {...rest} />
    </label>
  )
}

type Status = 'idle' | 'sending' | 'success' | 'error'

function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const sending = status === 'sending'

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: `${fd.get('firstname')} ${fd.get('lastname')}`,
          email: fd.get('email'),
          subject: fd.get('subject'),
          message: fd.get('message'),
          from_name: 'Portfolio Contact Form',
          replyto: fd.get('email'),
        }),
      })
      const result = await res.json()
      if (!result.success) throw new Error(result.message || 'Failed')
      setStatus('success')
      form.reset()
      const confetti = (await import('canvas-confetti')).default
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        confetti({ particleCount: 120, spread: 75, origin: { y: 0.7 }, colors: ['#F2C240', '#F2468C', '#2F54D6', '#1FA85A', '#F2642D'] })
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative bg-white p-6 pt-8 shadow-polaroid sm:p-8 sm:pt-10" aria-describedby="form-status">
      <Tape color="yellow" className="-left-4 -top-2 -rotate-[28deg]" />
      <Tape color="pink" className="-right-4 -top-2 rotate-[30deg]" />
      {/* notebook margin line */}
      <span aria-hidden="true" className="absolute bottom-0 left-4 top-0 w-px bg-hot/40 sm:left-5" />
      <p className="mb-5 font-hand text-[22px] leading-none">drop me a note ✉</p>
      <fieldset disabled={sending} className="grid gap-4 disabled:opacity-60">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="firstname" label="First name" placeholder="John" autoComplete="given-name" />
          <Field id="lastname" label="Last name" placeholder="Doe" autoComplete="family-name" />
        </div>
        <Field id="email" label="Email address" type="email" placeholder="your.email@example.com" autoComplete="email" />
        <Field id="subject" label="Subject" placeholder="Project inquiry" />
        <label htmlFor="message" className="block">
          <span className="label mb-1 block !text-[9.5px] text-ink/70">Message *</span>
          <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project…" className="field resize-y" />
        </label>
        <button type="submit" className="btn-ink mt-1 w-fit">
          {Icon.send({ className: 'h-4 w-4' })} {sending ? 'Sending…' : 'Send message'}
        </button>
      </fieldset>
      <p id="form-status" role="status" aria-live="polite" className="mt-4 min-h-[1.5em] text-[14px] leading-snug">
        {status === 'success' && (
          <span className="block bg-mint px-3 py-2 font-hand text-[17px]">
            🎉 Awesome! Your message just landed in my inbox. I&apos;ll hit you back real soon — let&apos;s make something incredible together!
          </span>
        )}
        {status === 'error' && (
          <span className="block bg-note-pink px-3 py-2">
            Oops, that didn&apos;t send. Email me at{' '}
            <a className="font-semibold underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>{' '}
            or message me on{' '}
            <a className="font-semibold underline" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </span>
        )}
      </p>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-10">
      <div className="text-center">
        <Smiley />
        <Kicker className="mt-4">ok, so…</Kicker>
        <PixelHeading id="contact-title" text="Let's talk" className="pixel-shadow mt-1 text-[64px] font-bold sm:text-[110px]" />
        <p className="mx-auto mt-4 max-w-[520px] font-hand text-[19px] text-ink/75">
          Have a project in mind or want to collaborate? I would love to hear from you.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1040px] items-start gap-12 lg:grid-cols-[1fr_1.25fr]">
        <div className="space-y-10">
          <Reveal>
            <div className="note-shadow relative -rotate-1 bg-note-yellow p-6 pt-7">
              <Tape color="blue" className="-top-2.5 left-1/2 -translate-x-1/2 rotate-2" />
              <p className="label !text-[10px] leading-relaxed">Let us connect</p>
              <p className="mt-2 font-hand text-[19px] leading-snug">
                I am always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <ul className="mt-5 space-y-2.5 text-[14px]">
                <li>
                  <a href={`mailto:${profile.email}`} className="group inline-flex min-h-[32px] items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center bg-ink text-white">{Icon.mail({ className: 'h-4 w-4' })}</span>
                    <span className="underline-offset-4 group-hover:underline">{profile.email}</span>
                  </a>
                </li>
                <li>
                  <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="group inline-flex min-h-[32px] items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center bg-leaf text-white">{Icon.whatsapp({ className: 'h-4 w-4' })}</span>
                    <span className="underline-offset-4 group-hover:underline">{profile.phone} (WhatsApp)</span>
                  </a>
                </li>
                <li className="inline-flex min-h-[32px] items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center bg-royal text-white">{Icon.pin({ className: 'h-4 w-4' })}</span>
                  {profile.location.replace(', IN', ', India')}
                </li>
              </ul>
            </div>
          </Reveal>

          <div className="flex items-center gap-6">
            <Reveal className="hidden w-[150px] shrink-0 sm:block">
              <Polaroid src="/me-polaroid.jpg" alt="Sri Ram" caption="say hi, I don't bite" rotate={-7} tapes={['yellow', null]} imgClassName="aspect-square" sizes="150px" />
            </Reveal>
            <div>
              <p className="flex items-center gap-2 font-hand text-[16px] text-ink/75">
                <span className="h-2 w-2 rounded-full bg-leaf" /> follow me
              </p>
              <SocialDots size="h-11 w-11" className="mt-3" />
              <p className="mt-3 font-mono text-[11px] text-ink/60">
                <a className="underline-offset-4 hover:underline" href={profile.github} target="_blank" rel="noreferrer">
                  github.com/Vishal-code-E
                </a>
              </p>
            </div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}

export function Footer({ home = true }: { home?: boolean }) {
  return (
    <footer className="border-t border-ink/10 px-5 py-6 sm:px-10">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="label !text-[9px] text-ink/60">
          © {new Date().getFullYear()} {profile.fullName}. Crafted with passion and code.
        </p>
        <p className="font-hand text-[14px] text-ink/60">built with Next.js, TypeScript, Tailwind CSS &amp; Motion</p>
        <a href={home ? '#home' : '/'} className="label min-h-[44px] content-center !text-[9px] text-ink/70 hover:text-ink">
          {home ? 'Back to top ↑' : '← Back home'}
        </a>
      </div>
    </footer>
  )
}
