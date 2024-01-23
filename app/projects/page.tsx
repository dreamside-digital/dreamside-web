import { allProjects } from 'contentlayer/generated'
import Card from '@/components/Card'
import SectionContainer from '@/components/SectionContainer'
import { genPageMetadata } from 'app/seo'
import BackgroundGlow from '@/components/BackgroundGlow'
import BackgroundLines from '@/components/BackgroundLines'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
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
        <div className="space-y-12 snap-y snap-mandatory">
          {allProjects.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              url={d.url}
              path={d.path}
            />
          ))}
        </div>
      </SectionContainer>
      <BackgroundLines />
      <BackgroundGlow />
    </>
  )
}
