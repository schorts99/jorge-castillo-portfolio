import { SKILLS } from '@/data/summary'

const CATEGORY_COLORS = {
  Languages: 'bg-blue-500',
  Frontend: 'bg-emerald-500',
  Backend: 'bg-purple-500',
  Databases: 'bg-orange-500',
  'Cloud & Services': 'bg-cyan-500',
  'Testing & Tools': 'bg-pink-500'
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in fullstack development
          </p>
        </div>

        <div className="space-y-12">
          {SKILLS.map((skillCategory, index) => {
            const colorClass = CATEGORY_COLORS[skillCategory.category as keyof typeof CATEGORY_COLORS] || 'bg-gray-500';
            
            return (
              <div
                key={index}
                className="group"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-3 rounded-full ${colorClass} mr-4`} />
                  <h3 className="text-2xl font-bold text-slate-900">
                    {skillCategory.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3 ml-7">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 cursor-default border border-slate-200 hover:border-slate-300"
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-700 rounded-full border border-slate-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="font-medium">Continuously learning and expanding my skillset</span>
          </div>
        </div>
      </div>
    </section>
  )
}
