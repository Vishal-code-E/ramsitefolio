/* Illustrated product mockups, drawn in markup so the site ships
   without screenshots. Replace any of these with a real image by
   setting `image` on the project in data/content.js. */

function Window({ children, dark = false, url = '', className = '' }) {
  return (
    <div className={`flex h-full w-full flex-col overflow-hidden rounded-[10px] ring-1 ${dark ? 'bg-[#0d0f0c] ring-white/10' : 'bg-white ring-ink/10'} ${className}`}>
      <div className={`flex items-center gap-1.5 px-3 py-2 ${dark ? 'bg-white/[.04]' : 'bg-neutral-100'}`}>
        <span className="h-2 w-2 rounded-full bg-[#F2642D]" />
        <span className="h-2 w-2 rounded-full bg-[#F2C240]" />
        <span className="h-2 w-2 rounded-full bg-[#1FA85A]" />
        {url && <span className={`ml-2 truncate rounded px-2 py-0.5 font-mono text-[9px] ${dark ? 'bg-white/5 text-white/50' : 'bg-white text-ink/50'}`}>{url}</span>}
      </div>
      <div className="relative flex-1">{children}</div>
    </div>
  )
}

const Bar = ({ w, c = 'bg-white/15', h = 'h-1.5' }) => <div className={`${h} rounded-full ${c}`} style={{ width: w }} />

export function AvataqMock() {
  const agents = [
    ['Lead Qualifier', 'running', '#B4F542'],
    ['Invoice Chaser', 'idle', '#ffffff55'],
    ['Inbox Triage', 'running', '#B4F542'],
    ['Follow-up Writer', 'queued', '#F2C240'],
  ]
  return (
    <Window dark url="avataq.in/console">
      <div className="grid h-full grid-cols-[34%_1fr] gap-3 p-3 text-white">
        <div className="space-y-2 rounded-md bg-white/[.04] p-2.5">
          <p className="font-pixel text-[15px] text-[#B4F542]">AVATAQ</p>
          {['Agents', 'Runs', 'Inbox', 'Settings'].map((x, i) => (
            <p key={x} className={`rounded px-1.5 py-1 font-mono text-[8.5px] ${i === 0 ? 'bg-[#B4F542] text-ink' : 'text-white/55'}`}>{x}</p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-semibold leading-tight">Automate the execution.<br /><span className="text-[#B4F542]">Own the outcome.</span></p>
          {agents.map(([n, s, c]) => (
            <div key={n} className="flex items-center justify-between rounded-md bg-white/[.05] px-2 py-1.5">
              <span className="text-[9.5px]">{n}</span>
              <span className="flex items-center gap-1 font-mono text-[8px] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />{s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

export function EzRewardsMock() {
  return (
    <Window url="ezrewards.vercel.app">
      <div className="grid h-full grid-cols-[1fr_40%] gap-3 bg-[#F7F5FF] p-3">
        <div className="space-y-2">
          <p className="text-[11px] font-bold">Recognition feed</p>
          {[
            ['#F2468C', 'Priya → Arjun', '“Saved the release”'],
            ['#2F54D6', 'Team Ops → Kiran', 'Customer hero'],
            ['#1FA85A', 'Admin agent', '12 rewards assigned'],
          ].map(([c, a, b]) => (
            <div key={a} className="flex items-center gap-2 rounded-md bg-white p-1.5 shadow-sm">
              <span className="h-5 w-5 shrink-0 rounded-full" style={{ background: c }} />
              <div className="min-w-0">
                <p className="truncate text-[9px] font-semibold">{a}</p>
                <p className="truncate text-[8px] text-ink/55">{b}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-md bg-ink p-2 text-white">
            <p className="font-mono text-[7.5px] uppercase tracking-widest text-white/50">Points</p>
            <p className="font-pixel text-[22px] leading-none text-mustard">2,480</p>
          </div>
          <div className="flex-1 rounded-md bg-white p-2 shadow-sm">
            <p className="mb-1.5 text-[8.5px] font-semibold">Ask the agent</p>
            <div className="mb-1 ml-auto w-[85%] rounded bg-royal px-1.5 py-1 text-[7.5px] text-white">Reward the Q3 shipping squad</div>
            <div className="w-[85%] rounded bg-neutral-100 px-1.5 py-1 text-[7.5px]">Done — 8 people, 150 pts each ✓</div>
          </div>
        </div>
      </div>
    </Window>
  )
}

export function VlmMock() {
  const models = [
    ['CLIP', '#2F54D6', '78%'],
    ['BLIP-2', '#F2468C', '64%'],
    ['LLaVA', '#1FA85A', '86%'],
    ['Qwen2-VL', '#F2C240', '72%'],
  ]
  return (
    <Window dark url="vlm-intel / analyze">
      <div className="grid h-full grid-cols-[42%_1fr] gap-3 p-3">
        <div className="relative overflow-hidden rounded-md" style={{ background: 'radial-gradient(circle at 30% 40%, #3c6b8f 0 18%, #27465e 30%, #1d3b2a 55%, #2d4a22 70%, #4b3a22 100%)' }}>
          <div className="absolute left-[18%] top-[26%] h-[34%] w-[40%] border-2 border-dashed border-mustard" />
          <span className="absolute left-[18%] top-[16%] bg-mustard px-1 font-mono text-[7px] font-bold">FLOODED</span>
          <span className="absolute bottom-1.5 left-1.5 font-mono text-[7px] text-white/70">sat_0427.tif</span>
        </div>
        <div className="flex flex-col justify-between">
          {models.map(([n, c, w]) => (
            <div key={n}>
              <div className="mb-1 flex justify-between font-mono text-[8px] text-white/70">
                <span>{n}</span>
                <span className="text-white/40">answer</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full" style={{ width: w, background: c }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

export function HodcMock() {
  const cells = Array.from({ length: 24 }, (_, i) => (i * 37) % 7)
  const shade = ['#E9F5EC', '#BFE3C8', '#8fd1a4', '#F6E3A6', '#F2C240', '#F7A07A', '#F2642D']
  return (
    <Window url="hodc.gov / district">
      <div className="grid h-full grid-cols-[1fr_38%] gap-3 p-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold">PHC stock levels · [District]</p>
          <div className="grid grid-cols-6 gap-1">
            {cells.map((v, i) => (
              <span key={i} className="aspect-square rounded-[3px]" style={{ background: shade[v] }} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            ['Alerts', 'bg-flame text-white'],
            ['Shortages', 'bg-mustard'],
            ['Staffing', 'bg-mint'],
          ].map(([t, c]) => (
            <div key={t} className={`rounded-md px-2 py-1.5 ${c}`}>
              <p className="font-mono text-[7.5px] uppercase tracking-widest opacity-80">{t}</p>
              <Bar w="70%" c="bg-current opacity-30" h="h-1" />
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

export function JobsMock() {
  const Node = ({ c, t }) => <span className={`rounded-md px-1.5 py-1 text-[8px] font-semibold ${c}`}>{t}</span>
  return (
    <Window url="n8n / job-discovery-agent">
      <div className="relative h-full bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] p-3 [background-size:10px_10px]">
        <div className="flex items-center gap-1.5">
          <Node c="bg-ink text-white" t="⏰ Daily" />
          <span className="h-px w-3 bg-ink/40" />
          <Node c="bg-royal text-white" t="Firecrawl" />
          <span className="h-px w-3 bg-ink/40" />
          <Node c="bg-mustard" t="Score vs resume" />
        </div>
        <div className="mt-3 flex items-center gap-1.5 pl-10">
          <Node c="bg-hot text-white" t="Gmail digest" />
          <span className="h-px w-3 bg-ink/40" />
          <Node c="bg-leaf text-white" t="WhatsApp feed" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 rounded-md bg-white p-2 shadow-sm">
          <p className="font-mono text-[7.5px] text-ink/50">today · Vizag · Hyd · Blr</p>
          <p className="text-[9px] font-semibold">[N] new roles matched ✓</p>
        </div>
      </div>
    </Window>
  )
}

export const mockups = { avataq: AvataqMock, ezrewards: EzRewardsMock, vlm: VlmMock, hodc: HodcMock, jobs: JobsMock }
