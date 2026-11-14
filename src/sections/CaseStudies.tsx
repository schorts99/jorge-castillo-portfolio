import {
  ArrowUpRight,
  Boxes,
  CircleCheck,
  Layers3,
  LockKeyhole,
  Store,
} from 'lucide-react'

import { CASE_STUDIES } from '@/data/caseStudies'

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            Case studies
          </p>
          <h2
            id="case-studies-title"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            A closer look at the decisions behind the work.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The challenge, the approach, and what each project makes possible.
          </p>
        </div>

        <div className="space-y-6">
          {CASE_STUDIES.map((study, index) => {
            const visualOnRight = index % 2 === 1

            return (
              <article
                key={study.name}
                className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white lg:grid-cols-2"
              >
                <CaseStudyVisual
                  visual={study.visual}
                  name={study.name}
                  className={visualOnRight ? 'lg:order-2' : ''}
                />

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                    {study.category}
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                      {study.name}
                    </h3>
                    <span className="text-sm text-slate-500">{study.role}</span>
                  </div>

                  <dl className="mt-6 space-y-4">
                    <div>
                      <dt className="text-sm font-semibold text-slate-900">
                        The challenge
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-slate-600">
                        {study.challenge}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-slate-900">
                        The approach
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-slate-600">
                        {study.approach}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-slate-900">
                        The outcome
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-slate-600">
                        {study.outcome}
                      </dd>
                    </div>
                  </dl>

                  <ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label={`${study.name} technologies`}
                  >
                    {study.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <a
                    className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {study.linkLabel}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CaseStudyVisual({
  visual,
  name,
  className = '',
}: {
  visual: (typeof CASE_STUDIES)[number]['visual']
  name: string
  className?: string
}) {
  return (
    <div
      role="img"
      aria-label={`Illustration inspired by ${name}`}
      className={`flex min-h-64 items-center justify-center overflow-hidden p-6 sm:p-8 ${className} ${
        visual === 'pos'
          ? 'bg-emerald-50'
          : visual === 'architecture'
            ? 'bg-slate-950'
            : 'bg-blue-50'
      }`}
    >
      <div className="w-full max-w-md">
        <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          <span>Interface illustration</span>
          <span aria-hidden="true">● ● ●</span>
        </div>
        {visual === 'pos' ? (
          <PosIllustration />
        ) : visual === 'architecture' ? (
          <ArchitectureIllustration />
        ) : (
          <FinanceIllustration />
        )}
      </div>
    </div>
  )
}

function PosIllustration() {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl shadow-emerald-950/10 sm:p-5">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
            <Store size={16} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold text-slate-900">Service overview</p>
            <p className="text-[10px] text-slate-500">Restaurant operations</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
          All locations
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 py-4">
        {['Orders', 'Kitchen', 'Inventory'].map((item) => (
          <div key={item} className="rounded-lg bg-slate-50 p-2.5">
            <p className="text-[10px] text-slate-500">{item}</p>
            <div className="mt-2 h-2 w-3/4 rounded-full bg-slate-200" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-emerald-200" />
          </div>
        ))}
      </div>
      <div className="space-y-2 border-t border-slate-100 pt-3">
        {['New order', 'Preparing', 'Ready to serve'].map((status, index) => (
          <div
            key={status}
            className="flex items-center justify-between rounded-lg px-2 py-1.5"
          >
            <span className="flex items-center gap-2 text-[10px] font-medium text-slate-700">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  index === 2 ? 'bg-emerald-500' : 'bg-amber-400'
                }`}
                aria-hidden="true"
              />
              {status}
            </span>
            <span className="h-1.5 w-12 rounded-full bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ArchitectureIllustration() {
  const layers = [
    { label: 'Presentation', icon: Layers3 },
    { label: 'Application', icon: Boxes },
    { label: 'Domain', icon: CircleCheck },
    { label: 'Infrastructure', icon: Store },
  ]

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-xl shadow-black/30 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold text-white">
          Replaceable by design
        </p>
        <span className="rounded-full bg-blue-400/10 px-2.5 py-1 text-[10px] font-medium text-blue-200">
          Ports & adapters
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {layers.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex min-h-16 items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3"
          >
            <Icon
              size={16}
              className="shrink-0 text-blue-300"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-slate-200">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-blue-300/30 px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-blue-300" aria-hidden="true" />
        <span className="text-[10px] text-slate-300">
          React UI · IndexedDB · HTTP
        </span>
      </div>
    </div>
  )
}

function FinanceIllustration() {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-xl shadow-blue-950/10 sm:p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-900">
            Your money, your device
          </p>
          <p className="mt-1 text-[10px] text-slate-500">Monthly overview</p>
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
          <LockKeyhole size={15} aria-hidden="true" />
        </span>
      </div>
      <div className="mt-4 rounded-xl bg-slate-950 p-4 text-white">
        <p className="text-[10px] font-medium text-slate-400">
          Available balance
        </p>
        <p className="mt-2 text-xl font-semibold tracking-[0.18em]">••••••</p>
        <p className="mt-2 text-[10px] text-blue-200">
          Stored in your local vault
        </p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {['Spending plan', 'Savings goal'].map((label, index) => (
          <div key={label} className="rounded-lg border border-slate-100 p-3">
            <p className="text-[10px] text-slate-500">{label}</p>
            <div className="mt-3 h-1.5 rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${
                  index === 0 ? 'w-2/3 bg-blue-500' : 'w-1/2 bg-emerald-500'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
