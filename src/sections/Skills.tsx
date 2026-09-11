import { SKILLS } from '@/data/summary'

const CATEGORY_STYLES = {
  'Core Stack Mastery': {
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
    dot: 'bg-blue-600',
    glow: 'group-hover:shadow-blue-500/[0.03]'
  },
  'Architecture & Data': {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    dot: 'bg-emerald-600',
    glow: 'group-hover:shadow-emerald-500/[0.03]'
  },
  'DevOps & Tooling': {
    badge: 'bg-purple-50 text-purple-700 border-purple-100',
    dot: 'bg-purple-600',
    glow: 'group-hover:shadow-purple-500/[0.03]'
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Technical Skills</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-0">
            Technical Ecosystem
          </h2>
          <div className="flex justify-center mt-3 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full"></div>
          </div>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-normal">
            A battle-tested toolkit designed for building decoupled, high-performance web systems and resilient data layers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {SKILLS.map((skillCategory, index) => {
            const styles = CATEGORY_STYLES[skillCategory.category as keyof typeof CATEGORY_STYLES] || {
              badge: 'bg-slate-50 text-slate-700 border-slate-100',
              dot: 'bg-slate-500',
              glow: 'group-hover:shadow-slate-500/5'
            };
            
            return (
              <div
                key={index}
                className={`group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.glow}`}
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ring-2 ring-offset-1 ring-current/20 ${styles.dot}`} />
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-md border uppercase tracking-wider ${styles.badge}`}>
                    {skillCategory.technologies.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3.5 py-1.5 bg-slate-50/60 text-slate-700 rounded-xl text-sm font-medium hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 cursor-default border border-slate-100 hover:border-slate-200 hover:shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-600 rounded-xl border border-slate-200/80 shadow-sm text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse flex-shrink-0"></span>
            <span className="font-semibold text-slate-800">
              Dev Workflow Optimized:
            </span>
            <span className="text-slate-600">
              Strict linting, structural design patterns, and local automated CI validation loops.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
