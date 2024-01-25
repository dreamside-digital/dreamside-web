import { allProjects } from 'contentlayer/generated'
import Card from '@/components/Card'
import SectionContainer from '@/components/SectionContainer'
import { genPageMetadata } from 'app/seo'
import BackgroundGlow from '@/components/BackgroundGlow'
import BackgroundLines from '@/components/BackgroundLines'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  allProjects.sort((a,b) => a.order - b.order)
  return (
    <>
      <SectionContainer>
          <div className="space-y-2 pt-6 md:space-y-5">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8vw] !leading-tight font-semibold">
              Projects
            </h1>
          </div>
      </SectionContainer>

      <SectionContainer className="py-12 md:py-20">
        <div className="space-y-20 snap-y snap-mandatory">
          {allProjects.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              images={d.images}
              url={d.url}
              path={d.path}
              github={d.github}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  )
}
