# Sri Ram — portfolio

Single-page scrapbook portfolio. React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion 11. Fonts are self-hosted via @fontsource (Pixelify Sans, Gochi Hand, Caveat, Inter, JetBrains Mono).

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```
Deploy: push to GitHub → import on Vercel/Netlify (framework: Vite, build `npm run build`, output `dist`).

## Structure
```
public/
  hero-cutout.webp   ← hero cutout (transparent). Also hero-cutout.png fallback
  me-polaroid.jpg    ← square photo for polaroids
  me-portrait.jpg    ← og:image
  avatar.jpg         ← round avatar badge in hero
  favicon.svg
  (optional) workspace.jpg, projects/*.jpg
src/
  data/content.js    ← ALL copy: name, links, bio, skills, projects, case study, playground, recognition
  components/
    Nav.jsx          sticky nav, active-section pill, socials, mobile menu
    Hero.jsx         name behind head (z-layered), stickers, arrows, cutout, CTA
    About.jsx        "what's up", polaroids, torn skill tags
    Works.jsx        stacked folder-tab project cards (sticky stack)
    CaseStudy.jsx    meta sticky notes, hero image, results
    Playground.jsx   draggable scrapbook collage
    Contact.jsx      Recognition, Let's Talk, Footer
    mockups/Mockups.jsx  illustrated product UIs (replace with screenshots)
    ui/primitives.jsx    Tape, Polaroid, TornTag, Sticker, StickyNote, SketchArrow, Reveal, PixelHeading
    ui/icons.jsx
  index.css          paper/ruled lines, graph-paper desk, tape, torn edges, chamfers, reduced-motion
```

## To fill in (search for `[` in content.js)
- `email`, `linkedin`, `instagram` handles
- project dates `[MMM YYYY]`
- case-study Timeline, Team, and the two result metrics `[X]`

## Swapping assets
- New hero photo: replace `public/hero-cutout.webp` (+ `.png`) with a transparent PNG/WebP cropped head → just below the hand. Keep ~1100px wide.
- Real project screenshots: add `image: '/projects/avataq.jpg'` to a project in content.js; it replaces the illustrated mockup.
- Workspace photo: replace `<WorkspaceArt />` in About.jsx with `<img src="/workspace.jpg" … />` (or pass `src` to the Polaroid).

## Motion
Framer Motion respects `prefers-reduced-motion` globally (`MotionConfig reducedMotion="user"`), and CSS floats/draw-ins are disabled in the same media query.
