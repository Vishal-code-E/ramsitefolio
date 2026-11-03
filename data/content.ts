// ─────────────────────────────────────────────────────────────
//  All site copy lives here. Edit this file, not the components.
// ─────────────────────────────────────────────────────────────

export type Color = 'mustard' | 'leaf' | 'hot' | 'royal' | 'mint'

export const profile = {
  firstName: 'SRI RAM',
  fullName: 'Sri Ram',
  role: 'Full Stack Dev & AI Entrepreneur',
  location: 'Visakhapatnam, IN',
  status: 'Open to new opportunities & exciting projects',
  tagline: 'President, E-Cell at Raghu Engineering College · Ex-Google Developer Groups Core Team',
  email: 'sriram182719@gmail.com',
  phone: '+91 9490147819',
  whatsapp: 'https://wa.me/919490147819',
  github: 'https://github.com/Vishal-code-E',
  linkedin: 'https://www.linkedin.com/in/vishal-epu-646822222/',
  blog: 'https://agenticaiavataq.hashnode.dev',
  newsletter: 'https://agenticaiavataq.hashnode.dev/newsletter',
  ecellSite: 'https://ecellrec.app/',
}

export const nav = [
  { id: 'home', label: 'Home', icon: 'star' },
  { id: 'about', label: 'About', icon: 'user' },
  { id: 'experience', label: 'Experience', icon: 'file' },
  { id: 'works', label: 'Projects', icon: 'grid' },
  { id: 'blog', label: 'Blog', icon: 'pen' },
  { id: 'playground', label: 'Gallery', icon: 'diamond' },
] as const

export const about = {
  bio: [
    "I'm a full-stack developer and entrepreneur driven by the power of code and community.",
    'With deep expertise in Agentic AI, Machine Learning and autonomous systems, I transform tech visions into reality.',
    'As founder of Avataq.ai (autonomous software teams for startups) and Prompt Craft (cutting-edge generative AI solutions), I build platforms that empower founders and creators.',
    'Leading innovation, inspiring teams, and turning bold ideas into validated products is what I do best.',
  ],
  roles: [
    { k: 'Leading', v: 'President, E-Cell REC — Raghu Engineering College' },
    { k: 'Building', v: 'Founder, Avataq.ai — autonomous software teams' },
    { k: 'Crafting', v: 'Founder, PromptCraft — generative AI solutions' },
    { k: 'Before', v: 'Core Team & Tech Lead, GDG on Campus REC' },
  ],
  skills: [
    { label: 'Agentic AI', color: 'mustard', emoji: '🤖' },
    { label: 'Machine Learning', color: 'leaf', emoji: '🧠' },
    { label: 'Full-Stack', color: 'hot', emoji: '⚙️' },
    { label: 'Autonomous Systems', color: 'royal', emoji: '⚡' },
    { label: 'Generative AI', color: 'mustard', emoji: '✨' },
    { label: 'Entrepreneurship', color: 'leaf', emoji: '🚀' },
  ] as { label: string; color: Color; emoji: string }[],
  // technology stack (was the 3D icon cloud)
  toolbox: [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'TensorFlow', 'PyTorch',
    'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git', 'GitHub',
    'Tailwind CSS', 'Figma', 'VS Code', 'Linux', 'ChatGPT', 'Gemini', 'Perplexity',
  ],
}

export type ExperienceItem = {
  period: string
  role: string
  org: string
  points: string[]
  color: string
  href?: string
}

export const experience: ExperienceItem[] = [
  {
    period: '2025 – Present',
    role: 'President',
    org: 'E-CELL REC · Raghu Engineering College, Visakhapatnam',
    points: [
      'Lead the Entrepreneurship Cell, driving organizational vision and entrepreneurial culture across campus',
      'Managed a multidisciplinary team, coordinating events, workshops, and strategic partnerships',
      'Spearheaded innovation challenges, hackathons, and startup education programs',
    ],
    color: 'bg-note-yellow',
    href: '/ecell',
  },
  {
    period: '2025 – Present',
    role: 'Startup Founder',
    org: 'PromptCraft · Remote',
    points: [
      'Established PromptCraft for advanced prompt engineering and LLM integration',
      'Designed SaaS solutions empowering users with AI-driven content and automation',
      'Oversaw technical and business aspects from ideation to MVP deployment',
    ],
    color: 'bg-note-pink',
    href: '/prompt-craft',
  },
  {
    period: '2024 – 2025',
    role: 'Webtech Head',
    org: 'E-CELL REC · Raghu Engineering College, Visakhapatnam',
    points: [
      'Developed and maintained the E-Cell REC website, streamlining campus event visibility',
      'Led technical initiatives and student developer teams for club activities',
      'Organized events focused on emerging technologies and tech-driven startup solutions',
    ],
    color: 'bg-note-blue',
  },
  {
    period: '2024 – 2025',
    role: 'Core Team Member & Tech Lead',
    org: 'Google Developer Groups on Campus · Raghu Engineering College',
    points: [
      'Coordinated and executed campus tech meetups, workshops, and coding sessions',
      'Provided technical leadership, mentorship, and support for student teams',
      'Drove community engagement with the GDG platform and event management',
    ],
    color: 'bg-mint',
  },
  {
    period: '2023 – Present',
    role: 'Innovation Ambassador',
    org: 'IIC · Raghu Engineering College, Visakhapatnam',
    points: [
      'Champion for startup and innovation culture, promoting campus-wide initiatives',
      'Member of the Innovation and Incubation Cell (IIC) committee, overseeing event management and student outreach',
      'Facilitated workshops and seminars to foster ideation and entrepreneurship',
    ],
    color: 'bg-note-peach',
  },
  {
    period: '2023 – Present',
    role: 'Startup Founder',
    org: 'AVATAQ.AI · Remote',
    points: [
      'Founded AVATAQ.AI, leading product vision and strategy',
      'Built agentic AI workflows and automation systems for startup MVPs',
      'Drove customer engagement and business development for solo founders',
    ],
    color: 'bg-note-lime',
    href: '/avataq',
  },
]

export type Project = {
  id: string
  title: string
  label: string
  description: string
  details: string[]
  href: string
  source?: string
  mock: 'portfolio' | 'eventhub' | 'avataq' | 'promptcraft' | 'f1'
  image?: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: "Ram's Portfolio",
    label: 'Portfolio',
    description: 'Modern portfolio website showcasing cutting-edge web development with Next.js, React and hand-tuned motion.',
    details: [
      'Built with Next.js and React 19',
      'Advanced animations and transitions',
      'Fully responsive and performant design',
      'Interactive, hand-crafted UI components',
    ],
    href: 'https://github.com/Vishal-code-E/ramsitefolio',
    source: 'https://github.com/Vishal-code-E/ramsitefolio',
    mock: 'portfolio',
  },
  {
    id: 'eventhub',
    title: 'EventHub',
    label: 'Event Platform',
    description: 'Comprehensive event management platform with seamless booking, real-time notifications, and organization tools.',
    details: [
      'Real-time event booking system',
      'Push notifications for updates',
      'Multi-user collaboration tools',
      'Analytics dashboard for organizers',
    ],
    href: 'https://github.com/Vishal-code-E',
    source: 'https://github.com/Vishal-code-E',
    mock: 'eventhub',
  },
  {
    id: 'avataq',
    title: 'Avataq.ai',
    label: 'AI Venture',
    description: 'Autonomous software teams for startups. Building the future of AI-driven development with agentic workflows.',
    details: [
      'AI-powered autonomous development teams',
      'Agentic workflow automation',
      'Startup-focused rapid prototyping',
      'Intelligent code generation and review',
    ],
    href: '/avataq',
    source: 'https://github.com/Vishal-code-E',
    mock: 'avataq',
  },
  {
    id: 'promptcraft',
    title: 'PromptCraft',
    label: 'GenAI Platform',
    description: 'Cutting-edge generative AI solutions platform empowering businesses with advanced LLM integration and automation.',
    details: [
      'Advanced LLM integration framework',
      'Custom prompt engineering tools',
      'Business process automation',
      'Multi-model AI orchestration',
    ],
    href: '/prompt-craft',
    source: 'https://github.com/Vishal-code-E',
    mock: 'promptcraft',
  },
  {
    id: 'f1',
    title: 'Aston Martin F1 Analytics',
    label: 'ML Analytics',
    description: 'Advanced machine learning analytics for Formula One racing performance optimization using TensorFlow and PyTorch.',
    details: [
      'Real-time telemetry data analysis',
      'Predictive performance modeling',
      'TensorFlow & PyTorch implementations',
      'Race strategy optimization algorithms',
    ],
    href: '/github',
    source: 'https://github.com/Vishal-code-E',
    mock: 'f1',
  },
]

export const testimonials = [
  {
    quote:
      'Working with Ram has been an incredible experience. His expertise in AI and full-stack development brought our vision to life with exceptional precision and creativity.',
    name: 'Sarah Johnson',
    designation: 'CTO at TechVentures',
    color: 'bg-note-yellow',
  },
  {
    quote:
      "Ram's ability to transform complex problems into elegant solutions is remarkable. His work on our AI platform exceeded all expectations and delivered real business value.",
    name: 'Michael Chen',
    designation: 'Founder at InnovateLabs',
    color: 'bg-note-blue',
  },
  {
    quote:
      "An outstanding developer with a keen eye for detail. Ram's contributions to our startup were instrumental in securing our Series A funding. Highly recommended!",
    name: 'Emily Rodriguez',
    designation: 'CEO at StartupHub',
    color: 'bg-note-pink',
  },
  {
    quote:
      "Ram's technical prowess combined with his business acumen makes him a rare find. He doesn't just code—he builds products that users love and businesses need.",
    name: 'David Park',
    designation: 'Product Manager at CloudScale',
    color: 'bg-mint',
  },
  {
    quote:
      'Collaborating with Ram on our machine learning project was a game-changer. His innovative approach and dedication to excellence set him apart from other developers.',
    name: 'Priya Sharma',
    designation: 'Head of AI at DataDriven Inc',
    color: 'bg-note-peach',
  },
]

export type PlaygroundItem =
  | { kind: 'photo'; src: string; alt: string; caption: string; rot: number; x: number; y: number; w: number; tape?: string }
  | { kind: 'note'; text: string; color: string; rot: number; x: number; y: number }
  | { kind: 'sticker'; emoji: string; bg: string; rot: number; x: number; y: number }
  | { kind: 'terminal'; rot: number; x: number; y: number; w: number }
  | { kind: 'badge'; text: string; sub: string; rot: number; x: number; y: number }
  | { kind: 'brand'; rot: number; x: number; y: number; w: number }

export const playground: PlaygroundItem[] = [
  { kind: 'photo', src: '/img1.jpg', alt: 'Sri Ram speaking on stage with a microphone', caption: 'mic in hand', rot: -6, x: 3, y: 6, w: 190 },
  { kind: 'note', text: 'hello world', color: 'bg-note-blue', rot: 8, x: 25, y: 4 },
  { kind: 'photo', src: '/COGNIZANT%20HYD%20SET%204%20-5.jpg', alt: 'Sri Ram with the team at Cognizant Hyderabad', caption: 'Cognizant, Hyderabad', rot: 4, x: 33, y: 14, w: 250, tape: 'pink' },
  { kind: 'note', text: 'ship it friday?', color: 'bg-note-pink', rot: -10, x: 64, y: 5 },
  { kind: 'sticker', emoji: '🚀', bg: 'bg-mustard', rot: 12, x: 84, y: 9 },
  { kind: 'terminal', rot: 3, x: 68, y: 30, w: 250 },
  { kind: 'badge', text: 'E-CELL REC', sub: 'President · 2025', rot: -8, x: 5, y: 58 },
  { kind: 'note', text: 'agents > apps', color: 'bg-note-yellow', rot: 6, x: 27, y: 68 },
  { kind: 'sticker', emoji: '☕', bg: 'bg-hot', rot: -14, x: 49, y: 72 },
  { kind: 'brand', rot: -5, x: 57, y: 58, w: 210 },
  { kind: 'sticker', emoji: '🧠', bg: 'bg-leaf', rot: 10, x: 89, y: 66 },
]

export const recognition = [
  { label: 'E-Cell REC · President', color: 'bg-note-pink', icon: '★' },
  { label: 'GDG on Campus · Core Team', color: 'bg-note-blue', icon: '◆' },
  { label: 'IIC · Innovation Ambassador', color: 'bg-note-yellow', icon: '💡' },
  { label: 'NEC 2024 · National Stage', color: 'bg-mint', icon: '🏆' },
  { label: 'Avataq.ai · Founder', color: 'bg-note-lime', icon: '▲' },
  { label: 'PromptCraft · Founder', color: 'bg-note-peach', icon: '✦' },
]

export const gallery = [
  { src: '/img3.jpg', alt: 'Group photo on stage at Cognizant' },
  { src: '/SUIT.png', alt: 'Professional attire' },
  { src: '/COGNIZANT%20HYD%20SET%205%20-36.jpg', alt: 'At a workshop table, Cognizant Hyderabad' },
  { src: '/img1.jpg', alt: 'Speaking on stage' },
  { src: '/COGNIZANT%20HYD%20SET%204%20-6.jpg', alt: 'Cognizant Outreach poster with the team' },
  { src: '/hero.jpg', alt: 'Professional portrait' },
  { src: '/img5.jpg', alt: 'Sharing our time, talent and technology' },
  { src: '/COGNIZANT%20HYD%20SET%206%20-2.jpg', alt: 'The whole cohort, Cognizant Hyderabad' },
  { src: '/Suit2.png', alt: 'Professional look' },
  { src: '/img2.jpg', alt: 'On campus' },
  { src: '/COGNIZANT%20HYD%20-20.jpg', alt: 'Cognizant Hyderabad' },
  { src: '/COGNIZANT%20HYD%20SET%205%20-14.jpg', alt: 'Office environment' },
  { src: '/img4.jpg', alt: 'Team photo in front of the Cognizant wall' },
  { src: '/COGNIZANT%20HYD%20SET%203%20-29.jpg', alt: 'Cognizant moments' },
  { src: '/COGNIZANT%20HYD%20SET%206%20-6.jpg', alt: 'Workplace moments' },
  { src: '/COGNIZANT%20HYD%20SET%204%20-5.jpg', alt: 'Team collaboration' },
]
