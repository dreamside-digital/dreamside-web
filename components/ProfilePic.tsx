'use client';

import { Parallax } from 'react-scroll-parallax';
import Image from '@/components/Image'
import Fade from 'react-reveal/Fade';

export default function ProfilePic() {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Parallax translateY={[-10, 40]}>
        <div className="px-8">
          <Image className="aspect-square rounded-full max-w-[250px] md:max-w-sm" src="/images/shay-brightbit.png" width={500} height={500} alt="Shay"></Image>
        </div>
      </Parallax>
      <Parallax speed={-5} className="w-full">
        <p className="w-full absolute -bottom-4 md:-bottom-24 text-7xl md:text-8xl font-display text-center text-primary-300 dark:text-secondary-300">Let's talk!</p>
      </Parallax>
    </div>
  );
}