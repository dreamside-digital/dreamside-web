'use client';

import { Parallax } from 'react-scroll-parallax';
import Image from '@/components/Image'
import Fade from 'react-reveal/Fade';

export default function ProfilePic() {
  return (
    <div className="flex flex-col justify-center items-center px-8 relative">
      <Parallax translateY={[-20, 20]}>
        <Image className="aspect-square rounded-full max-w-[250px] md:max-w-xs" src="/images/shay-brightbit.png" width={500} height={500} alt="Shay"></Image>
      </Parallax>
      <Fade up>
        <p className="absolute -bottom-4 md:-bottom-10 text-7xl md:text-8xl font-display text-center text-primary-300 dark:text-secondary-300">Let's talk!</p>
      </Fade>
    </div>
  );
}