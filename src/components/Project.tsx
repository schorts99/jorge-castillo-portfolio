import { useId } from 'react'
import { ExternalLink, Github, Calendar } from 'lucide-react'

import type { FEATURED_PROJECTS } from '@/data/projects'

export default function Project({ project }: { project: typeof FEATURED_PROJECTS[0] }) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
              {project.name}
            </h3>
            <p className="text-blue-600 font-medium text-sm mb-2">
              {project.role}
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Calendar size={14} />
              <span>
                {project.period}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="View Project"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-700 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-2">
              Key Achievements:
            </h4>
            <ul className="space-y-1">
              {project.highlights.map((highlight) => (
                <li
                  key={useId()}
                  className="text-slate-600 text-xs leading-relaxed flex items-start gap-2"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={useId()}
                className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
        {project.website ? (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            <ExternalLink size={16} />
            View Live Project
          </a>
        ) : (
          <span className="text-slate-500 text-sm">
            Internal/Private Project
          </span>
        )}
      </div>
    </div>
  )
}
