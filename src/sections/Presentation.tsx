import {
  ArrowRight,
  Code,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react'

import { EMAIL, GITHUB, LINKEDIN, MEDIUM, SUBSTACK } from '../data/contact'
import { SUMMARY } from '../data/summary'
import schorts from '../assets/images/schorts.webp'
import substack from '../assets/images/substack.png'
import medium from '../assets/images/medium.png'

export default function Presentation() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="top"
      className="min-h-[90svh] pt-20 bg-linear-to-br from-white via-slate-50/70 to-blue-50/60 flex items-center relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-[min(48vw,42rem)] h-[min(48vw,42rem)] bg-blue-100/35 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="space-y-8 lg:col-span-7 text-center md:text-left">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-800 bg-white/80 border border-emerald-200/80 px-3.5 py-2 rounded-full shadow-sm mb-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Open to Opportunities
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-[-0.055em] leading-[1.02]">
                Hi, I'm{' '}
                <span className="bg-linear-to-r from-blue-700 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  Jorge Castillo
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl text-slate-600 font-semibold tracking-[-0.02em]">
                Sr. Full-Stack Engineer
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-8 max-w-xl mx-auto md:mx-0">
              {SUMMARY}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={scrollToContact}
                className="cursor-pointer bg-slate-950 text-white px-6 py-3.5 rounded-xl hover:bg-blue-700 active:scale-98 transition-all font-semibold shadow-lg shadow-slate-900/10 inline-flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight size={16} />
              </button>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-200/90 bg-white/80 text-slate-700 px-6 py-3.5 rounded-xl hover:border-slate-300 hover:bg-white active:scale-98 transition-all font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <Github size={20} className="text-slate-600" />
                View GitHub
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-5 justify-center md:justify-start border-t border-slate-200/70 max-w-xl">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <Mail
                  size={18}
                  className="text-slate-400 group-hover:text-blue-500 transition-colors"
                />
                <span className="text-sm font-medium">{EMAIL}</span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <Linkedin
                  size={18}
                  className="text-slate-400 group-hover:text-blue-500 transition-colors"
                />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={18} className="text-slate-400" />
                <span className="text-sm font-medium">Mexico</span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5 w-full max-w-md mx-auto">
            <div
              className="absolute -inset-4 bg-linear-to-br from-blue-200/60 to-indigo-100/60 rounded-[2rem] blur-2xl pointer-events-none"
              aria-hidden="true"
            ></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-[1.75rem] shadow-2xl shadow-slate-300/50 p-6 sm:p-8 border border-white">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Profile
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Oaxaca, Mexico
                </span>
              </div>

              <div className="flex items-center gap-5">
                <div className="relative shrink-0">
                  <img
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-slate-200 shadow-sm"
                    src={schorts}
                    draggable="false"
                    alt="Jorge Castillo Profile Portrait"
                  />
                  <span
                    className="absolute -right-2 -bottom-2 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full"
                    title="Available for architecture & engineering roles"
                  ></span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Jorge Castillo
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    Senior Full-Stack Engineer
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Building resilient software, from domain to deployment.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-7">
                <div className="flex items-start gap-3 text-sm text-slate-600 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                  <Layers size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800">
                      Architectural Patterns
                    </p>
                    <p className="text-xs text-slate-500">
                      Clean Architecture, DDD, Hexagonal, CQRS, Event-Driven
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                  <Code size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800">
                      Core Stack Specialty
                    </p>
                    <p className="text-xs text-slate-500">
                      TypeScript, NestJS, React, Next.js, Ruby on Rails
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center gap-2 pt-5 mt-5 border-t border-slate-100">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect on LinkedIn"
                  className="p-2.5 bg-blue-50/60 text-blue-600 rounded-xl hover:bg-blue-100/80 hover:scale-105 transition-all"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href={SUBSTACK}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Read my articles on Substack"
                  className="flex items-center justify-center p-2.5 bg-orange-50/60 rounded-xl hover:bg-orange-100/80 hover:scale-105 transition-all"
                >
                  <img
                    className="h-5 object-contain"
                    src={substack}
                    draggable="false"
                    alt="Substack Icon"
                  />
                </a>

                <a
                  href={MEDIUM}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow on Medium"
                  className="flex items-center justify-center p-2.5 bg-slate-50 rounded-xl hover:bg-slate-100 hover:scale-105 transition-all"
                >
                  <img
                    className="h-5 object-contain grayscale opacity-80 contrast-125"
                    src={medium}
                    draggable="false"
                    alt="Medium Icon"
                  />
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Explore Repositories on GitHub"
                  className="p-2.5 bg-slate-50 text-slate-700 rounded-xl hover:bg-slate-100 hover:scale-105 transition-all"
                >
                  <Github size={20} />
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  title="Send an email"
                  className="p-2.5 bg-emerald-50/60 text-emerald-600 rounded-xl hover:bg-emerald-100/80 hover:scale-105 transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
