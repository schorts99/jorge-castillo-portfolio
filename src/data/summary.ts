import { Layers, Zap, ShieldAlert, GitBranch } from 'lucide-react'

export const SUMMARY = 'Senior Full-Stack Engineer and Architect specializing in building decoupled, resilient, and highly maintainable distributed systems. With over 9 years of experience leading engineering initiatives, my focus is on replacing monolithic complexity with clean architectural boundaries. I treat architecture not just as code organization, but as a mechanism to scale team velocity and guarantee structural safety under heavy production loads.'

export const HIGHLIGHTS = [
  {
    icon: Layers,
    title: "Architectural Integrity",
    description: "Deep expertise implementing Domain-Driven Design (DDD), Hexagonal Architecture (Ports & Adapters), and clean boundary separation to prevent code decay."
  },
  {
    icon: Zap,
    title: "Event-Driven Streams",
    description: "Specialized in designing asynchronous pipelines, managing concurrent real-time transactions, and implementing high-throughput webhooks."
  },
  {
    icon: GitBranch,
    title: "Engineering Leadership",
    description: "Former Frontend Lead and Architect. Passionate about establishing technical culture through Design Docs, rigorous RFCs, and collaborative code reviews."
  },
  {
    icon: ShieldAlert,
    title: "Performance & Safety",
    description: "Focused on system bottlenecks, optimizing relational and NoSQL databases, processing high-frequency data buffers, and preventing race conditions."
  }
]

export const SKILLS = [
  {
    category: "Core Stack Mastery",
    technologies: ["TypeScript", "NestJS", "Node.js", "React", "Ruby on Rails", "Vue.js", "PostgreSQL"],
  },
  {
    category: "Architecture & Data",
    technologies: ["Domain-Driven Design (DDD)", "Ports & Adapters", "Event-Driven Patterns", "Cloud Firestore", "Redis", "RabbitMQ", "GraphQL"],
  },
  {
    category: "DevOps & Tooling",
    technologies: ["AWS (Lambda/RDS/S3)", "Docker", "GitHub Actions", "Firebase", "Jest", "RSpec", "Neovim / Lua"],
  }
]
