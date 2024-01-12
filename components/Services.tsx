'use client';

import { Parallax } from 'react-scroll-parallax';
import services from '@/data/services'

export default function Services() {
  return (
    <Parallax translateY={[50, -80]}>
      <div className="">
        <div id="services-list">
          <ul className="text-4xl md:text-5xl lg:text-7xl font-semibold space-y-6 text-right">
            {
              services.map(service => (<li key={service.title}>{service.title}</li>))
            }
          </ul>
        </div>
      </div>
    </Parallax>
  );
}