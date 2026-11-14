import { SKILLS } from '@/data/summary'

const CATEGORY_STYLES = {
  'Languages & product': {
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
    dot: 'bg-blue-600',
    glow: 'group-hover:shadow-blue-500/[0.03]',
  },
  'Architecture & data': {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    dot: 'bg-emerald-600',
    glow: 'group-hover:shadow-emerald-500/[0.03]',
  },
  'Cloud & delivery': {
    badge: 'bg-purple-50 text-purple-700 border-purple-100',
    dot: 'bg-purple-600',
    glow: 'group-hover:shadow-purple-500/[0.03]',
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            Tools & capabilities
          </span>
          <h2
            id="skills-title"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            The right tools for the problem.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A practical mix of languages, frameworks, and patterns for building
            maintainable products across the stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {SKILLS.map((skillCategory) => {
            const styles =
              CATEGORY_STYLES[
                skillCategory.category as keyof typeof CATEGORY_STYLES
              ]

            return (
              <article
                key={skillCategory.category}
                className={`group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${styles.glow}`}
              >
                <div className="mb-6 flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ring-2 ring-current/20 ring-offset-2 ${styles.dot}`}
                      aria-hidden="true"
                    />
                    <h3 className="text-base font-bold tracking-tight text-slate-950">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <span
                    className={`rounded-md border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${styles.badge}`}
                  >
                    {skillCategory.technologies.length} tools
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {skillCategory.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
