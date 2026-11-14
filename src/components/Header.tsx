import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'

import { EMAIL, GITHUB, LINKEDIN, MEDIUM, SUBSTACK } from '../data/contact'
import substack from '../assets/images/substack.png'
import medium from '../assets/images/medium.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Close on scroll
  useEffect(() => {
    if (!isMenuOpen) return

    const handleScroll = () => setIsMenuOpen(false)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // Close on outside click
  useEffect(() => {
    if (!isMenuOpen) return

    const handlePointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [isMenuOpen])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 bg-white/85 backdrop-blur-xl z-50 border-b border-slate-200/70 shadow-[0_8px_30px_-24px_rgba(15,23,42,0.35)] selection:bg-blue-500 selection:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="#top"
            className="rounded-sm text-base font-bold tracking-tight text-slate-950"
            aria-label="Jorge Castillo, home"
          >
            Jorge Castillo<span className="text-blue-700">.</span>
          </a>

          <DesktopNavigation />
          <DesktopContactIcons />

          <button
            ref={menuButtonRef}
            className="md:hidden text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <MobileNavigation
          isOpen={isMenuOpen}
          onNavigate={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  )
}

function DesktopNavigation() {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'simply-products', label: 'Products' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
  ]

  return (
    <nav
      aria-label="Main navigation"
      className="hidden md:flex items-center gap-5"
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="inline-flex min-h-11 items-center text-xs font-semibold text-slate-600 transition-colors hover:text-blue-700"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

function DesktopContactIcons() {
  return (
    <div
      aria-label="Social links"
      className="hidden items-center gap-1 border-l border-slate-200 pl-3 md:flex"
    >
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
        aria-label="Email Jorge"
      >
        <Mail size={16} aria-hidden="true" />
      </a>
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
        aria-label="Jorge on LinkedIn (opens in a new tab)"
      >
        <Linkedin size={16} aria-hidden="true" />
      </a>
      <a
        href={SUBSTACK}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg transition-colors hover:bg-slate-100"
        aria-label="Jorge on Substack (opens in a new tab)"
      >
        <img
          className="h-4 w-4 object-contain opacity-70 transition-opacity group-hover:opacity-100"
          src={substack}
          alt=""
          draggable="false"
        />
      </a>
      <a
        href={MEDIUM}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg transition-colors hover:bg-slate-100"
        aria-label="Jorge on Medium (opens in a new tab)"
      >
        <img
          className="h-4 w-4 object-contain opacity-70 transition-opacity group-hover:opacity-100"
          src={medium}
          alt=""
          draggable="false"
        />
      </a>
      <a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
        aria-label="Jorge on GitHub (opens in a new tab)"
      >
        <Github size={16} aria-hidden="true" />
      </a>
    </div>
  )
}

function MobileNavigation({
  onNavigate,
  isOpen,
}: {
  onNavigate: () => void
  isOpen: boolean
}) {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Selected work' },
    { id: 'simply-products', label: 'Products' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div
      id="mobile-navigation"
      hidden={!isOpen}
      className="border-t border-slate-100 py-4 md:hidden"
    >
      <nav aria-label="Mobile navigation" className="flex flex-col">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={onNavigate}
            className="inline-flex min-h-11 items-center py-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
          >
            {link.label}
          </a>
        ))}

        <div className="flex items-center gap-2 border-t border-slate-100 pt-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
            aria-label="Email Jorge"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
            aria-label="Jorge on LinkedIn (opens in a new tab)"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            href={SUBSTACK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors hover:bg-slate-100"
            aria-label="Jorge on Substack (opens in a new tab)"
          >
            <img
              className="h-4 w-4 object-contain opacity-70"
              src={substack}
              alt=""
              draggable="false"
            />
          </a>
          <a
            href={MEDIUM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors hover:bg-slate-100"
            aria-label="Jorge on Medium (opens in a new tab)"
          >
            <img
              className="h-4 w-4 object-contain opacity-70"
              src={medium}
              alt=""
              draggable="false"
            />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
            aria-label="Jorge on GitHub (opens in a new tab)"
          >
            <Github size={18} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </div>
  )
}
