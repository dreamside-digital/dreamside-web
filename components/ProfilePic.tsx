'use client'

import { Parallax } from 'react-scroll-parallax'
import Image from '@/components/Image'
import Fade from 'react-reveal/Fade'

export default function ProfilePic() {
  return (
    <>
      <Fade>
        <div className="relative mb-8 flex flex-col items-center justify-center lg:hidden">
          <Image
            className="aspect-square max-w-xs rounded-full lg:max-w-sm"
            src="/images/shay-brightbit.png"
            width={500}
            height={500}
            alt="Shay"
          ></Image>
        </div>
      </Fade>
      <div className="relative hidden w-full flex-col items-center justify-center lg:flex">
        <Parallax translateY={[-10, 40]}>
          <div className="px-8">
            <Image
              className="aspect-square max-w-[250px] rounded-full lg:max-w-sm"
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
    </>
  )
}
