'use client'

import clients from '@/data/clients'
import Image from '@/components/Image'
import Fade from 'react-reveal/Fade'

export default function ClientsFade() {
  return (
    <div className="clients-fade">
      <h2 className="my-12 text-center font-semibold uppercase !leading-tight tracking-wider">
        The stellar organizations I've worked with
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {clients.map((client, index) => {
          return (
            <Fade key={client.url} delay={index * 100}>
              <a href={client.url} className="flex shrink-0 flex-col items-center">
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
            </Fade>
          )
        })}
      </div>
    </div>
  )
}
