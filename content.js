// ─────────────────────────────────────────────────────────────
//  All site copy lives here. Edit this file, not the components.
//  Anything in [BRACKETS] is a placeholder for you to fill in.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: 'SRI RAM',
  fullName: 'Epu Sri Ram Vishal',
  role: 'AI Engineer & Founder',
  location: 'Visakhapatnam, IN',
  status: 'Open to new work and good problems',
  headline: ['I build AI systems', 'that get out of your way.'],
  email: '[your@email.com]', // ← replace
  github: 'https://github.com/Vishal-code-E',
  linkedin: 'https://www.linkedin.com/in/[your-handle]', // ← replace
  instagram: 'https://www.instagram.com/[your-handle]', // ← replace
  website: 'https://avataq.in',
}

export const nav = [
  { id: 'home', label: 'Home', icon: 'star' },
  { id: 'about', label: 'About', icon: 'user' },
  { id: 'works', label: 'Works', icon: 'grid' },
  { id: 'case-study', label: 'Case study', icon: 'file' },
  { id: 'playground', label: 'Playground', icon: 'diamond' },
]

export const about = {
  bio: [
    "I'm an AI engineer who gets a little too excited about turning messy, manual work into agents that just… run.",
    "By day I build backend + AI for EzRewards at Evolutyz. By night I'm building AVATAQ — an Agent OS for SMBs.",
    'I care about the boring edge cases, the retry logic nobody sees, and shipping things that quietly save someone hours.',
  ],
  roles: [
    { k: 'Now', v: 'AI Engineer & Backend Dev @ Evolutyz IT Services' },
    { k: 'Building', v: 'Founder & CEO, AVATAQ' },
    { k: 'Studying', v: 'B.Tech CSE, Raghu Engineering College ’27' },
    { k: 'Leading', v: 'President, E-Cell · Head, GDG on Campus' },
  ],
  skills: [
    { label: 'AI Agents', color: 'mustard', emoji: '🤖' },
    { label: 'Backend', color: 'leaf', emoji: '⚙️' },
    { label: 'Automation', color: 'hot', emoji: '⚡' },
    { label: 'SaaS', color: 'royal', emoji: '☁️' },
    { label: 'System Design', color: 'mustard', emoji: '🧩' },
    { label: 'Product', color: 'leaf', emoji: '🎯' },
  ],
}

// `mock` picks a built-in illustrated mockup (see components/mockups).
// Swap for a real screenshot by adding `image: '/projects/avataq.jpg'`.
export const projects = [
  {
    id: 'avataq',
    title: 'AVATAQ',
    tagline: 'An Agent OS for SMBs — automate the execution, own the outcome.',
    date: '[MMM YYYY]',
    tags: ['Founder', 'AI Agents', 'SaaS'],
    href: 'https://avataq.in',
    mock: 'avataq',
  },
  {
    id: 'ezrewards',
    title: 'EzRewards',
    tagline: 'Multi-tenant Rewards & Recognition SaaS, with agents that run the admin work.',
    date: '[MMM YYYY]',
    tags: ['Evolutyz', 'Backend', 'Agents'],
    href: 'https://ezrewards.vercel.app',
    mock: 'ezrewards',
  },
  {
    id: 'vlm',
    title: 'VLM Disaster Intel',
    tagline: 'Four vision-language models, one disaster image, answers in parallel. For ISRO / NDEM.',
    date: '[MMM YYYY]',
    tags: ['Research', 'VLMs', 'FastAPI'],
    href: '#case-study',
    mock: 'vlm',
  },
  {
    id: 'hodc',
    title: 'HODC',
    tagline: 'A district health command center: every PHC, every shortage, one screen.',
    date: '[MMM YYYY]',
    tags: ['GovTech', 'Multi-tenant', 'Dashboard'],
    href: '#',
    mock: 'hodc',
  },
  {
    id: 'jobs',
    title: 'Vizag Job Agent',
    tagline: 'Two-branch agent that scrapes, scores and ships daily job matches to WhatsApp.',
    date: '[MMM YYYY]',
    tags: ['AI for Vizag', 'n8n', 'Firecrawl'],
    href: '#',
    mock: 'jobs',
  },
]

export const caseStudy = {
  title: 'VLM DISASTER INTEL',
  date: '[MMM YYYY]',
  summary:
    'A disaster-response assistant that asks four vision-language models the same question about a satellite or field image — and lines their answers up side by side.',
  chips: ['Research', 'Computer vision'],
  meta: [
    { k: 'Role', v: 'AI Engineer — inference + API', color: 'bg-[#C9D5F5]' },
    { k: 'Timeline', v: '[X weeks]', color: 'bg-[#F6E3A6]' },
    { k: 'Team', v: '[Team size / collaborators]', color: 'bg-mint' },
    { k: 'Stack', v: 'FastAPI · React · CLIP · BLIP-2 · LLaVA · Qwen2-VL', color: 'bg-[#F8C9DC]' },
  ],
  problem:
    'In the first hours after a flood or cyclone, analysts need fast, trustworthy reads of imagery. One model hallucinates; four models disagreeing tells you where to look harder.',
  approach: [
    'Fan-out: every query runs on CLIP, BLIP-2, LLaVA and Qwen2-VL in parallel behind one FastAPI endpoint.',
    'Heavy models offloaded to a Colab GPU over a tunnel when local CPU inference was too slow.',
    'React UI that diff-reads the four answers so disagreement is visible, not hidden.',
  ],
  results: [
    { n: '4', l: 'VLMs answering every query in parallel', color: 'bg-[#C9D5F5]' },
    { n: '[X]s', l: 'median time to a side-by-side answer', color: 'bg-[#F6E3A6]' },
    { n: '[X]', l: 'disaster scenarios evaluated', color: 'bg-mint' },
  ],
}

export const playground = [
  { kind: 'photo', src: '/me-polaroid.jpg', caption: 'IIT Bombay, suited up', rot: -6, x: 4, y: 8, w: 200 },
  { kind: 'note', text: 'hello world', color: 'bg-[#C9D5F5]', rot: 8, x: 26, y: 4 },
  { kind: 'terminal', rot: -3, x: 34, y: 18, w: 260 },
  { kind: 'note', text: 'ship it friday?', color: 'bg-[#F8C9DC]', rot: -10, x: 63, y: 6 },
  { kind: 'sticker', emoji: '🚀', bg: 'bg-mustard', rot: 12, x: 82, y: 10 },
  { kind: 'flow', rot: 4, x: 70, y: 36, w: 230 },
  { kind: 'badge', text: 'TOP 25 / 25,000+', sub: 'IIT Bombay SINE', rot: -8, x: 6, y: 58 },
  { kind: 'note', text: 'agents > apps', color: 'bg-[#F6E3A6]', rot: 6, x: 27, y: 66 },
  { kind: 'sticker', emoji: '☕', bg: 'bg-hot', rot: -14, x: 52, y: 70 },
  { kind: 'brand', rot: -5, x: 58, y: 56, w: 200 },
  { kind: 'sticker', emoji: '🧠', bg: 'bg-leaf', rot: 10, x: 90, y: 64 },
]

export const recognition = [
  { label: 'IIT Bombay SINE · Top 25', color: 'bg-[#F6E3A6]', icon: '🏆' },
  { label: 'GDG on Campus · Head', color: 'bg-[#C9D5F5]', icon: '◆' },
  { label: 'E-Cell · President', color: 'bg-[#F8C9DC]', icon: '★' },
  { label: 'ISRO · NDEM research', color: 'bg-mint', icon: '🛰' },
  { label: 'Evolutyz IT Services', color: 'bg-[#FBD3BF]', icon: '⚙' },
  { label: 'AVATAQ · Founder', color: 'bg-[#D9F2A5]', icon: '▲' },
]
