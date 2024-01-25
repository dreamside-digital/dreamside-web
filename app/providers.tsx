'use client'

import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}

export function ParallaxProviders({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>
}
