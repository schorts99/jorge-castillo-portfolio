import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

import { GITHUB, EMAIL, LINKEDIN, PHONE, SUBSTACK, MEDIUM } from '../data/contact'
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
    <section className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 to-blue-50 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Hi, I'm <span className="text-blue-600">
                  Jorge Castillo
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-600 font-medium">
                Software Engineer
              </h2>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed max-w-lg">
              {SUMMARY}
            </p>

            <div className="flex gap-4">
              <button
                onClick={scrollToContact}
                className="cursor-pointer w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get In Touch
              </button>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto border border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors font-medium flex items-center gap-2"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 justify-center md:justify-start">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">
                  {EMAIL}
                </span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={18} />
                <span className="text-sm">
                  LinkedIn
                </span>
              </a>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={18} />
                <span className="text-sm">
                  Mexico
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-3xl opacity-20 -z-10 scale-110"></div>
                <div className="space-y-6">
                  <div className="text-center">
                    <img
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                      src={schorts}
                      draggable="false"
                    />
                    <h3 className="text-xl font-bold text-slate-900">
                      Jorge Castillo
                    </h3>
                    <p className="text-slate-600">
                      Software Engineer
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Phone size={16} />
                      <span>
                        {PHONE}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Mail size={16} />
                      <span>
                        {EMAIL}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <MapPin size={16} />
                      <span>Oaxaca, Mexico</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 pt-4 border-t border-slate-200">
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={SUBSTACK}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Substack"
                      className="flex items-center px-1 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <img
                        className="h-7"
                        src={substack}
                        draggable="false"
                      />
                    </a>
                    <a
                      href={MEDIUM}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Medium"
                      className="flex items-center px-1 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <img
                        className="h-7"
                        src={medium}
                        draggable="false"
                        style={{
                          filter: 'sepia(100%) saturate(0.15) hue-rotate(257deg) brightness(0.3) contrast(0.3)',
                        }}
                      />
                    </a>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
