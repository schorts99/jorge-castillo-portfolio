// import { Link } from '@tanstack/react-router'

import Project from '@/components/Project'

import { FEATURED_PROJECTS } from '@/data/projects'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A selection of impactful projects showcasing diverse technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Interested in exploring more projects?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link
              to="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View All Projects
            </Link> */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
