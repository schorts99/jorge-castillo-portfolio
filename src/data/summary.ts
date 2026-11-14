import { GitBranch, Layers, ShieldAlert, Zap } from 'lucide-react'

export const SUMMARY =
  'I turn complex product requirements into dependable software—with clear architecture, thoughtful domain modeling, and care for the people who use and maintain it.'

export const HIGHLIGHTS = [
  {
    icon: Layers,
    title: 'Architecture with purpose',
    description:
      'I use domain-driven design, clear boundaries, and dependency inversion to keep business rules understandable and systems easier to change.',
  },
  {
    icon: Zap,
    title: 'Reliable systems',
    description:
      'From asynchronous workflows to real-time features, I design for failure, observability, and predictable behavior in production.',
  },
  {
    icon: GitBranch,
    title: 'Collaborative delivery',
    description:
      'I make complex work easier to align on through useful documentation, thoughtful reviews, and close collaboration across disciplines.',
  },
  {
    icon: ShieldAlert,
    title: 'Performance and safety',
    description:
      'I pay attention to data access, safe schema changes, and concurrency so products remain responsive and dependable as they grow.',
  },
]

export const SKILLS = [
  {
    category: 'Languages & product',
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
    category: 'Architecture & data',
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
    category: 'Cloud & delivery',
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
