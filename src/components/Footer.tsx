import { Github, Linkedin, Mail, Heart } from 'lucide-react'

import { EMAIL, GITHUB, LINKEDIN, MEDIUM, SUBSTACK } from '../data/contact'
import substack from '../assets/images/substack.png'
import medium from '../assets/images/medium.png'

export default function Footer() {
  const scrollToSection = (sectionID: string) => {
    const element = document.getElementById(sectionID)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  };

  const links = ['about', 'skills', 'experience', 'projects', 'contact'];

  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800 selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold tracking-tight text-white">
                Jorge Castillo
              </h3>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">
                Sr. Full-Stack Engineer
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Focused on designing decouple architectures, building expressive core primitives, and implementing domain-driven design structures.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {links.map((link) => (
                <li key={link}>
                  <button
                    className="cursor-pointer hover:text-white capitalize transition-colors text-left"
                    type="button"
                    onClick={() => scrollToSection(link)}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Connections
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 border border-slate-700/50 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={SUBSTACK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 bg-slate-800 border border-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors group"
                title="Substack Newsletter"
              >
                <img
                  className="h-4 w-4 object-contain invert brightness-0 opacity-70 group-hover:opacity-100 transition-opacity"
                  src={substack}
                  alt=""
                  draggable="false"
                />
              </a>
              <a
                href={MEDIUM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 bg-slate-800 border border-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors group"
                title="Medium Publication"
              >
                <img
                  className="h-4 w-4 object-contain invert brightness-0 opacity-70 group-hover:opacity-100 transition-opacity"
                  src={medium}
                  alt=""
                  draggable="false"
                />
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 border border-slate-700/50 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                title="GitHub Repositories"
              >
                <Github size={16} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="p-2 bg-slate-800 border border-slate-700/50 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                title="Email Communication"
              >
                <Mail size={16} />
              </a>
            </div>
            <div className="text-xs text-slate-500 font-medium tracking-wide truncate">
              {EMAIL}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/80 mt-12 pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Jorge Castillo Díaz. All rights reserved.</p>
          <p className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 border border-slate-800 rounded-lg">
            Engineered with <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={12} /> for resilient systems
          </p>
        </div>
      </div>
    </footer>
  )
}
