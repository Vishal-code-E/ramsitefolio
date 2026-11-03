const base = { 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const Icon = {
  star: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z" fill="currentColor" stroke="none" /></svg>
  ),
  user: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="8" r="4" fill="currentColor" stroke="none" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" fill="currentColor" stroke="none" /></svg>
  ),
  grid: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><g fill="currentColor" stroke="none"><rect x="3" y="3" width="7.5" height="7.5" rx="1" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1" /></g></svg>
  ),
  file: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 2h8l5 5v15H6z" fill="currentColor" stroke="none" /><path d="M14 2v5h5" stroke="#fafaf7" /></svg>
  ),
  diamond: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 2l9 10-9 10-9-10z" fill="currentColor" stroke="none" /></svg>
  ),
  heart: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 20s-7.5-4.6-9.3-9.2C1.5 7.4 3.7 4 7.2 4c2 0 3.5 1.1 4.8 2.8C13.3 5.1 14.8 4 16.8 4c3.5 0 5.7 3.4 4.5 6.8C19.5 15.4 12 20 12 20z" fill="currentColor" stroke="none" /></svg>
  ),
  arrowUR: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M7 17L17 7M8 7h9v9" /></svg>
  ),
  arrowR: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
  ),
  menu: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  ),
  close: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}><path fill="currentColor" d="M5.3 8.4H2.2V21h3.1V8.4zM3.8 3a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zM21.8 13.9c0-3.4-.7-6-4.7-6-1.9 0-3.2 1-3.7 2h-.1V8.4h-3V21h3.1v-6.2c0-1.6.3-3.2 2.4-3.2 2 0 2 1.9 2 3.3V21h3.1z" /></svg>
  ),
  github: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}><path fill="currentColor" d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0012 2z" /></svg>
  ),
  instagram: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  ),
}
