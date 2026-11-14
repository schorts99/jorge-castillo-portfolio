export default function HowIWork() {
  const steps = [
    {
      title: 'Understand the context',
      description:
        'Align on the user need, business goal, constraints, and how success will be evaluated.',
    },
    {
      title: 'Shape the solution',
      description:
        'Clarify domain boundaries and trade-offs before choosing architecture or tools.',
    },
    {
      title: 'Deliver in increments',
      description:
        'Break work into reviewable steps, document decisions, and collaborate early with product and engineering.',
    },
    {
      title: 'Learn from production',
      description:
        'Test key paths and failure cases, observe real behavior, and use what we learn to guide the next iteration.',
    },
  ]

  return (
    <section
      id="how-i-work"
      aria-labelledby="how-i-work-title"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            How I work
          </p>
          <h2
            id="how-i-work-title"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            A clear path from problem to production.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            I keep the process collaborative and practical, with enough
            structure to make sound decisions and keep delivery moving.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <span
                aria-hidden="true"
                className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700 ring-1 ring-blue-100"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-2 text-base font-bold tracking-tight text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
