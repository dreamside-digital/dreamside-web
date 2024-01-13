'use client';

import { Parallax } from 'react-scroll-parallax';
import Image from '@/components/Image'
import Fade from 'react-reveal/Fade';

export default function ProfilePic() {
  return (
    <div className="flex flex-col justify-center items-center px-8 relative">
      <Parallax translateY={[-20, 40]}>
        <Image className="aspect-square rounded-full max-w-[250px] md:max-w-xs" src="/images/shay-brightbit.png" width={500} height={500} alt="Shay"></Image>
      </Parallax>
      <Fade up>
        <p className="absolute -bottom-14 md:-bottom-20 text-7xl md:text-8xl font-display text-center text-primary-500 dark:text-primary-300">Let's talk!</p>
      </Fade>
    </div>
  );
}