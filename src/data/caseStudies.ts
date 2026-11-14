export const CASE_STUDIES = [
  {
    name: 'Simply POS',
    category: 'Restaurant operations',
    role: 'Senior Full-Stack Engineer',
    visual: 'pos',
    challenge:
      'Restaurant teams need orders, kitchen workflows, and stock to stay in sync across locations.',
    approach:
      'Built a multi-tenant platform with clear domain boundaries, a NestJS and Firestore backend, real-time updates, role-based access, payments, and hardware printing.',
    outcome:
      'The project reports 30% faster service and 25% fewer kitchen errors after integrating payments and printing.',
    technologies: ['NestJS', 'Next.js', 'Firestore', 'Mercado Pago'],
    href: 'https://simply-pos.com',
    linkLabel: 'Visit Simply POS',
  },
  {
    name: 'React Clean Architecture',
    category: 'Open-source reference app',
    role: 'Creator',
    visual: 'architecture',
    challenge:
      'As frontend products grow, business rules can become tied to UI components, storage, and framework details.',
    approach:
      'Created a React and TypeScript reference app with domain and application layers, CQRS, explicit ports, and replaceable adapters such as IndexedDB.',
    outcome:
      'Shows how to keep core business logic independent so interfaces and infrastructure can evolve without rewriting the domain.',
    technologies: ['React', 'TypeScript', 'CQRS', 'IndexedDB'],
    href: 'https://github.com/schorts99/react-clean-architecture',
    linkLabel: 'View source on GitHub',
  },
  {
    name: 'Simply Track',
    category: 'Personal finance',
    role: 'Creator',
    visual: 'finance',
    challenge:
      'Personal finance tools need to be useful offline while keeping sensitive information private.',
    approach:
      'Built a local-first PWA with an encrypted on-device vault, offline support, and optional encrypted Google Drive sync.',
    outcome:
      'Combines transactions, budgets, savings goals, and financial forecasts in a private, installable experience.',
    technologies: ['Next.js', 'PWA', 'SQLite', 'Google Drive'],
    href: 'https://simply-track-one.vercel.app',
    linkLabel: 'Visit Simply Track',
  },
] as const
