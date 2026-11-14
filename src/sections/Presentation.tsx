import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react'

import { EMAIL, GITHUB, LINKEDIN } from '../data/contact'
import { SUMMARY } from '../data/summary'
import jorgeCoding from '../assets/images/illustrations/jorge-coding.webp'

export default function Presentation() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[min(800px,100svh)] items-center overflow-hidden bg-slate-950 pt-20 text-white selection:bg-blue-400 selection:text-slate-950"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[min(75vw,46rem)] w-[min(75vw,46rem)] rounded-full bg-blue-700/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 h-96 w-96 rounded-full bg-indigo-700/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                Oaxaca, Mexico <span aria-hidden="true">·</span> Independent
                builder
              </span>
              <h1
                id="hero-title"
                className="text-5xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
              >
                Software built to <span className="text-blue-300">last.</span>
              </h1>
              <h2 className="text-lg font-medium tracking-[-0.02em] text-slate-300 sm:text-xl">
                I’m Jorge Castillo, a senior full-stack engineer.
              </h2>
            </div>

            <p className="mx-auto max-w-xl text-base leading-8 text-slate-300 sm:text-lg md:mx-0">
              {SUMMARY}
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition-colors hover:bg-blue-400"
              >
                Explore my work
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Mail size={17} />
                Get in touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FileDown size={17} aria-hidden="true" />
                Download résumé
              </a>
            </div>

            <div className="flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-3 border-t border-white/15 pt-5 md:justify-start">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex min-h-11 items-center gap-2 text-slate-300 transition-colors hover:text-white"
              >
                <Mail size={17} aria-hidden="true" />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 text-slate-300 transition-colors hover:text-white"
              >
                <Linkedin size={17} aria-hidden="true" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <div className="inline-flex min-h-11 items-center gap-2 text-slate-300">
                <MapPin size={17} aria-hidden="true" />
                <span className="text-sm font-medium">Oaxaca, Mexico</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              className="pointer-events-none absolute inset-x-8 top-8 h-64 rounded-full bg-blue-400/20 blur-3xl"
              aria-hidden="true"
            ></div>
            <div className="relative rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.03] p-3 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-4">
              <img
                className="relative mx-auto w-full object-contain drop-shadow-2xl"
                src={jorgeCoding}
                draggable="false"
                alt="Illustration of Jorge building software at his laptop"
              />
              <div className="rounded-2xl border border-white/10 bg-slate-950/75 p-6 sm:p-7">
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Jorge Castillo
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  Senior Full-Stack Engineer
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  From domain modeling to dependable production systems.
                </p>

                <div className="mt-6 border-t border-white/15 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Focus
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    TypeScript · React · Node.js
                    <br />
                    Domain-driven design · Distributed systems
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-2 border-t border-white/15 pt-4">
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Jorge on GitHub (opens in a new tab)"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Github size={19} aria-hidden="true" />
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Jorge on LinkedIn (opens in a new tab)"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Linkedin size={19} aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    aria-label="Email Jorge"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Mail size={19} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
