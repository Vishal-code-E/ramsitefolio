'use client';

import React from 'react';
import { AnimatedTestimonials } from '../../components/ui/animated-testimonials';

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

const AVATAR_GRADIENTS = [
  'from-purple-500 to-pink-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-violet-500',
];

function avatarSvg(name: string, gradient: string): string {
  const [from, to] = gradient
    .replace('from-', '')
    .replace(' to-', ',')
    .split(',');

  const colorMap: Record<string, string> = {
    'purple-500': '#a855f7',
    'pink-500': '#ec4899',
    'blue-500': '#3b82f6',
    'cyan-500': '#06b6d4',
    'green-500': '#22c55e',
    'emerald-500': '#10b981',
    'orange-500': '#f97316',
    'red-500': '#ef4444',
    'indigo-500': '#6366f1',
    'violet-500': '#8b5cf6',
  };

  const c1 = colorMap[from] ?? '#6366f1';
  const c2 = colorMap[to] ?? '#8b5cf6';
  const label = initials(name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect width="500" height="500" fill="url(#g)"/><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="200" fill="white">${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const peopleData = [
  {
    quote: "Working with Ram has been an incredible experience. His expertise in AI and full-stack development brought our vision to life with exceptional precision and creativity.",
    name: "Sarah Johnson",
    designation: "CTO at TechVentures",
  },
  {
    quote: "Ram's ability to transform complex problems into elegant solutions is remarkable. His work on our AI platform exceeded all expectations and delivered real business value.",
    name: "Michael Chen",
    designation: "Founder at InnovateLabs",
  },
  {
    quote: "An outstanding developer with a keen eye for detail. Ram's contributions to our startup were instrumental in securing our Series A funding. Highly recommended!",
    name: "Emily Rodriguez",
    designation: "CEO at StartupHub",
  },
  {
    quote: "Ram's technical prowess combined with his business acumen makes him a rare find. He doesn't just code—he builds products that users love and businesses need.",
    name: "David Park",
    designation: "Product Manager at CloudScale",
  },
  {
    quote: "Collaborating with Ram on our machine learning project was a game-changer. His innovative approach and dedication to excellence set him apart from other developers.",
    name: "Priya Sharma",
    designation: "Head of AI at DataDriven Inc",
  },
];

const testimonials = peopleData.map((p, i) => ({
  ...p,
  src: avatarSvg(p.name, AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]),
}));

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Dark Blue Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Testimonials from clients and collaborators I&apos;ve worked with
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default Testimonials;
