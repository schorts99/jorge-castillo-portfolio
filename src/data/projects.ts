export const PROJECTS = [
  {
    featured: true,
    name: 'Shared Kernel',
    role: 'Software Engineer',
    period: 'Sept 2025 – Present',
    website: 'https://www.npmjs.com/package/@schorts/shared-kernel',
    description: 'Modular, type-safe foundation for building expressive, maintainable applications.',
    highlights: [
      'Every abstraction is strongly typed and composable.',
      'Value objects, entities, and events encode business logic directly.',
      'Plug in your own HTTP, auth, or state strategies.',
      'Framework independence',
    ],
    technologies: ['TypeScript'],
  },
  {
    featured: true,
    name: 'Simply POS',
    role: 'Software Engineer',
    period: 'Jun 2025 – Present',
    website: 'https://simply-pos.vercel.app/',
    description: 'Complete order management system',
    highlights: [
      'Separate interfaces for owners, kitchen staff, servers, and managers.',
      'Live order tracking and instant notifications.',
      'Complete information on the performance of the business.',
      'Works perfectly on tablets and smartphones for the staff.',
    ],
    technologies: ['TypeScript', 'NextJS', 'ReactJS', 'Angular', 'Firestore', 'Vercel', 'TailwindCSS', 'Google Analytics'],
  },
  {
    featured: true,
    name: 'Simply React UI Components',
    role: 'Frontend Developer',
    period: 'Aug 2021 – Aug 2021',
    website: 'https://www.npmjs.com/package/simply-react-ui-components',
    description: 'A simple and minimalist React Components Library',
    highlights: [
      'Common ReactJS components library for enhanced reusability across multiple projects.',
    ],
    technologies: ['JavaScript', 'ReactJS', 'TailwindCSS'],
  },
  {
    featured: true,
    name: 'AzaChii Google Optimize React',
    role: 'Frontend Developer',
    period: 'May 2020 – Jul 2020',
    website: 'https://www.npmjs.com/package/azachii-google-optimize-react',
    description: 'A simple ReactJS implementation of Google Optimize.',
    highlights: [
      'Easly implement Google Optimize in ReactJS.',
    ],
    technologies: ['JavaScript', 'ReactJS', 'Google Optimize'],
  },
]
export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured)
