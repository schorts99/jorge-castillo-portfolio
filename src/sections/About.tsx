import { SUMMARY, HIGHLIGHTS } from '../data/summary'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {SUMMARY}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((highlight, index) => {
            const IconComponent = highlight.icon

            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <IconComponent className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">8+</div>
            <div className="text-slate-600">
              Years Experience
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-emerald-600">38+</div>
            <div className="text-slate-600">
              Projects Completed
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">
              20+
            </div>
            <div className="text-slate-600">
              Technologies Mastered
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
