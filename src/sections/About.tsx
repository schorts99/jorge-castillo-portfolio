import { ArrowRight } from 'lucide-react'
import { HIGHLIGHTS } from '../data/summary'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            About me
          </p>
          <h2
            id="about-title"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Good engineering makes change easier.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            I care about more than the first release. I build systems teams can
            understand, extend, and operate—with architecture that supports the
            product instead of getting in its way.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((highlight) => {
            const IconComponent = highlight.icon

            return (
              <div
                key={highlight.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <IconComponent size={20} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-base font-bold tracking-tight text-slate-900">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {highlight.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-lg font-bold tracking-tight">
              See the work in practice
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              A selection of products, open-source tools, and engineering
              projects.
            </p>
          </div>
          <a
            href="#projects"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-50"
          >
            View selected work <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
