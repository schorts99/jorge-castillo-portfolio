import { useState } from 'react'
import { ExternalLink, Layers, Terminal, ArrowRight, Github } from 'lucide-react'
import { FEATURED_PROJECTS } from '@/data/projects'

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState<'all' | 'architecture' | 'applications'>('all')
  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    if (activeTab === 'all') return true

    const isPackage = project.technologies.includes('NPM Package') || 
                      project.technologies.includes('Architecture') ||
                      project.name.includes('Kernel')
                      
    if (activeTab === 'architecture') return isPackage
    if (activeTab === 'applications') return !isPackage

    return true
  })

  return (
    <section id="projects" className="py-20 bg-slate-50/60 selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Engineering Showcases
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-normal">
            Deep-dives into domain primitives, open-source decoupling abstractions, and production-grade applications.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-200/60 backdrop-blur-sm rounded-xl border border-slate-200/40">
            <button
              onClick={() => setActiveTab('all')}
              className={`cursor-pointer px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`cursor-pointer px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal size={14} />
              Architecture & Packages
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`cursor-pointer px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'applications'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers size={14} />
              Applications
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 min-h-[400px] transition-all duration-300">
          {filteredProjects.map((project) => {
            const isNpmPackage =
              project.website.includes('npmjs.com') ||
              project.website.includes('github.com')

            return (
              <div 
                key={project.name}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md tracking-wide">
                      {project.role}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                      isNpmPackage 
                        ? 'bg-rose-50 text-rose-700 border border-rose-100' 
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    }`}>
                      {isNpmPackage ? 'Open Source Package' : 'Cloud Native App'}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                      {project.name}
                    </h3>
                    {project.website && (
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-blue-600 transition-colors p-1"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <p className="text-sm font-medium text-slate-800 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100/80 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="text-xs leading-relaxed text-slate-600 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300" />
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-50">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[11px] font-medium text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl border border-slate-200/60 p-8 text-center max-w-3xl mx-auto shadow-sm">
          <h4 className="text-base font-bold text-slate-900 mb-1">
            Looking for more architectural patterns?
          </h4>
          <p className="text-sm text-slate-500 mb-6 max-w-lg mx-auto">
            My source repositories include sandbox experiments exploring distributed setups, state machines, and environment configs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <a
              href="https://github.com/schorts99"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl transition-all duration-200 font-semibold text-sm shadow-sm"
            >
              <Github size={16} />
              Explore GitHub Profile
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-xl transition-all duration-200 font-semibold text-sm"
            >
              Let's Connect
              <ArrowRight size={14} className="text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
