// Copy for the detail pages (/avataq, /ecell, /prompt-craft, /github).

export type Card = { emoji?: string; title: string; text: string; tags?: string[] }
export type Section = { kicker?: string; title: string; layout?: 'grid' | 'list' | 'tools'; cards: Card[] }
export type DetailPage = {
  slug: string
  badge: string
  kicker: string
  title: string
  subtitle: string
  chip?: string
  intro: { heading: string; paragraphs: string[] }
  quote?: { label: string; text: string }
  sidebar?: { label: string; text: string }[]
  sections: Section[]
  timeline?: { kicker: string; title: string; items: { year: string; title: string; text: string }[] }
  cta: { title: string; text: string; links: { label: string; href: string; primary?: boolean }[] }
  photo?: { src: string; alt: string; caption: string }
}

export const avataq: DetailPage = {
  slug: 'avataq',
  badge: 'AQ',
  kicker: 'currently building',
  title: 'Avataq.ai',
  subtitle: 'Building AI-native infrastructure for compliance teams at SMBs and NBFCs.',
  chip: 'Founded 2024',
  intro: {
    heading: 'The vision',
    paragraphs: [
      'Compliance at small businesses and NBFCs still runs on spreadsheets, email threads and a few overworked people. Every new circular, every audit and every filing deadline lands on the same desks.',
      'Avataq.ai is the AI-native layer for that work: agents that handle the repetitive checks, drafting and tracking, so compliance teams can focus on judgement calls instead of busywork.',
    ],
  },
  quote: {
    label: 'Mission statement',
    text: 'To give every SMB and NBFC compliance team the infrastructure that only large institutions could afford — AI-native, audit-ready, and built for how they actually work.',
  },
  sections: [
    {
      kicker: 'what it does',
      title: 'Key features',
      cards: [
        { emoji: '🤖', title: 'Compliance Agents', text: 'AI agents that take on the repetitive checks, reviews and follow-ups compliance teams do every day.' },
        { emoji: '📋', title: 'Audit-Ready by Default', text: 'Every action is logged and traceable, so audits start with records instead of a scramble.' },
        { emoji: '🏦', title: 'Built for SMBs & NBFCs', text: "Designed around the workflows and constraints of smaller teams in regulated finance — not retrofitted from enterprise tools." },
        { emoji: '🔔', title: 'Never Miss a Deadline', text: 'Filing dates, renewals and policy updates are tracked and surfaced before they become problems.' },
      ],
    },
    {
      kicker: 'under the hood',
      title: 'Technology stack',
      layout: 'tools',
      cards: [
        { emoji: '🧠', title: 'AI/ML', text: 'LLM agents, TensorFlow, PyTorch' },
        { emoji: '🖥️', title: 'Frontend', text: 'React, Next.js' },
        { emoji: '⚙️', title: 'Backend', text: 'Node.js, Python' },
        { emoji: '☁️', title: 'Cloud', text: 'AWS, Docker' },
      ],
    },
  ],
  cta: {
    title: 'Run a compliance team?',
    text: "If you're at an SMB or NBFC and compliance eats your week, I'd love to hear how you work today.",
    links: [
      { label: 'Get in touch', href: '/contact', primary: true },
      { label: 'View source code', href: 'https://github.com/Vishal-code-E' },
    ],
  },
}

export const ecell: DetailPage = {
  slug: 'ecell',
  badge: 'E',
  kicker: 'presidential leadership',
  title: 'E-Cell REC',
  subtitle: 'Leading entrepreneurship initiatives at Raghu Engineering College.',
  chip: 'President · 2025',
  photo: { src: '/img1.jpg', alt: 'Sri Ram speaking on stage with a microphone', caption: 'on stage, E-Cell REC' },
  intro: {
    heading: 'Presidential leadership',
    paragraphs: [
      'As President of the Entrepreneurship Cell at Raghu Engineering College, I lead a vibrant community of aspiring entrepreneurs, innovators, and change-makers. Our mission is to foster entrepreneurial thinking and create a thriving startup ecosystem within our college community.',
      "Under my leadership, E-Cell REC has become a catalyst for innovation, providing students with the resources, mentorship, and opportunities they need to transform their ideas into successful ventures. We've created a platform where creativity meets opportunity.",
    ],
  },
  quote: {
    label: '🎯 Our mission',
    text: 'To inspire, educate, and empower the next generation of entrepreneurs by providing them with the tools, knowledge, and network necessary to turn innovative ideas into impactful businesses.',
  },
  sections: [
    {
      kicker: 'what we do',
      title: 'Key initiatives',
      cards: [
        { emoji: '💡', title: 'Startup Incubation', text: 'Comprehensive support for student startups from ideation to execution and funding.' },
        { emoji: '🎓', title: 'Workshops & Training', text: 'Regular workshops on business development, pitch creation, and entrepreneurial skills.' },
        { emoji: '🏆', title: 'Competitions & Events', text: 'Organizing pitch competitions, hackathons, and entrepreneurship challenges.' },
        { emoji: '🤝', title: 'Industry Mentorship', text: 'Connecting students with successful entrepreneurs and industry experts for guidance.' },
      ],
    },
    {
      kicker: 'the scoreboard',
      title: 'Key achievements',
      cards: [
        { emoji: '🚀', title: '50+ Startup Ideas Incubated', text: 'Successfully guided over 50 student teams through the ideation and validation process.' },
        { emoji: '💰', title: '₹5+ Lakhs in Funding Facilitated', text: 'Helped student startups secure funding through pitch competitions and investor connections.' },
        { emoji: '🎯', title: '100+ Events Organized', text: 'Successfully conducted workshops, seminars, and competitions to foster entrepreneurial spirit.' },
        { emoji: '🌟', title: '500+ Students Impacted', text: 'Directly influenced and mentored over 500 students in entrepreneurial thinking and skills.' },
        { emoji: '🏆', title: 'National Recognition', text: 'E-Cell REC received recognition at various national-level entrepreneurship forums.' },
        { emoji: '🤝', title: 'Industry Partnerships', text: 'Established partnerships with leading startups and corporations for mentorship and internships.' },
      ],
    },
    {
      kicker: 'flagships',
      title: 'Signature programs',
      cards: [
        { emoji: '🚀', title: 'Startup Bootcamp', text: 'Intensive 30-day program covering all aspects of startup development from ideation to pitch.' },
        { emoji: '💡', title: 'Innovation Challenge', text: 'Annual competition where students solve real-world problems with innovative technological solutions.' },
        { emoji: '🎓', title: 'Mentor Connect', text: 'Ongoing mentorship program connecting students with successful entrepreneurs and industry leaders.' },
      ],
    },
  ],
  timeline: {
    kicker: 'how it went',
    title: 'My E-Cell journey',
    items: [
      { year: '2021', title: 'The Beginning', text: 'My journey with E-Cell REC began with a spark of curiosity. Joining as a member, I was immediately drawn to the energy of innovation and the power of entrepreneurship to solve real-world problems. It was here I found my tribe.' },
      { year: '2022', title: 'Digital Foundation', text: 'Stepping up as Web Tech Head, I led the development of our official digital platforms. This role allowed me to bridge technology with our organizational goals, creating a seamless online experience for our community.' },
      { year: '2023', title: 'Rising Leadership', text: 'As responsibilities grew, I took charge of organizing major events and mentoring junior members. This period was crucial in refining my management style and understanding the intricacies of running a successful student body.' },
      { year: '2024', title: 'National Stage', text: 'Participating in the National Entrepreneurship Challenge (NEC) 2024 was a defining moment. It tested our resilience and teamwork against the best in the country, strengthening our resolve to build a world-class ecosystem.' },
      { year: '2024-25', title: 'Taking the Helm', text: 'Ascending to the Presidency was both an honor and a challenge. My focus shifted to strategic growth, fostering a culture of pure innovation, and empowering every member to become a leader in their own right.' },
      { year: '2025', title: 'Vision 2025', text: 'Leading the charge for NEC 2025, we are poised to set new benchmarks. With a renewed vision and a dedicated team, we are transforming E-Cell REC into a powerhouse of entrepreneurial talent and successful ventures.' },
    ],
  },
  cta: {
    title: 'Join the entrepreneurial revolution',
    text: "Be part of a community that's shaping the future of entrepreneurship. Connect with like-minded innovators and turn your ideas into reality.",
    links: [
      { label: 'Visit E-Cell website', href: 'https://ecellrec.app/', primary: true },
      { label: 'Get involved', href: '/contact' },
    ],
  },
}

export const promptCraft: DetailPage = {
  slug: 'prompt-craft',
  badge: 'PC',
  kicker: 'founder project',
  title: 'Prompt Craft',
  subtitle: 'Cutting-edge generative AI solutions platform for modern businesses.',
  chip: 'GenAI Platform',
  intro: {
    heading: 'Revolutionizing AI integration',
    paragraphs: [
      'Prompt Craft represents the next evolution in generative AI solutions. Born from the need to make advanced AI capabilities accessible to businesses of all sizes, this platform bridges the gap between complex AI technology and practical business applications.',
      "As the founder, I've focused on creating an intuitive platform that allows businesses to harness the power of ChatGPT, Gemini, and Perplexity APIs without requiring deep technical expertise.",
    ],
  },
  quote: {
    label: '✨ Core philosophy',
    text: 'AI should enhance human creativity and productivity, not replace it. Prompt Craft makes advanced AI accessible to everyone, regardless of technical background.',
  },
  sections: [
    {
      kicker: 'what it can do',
      title: 'Platform capabilities',
      cards: [
        { emoji: '🎨', title: 'Content Generation', text: 'Create high-quality content, copy, and creative materials with AI-powered tools.' },
        { emoji: '🔍', title: 'Smart Analysis', text: 'Analyze data, documents, and trends with intelligent AI-driven insights.' },
        { emoji: '⚙️', title: 'Workflow Automation', text: 'Streamline business processes with intelligent automation and AI integration.' },
        { emoji: '🔌', title: 'API Integration', text: 'Seamless integration with ChatGPT, Gemini, and Perplexity APIs for maximum flexibility.' },
      ],
    },
    {
      kicker: 'the models',
      title: 'Integrated AI models',
      layout: 'tools',
      cards: [
        { emoji: '💬', title: 'ChatGPT', text: 'Advanced conversational AI for content creation, problem-solving, and creative tasks.' },
        { emoji: '✦', title: 'Gemini', text: "Google's powerful multimodal AI for complex reasoning and analysis tasks." },
        { emoji: '🔎', title: 'Perplexity', text: 'Real-time search and research capabilities for up-to-date information and insights.' },
      ],
    },
    {
      kicker: 'in the wild',
      title: 'Real-world applications',
      cards: [
        { emoji: '📝', title: 'Content Marketing', text: 'Generate blog posts, social media content, and marketing copy that resonates with your audience.' },
        { emoji: '📊', title: 'Business Intelligence', text: 'Transform raw data into actionable insights with AI-powered analysis and reporting.' },
        { emoji: '🎯', title: 'Customer Support', text: 'Enhance customer experience with intelligent chatbots and automated response systems.' },
        { emoji: '🔍', title: 'Research & Development', text: 'Accelerate innovation with AI-assisted research, trend analysis, and competitive intelligence.' },
        { emoji: '⚡', title: 'Process Automation', text: 'Streamline workflows and reduce manual tasks with intelligent automation solutions.' },
        { emoji: '💡', title: 'Creative Projects', text: 'Unlock creative potential with AI-assisted brainstorming, design, and content creation.' },
      ],
    },
  ],
  cta: {
    title: 'Experience the future of AI',
    text: 'Transform your business processes with cutting-edge generative AI. Prompt Craft makes advanced AI accessible, practical, and powerful.',
    links: [
      { label: 'Start your AI journey', href: '/contact', primary: true },
      { label: 'View projects', href: '/projects' },
    ],
  },
}

export const github: DetailPage = {
  slug: 'github',
  badge: '</>',
  kicker: 'open source',
  title: 'GitHub Portfolio',
  subtitle: 'Explore my open source contributions and code repositories.',
  chip: '@Vishal-code-E',
  intro: {
    heading: 'My coding journey',
    paragraphs: [
      'My GitHub profile showcases my journey as a full-stack developer and AI enthusiast. From building AI-native compliance infrastructure at Avataq.ai to crafting generative AI solutions with Prompt Craft, my repositories reflect a passion for innovation and clean code.',
      "You'll find projects spanning machine learning, web development, AI automation, and entrepreneurship tools. Each repository tells a story of problem-solving and technological exploration.",
    ],
  },
  sidebar: [
    { label: '📊 Languages & frameworks', text: 'TypeScript, Python, React, Next.js, TensorFlow, PyTorch, Node.js' },
    { label: '🎯 Specialization', text: 'Agentic AI, Machine Learning, Full-Stack Development, Autonomous Systems' },
  ],
  sections: [
    {
      kicker: 'pinned',
      title: 'Featured repositories',
      cards: [
        { emoji: '🤖', title: 'Avataq.ai Platform', text: 'AI-native infrastructure for compliance teams at SMBs and NBFCs', tags: ['TypeScript', 'AI/ML'] },
        { emoji: '⚡', title: 'Prompt Craft', text: 'Cutting-edge generative AI solutions platform', tags: ['Python', 'GenAI'] },
        { emoji: '🏎️', title: 'F1 ML Analytics', text: 'Aston Martin Formula One machine learning analytics', tags: ['Python', 'Data Science'] },
      ],
    },
  ],
  cta: {
    title: 'Browse the code',
    text: 'Everything I build in the open lives on GitHub — come poke around.',
    links: [{ label: 'Visit GitHub profile', href: 'https://github.com/Vishal-code-E', primary: true }],
  },
}
