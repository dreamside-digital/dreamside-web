'use client'

import { allProjects } from 'contentlayer/generated'
import Fade from 'react-reveal/Fade'
import Image from '@/components/Image'
import Link from '@/components/Link'

export default function Projects() {
  allProjects.sort((a, b) => a.order - b.order)
  const publishedProjects = allProjects.filter((p) => !p.draft)

  return (
    <div className="relative">
      <Fade>
        <ul className="styled-scrollbar flex snap-x snap-mandatory flex-nowrap space-x-12 overflow-auto pb-6 pr-12">
          {publishedProjects.map((project, index) => {
            return (
              <li
                key={project.path}
                className="w-10/12 flex-none snap-center snap-always md:w-5/12 md:snap-start"
              >
                <div>
                  {project.thumbnail && (
                    <div className="aspect-square overflow-hidden bg-primary-100 shadow-md dark:bg-primary-900">
                      <Image
                        src={project.thumbnail}
                        height={480}
                        width={480}
                        alt={project.thumbnailDescription || ''}
                        className="transform object-cover duration-200 hover:scale-[110%]"
                      />
                    </div>
                  )}
                  <h3 className="my-4 text-xl font-semibold">{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="flex space-x-4">
                    <Link href={`/${project.path}`} className="btn-theme">
                      Case study
                    </Link>
                    {project.url && (
                      <Link href={`${project.url}`} className="btn-theme">
                        Website
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
          <li
            key={'portfolio-btn'}
            className="w-10/12 flex-none snap-center snap-always md:w-5/12 md:snap-start"
          >
            <div className="flex aspect-square items-center justify-center">
              <Link href="/projects" className="btn-theme">
                See all projects
              </Link>
            </div>
          </li>
        </ul>
      </Fade>
    </div>
  )
}
