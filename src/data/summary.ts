import { Layers, Zap, ShieldAlert, GitBranch } from 'lucide-react'

export const SUMMARY = 'Senior Full-Stack Engineer specializing in building decoupled, resilient, and highly maintainable distributed systems. With over 9 years of experience leading engineering initiatives, my focus is on replacing monolithic complexity with clean architectural boundaries. I treat architecture not just as code organization, but as a mechanism to scale team velocity and guarantee structural safety under heavy production loads.'

export const HIGHLIGHTS = [
  {
    icon: Layers,
    title: 'Architectural Integrity',
    description:
      'Deep expertise in Clean Architecture, Domain-Driven Design (DDD), Hexagonal (Ports & Adapters), CQRS, and strict dependency inversion to keep domain logic independent of frameworks and infrastructure.',
  },
  {
    icon: Zap,
    title: 'Event-Driven Streams',
    description:
      'Specialized in asynchronous pipelines, high-concurrency systems, real-time notifications, and resilient event buses with retries and dead-letter handling.',
  },
  {
    icon: GitBranch,
    title: 'Engineering Leadership',
    description:
      'Former Frontend Lead and Architect. Passionate about establishing technical culture through Design Docs, rigorous RFCs, and collaborative code reviews.',
  },
  {
    icon: ShieldAlert,
    title: 'Performance & Safety',
    description:
      'Focused on eliminating bottlenecks, optimizing relational and NoSQL data access, safe schema evolution, and preventing race conditions under heavy production loads.',
  },
]

export const SKILLS = [
  {
    category: 'Core Stack Mastery',
    technologies: [
      'TypeScript',
      'NestJS',
      'Node.js',
      'React',
      'Next.js',
      'Ruby on Rails',
      'Vue.js',
      'PostgreSQL',
    ],
  },
  {
    category: 'Architecture & Data',
    technologies: [
      'Clean Architecture',
      'Domain-Driven Design (DDD)',
      'Hexagonal / Ports & Adapters',
      'CQRS',
      'Event-Driven',
      'Cloud Firestore',
      'IndexedDB',
      'Redis',
      'RabbitMQ',
      'GraphQL',
    ],
  },
  {
    category: 'DevOps & Tooling',
    technologies: [
      'AWS (Lambda/S3/Cognito)',
      'GCP / Firebase',
      'Docker',
      'GitHub Actions',
      'Jest',
      'RSpec',
      'Neovim',
    ],
  },
]
