'use client'

import type { ReactNode } from 'react'
import { MotionConfig } from 'motion/react'
import Nav from './Nav'
import { Footer } from './Contact'

/** Full-width notebook-paper page with a fixed nav, used by every route. */
export default function Shell({ children }: { children: ReactNode }) {
  return (
    // "user" = animations follow the OS prefers-reduced-motion setting
    <MotionConfig reducedMotion="user">
      <div className="paper flex min-h-screen w-full flex-col overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-mustard focus:px-4 focus:py-2 focus:font-mono focus:text-xs"
        >
          Skip to content
        </a>
        {/* nav is fixed to the viewport; pad the content so nothing hides under it */}
        <Nav />
        <main id="main" className="flex-1 pt-[56px]">
          {children}
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
