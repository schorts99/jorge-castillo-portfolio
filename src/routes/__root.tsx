import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import profileImage from '../assets/images/schorts.webp'
import MainLayout from '@/layouts/MainLayout'

const siteUrl = 'https://schorts.netlify.app'
const pageTitle = 'Jorge Castillo | Senior Full-Stack Engineer'
const pageDescription =
  'Jorge Castillo is a senior full-stack engineer in Oaxaca, Mexico, specializing in TypeScript, Node.js, React, distributed systems, and software architecture.'
const profileImageUrl = new URL(profileImage, siteUrl).href
const socialImageUrl = new URL('/social-cover.png', siteUrl).href
const socialImageAlt =
  'Jorge Castillo, Senior Full-Stack Engineer. Building resilient software, from domain to deployment.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        title: pageTitle,
      },
      {
        name: 'description',
        content: pageDescription,
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'Jorge Castillo',
      },
      {
        property: 'og:title',
        content: pageTitle,
      },
      {
        property: 'og:description',
        content: pageDescription,
      },
      {
        property: 'og:url',
        content: siteUrl,
      },
      {
        property: 'og:image',
        content: socialImageUrl,
      },
      {
        property: 'og:image:type',
        content: 'image/png',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:image:alt',
        content: socialImageAlt,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: pageTitle,
      },
      {
        name: 'twitter:description',
        content: pageDescription,
      },
      {
        name: 'twitter:image',
        content: socialImageUrl,
      },
      {
        name: 'twitter:image:alt',
        content: socialImageAlt,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: siteUrl,
      },
      {
        rel: 'preload',
        as: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Jorge Castillo',
          url: siteUrl,
          image: profileImageUrl,
          jobTitle: 'Senior Full-Stack Engineer',
          description: pageDescription,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Oaxaca',
            addressCountry: 'MX',
          },
          knowsAbout: [
            'Full-stack software engineering',
            'TypeScript',
            'Node.js',
            'React',
            'Distributed systems',
            'Software architecture',
          ],
          sameAs: [
            'https://github.com/schorts99',
            'https://www.linkedin.com/in/schorts',
            'https://substack.com/@schorts99',
            'https://medium.com/@schorts',
          ],
        }),
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="scroll-smooth">
        <MainLayout>{children}</MainLayout>
        {process.env.NODE_ENV === 'development' && (
          <TanstackDevtools
            config={{
              position: 'bottom-left',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  )
}
