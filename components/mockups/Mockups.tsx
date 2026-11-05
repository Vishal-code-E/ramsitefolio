/* Illustrated product mockups, drawn in markup so the site ships
   without screenshots. Replace any of these with a real image by
   setting `image` on the project in data/content.ts. */
import AvataqLogo from '../AvataqLogo'
import type { ReactNode } from 'react'
import type { Project } from '@/data/content'

function Window({ children, dark = false, url = '' }: { children: ReactNode; dark?: boolean; url?: string }) {
  return (
    <div className={`flex h-full w-full flex-col overflow-hidden rounded-[10px] ring-1 ${dark ? 'bg-[#0d0f0c] text-white ring-white/10' : 'bg-white text-ink ring-ink/10'}`}>
      <div className={`flex items-center gap-1.5 px-3 py-2 ${dark ? 'bg-white/[.04]' : 'bg-neutral-100'}`}>
        <span className="h-2 w-2 rounded-full bg-flame" />
        <span className="h-2 w-2 rounded-full bg-mustard" />
        <span className="h-2 w-2 rounded-full bg-leaf" />
        {url && (
          <span className={`ml-2 truncate rounded px-2 py-0.5 font-mono text-[9px] ${dark ? 'bg-white/5 text-white/50' : 'bg-white text-ink/50'}`}>{url}</span>
        )}
      </div>
      <div className="relative flex-1">{children}</div>
    </div>
  )
}

export function PortfolioMock() {
  return (
    <Window url="ramsitefolio / home">
      <div className="paper relative h-full overflow-hidden p-3">
        <div className="mb-2 flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-hot ring-1 ring-ink" />
          {['Home', 'About', 'Work'].map((x, i) => (
            <span key={x} className={`px-1.5 py-0.5 font-mono text-[7px] font-bold uppercase ${i === 0 ? 'bg-mustard' : 'text-ink/60'}`}>{x}</span>
          ))}
        </div>
        <p className="relative mx-auto mt-3 w-fit px-2 font-pixel text-[34px] font-bold leading-none">
          SRI RAM
          <span className="absolute -inset-1 rounded-sm border-[1.5px] border-flame" />
        </p>
        <span className="absolute left-4 top-[38%] rotate-[-6deg] bg-mint px-1.5 py-0.5 font-mono text-[6.5px] font-bold uppercase">Made things</span>
        <span className="absolute right-4 top-[34%] rotate-[5deg] bg-note-yellow px-1.5 py-0.5 font-hand text-[9px]">hand-coded</span>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          <span className="h-14 w-11 rotate-[-6deg] bg-white p-1 shadow-polaroid"><span className="block h-full w-full bg-note-blue" /></span>
          <span className="h-14 w-11 rotate-[4deg] bg-white p-1 shadow-polaroid"><span className="block h-full w-full bg-note-pink" /></span>
          <span className="h-14 w-11 rotate-[-2deg] bg-white p-1 shadow-polaroid"><span className="block h-full w-full bg-mint" /></span>
        </div>
      </div>
    </Window>
  )
}

export function EventHubMock() {
  const events = [
    ['Startup Bootcamp', 'Sat · 10:00', 'bg-royal', '84%'],
    ['Pitch Night', 'Fri · 18:30', 'bg-hot', '62%'],
    ['AI Hack 24h', 'Sun · 09:00', 'bg-leaf', '96%'],
  ]
  return (
    <Window url="eventhub.app / events">
      <div className="grid h-full grid-cols-[1fr_38%] gap-3 bg-[#F5F7FF] p-3">
        <div className="space-y-2">
          <p className="text-[11px] font-bold">Upcoming events</p>
          {events.map(([t, d, c, w]) => (
            <div key={t} className="rounded-md bg-white p-1.5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className={`h-6 w-6 shrink-0 rounded ${c}`} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-semibold">{t}</p>
                  <p className="font-mono text-[7.5px] text-ink/50">{d}</p>
                </div>
                <span className="rounded bg-ink px-1.5 py-0.5 text-[7px] font-bold text-white">Book</span>
              </div>
              <div className="mt-1 h-1 rounded-full bg-ink/10">
                <div className={`h-1 rounded-full ${c}`} style={{ width: w }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-md bg-ink p-2 text-white">
            <p className="font-mono text-[7.5px] uppercase tracking-widest text-white/50">Bookings</p>
            <p className="font-pixel text-[22px] leading-none text-mustard">1,248</p>
          </div>
          <div className="flex-1 rounded-md bg-white p-2 shadow-sm">
            <p className="mb-1.5 text-[8.5px] font-semibold">🔔 Notifications</p>
            <div className="mb-1 rounded bg-note-yellow px-1.5 py-1 text-[7.5px]">Pitch Night moved to Hall B</div>
            <div className="rounded bg-mint px-1.5 py-1 text-[7.5px]">12 new sign-ups today ✓</div>
          </div>
        </div>
      </div>
    </Window>
  )
}

export function AvataqMock() {
  const agents = [
    ['KYC review agent', 'running', '#B4F542'],
    ['Policy monitor', 'running', '#B4F542'],
    ['Filing drafter', 'queued', '#F2C240'],
    ['Audit trail', 'synced', '#ffffff55'],
  ]
  return (
    <Window dark url="avataq.ai / console">
      <div className="grid h-full grid-cols-[34%_1fr] gap-3 p-3 text-white">
        <div className="space-y-2 rounded-md bg-white/[.04] p-2.5">
          <AvataqLogo className="h-4 w-auto" />
          {['Checks', 'Filings', 'Audit', 'Settings'].map((x, i) => (
            <p key={x} className={`rounded px-1.5 py-1 font-mono text-[8.5px] ${i === 0 ? 'bg-lime text-ink' : 'text-white/55'}`}>{x}</p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-semibold leading-tight">
            AI-native compliance
            <br />
            <span className="text-lime">for SMBs &amp; NBFCs.</span>
          </p>
          {agents.map(([n, s, c]) => (
            <div key={n} className="flex items-center justify-between rounded-md bg-white/[.05] px-2 py-1.5">
              <span className="text-[9.5px]">{n}</span>
              <span className="flex items-center gap-1 font-mono text-[8px] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

export function PromptCraftMock() {
  const models = [
    ['ChatGPT', '#1FA85A'],
    ['Gemini', '#2F54D6'],
    ['Perplexity', '#F2468C'],
  ]
  return (
    <Window url="promptcraft / studio">
      <div className="flex h-full flex-col gap-2 bg-[#FFF8EE] p-3">
        <div className="flex gap-1.5">
          {models.map(([m, c], i) => (
            <span key={m} className={`rounded-full px-2 py-0.5 text-[8px] font-semibold ${i === 0 ? 'text-white' : 'bg-white ring-1 ring-ink/10'}`} style={i === 0 ? { background: c } : undefined}>
              {m}
            </span>
          ))}
        </div>
        <div className="rounded-md bg-white p-2 shadow-sm">
          <p className="font-mono text-[7.5px] uppercase tracking-widest text-ink/50">Prompt</p>
          <p className="mt-0.5 text-[9px]">
            Write a launch post for our <span className="bg-note-yellow px-0.5">{'{product}'}</span> in a <span className="bg-note-pink px-0.5">{'{tone}'}</span> tone…
          </p>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-1.5">
          {models.map(([m, c]) => (
            <div key={m} className="rounded-md bg-white p-1.5 shadow-sm">
              <p className="mb-1 font-mono text-[7px] font-bold" style={{ color: c }}>{m}</p>
              {['90%', '70%', '82%', '55%'].map((w, i) => (
                <div key={i} className="mb-1 h-1 rounded-full bg-ink/10" style={{ width: w }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

export function F1Mock() {
  const pts = [8, 22, 18, 40, 34, 58, 50, 72, 64, 80, 76, 92]
  const line = pts.map((y, i) => `${(i / (pts.length - 1)) * 100},${100 - y}`).join(' ')
  return (
    <Window dark url="f1-analytics / telemetry">
      <div className="grid h-full grid-cols-[1fr_34%] gap-3 p-3 text-white">
        <div className="flex flex-col rounded-md bg-white/[.04] p-2">
          <div className="mb-1 flex justify-between font-mono text-[8px] text-white/60">
            <span>Lap pace · predicted vs actual</span>
            <span className="text-[#00A19B]">AMR</span>
          </div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full flex-1" aria-hidden="true">
            {[25, 50, 75].map((y) => (
              <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#ffffff14" strokeWidth="0.6" />
            ))}
            <polyline points={line} fill="none" stroke="#00A19B" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <polyline points={pts.map((y, i) => `${(i / (pts.length - 1)) * 100},${100 - y + 8}`).join(' ')} fill="none" stroke="#F2C240" strokeWidth="1.4" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            ['Tyre deg', '0.08s/lap', '#00A19B'],
            ['Pit window', 'L22–L26', '#F2C240'],
            ['Model', 'TF + PyTorch', '#F2468C'],
          ].map(([k, v, c]) => (
            <div key={k} className="rounded-md bg-white/[.05] px-2 py-1.5">
              <p className="font-mono text-[7px] uppercase tracking-widest text-white/50">{k}</p>
              <p className="text-[10px] font-semibold" style={{ color: c }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

export const mockups: Record<Project['mock'], () => React.JSX.Element> = {
  portfolio: PortfolioMock,
  eventhub: EventHubMock,
  avataq: AvataqMock,
  promptcraft: PromptCraftMock,
  f1: F1Mock,
}
