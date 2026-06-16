import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'
import { GoogleAnalytics } from 'tanstack-router-ga4'

import appCss from '../styles.css?url'
import MainLayout from '@/layouts/MainLayout'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover',
      },
      {
        title: 'Jorge Castillo - Sr. Full-Stack Engineer',
      },
    ],
    links: [
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
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className='scroll-smooth'>
        <GoogleAnalytics measurementId={import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID} />
        <MainLayout>
          {children}
        </MainLayout>
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
