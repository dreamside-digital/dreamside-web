'use client';

import { Parallax } from 'react-scroll-parallax';

export default function SpinningAsterix() {
  return (
      <Parallax rotate={[0,360]} className="inline-block">*</Parallax>
  );
}