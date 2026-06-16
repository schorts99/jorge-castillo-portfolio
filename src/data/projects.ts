export const PROJECTS = [
  {
    featured: true,
    name: 'Simply POS',
    role: 'Senior Fullstack Engineer',
    period: 'Jun 2025 – Present',
    website: 'https://simply-pos.vercel.app',
    description: 'A highly responsive, cloud-native Point of Sale and operations management platform optimized for restaurant and bar workflows.',
    highlights: [
      'Architected a comprehensive restaurant operations ecosystem, centralizing multi-location asynchronous ordering, real-time kitchen tracking, and live analytics.',
      'Designed and executed a scalable Tiered Subscription architecture supporting multi-tenant isolation, inventory thresholds, and granular RBAC controls.',
      'Optimized runtime data syncing and state hydration to deliver measurable client metrics, including a 30% boost in service speed and a 25% drop in order errors.'
    ],
    technologies: ['TypeScript', 'Next.js', 'Event-Driven Architecture', 'NestJS', 'React', 'Google Firestore', 'TailwindCSS', 'Vercel'],
  },
  {
    featured: true,
    name: 'Shared Kernel',
    role: 'Software Architect & Creator',
    period: 'Sept 2025 – Present',
    website: 'https://www.npmjs.com/package/@schorts/shared-kernel',
    description: 'A framework-agnostic, type-safe foundation implementing Domain-Driven Design (DDD) primitives for highly maintainable enterprise applications.',
    highlights: [
      'Engineered core domain abstractions—including Entities, Value Objects, Criteria patterns, and a robust Unit of Work (UoW) layer—to enforce strict architectural boundaries.',
      'Designed fully decoupled infrastructure providers (AuthProvider, HTTPProvider) leveraging Dependency Inversion, allowing effortless hot-swapping between Node.js runtimes, frontend frameworks, or serverless environments.',
      'Developed a type-safe JSONAPIConnector integrating complex industry-standard query and data formatting schemas directly into an expressive domain model.'
    ],
    technologies: ['TypeScript', 'Domain-Driven Design', 'Software Architecture', 'NPM Package'],
  },
  {
    featured: true,
    name: 'Firestore Admin DAO',
    role: 'Software Architect & Creator',
    period: 'Oct 2025 – Present',
    website: 'https://www.npmjs.com/package/@schorts/firestore-admin-dao',
    description: 'A type-safe data access object layer that provides clean repository abstractions over Firestore persistence, bridging infrastructure and domain layers.',
    highlights: [
      'Implemented a robust implementation of the Ports & Adapters (Hexagonal) architecture, sealing off low-level Firestore mechanics from the core business logic.',
      'Engineered a declarative Criteria object engine to standardize complex collection querying, drastically simplifying unit and integration testing workflows.',
      'Eliminated boilerplate repository code across consuming applications by abstracting raw Firestore reference and mutation logic into a unified, high-level API.'
    ],
    technologies: ['TypeScript', 'Node.js', 'Google Firestore', 'Hexagonal Architecture', 'NPM Package'],
  },
  {
    featured: true,
    name: 'IndexedDB DAO',
    role: 'Software Architect & Creator',
    period: 'Nov 2025 – Present',
    website: 'https://github.com/schorts99/IndexedDB-DAO',
    description: 'A structural wrapper that converts raw client-side IndexedDB persistence into a clean, type-safe, domain-driven Data Access Object.',
    highlights: [
      'Bridges frontend domain models with browser hardware storage, providing a standardized query and transaction layer modeled after clean architecture repository patterns.',
      'Abstracted low-level event-driven IndexedDB callbacks into modern, type-safe async/await Promises to prevent asynchronous state leakage within the UI.',
      'Ensures reliable client-side data mutations by integrating transactional boundaries natively across object stores.'
    ],
    technologies: ['TypeScript', 'IndexedDB', 'Browser Storage', 'Clean Architecture', 'NPM Package'],
  },
  {
    featured: true,
    name: 'Redis Cache Proxy',
    role: 'Backend Architect',
    period: 'Dec 2025 – Present',
    website: 'https://github.com/schorts99/Redis-Cache',
    description: 'A high-performance caching proxy layer built to decouple application logic from explicit Redis key management and expiration strategies.',
    highlights: [
      'Developed a type-safe caching layer that encapsulates data serialization, distributed locking mechanics, and TTL-driven eviction patterns.',
      'Implements clean infrastructure decoupling to allow applications to switch between memory caches or remote clusters seamlessly through strict interface abstractions.',
      'Mitigates cache stampede and read/write consistency degradation in high-throughput database systems.'
    ],
    technologies: ['TypeScript', 'Node.js', 'Redis', 'Caching Architecture', 'NPM Package'],
  },
  {
    featured: false,
    name: 'Browser Cache Provider',
    role: 'Software Engineer',
    period: 'Jan 2026',
    website: 'https://github.com/schorts99/Browser-Cache',
    description: 'A wrapper implementing fallback caching mechanisms between LocalStorage, SessionStorage, and memory stores under a unified provider pattern.',
    highlights: [
      'Abstracted multiple Web Storage APIs into a predictive, uniform contract that enforces type boundaries during runtime encoding and decoding cycles.',
      'Provides structural mechanisms for automatic key namespacing and granular invalidation rules to prevent data crossing in shared domains.'
    ],
    technologies: ['TypeScript', 'Web APIs', 'Data Handling', 'NPM Package'],
  },
  {
    featured: false,
    name: 'Setup Dev Env',
    role: 'DevOps Engineer',
    period: 'Mar 2025',
    website: 'https://github.com/schorts99/Setup-Dev-Env',
    description: 'An automated shell script utility built to bootstrap high-productivity development environments, dotfiles, and system utilities seamlessly.',
    highlights: [
      'Built declarative shell setups to automate toolchains, configurations, and terminal layout hydrations across fresh Unix/Linux host environments.',
      'Configured deterministic workspace scaffolding patterns that optimize editor linkages, environment isolation layers, and shell productivity tools.'
    ],
    technologies: ['Bash', 'Shell Scripting', 'Automation', 'DevOps'],
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
