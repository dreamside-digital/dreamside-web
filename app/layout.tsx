import 'css/tailwind.css'
import 'css/global.css'
import 'pliny/search/algolia.css'

import { Outfit } from 'next/font/google'
import localFont from 'next/font/local'
// const displayFont = localFont({
//   src: [
//     {
//       path: '../fonts/Primed-Alt.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/Primed.otf',
//       weight: '400',
//       style: 'italic',
//     },
//   ],
//   variable: '--font-display',
// })

const displayFont = localFont({
  src: [
    {
      path: '../fonts/TheShow.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TheShowItalic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-display',
})

import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider } from '@/components/SearchProvider'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders, ParallaxProviders } from './providers'
import { Metadata } from 'next'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${outfit.variable} ${displayFont.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="relative bg-primary-100 text-black antialiased dark:bg-primary-900 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SearchProvider>
            <ParallaxProviders>
              <div className="flex min-h-screen w-full flex-col justify-between font-sans">
                <Banner>
                  Nomadic Labs is now {siteMetadata.title}! Read more about it on our{' '}
                  <Link
                    href="/blog/nomadic-labs-is-now-dreamside-digital"
                    className="font-semibold text-white hover:text-primary-200"
                  >
                    latest blog post 👉
                  </Link>
                </Banner>
                <Header />
                <main className="mb-auto">{children}</main>
                <Footer />
              </div>
            </ParallaxProviders>
          </SearchProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}
