'use client'

import { Parallax } from 'react-scroll-parallax'
import Link from '@/components/Link'

export default function LatestPost({ isDisabled = false }) {
  const translate = isDisabled ? [0, 0] : ['-30%', '90%']
  return (
    <Parallax translateY={translate}>
      <div className="bg-primary-300 p-6 md:max-w-sm md:p-8">
        <div className="flex justify-between">
          <span className="mb-4 text-sm uppercase tracking-wide dark:text-primary-500">
            latest news
          </span>
          <span className="mb-4 text-sm uppercase tracking-wide dark:text-primary-500">
            01-18-2024
          </span>
        </div>
        <p className="text-xl font-semibold dark:text-primary-500">
          Hello 2024, Nomadic Labs is now Dreamside!
        </p>
        <Link href="/blog" className="btn-theme-inverse">
          Tell me more <span className="align-middle text-xl">{` 👀`}</span>
        </Link>
      </div>
    </Parallax>
  )
}
