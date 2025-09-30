import { ExternalLink, Calendar } from 'lucide-react'

import { WORKS } from "@/data/work-experience";

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional journey spanning fullstack development, team leadership, and system architecture
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-slate-200" />

          <div className="space-y-12">
            {WORKS.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute left-2 md:left-1/2 md:-ml-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg" />

                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-slate-900">
                            {job.company}
                          </h3>
                          {job.website && (
                            <a
                              href={job.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <p className="text-lg font-semibold text-blue-600 mb-1">
                          {job.position}
                        </p>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Calendar size={16} />
                          <span className="text-sm">
                            {job.period}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {job.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="border-l-2 border-slate-100 pl-4">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-slate-900">
                                {project.name}
                              </h4>
                              <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                {project.period}
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight, highlightIndex) => (
                                <li key={highlightIndex} className="text-slate-700 text-sm leading-relaxed flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
