import { Github, Linkedin, Mail } from 'lucide-react'

import { EMAIL, GITHUB, LINKEDIN, MEDIUM, SUBSTACK } from '../data/contact'
import substack from '../assets/images/substack.png'
import medium from '../assets/images/medium.png'

export default function Footer({
  onCookieSettings,
}: {
  onCookieSettings: () => void
}) {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'how-i-work', label: 'How I work' },
    { id: 'projects', label: 'Selected work' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'simply-products', label: 'Products' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800 selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold tracking-tight text-white">
                Jorge Castillo
              </h3>
              <span className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] font-semibold text-slate-300">
                Senior Full-Stack Engineer
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              I build useful products and resilient software, with clear
              architecture from the domain to production.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="md:col-span-3 md:col-start-7 space-y-4"
          >
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    className="inline-flex min-h-8 items-center text-left transition-colors hover:text-white"
                    href={`#${link.id}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Connections
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Jorge on LinkedIn (opens in a new tab)"
              >
                <Linkedin size={16} aria-hidden="true" />
              </a>
              <a
                href={SUBSTACK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-800 transition-colors hover:bg-slate-700"
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
                className="group inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-800 transition-colors hover:bg-slate-700"
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
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Jorge on GitHub (opens in a new tab)"
              >
                <Github size={16} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Email Jorge"
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="text-xs text-slate-500 font-medium tracking-wide truncate">
              {EMAIL}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/80 mt-12 pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>© {new Date().getFullYear()} Jorge Castillo</p>
            <button
              className="hover:text-white transition-colors"
              type="button"
              onClick={onCookieSettings}
            >
              Cookie settings
            </button>
          </div>
          <p className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5">
            Built with care in Oaxaca, Mexico
          </p>
        </div>
      </div>
    </footer>
  )
}
