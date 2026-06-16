import { SUMMARY, HIGHLIGHTS } from '../data/summary'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
            Engineering Philosophy
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-normal">
            {SUMMARY}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HIGHLIGHTS.map((highlight, index) => {
            const IconComponent = highlight.icon

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-50/60 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 border border-slate-100/50 hover:border-slate-200/80"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-sm">
                  <IconComponent size={22} className="transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-normal">
                  {highlight.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-linear-to-r from-slate-50 via-slate-50/40 to-blue-50/20 border border-slate-100 grid gap-8 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
          <div className="space-y-1 py-4 md:py-0">
            <div className="text-4xl font-extrabold text-blue-600 tracking-tight">9+</div>
            <div className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Years Active Experience</div>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">Designing high-compliance platforms and leading cross-functional code architectures.</p>
          </div>
          <div className="space-y-1 py-4 md:py-0">
            <div className="text-4xl font-extrabold text-emerald-600 tracking-tight">38+</div>
            <div className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Production Deployments</div>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">Successful integrations ranging from POS ecosystems to real-time event microservices.</p>
          </div>
          <div className="space-y-1 py-4 md:py-0">
            <div className="text-4xl font-extrabold text-purple-600 tracking-tight">Zero</div>
            <div className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Deactivation Faults</div>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">Achieved via async processing hooks and event-driven data architectures.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
