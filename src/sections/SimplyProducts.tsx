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
    url: 'https://simply-pos.com',
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
  {
    name: 'Simply Habits',
    category: 'Personal wellbeing',
    url: 'https://simply-habits.vercel.app',
    icon: '/products/simply-habits.svg',
    description:
      'A gentle, offline-first space to build lasting habits, track daily goals, celebrate streaks, and reflect on your progress.',
  },
]

export default function SimplyProducts() {
  return (
    <section
      id="simply-products"
      aria-labelledby="products-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            Independent products
          </span>
          <h2
            id="products-title"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Simply Products
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A growing family of small, focused products. Each one is designed
            around a specific everyday need, with a calm interface and useful
            details.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => {
            return (
              <article
                key={product.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-start gap-4">
                    <img
                      src={product.icon}
                      alt=""
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-xl object-contain"
                    />
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {product.category}
                      </p>
                      <h3 className="text-xl font-bold tracking-tight text-slate-950">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    {product.description}
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
                  >
                    Visit {product.name}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
          <p className="text-sm leading-6 text-slate-300">
            Built independently, these products are a chance to take an idea
            from a clear problem statement through design, engineering, and
            release.
          </p>
        </div>
      </div>
    </section>
  )
}
