'use client';

import clients from '@/data/clients'
import Image from '@/components/Image'
import { Parallax } from 'react-scroll-parallax';

export default function Clients() {
  const half = Math.floor(clients.length / 2)
  const clientsRow1 = clients.slice(0, half)
  const clientsRow2 = clients.slice(half, clients.length)
  return (
      <div className="something">
        <Parallax translateX={['-30%', '30%']}>
          <div className="flex flex-nowrap gap-4 md:gap-12">
          {
            clientsRow1.map((client, index) => {
              return (
                <a key={client.url} href={client.url} className="shrink-0 w-28 md:w-52 flex flex-col items-center">
                  <div className="w-24 h-24 md:w-40 md:h-40 flex flex-col justify-center items-center">
                    <Image title={client.name} src={client.logo} height={150} width={150} alt={client.name} className="object-contain dark:invert brightness-0" />
                  </div>
                </a>
              )
            })
          }
          </div>
        </Parallax>

        <h2 className="uppercase text-center font-semibold my-12 !leading-tight tracking-wider">The stellar organizations I've worked with</h2>
        
        <Parallax translateX={['30%', '-30%']}>
          <div className="flex flex-nowrap gap-4 md:gap-12">
          {
            clientsRow2.map((client, index) => {
              return (
                <a key={client.url} href={client.url} className="shrink-0 w-28 md:w-52 flex flex-col items-center">
                  <div className="w-24 h-24 md:w-40 md:h-40 flex flex-col justify-center items-center">
                    <Image title={client.name} src={client.logo} height={150} width={150} alt={client.name} className="object-contain dark:invert brightness-0" />
                  </div>
                </a>
              )
            })
          }
          </div>
        </Parallax>
      </div>
  );
}