import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/content'
import { mockups } from './mockups/Mockups'
import { Icon } from './ui/icons'
import { Kicker, PixelHeading, Tape } from './ui/primitives'

const themes = [
  { body: 'bg-ink text-white', tab: 'bg-royal text-white', sub: 'text-white/70', link: 'text-white' },
  { body: 'bg-mustard text-ink', tab: 'bg-ink text-white', sub: 'text-ink/75', link: 'text-ink' },
]
const tabOffsets = ['0%', '16%', '38%', '58%', '74%']

function ProjectCard({ p, i }) {
  const reduce = useReducedMotion()
  const t = themes[i % 2]
  const Mock = mockups[p.mock]
  const num = String(i + 1).padStart(2, '0')
  const external = p.href.startsWith('http')

  return (
    <motion.article
      aria-labelledby={`proj-${p.id}`}
      className="sticky"
      style={{ top: `calc(72px + ${i * 26}px)` }}
      initial={reduce ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <motion.div whileHover={reduce ? undefined : { y: -10 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="group relative">
        {/* folder tab */}
        <div className="relative h-[34px]">
          <div
            className={`absolute bottom-0 flex h-[34px] items-center gap-2 pl-4 pr-9 label !text-[10px] ${i === 0 ? 'folder-tab' : 'folder-tab-c pl-7'} ${t.tab} max-sm:!left-0`}
            style={{ left: tabOffsets[i % tabOffsets.length] }}
          >
            <span aria-hidden="true">✦</span> Project {num}
          </div>
        </div>

        <div className={`chamfer relative grid min-h-[360px] gap-6 p-6 shadow-card sm:p-9 md:grid-cols-[1fr_1.05fr] md:p-10 ${t.body}`}>
          <div className="flex flex-col justify-center">
            <p className={`mb-4 flex items-center gap-2 label !text-[9.5px] ${t.sub}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" /> {p.date}
            </p>
            <h3 id={`proj-${p.id}`} className="text-[40px] font-bold leading-none tracking-[-0.03em] sm:text-[56px]">
              {p.title}
            </h3>
            <p className={`mt-3 max-w-[420px] text-[15px] leading-relaxed ${t.sub}`}>{p.tagline}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tags">
              {p.tags.map((tag) => (
                <li key={tag} className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${i % 2 ? 'border-ink/30' : 'border-white/25'}`}>
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={p.href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className={`mt-7 inline-flex min-h-[44px] w-fit items-center gap-1.5 border-b-[1.5px] border-current label !text-[10px] ${t.link}`}
            >
              View project {Icon.arrowUR({ className: 'h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' })}
              <span className="sr-only">: {p.title}</span>
            </a>
          </div>

          {/* taped mockup */}
          <div className="relative self-center">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-[480px] rotate-[1.5deg] bg-white p-2 shadow-polaroid transition-transform duration-300 group-hover:rotate-0">
              <Tape color="grey" className="-left-4 -top-2 -rotate-[28deg]" />
              <Tape color="grey" className="-right-4 -top-2 rotate-[30deg]" />
              {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover" /> : <Mock />}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

export default function Works() {
  return (
    <section id="works" aria-labelledby="works-title" className="relative px-4 pb-24 pt-10 sm:px-10">
      <div className="mx-auto max-w-[1120px]">
        <Kicker>explore my work</Kicker>
        <PixelHeading as="h2" id="works-title" text="Featured works" className="pixel-shadow mb-12 mt-1 text-[52px] font-bold sm:text-[88px] lg:text-[112px]" />
        <div className="space-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
