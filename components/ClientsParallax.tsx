'use client'

import clients from '@/data/clients'
import Image from '@/components/Image'
import { Parallax } from 'react-scroll-parallax'

export default function ClientsParallax() {
  const half = Math.floor(clients.length / 2)
  const clientsRow1 = clients.slice(0, half)
  const clientsRow2 = clients.slice(half, clients.length)
  return (
    <div className="client-parallax">
      <Parallax translateX={['-30%', '30%']}>
        <div className="flex flex-nowrap gap-4 md:gap-8">
          {clientsRow1.map((client, index) => {
            return (
              <a
                key={client.url}
                href={client.url}
                className="flex w-28 shrink-0 flex-col items-center md:w-48"
              >
                <div className="flex h-24 w-24 flex-col items-center justify-center md:h-40 md:w-40">
                  <Image
                    title={client.name}
                    src={client.logo}
                    height={150}
                    width={150}
                    alt={client.name}
                    className="object-contain brightness-0 dark:invert"
                  />
                </div>
              </a>
            )
          })}
        </div>
      </Parallax>

      <h2 className="my-12 text-center font-semibold uppercase !leading-tight tracking-wider">
        The stellar organizations I've worked with
      </h2>

      <Parallax translateX={['30%', '-40%']}>
        <div className="flex flex-nowrap gap-4 md:gap-8">
          {clientsRow2.map((client, index) => {
            return (
              <a
                key={client.url}
                href={client.url}
                className="flex w-28 shrink-0 flex-col items-center md:w-48"
              >
                <div className="flex h-24 w-24 flex-col items-center justify-center md:h-40 md:w-40">
                  <Image
                    title={client.name}
                    src={client.logo}
                    height={150}
                    width={150}
                    alt={client.name}
                    className="object-contain brightness-0 dark:invert"
                  />
                </div>
              </a>
            )
          })}
        </div>
      </Parallax>
    </div>
  )
}
