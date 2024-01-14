'use client'

import { allProjects } from 'contentlayer/generated'
import Fade from 'react-reveal/Fade';
import Image from '@/components/Image'
import Link from '@/components/Link'

export default function Projects() {
  allProjects.sort((a,b) => a.order - b.order)

  return (
    <div className="relative">
      <Fade>
        <ul className="flex flex-nowrap space-x-8 overflow-auto styled-scrollbar snap-x snap-mandatory pr-12 pb-6">
          {
            allProjects.map((project, index) => {
              return (
                <li key={project.path} className="w-10/12 md:w-5/12 flex-none snap-center snap-always md:snap-start">
                    <div>
                      <div className="aspect-square bg-primary-100 dark:bg-primary-900 overflow-hidden">
                        <Image src={project.thumbnail} height={480} width={480} alt={project.thumbnailDescription} className="object-cover transform hover:scale-[110%] duration-200" />
                      </div>
                      <h3 className="my-4 font-semibold text-xl">
                        {project.title}
                      </h3>
                      <p>{project.description}</p>
                      <div className="flex space-x-4">
                        <Link href={`/${project.path}`} className="btn-theme">Case study</Link>
                        {project.url && <Link href={`${project.url}`} className="btn-theme">Website</Link>}
                      </div>
                    </div>
                </li>
              )
            })
          }
          <li key={"portfolio-btn"} className="w-10/12 md:w-5/12 flex-none snap-center snap-always md:snap-start">
              <div className="aspect-square flex justify-center items-center">
                <Link href="/projects" className="btn-theme">See all projects</Link>
              </div>
          </li>
        </ul>
      </Fade>
    </div>
  );
}