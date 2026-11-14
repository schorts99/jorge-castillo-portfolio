import { Briefcase, Calendar, ExternalLink, Layers } from 'lucide-react'
import { WORKS } from '@/data/work-experience'

export default function WorkExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            Experience
          </span>
          <h2
            id="experience-title"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Teams, products, and problems.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            My experience spans product teams, consulting, and independent
            projects—from leading frontend work to building full-stack systems.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-100 ml-4 md:ml-60 space-y-16">
          {WORKS.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="group relative"
            >
              <div className="absolute hidden md:block w-48 -left-60 top-1 text-right pr-6">
                <div className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors duration-200">
                  {job.company}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                  {job.period}
                </div>
                {job.website && (
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${job.company} website (opens in a new tab)`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-blue-500 hover:text-blue-600 mt-2 transition-colors"
                  >
                    Visit site <ExternalLink size={12} />
                  </a>
                )}
              </div>

              <div className="absolute -left-[11px] top-2 w-5 h-5 bg-white rounded-full border-2 border-slate-300 group-hover:border-blue-600 group-hover:bg-blue-50 transition-all duration-300 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors duration-300"></div>
              </div>

              <div className="pl-6 md:pl-8">
                <div className="bg-slate-50/50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:bg-white transition-all duration-300">
                  <div className="md:hidden mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {job.company}
                      </h3>
                      {job.website && (
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${job.company} website (opens in a new tab)`}
                          className="text-blue-500"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mt-1">
                      <Calendar size={12} />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hidden sm:block">
                        <Briefcase size={16} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                        {job.position}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {job.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className={
                          projectIndex > 0
                            ? 'relative group/project border-t border-slate-100 pt-8'
                            : 'relative group/project'
                        }
                      >
                        <div className="flex items-baseline gap-3 mb-3">
                          <div className="p-1 bg-slate-200/60 rounded text-slate-500 hidden sm:block">
                            <Layers size={12} />
                          </div>
                          <h4 className="font-bold text-slate-900 tracking-tight">
                            {project.name}
                          </h4>
                          {'period' in project && project.period && (
                            <span className="text-xs text-slate-400 font-medium bg-white px-2 py-0.5 rounded border border-slate-100">
                              {project.period}
                            </span>
                          )}
                        </div>

                        <ul className="space-y-2.5 ml-1 sm:ml-5">
                          {project.highlights.map(
                            (highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="text-slate-600 text-sm leading-relaxed flex items-start gap-2.5 text-left"
                              >
                                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 flex-shrink-0 group-hover/project:bg-blue-500 transition-colors duration-200" />
                                <span className="flex-1">{highlight}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
