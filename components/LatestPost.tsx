'use client'

import { Parallax } from 'react-scroll-parallax';
import Link from '@/components/Link'

export default function LatestPost({isDisabled=false}) {
  const translate = isDisabled ? [0,0] : ['-30%', '90%']
  return (
    <Parallax translateY={translate}>
      <div className="bg-secondary-300 p-6 md:p-8 md:max-w-sm">
        <div className="flex justify-between">
          <span className="text-sm uppercase tracking-wide dark:text-primary-500 mb-4">latest news</span>
          <span className="text-sm uppercase tracking-wide dark:text-primary-500 mb-4">01-18-2024</span>
        </div>
        <p className="font-semibold text-xl dark:text-primary-500">Hello 2024, Nomadic Labs is now Dreamside!</p>
        <Link href='/blog' className="btn-theme-inverse">Tell me more <span className="text-xl align-middle">{` 👀`}</span></Link>
      </div>
    </Parallax>
  )
}
