'use client'

import { Parallax } from 'react-scroll-parallax'
import Image from '@/components/Image'
import Fade from 'react-reveal/Fade'

export default function ProfilePic() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Parallax translateY={[-10, 40]}>
        <div className="px-8">
          <Image
            className="aspect-square max-w-[250px] rounded-full md:max-w-sm"
            src="/images/shay-brightbit.png"
            width={500}
            height={500}
            alt="Shay"
          ></Image>
        </div>
      </Parallax>
      <Parallax speed={-5} className="w-full">
        <p className="absolute -bottom-4 w-full text-center font-display text-7xl text-primary-400 dark:text-secondary-300 md:-bottom-24 md:text-8xl">
          Let's talk!
        </p>
      </Parallax>
    </div>
  )
}
