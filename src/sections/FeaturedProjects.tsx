import { useState } from 'react'
import {
  ArrowRight,
  ExternalLink,
  Github,
  Layers,
  Terminal,
} from 'lucide-react'
import { FEATURED_PROJECTS } from '@/data/projects'

type ProjectType = 'CLI' | 'TOOL' | 'WEB' | 'MOBILE' | 'PACKAGE' | 'DESKTOP'

const PROJECT_TYPE_CONFIG: Record<
  ProjectType,
  { label: string; className: string }
> = {
  PACKAGE: {
    label: 'Open Source Package',
    className: 'bg-rose-50 text-rose-700 border border-rose-100',
  },
  CLI: {
    label: 'CLI Tool',
    className: 'bg-violet-50 text-violet-700 border border-violet-100',
  },
  TOOL: {
    label: 'Developer Tool',
    className: 'bg-cyan-50 text-cyan-700 border border-cyan-100',
  },
  MOBILE: {
    label: 'Mobile Application',
    className: 'bg-amber-50 text-amber-700 border border-amber-100',
  },
  WEB: {
    label: 'Web Application',
    className: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  },
  DESKTOP: {
    label: 'Desktop Application',
    className: 'bg-orange-50 text-orange-700 border border-orange-100',
  },
}

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState<
    'all' | 'architecture' | 'applications'
  >('all')

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    if (activeTab === 'all') return true

    if (activeTab === 'architecture') {
      return (
        project.type === 'PACKAGE' ||
        project.type === 'CLI' ||
        project.type === 'TOOL'
      )
    }

    return (
      project.type === 'WEB' ||
      project.type === 'MOBILE' ||
      project.type === 'DESKTOP'
    )
  })

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            Selected work
          </span>
          <h2
            id="projects-title"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Projects built to solve real problems.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A mix of open-source foundations and useful applications. Each
            project starts with a clear problem and the right level of
            engineering for the job.
          </p>
        </div>

        <div className="mb-8">
          <div
            className="inline-flex max-w-full flex-wrap gap-1 rounded-xl border border-slate-200 bg-white p-1"
            role="group"
            aria-label="Filter projects"
          >
            <button
              onClick={() => setActiveTab('all')}
              aria-pressed={activeTab === 'all'}
              className={`min-h-10 cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                activeTab === 'all'
                  ? 'bg-slate-950 text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              aria-pressed={activeTab === 'architecture'}
              className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-slate-950 text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <Terminal size={14} aria-hidden="true" />
              Tools & packages
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              aria-pressed={activeTab === 'applications'}
              className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                activeTab === 'applications'
                  ? 'bg-slate-950 text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <Layers size={14} aria-hidden="true" />
              Applications
            </button>
          </div>
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Showing {filteredProjects.length}{' '}
          {filteredProjects.length === 1 ? 'project' : 'projects'}.
        </p>

        <div className="grid items-stretch gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => {
            const typeConfig = PROJECT_TYPE_CONFIG[project.type as ProjectType]

            return (
              <div
                key={project.name}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 md:p-7"
              >
                <div>
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-800">
                      {project.role}
                    </span>
                    <span
                      className={`rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${typeConfig.className}`}
                    >
                      {typeConfig.label}
                    </span>
                  </div>

                  <div className="mb-2 flex flex-wrap items-center gap-x-2">
                    <h3 className="text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-blue-700">
                      {project.name}
                    </h3>
                    {project.period && (
                      <span className="text-xs font-medium text-slate-500">
                        {project.period}
                      </span>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-700"
                        aria-label={`Visit ${project.name} (opens in a new tab)`}
                      >
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    )}
                    {'repository' in project && project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-950"
                        aria-label={`View ${project.name} source code on GitHub (opens in a new tab)`}
                      >
                        <Github size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <p className="mb-4 text-sm leading-6 text-slate-700">
                    {project.description}
                  </p>

                  <ul className="mb-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                          aria-hidden="true"
                        />
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600"
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

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="mb-1 text-base font-bold text-slate-950">
              Want to explore more?
            </h3>
            <p className="max-w-lg text-sm leading-6 text-slate-600">
              Browse the source code, experiments, and tools on my GitHub
              profile.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col items-stretch gap-2 sm:w-auto sm:flex-row">
            <a
              href="https://github.com/schorts99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Get in touch
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
