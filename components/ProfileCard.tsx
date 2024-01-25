'use client'

import { ReactNode } from 'react'
import Fade from 'react-reveal/Fade'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  className: string
}

export default function ProfileCard({ children, content }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, instagram } = content

  return (
    <Fade>
      <div className="bg-white p-8 dark:bg-primary-500 md:p-16">
        <h2 className="text-4xl font-semibold !leading-tight md:text-5xl">
          Meet the <span className="handwriting">founder</span>
        </h2>
        <div className="md:flex">
          <div className="md:order-2 md:w-1/2">
            <div className="flex flex-col items-center space-x-2 pt-8">
              {avatar && (
                <Image src={avatar} alt="avatar" width={250} height={250} className="h-1/2 w-1/2" />
              )}
              <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
              <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
              <div className="flex space-x-6 pt-6">
                <SocialIcon kind="mail" href={`mailto:${email}`} />
                <SocialIcon kind="github" href={github} />
                <SocialIcon kind="linkedin" href={linkedin} />
                <SocialIcon kind="instagram" href={instagram} />
              </div>
            </div>
          </div>
          <div className="md:order-1 md:w-1/2">
            <div className="prose my-6 dark:prose-invert md:text-lg lg:text-xl">{children}</div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
