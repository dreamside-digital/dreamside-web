'use client';

import clients from '@/data/clients'
import Fade from 'react-reveal/Fade';
import Image from '@/components/Image'

export default function Services() {
  return (
      <div className="grid grid-cols-4 gap-4">
      {
        clients.map((client, index) => {
          return (
            <Fade delay={index*50} key={client.url}>
            <a href={client.url} className="flex flex-col items-center">
              <div className="w-36 h-36 flex flex-col justify-center items-center">
                <Image title={client.name} src={client.logo} height={150} width={150} alt={client.name} className="object-contain dark:invert brightness-0" />
              </div>
            </a>
            </Fade>
          )
        })
      }
      </div>
  );
}