import { ExternalLink } from 'lucide-react'

const PRODUCTS = [
  {
    name: 'Simply Logs',
    category: 'Developer tools',
    url: 'https://simply-logs.netlify.app',
    icon: '/products/simply-logs.svg',
    description:
      'A local-first desktop app for Vercel and Netlify runtime logs, deployment status, and public URL health checks.',
  },
  {
    name: 'Simply Track',
    category: 'Personal finance',
    url: 'https://simply-track-one.vercel.app',
    icon: '/products/simply-track.svg',
    description:
      'A private, local-first space to track money, plan spending, and save for what matters.',
  },
  {
    name: 'Simply POS',
    category: 'Restaurant operations',
    url: 'http://simply-pos.com',
    icon: '/products/simply-pos.png',
    description:
      'A point-of-sale platform connecting orders, kitchen, inventory, staff, and reporting.',
  },
  {
    name: 'Simply Pet',
    category: 'Animal welfare',
    url: 'https://simply-pet.onrender.com',
    icon: '/products/simply-pet.png',
    description:
      'A resource for responsible adoption and the shelters, rescues, and foster homes supporting it.',
  },
]

export default function SimplyProducts() {
  return (
    <section
      id="simply-products"
      className="py-20 bg-slate-50/60 selection:bg-blue-500 selection:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
            Independent Product Family
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simply Products
          </h2>
          <div className="flex justify-center mt-3 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full" />
          </div>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A collection of focused products, each designed to do one job well.
            Built independently, with clear and calm experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PRODUCTS.map((product) => {
            return (
              <article
                key={product.name}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={product.icon}
                    alt={`${product.name} icon`}
                    className="w-16 h-16 rounded-xl object-contain shrink-0"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {product.name}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 mt-5">
                  {product.description}
                </p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Visit {product.name}
                  <ExternalLink size={14} />
                </a>
              </article>
            )
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200/60 bg-white p-6 md:p-8 text-center shadow-sm">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
            How they are built
          </p>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The product-family site uses Next.js, React, TypeScript, and
            Tailwind CSS, organized into vertical feature slices with clear
            domain, application, infrastructure, and presentation boundaries.
          </p>
        </div>
      </div>
    </section>
  )
}
