'use client'

import type { ReactNode } from 'react'
import { MotionConfig } from 'motion/react'
import Nav from './Nav'
import { Footer } from './Contact'

/** The grey graph-paper desk + the notebook "page" card every route sits on. */
export default function Shell({ children, home = true }: { children: ReactNode; home?: boolean }) {
  return (
    // "user" = animations follow the OS prefers-reduced-motion setting
    <MotionConfig reducedMotion="user">
      <div className="px-2 py-2 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-mustard focus:px-4 focus:py-2 focus:font-mono focus:text-xs"
        >
          Skip to content
        </a>
        {/* the notebook page card — overflow-clip (not hidden) keeps the nav sticky */}
        <div className="paper relative mx-auto max-w-[1320px] overflow-clip rounded-[4px] shadow-[0_30px_80px_-30px_rgba(0,0,0,.55)] ring-1 ring-black/10">
          <Nav home={home} />
          <main id="main">{children}</main>
          <Footer home={home} />
        </div>
      </div>
    </MotionConfig>
  )
}
