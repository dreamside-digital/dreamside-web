import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import ProfileCard from '@/components/ProfileCard'
import LatestPost from '@/components/LatestPost'
import tools from '@/data/tools'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, instagram } = content

  return (
    <>
      <SectionContainer>
        <div className="mb-12 md:mb-20">
          <div className="space-y-2 pb-12 pt-6 md:space-y-5">
            <h1 className="text-6xl font-semibold !leading-tight sm:text-7xl md:text-8xl lg:text-[8vw]">
              About
            </h1>
          </div>

          <div className="relative items-stretch md:flex md:justify-between md:space-x-6">
            <div className="md:w-1/2">
              <div className="mb-12 md:mb-20">
                <p className="mb-4 text-2xl">
                  Studio Shay is a digital product studio committed to using design and technology
                  for good.
                </p>
                <p className="text-2xl">
                  I work with organizations to accelerate their impact through the use of effective
                  digital tools and thoughtful design. We create inclusive digital products that
                  strengthen communities.
                </p>
              </div>

              <div className="mb-6 pb-8 pt-6 md:space-y-5">
                <h2 className="text-4xl font-semibold !leading-tight md:text-5xl">
                  What's in our <span className="handwriting">toolbox?</span>
                </h2>
              </div>

              <div className="mb-12 grid grid-cols-3 gap-4 md:gap-12">
                <div className="grid-item">
                  <p className="mb-4 font-semibold uppercase tracking-wide text-secondary-300">
                    Design
                  </p>
                  <ul>
                    {tools.design.map((tool) => (
                      <li key={tool} className="mb-2 md:text-2xl">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid-item">
                  <p className="mb-4 font-semibold uppercase tracking-wide text-secondary-300">
                    Code
                  </p>
                  <ul>
                    {tools.code.map((tool) => (
                      <li key={tool} className="mb-2 md:text-2xl">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid-item">
                  <p className="mb-4 font-semibold uppercase tracking-wide text-secondary-300">
                    Tools
                  </p>
                  <ul>
                    {tools.tools.map((tool) => (
                      <li key={tool} className="mb-2 md:text-2xl">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="justify-center md:flex md:w-1/2 md:justify-end">
              <div className="md:hidden">
                <LatestPost isDisabled={true} />
              </div>
              <div className="hidden md:block">
                <LatestPost />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="mb:12 md:mb-20">
          <ProfileCard content={content}>{children}</ProfileCard>
        </div>
      </SectionContainer>
    </>
  )
}
