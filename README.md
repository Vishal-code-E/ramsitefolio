# Sri Ram — portfolio

Scrapbook-style portfolio. **Next.js 15 (App Router) + React 19 + Tailwind CSS 3 + Motion**. Fonts are self-hosted via `@fontsource` (Pixelify Sans, Gochi Hand, Caveat, Inter, JetBrains Mono).

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
Deploy on Vercel as a normal Next.js project (no extra config).

## Structure
```
data/content.ts      ← ALL home-page copy: profile, links, bio, experience, projects, testimonials, gallery
data/pages.ts        ← copy for /avataq, /ecell, /prompt-craft, /github
app/                 ← routes (/, /gallery, /avataq, /ecell, /prompt-craft, /github) + globals.css
components/
  Shell.tsx          graph-paper desk + notebook page card, nav, footer
  Nav.tsx            sticky nav, scroll-spy pill, socials, mobile menu
  Hero.tsx           name behind head, stickers, arrows, cutout photo
  About.tsx          bio, polaroids, skill tags, toolbox
  Experience.tsx     sticky-note timeline
  Works.tsx          stacked folder-tab project cards
  Testimonials.tsx   sticky-note quotes
  Blog.tsx           Hashnode posts (lib/hashnode.ts) + newsletter note
  Playground.tsx     draggable collage → /gallery
  Contact.tsx        recognition strip, Web3Forms contact form, footer
  DetailPage.tsx     shared layout for the project / E-Cell pages
  GalleryWall.tsx    polaroid wall + lightbox
  mockups/           illustrated product UIs (swap with real screenshots via `image` in content.ts)
  ui/                primitives (Tape, Polaroid, TornTag, StickyNote, PixelHeading…) + icons
design-reference/    the original Vite scrapbook design this site was ported from (not built)
```

## Swapping assets
- Hero photo: replace `public/hero-cutout.webp` (transparent, ~1100px wide).
- Project screenshots: add `image: '/projects/x.jpg'` to a project in `data/content.ts`.
- Gallery: edit the `gallery` list in `data/content.ts` (files live in `public/`).

## Motion
Animations follow the OS `prefers-reduced-motion` setting (`MotionConfig reducedMotion="user"`); CSS floats/draw-ins are disabled in the same media query.
