import { Github, Linkedin, Mail, MapPin, Code, Layers } from 'lucide-react'

import { GITHUB, EMAIL, LINKEDIN, SUBSTACK, MEDIUM } from '../data/contact'
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
    <section className="min-h-screen pt-20 bg-linear-to-br from-slate-50 to-blue-50/50 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="space-y-8 lg:col-span-7 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hi, I'm <span className="text-blue-600 bg-clip-text">Jorge Castillo</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-700 font-semibold tracking-wide">
                Sr. Full-Stack Engineer
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
              {SUMMARY}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToContact}
                className="cursor-pointer bg-blue-600 text-white px-8 py-3.5 rounded-xl hover:bg-blue-700 active:scale-98 transition-all font-medium shadow-md shadow-blue-600/10"
              >
                Get In Touch
              </button>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-200 bg-white text-slate-700 px-8 py-3.5 rounded-xl hover:border-slate-300 hover:bg-slate-50/80 active:scale-98 transition-all font-medium flex items-center justify-center gap-2 shadow-sm"
              >
                <Github size={20} className="text-slate-600" />
                View GitHub
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 justify-center md:justify-start border-t border-slate-200/60 max-w-xl">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <Mail size={18} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                <span className="text-sm font-medium">{EMAIL}</span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <Linkedin size={18} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={18} className="text-slate-400" />
                <span className="text-sm font-medium">Mexico</span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5 w-full max-w-md mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/80 p-8 border border-slate-100">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-500 rounded-2xl blur-3xl opacity-15 -z-10 scale-105 pointer-events-none"></div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-slate-50 shadow-inner"
                      src={schorts}
                      draggable="false"
                      alt="Jorge Castillo Profile Portrait"
                    />
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" title="Available for architecture & engineering roles"></span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Jorge Castillo
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mt-0.5">
                    Oaxaca, MX
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Layers size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">Architectural Patterns</p>
                      <p className="text-xs text-slate-500">DDD, Hexagonal (Ports & Adapters), Event-Driven</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Code size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">Core Stack Specialty</p>
                      <p className="text-xs text-slate-500">TypeScript, NestJS, React, Ruby on Rails</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-2 pt-4 border-t border-slate-100">
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
                    <img className="h-5 object-contain" src={substack} draggable="false" alt="Substack Icon" />
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
      </div>
    </section>
  )
}
